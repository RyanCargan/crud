package net.codinghermit.api;

import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.autoconfigure.domain.EntityScan;
// import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cache.annotation.EnableCaching;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.ComponentScan;
// import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
// import org.springframework.data.redis.core.RedisTemplate;

// import net.codinghermit.api.model.Item;

@SpringBootApplication
// @ComponentScan({ "net.codinghermit.api.*" })
// @ComponentScan(basePackages = "net.codinghermit.api")
// @EntityScan("net.codinghermit.api.*")
// @Configuration
// @EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@EnableCaching
public class ApiApplication {

   public static void main(String[] args) {
      SpringApplication.
         run(ApiApplication.class, args);
   }

   // @Bean
   // JedisConnectionFactory jedisConnectionFactory(){
   //   return new JedisConnectionFactory();
   // }

   // @Bean
   // RedisTemplate<String, Item> redisTemplate(){
   //   RedisTemplate<String,Item> redisTemplate = new RedisTemplate<String, Item>();
   //   redisTemplate.setConnectionFactory(jedisConnectionFactory());
   //   return redisTemplate;
   // }
}
