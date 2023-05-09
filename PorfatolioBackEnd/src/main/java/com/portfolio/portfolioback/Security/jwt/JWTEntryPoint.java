package com.portfolio.portfolioback.Security.jwt;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class JWTEntryPoint implements AuthenticationEntryPoint {
    
    private final static Logger logger = LoggerFactory.getLogger(JWTEntryPoint.class);
    
 @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        response.setHeader("WWW-Authenticate", "Bearer");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("No autorizado");
    }
    
}
