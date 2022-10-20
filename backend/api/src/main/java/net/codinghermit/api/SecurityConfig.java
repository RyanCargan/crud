package net.codinghermit.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

		http.authorizeRequests().antMatchers("/**").permitAll();
		http.csrf().disable();

		return http.build();
    }
}

// package net.codinghermit.api;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfiguration  extends WebSecurityConfigurerAdapter{
//     @Override
//     protected void configure(HttpSecurity http) throws Exception{
//         http.authorizeRequests().antMatchers("/**").permitAll();
//     }
// }
