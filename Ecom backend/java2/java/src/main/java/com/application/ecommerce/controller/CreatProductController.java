package com.application.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.ecommerce.entities.Category;
import com.application.ecommerce.entities.Product;
import com.application.ecommerce.service.ProductService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/api/v1/admin/product")
@CrossOrigin(origins = "http://localhost:5173")
public class CreatProductController {
	
	private final ProductService productService;
	
	@Autowired
    public CreatProductController(ProductService productService) {
        this.productService = productService;
    }
	
	@PostMapping("/create")
	public Product createProduct(@RequestBody Product product) {
		return productService.createProduct(product);
	}
	
	@PutMapping("/update")
	public Product updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}
	
	@DeleteMapping("/delete/{productId}")
	public String deleteProduct(@PathVariable("productId") Long productId) {
		productService.deleteProduct(productId);
		return "Deleted Succefully";
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
