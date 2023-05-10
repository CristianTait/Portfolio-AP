package com.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = {"com.portfolio", "database"})
public class Portfolio {
    public static void main(String[] args) {
        SpringApplication.run(Portfolio.class, args);
    }
}
