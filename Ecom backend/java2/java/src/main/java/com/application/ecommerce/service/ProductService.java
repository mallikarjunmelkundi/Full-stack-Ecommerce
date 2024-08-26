package com.application.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.application.ecommerce.entities.Category;
import com.application.ecommerce.entities.Product;

public interface ProductService {
	public Product createProduct(Product product);
	public Product updateProduct(Product product);
	public String deleteProduct(Long productId);
	public Optional<Product> getProduct(Long productId);
	public List<Product> getProductByCategory(Category category);
	public List<Product> getAllProduct();
}
