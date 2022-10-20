package net.codinghermit.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {

    private DummyService helloService;

    public DummyController(DummyService helloService) {
        this.helloService = helloService;
    }

    @GetMapping("/dummy")
    public String hello() {
        long start = System.currentTimeMillis();
        helloService.processSomethingForLong();
        long end = System.currentTimeMillis();
        return "This result took " + (end - start) + " milliseconds! And the current thread is : "+Thread.currentThread().getName();
    }

}
