package com.application.ecommerce.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ecommerce.entities.CloudVendor;
import com.application.ecommerce.exception.CloundVendorNotFoundException;
import com.application.ecommerce.repository.CloudVendorRepository;
import com.application.ecommerce.service.CloudvendorService;

@Service
public class CloudVendorServiceImpl implements CloudvendorService {
	CloudVendorRepository cloudVendorRepository;
	
	@Autowired
	public CloudVendorServiceImpl(CloudVendorRepository cloudVendorRepository) {
		super();
		this.cloudVendorRepository = cloudVendorRepository;
	}

	@Override
	public String createCloudVendor(CloudVendor cloudVendor) {
		cloudVendorRepository.save(cloudVendor);
		return "Success";
	}

	@Override
	public String updateCloudVendor(CloudVendor cloudVendor) {
		cloudVendorRepository.save(cloudVendor);
		return "Success";
	}

	@Override
	public String deleteCloudVendor(String cloudVendorId) {
		if(cloudVendorRepository.findById(cloudVendorId).isEmpty())
			throw new CloundVendorNotFoundException(
					"Request Cloud Vendor does not exist");
		
		cloudVendorRepository.deleteById(cloudVendorId);
		return "Success";
	}

	@Override
	public CloudVendor getCloudVendor(String cloudVendorId) {
		if(cloudVendorRepository.findById(cloudVendorId).isEmpty())
			throw new CloundVendorNotFoundException(
					"Request Cloud Vendor does not exist");
		
		return cloudVendorRepository.findById(cloudVendorId).get();
	}

	@Override
	public List<CloudVendor> getAllCloudVendor() {
		if(cloudVendorRepository.findAll().isEmpty())
			throw new CloundVendorNotFoundException(
					"Request Cloud Vendor does not exist");
		
		return cloudVendorRepository.findAll();
	}

}
