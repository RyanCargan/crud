package net.codinghermit.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
// import org.springframework.boot.web.client.RestTemplateBuilder;
// import org.springframework.web.client.RestTemplate;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final KeycloakLogoutHandler keycloakLogoutHandler;

    SecurityConfig(KeycloakLogoutHandler keycloakLogoutHandler) {
        this.keycloakLogoutHandler = keycloakLogoutHandler;
    }

    // @Bean
	// public RestTemplate restTemplate(RestTemplateBuilder builder) {
	// // Do any additional configuration here
	// return builder.build();
	// }

    @Bean
    protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
        return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/api/users**", "/api/students**", "/api/courses**")
            .hasRole("USER")
            .anyRequest()
            .permitAll();
        http.oauth2Login()
            .and()
            .logout()
            .addLogoutHandler(keycloakLogoutHandler)
            .logoutSuccessUrl("/");
        return http.build();
    }
}
