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
        return answer;
    }
}
