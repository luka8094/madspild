package madspild.webside.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebsideController {

    @GetMapping("/home")
    public String renderHome(){

        return "home.html";

    }

    @GetMapping("/for-business")
    public String renderBusiness(){

        return "for-business.html";

    }

    @GetMapping("/private")
    public String renderPrivate(){

        return "private.html";

    }
}
