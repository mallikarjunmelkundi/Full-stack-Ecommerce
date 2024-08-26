package com.application.ecommerce.service;

import java.util.List;

import com.application.ecommerce.entities.CloudVendor;

public interface CloudvendorService {
	public String createCloudVendor(CloudVendor cloudVendor);
	public String updateCloudVendor(CloudVendor cloudVendor);
	public String deleteCloudVendor(String cloudVendorId);
	public CloudVendor getCloudVendor(String cloudVendorId);
	public List<CloudVendor> getAllCloudVendor();
	
}
