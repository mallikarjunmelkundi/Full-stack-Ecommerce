package com.application.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.application.ecommerce.entities.NewProduct;

@Repository
public interface NewProductRepository extends JpaRepository<NewProduct, Long> {
}