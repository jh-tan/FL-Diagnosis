package Backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeController {
    @GetMapping("/")
    public String Home(){
        Fuzzylogic fl = new Fuzzylogic();
        return fl.run((float) 1,(float)0.5,(float)0.66);
    }
}
