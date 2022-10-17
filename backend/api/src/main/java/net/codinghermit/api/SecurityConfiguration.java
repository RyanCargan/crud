package net.codinghermit.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
			// Route 1
			.authorizeRequests()
				.antMatchers("/courses/**")
				.permitAll()
            .and()

			// Route 2
            .authorizeRequests()
				.antMatchers("/users/**")
				.hasRole("ADMIN")
				.anyRequest()
				.authenticated()
            .and()

			// Logout
			.csrf()
				.ignoringAntMatchers("/logout")
				.and()

			// .logout()
			// .and()

			// End routes
            .httpBasic();
        return http.build();
    }
}
