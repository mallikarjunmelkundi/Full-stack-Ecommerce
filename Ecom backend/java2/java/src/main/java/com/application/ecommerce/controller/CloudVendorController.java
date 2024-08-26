package com.application.ecommerce.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.ecommerce.entities.CloudVendor;
import com.application.ecommerce.service.CloudvendorService;
@RestController
@RequestMapping("/api/v1/auth/cloudvendor")
@CrossOrigin(origins = "http://localhost:5173")
public class CloudVendorController {
	 private final CloudvendorService cloudvendorService;
	
	 @Autowired
    public CloudVendorController(CloudvendorService cloudvendorService) {
        this.cloudvendorService = cloudvendorService;
    }

	@GetMapping("{vendorId}")
	public CloudVendor getCloudVendor(@PathVariable("vendorId") String vendorId) {
		return cloudvendorService.getCloudVendor(vendorId);
	}
	
	@GetMapping()
	public List<CloudVendor> getAllCloudVendor() {
		return cloudvendorService.getAllCloudVendor();
	}
	
	@PostMapping
	public String createCloudVendorDetails(@RequestBody CloudVendor cloudVendor) {
		cloudvendorService.createCloudVendor(cloudVendor);
		return "Cloud Vendor Created Succefully";
	}
	
	@PutMapping
	public String updateCloudVendorDetails(@RequestBody CloudVendor cloudVendor) {
		cloudvendorService.updateCloudVendor(cloudVendor);
		return "Cloud Vendor Updated Succefully";
	}
	
	@DeleteMapping("vendorId")
	public String deleteCloudVendorDetails(@PathVariable("vendorId") String vendorId) {
		cloudvendorService.deleteCloudVendor(vendorId);
		return "Cloud Vendor Deleted Succefully"; 
	}
}
