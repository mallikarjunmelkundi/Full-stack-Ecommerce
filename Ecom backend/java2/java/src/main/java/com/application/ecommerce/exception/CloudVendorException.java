package com.application.ecommerce.exception;

import org.springframework.http.HttpStatus;

public class CloudVendorException {
	private final String messege;
	private final Throwable throwalble;
	private final HttpStatus httpStatus;
	
	public CloudVendorException(String messege, Throwable throwalble, HttpStatus httpStatus) {
		super();
		this.messege = messege;
		this.throwalble = throwalble;
		this.httpStatus = httpStatus;
	}

	public String getMessege() {
		return messege;
	}

	public Throwable getThrowalble() {
		return throwalble;
	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}
	
}
