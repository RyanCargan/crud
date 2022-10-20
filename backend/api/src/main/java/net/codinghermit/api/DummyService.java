package net.codinghermit.api;

import org.springframework.stereotype.Service;

@Service
public class DummyService {

    public void processSomethingForLong() {
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("I take 10 seconds to complete on a thread named: " + Thread.currentThread().getName());
    }
}
