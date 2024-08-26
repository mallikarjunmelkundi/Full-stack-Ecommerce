package com.application.ecommerce.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class HeroContentController {

    @GetMapping("/hero-content")
    public ResponseEntity<Map<String, String>> getHeroContent() {
        Map<String, String> heroContent = new HashMap<>();
        heroContent.put("headline", "Welcome to Our Summer Sale!");
        heroContent.put("subheading", "Unbeatable prices on our best products.");
        heroContent.put("ctaLink", "/summer-sale");
        heroContent.put("ctaText", "Shop Now");
        
        return ResponseEntity.ok(heroContent);
    }
}
