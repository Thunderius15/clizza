package com.backend.controller;

import java.io.InputStream;
import java.sql.Connection;
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
import com.backend.model.Ingrediente;
import com.backend.model.Tamaño;
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
		Conector conector = Conector.getConector();
		Connection conn = null;
		PreparedStatement pstmnt = null;
		ResultSet datos = null;
		ArrayList<Tamaño> lista = new ArrayList<Tamaño>();
		try
		{
			Properties props = new Properties();
			InputStream input = getClass().getClassLoader().getResourceAsStream("sql.properties");
			props.load(input);
			String selectTamaños = props.getProperty("selectTamaños");
			conn = conector.getConexion();
			pstmnt = conn.prepareStatement(selectTamaños);
			datos = pstmnt.executeQuery();
			while(datos.next())
			{
				lista.add(new Tamaño(datos.getInt("idTamaños"),datos.getString("tamaño")));
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
			}
			catch(Exception ex){
				ex.printStackTrace();
			}
		}
		Gson gson = new Gson();
		String json = gson.toJson(lista);
		return json;
	}
	@RequestMapping("/ingredientes")
	String ingredientes() {
		Conector conector = Conector.getConector();
		Connection conn = null;
		PreparedStatement pstmnt = null;
		ResultSet datos = null;
		ArrayList<Ingrediente> lista = new ArrayList<Ingrediente>();
		try
		{
			Properties props = new Properties();
			InputStream input = getClass().getClassLoader().getResourceAsStream("sql.properties");
			props.load(input);
			String selectIngredientes = props.getProperty("selectIngredientes");
			conn = conector.getConexion();
			pstmnt = conn.prepareStatement(selectIngredientes);
			datos = pstmnt.executeQuery();
			while(datos.next())
			{
				lista.add(new Ingrediente(datos.getInt("idIngrediente"),datos.getString("nombreIngrediente"),datos.getString("categoriaIngrediente"),datos.getString("nombreImagen")));
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

