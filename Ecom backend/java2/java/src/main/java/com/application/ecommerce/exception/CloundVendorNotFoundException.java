package com.application.ecommerce.exception;

public class CloundVendorNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CloundVendorNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public CloundVendorNotFoundException(String message) {
		super(message);
	}

}
