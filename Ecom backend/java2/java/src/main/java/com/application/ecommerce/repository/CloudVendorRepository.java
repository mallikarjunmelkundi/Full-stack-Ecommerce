package com.application.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.ecommerce.entities.CloudVendor;

public interface CloudVendorRepository extends JpaRepository<CloudVendor, String> {

}