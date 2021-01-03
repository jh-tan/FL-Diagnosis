package Backend;
import java.text.DecimalFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class HomeController {
    private String answer = null;
    @GetMapping("/api/result")
    @ResponseBody
    public String Home(String ans) {
        return answer;
    }

    @RequestMapping(value={"/about", "/diagnosis", "/project" })
    public String HomePage() {
        return "index.html";
    }

    @PostMapping("/api/result")
    @ResponseBody
    public AnswerModel postBody(@RequestBody ResultModel result){
        DecimalFormat df = new DecimalFormat("0.00000");
        Fuzzylogic fl = new Fuzzylogic();
        answer = fl.run((float) result.age, (float) result.score1, (float) result.score2);
        double calculated = Double.parseDouble(answer);
        if (calculated <= 0.20)
            return new AnswerModel("Very Low",df.format(calculated));
        else if (calculated > 0.2 && calculated <= 0.40)
            return new AnswerModel("Low",df.format(calculated));
        else if (calculated > 0.4 && calculated <= 0.60)
            return new AnswerModel("Medium",df.format(calculated));
        else if (calculated > 0.6 && calculated <= 0.80)
            return new AnswerModel("High",df.format(calculated));
        else
            return new AnswerModel("Very High",df.format(calculated));
    }
}
