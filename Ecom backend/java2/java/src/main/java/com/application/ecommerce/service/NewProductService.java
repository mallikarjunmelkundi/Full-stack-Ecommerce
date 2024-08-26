package com.application.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ecommerce.entities.NewProduct;
import com.application.ecommerce.repository.NewProductRepository;

import java.util.List;

@Service
public class NewProductService {

    @Autowired
    private NewProductRepository newProductRepository;

    public List<NewProduct> getAllProducts() {
        return newProductRepository.findAll();
    }

    public NewProduct getProductById(Long id) {
        return newProductRepository.findById(id).orElse(null);
    }

    public NewProduct createProduct(NewProduct product) {
        return newProductRepository.save(product);
    }

    public void saveAllProducts(List<NewProduct> products) {
        newProductRepository.saveAll(products);
    }
}
