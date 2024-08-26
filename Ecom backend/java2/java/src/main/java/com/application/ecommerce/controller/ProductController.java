package com.application.ecommerce.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.application.ecommerce.entities.Category;
import com.application.ecommerce.entities.Product;
import com.application.ecommerce.service.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth/product")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {
	private final ProductService productService;
	
	@Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
	
	@GetMapping("/{productId}")
	public ResponseEntity<Product> getProduct(@PathVariable("productId") Long productId) {
		Optional<Product> product = productService.getProduct(productId);
        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
	}
	
	@GetMapping("/category/{category}")
	public List<Product> getProductByCategory(@PathVariable Category category) {
		return productService.getProductByCategory(category);
	}
	
	@GetMapping()
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}
}
