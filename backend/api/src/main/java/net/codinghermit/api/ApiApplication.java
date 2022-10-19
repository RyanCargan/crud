package net.codinghermit.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@EnableCaching
@SpringBootApplication
public class ApiApplication {

   public static void main(String[] args) {
      SpringApplication.
         run(ApiApplication.class, args);
   }

   @Bean
   public RestTemplate restTemplate() {
       return new RestTemplate();
   }
}
