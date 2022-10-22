package net.codinghermit.api.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
            .dataSource(dataSource)
            .usersByUsernameQuery("select username, \"password\", enabled from users where username=?")
            .authoritiesByUsernameQuery("select username, \"role\" from users where username=?")
        ;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .anyRequest().authenticated()
            .and()
            .formLogin().permitAll()
            .and()
            .logout().permitAll();
    }
}

// import javax.sql.DataSource;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder.BCryptVersion;
// import org.springframework.security.crypto.password.PasswordEncoder;

// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

// 	@Autowired
// 	private DataSource dataSource;

// 	@Override
// 	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
// 		auth
// 		.jdbcAuthentication()
// 		.dataSource(dataSource)
// 		.passwordEncoder(passwordEncoder())
// 		.usersByUsernameQuery(
// 				"SELECT username, password, enabled from users where username = ?")
// 		.authoritiesByUsernameQuery(
// 				"SELECT u.username, a.authority " +
// 				"FROM user_authorities a, users u " +
// 				"WHERE u.username = ? " +
// 				"AND u.id = a.user_id"
// 		);
// 	}

// 	@Bean
// 	public PasswordEncoder passwordEncoder() {
// 			return new BCryptPasswordEncoder();
// 	}

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http.formLogin();

//         http.authorizeRequests()
//                 .antMatchers("/api/*").hasAnyRole("staff", "student")
//                 .antMatchers("/api/sec/*").hasRole("staff")
//                 .antMatchers("/").permitAll();
//     }
// }

// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

//     @Override
//     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
// 			auth
// 			.inMemoryAuthentication()
// 			.withUser("emma").password("emma").roles("staff", "student").and()
// 			.withUser("chris").password("chris").roles("student").and()
// 			.passwordEncoder(new BCryptPasswordEncoder(BCryptVersion.$2A));
//     }

// 		@Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http.formLogin();

//         http.authorizeRequests()
//                 .antMatchers("/api/*").hasAnyRole("staff", "student")
//                 .antMatchers("/api/sec/*").hasRole("staff")
//                 .antMatchers("/").permitAll();
//     }
// }
// package net.codinghermit.api.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {
//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

// 		http.authorizeRequests().antMatchers("/**").permitAll();
// 		http.csrf().disable();

// 		return http.build();
//     }
// }

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
