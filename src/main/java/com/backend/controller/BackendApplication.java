package com.backend.controller;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Conector;
import com.backend.model.Tamaños;
import com.google.gson.Gson;
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
	//create pizza
	@RequestMapping("/tamaños")
	String tamaños() {
		InputStream input = getClass().getClassLoader().getResourceAsStream("sql.properties");
		Properties props = new Properties();
		Connection conn = null;
		PreparedStatement pstmnt = null;
		ResultSet datos = null;
		ArrayList<Tamaños> lista = new ArrayList<Tamaños>();
		try
		{
			props.load(input);
			String selectTamaños = props.getProperty("selectTamaños");
			conn = Conector.getConector();
			pstmnt = conn.prepareStatement(selectTamaños);
			datos = pstmnt.executeQuery();
			while(datos.next())
			{
				lista.add(new Tamaños(datos.getInt("idTamaños"),datos.getString("tamaño")));
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			try {
				datos.close();
				pstmnt.close();
				conn.close();
			}
			catch(Exception ex){
				ex.printStackTrace();
			}
		}
		Gson gson = new Gson();
		String json = gson.toJson(lista);
		return json;
	}
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}

