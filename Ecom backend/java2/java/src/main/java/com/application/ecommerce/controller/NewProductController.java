package com.application.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.application.ecommerce.entities.NewProduct;
import com.application.ecommerce.service.NewProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/products")
@CrossOrigin(origins = "http://localhost:5173")
public class NewProductController {

    @Autowired
    private NewProductService newProductService;

    @PostMapping("/create")
    public ResponseEntity<NewProduct> createProduct(@RequestBody NewProduct product) {
        newProductService.createProduct(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<NewProduct>> getAllProducts() {
        return new ResponseEntity<>(newProductService.getAllProducts(), HttpStatus.OK);
    }
}