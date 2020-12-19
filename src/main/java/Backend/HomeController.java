package Backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class HomeController {
    private String answer = null;
    @GetMapping("/api/result")
    public String Home(String ans) {
        return answer;
    }

    @PostMapping("/api/result")
    public String postBody(@RequestBody ResultModel result){
        Fuzzylogic fl = new Fuzzylogic();
        answer = fl.run((float) result.age, (float) result.score1, (float) result.score2);
        double calculated = Double.parseDouble(answer);
        if(calculated<0.19)
            return "Very Low";
        else if (calculated > 0.19 && calculated <0.39)
            return "Low";
        else if(calculated > 0.4 && calculated < 0.59)
            return "Medium";
        else if(calculated > 0.6 && calculated < 0.79)
            return "High";
        else
            return "Very High";
    }
}
