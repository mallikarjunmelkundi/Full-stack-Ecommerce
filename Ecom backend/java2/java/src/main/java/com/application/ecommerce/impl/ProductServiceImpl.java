package com.application.ecommerce.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ecommerce.entities.Category;
import com.application.ecommerce.entities.Product;
import com.application.ecommerce.repository.ProductRepository;
import com.application.ecommerce.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	ProductRepository productRepository;
	
	@Autowired
	public ProductServiceImpl(ProductRepository productRepository) {
		super();
		this.productRepository = productRepository;
	}
	
	@Override
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Product product) {
		return productRepository.save(product);
	}

	@Override
	public String deleteProduct(Long productId) {
		productRepository.deleteById(productId);
		return "deleted succesfully";
	}

	@Override
	public Optional<Product> getProduct(Long productId) {
		return productRepository.findById(productId);
	}

	@Override
	public List<Product> getProductByCategory(Category category) {
		return productRepository.findByCategory(category);
	}

	@Override
	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}

}
