package com.application.ecommerce.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cloud_vendor_info")
public class CloudVendor {
	@Id
	private String vendorId;
	private String vendorName;
	private String vendeorAddress;
	private String vendeorPhoneNumer;
	
	public CloudVendor() {
	}

	public CloudVendor(String vendorId, String vendorName, String vendeorAddress, String vendeorPhoneNumer) {
		super();
		System.out.println("came here working this");
		this.vendorId = vendorId;
		this.vendorName = vendorName;
		this.vendeorAddress = vendeorAddress;
		this.vendeorPhoneNumer = vendeorPhoneNumer;
	}
	
	public String getVendorId() {
		return vendorId;
	}

	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public String getVendeorAddress() {
		return vendeorAddress;
	}

	public void setVendeorAddress(String vendeorAddress) {
		this.vendeorAddress = vendeorAddress;
	}

	public String getVendeorPhoneNumer() {
		return vendeorPhoneNumer;
	}

	public void setVendeorPhoneNumer(String vendeorPhoneNumer) {
		this.vendeorPhoneNumer = vendeorPhoneNumer;
	}
	
}
