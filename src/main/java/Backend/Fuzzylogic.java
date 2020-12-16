package Backend;
import net.sourceforge.jFuzzyLogic.*;
import net.sourceforge.jFuzzyLogic.plot.JFuzzyChart;
import net.sourceforge.jFuzzyLogic.rule.Variable;
import java.util.HashMap;
import java.util.Map;

public class Fuzzylogic {
    private FunctionBlock firstBlock;
    private FunctionBlock secondBlock;

    public Fuzzylogic() {
    }

    public String run(float age, float score1, float score2) {
        Fuzzylogic model = new Fuzzylogic();
        model.readFile();

        model.setInput(age,score1,score2);
        model.evaluate();
        Map<String, Float> outputs = model.getOutput();
        // System.out.println("suspicion: " + outputs.get("suspicion") + " probability: " + outputs.get("probability"));

        // model.debug();
        return outputs.get("probability").toString();
    }


    private void readFile() {
        if (firstBlock == null) {
            String fileName = "./src/main/java/Backend/lungcancer.fcl";
            FIS fis = FIS.load(fileName, true);

            try {
                firstBlock = fis.getFunctionBlock("firstpass");
                secondBlock = fis.getFunctionBlock("secondpass");

            } catch (Exception e) {
                System.out.println("IOERROR " + fileName);
            }
        }
    }

    private void debug() {
        JFuzzyChart.get().chart(firstBlock);
        Gpr.debug(firstBlock.getVariable("age"));
        Gpr.debug(firstBlock.getVariable("score1"));
        Gpr.debug(firstBlock.getVariable("suspicion"));

        JFuzzyChart.get().chart(secondBlock);
        Gpr.debug(secondBlock.getVariable("score2"));
        Gpr.debug(secondBlock.getVariable("suspicion"));
        Gpr.debug(secondBlock.getVariable("probability"));

    }

    private void setInput(float age, float score1, float score2) {
        firstBlock.setVariable("age", age);
        firstBlock.setVariable("score1", score1);
        secondBlock.setVariable("score2", score2);
    }

    private void evaluate() {
        firstBlock.evaluate();
        Variable suspicion = firstBlock.getVariable("suspicion");
        secondBlock.setVariable("suspicion", suspicion.getLatestDefuzzifiedValue());
        secondBlock.evaluate();
    }

    private Map<String, Float> getOutput() {
        // JFuzzyChart.get().chart(impression, impression.getDefuzzifier(), true);

        Map<String, Float> outputs = new HashMap<>();
        Variable suspicion = firstBlock.getVariable("suspicion");
        Variable probability = secondBlock.getVariable("probability");

        outputs.put("suspicion", (float) suspicion.getLatestDefuzzifiedValue());
        outputs.put("probability", (float) probability.getLatestDefuzzifiedValue());

        return outputs;
    }
}
