package com.backend.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BackendApplication {

	@RequestMapping("/")
	String hola() {
		JsonObject objeto = new JsonObject();
		objeto.addProperty("mensaje", "Hello World!");
		return objeto.toString();
	}
	//Ingredientes
	@RequestMapping("/ingredientes/")
	String holaIngredientes() {
		JsonObject objeto = new JsonObject();
		objeto.addProperty("mensaje", "Hello World Ingredientes!");
		return objeto.toString();
	}
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}

