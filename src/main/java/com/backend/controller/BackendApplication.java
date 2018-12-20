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
import org.springframework.web.bind.annotation.RequestParam;
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
	//Retorna los tamaños activos de la base de datos
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
	//Retorna los ingredientes activos de la base de datos
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
	//Retorna los tamaños activos de la base de datos
	@RequestMapping("/precioIngrediente")
	String precioIngrediente(@RequestParam("idTamaño") int idTamaño, @RequestParam("idIngrediente") int idIngrediente) {
		Conector conector = Conector.getConector();
		Connection conn = null;
		PreparedStatement pstmnt = null;
		ResultSet datos = null;
		int precio=0;
		try
		{
			Properties props = new Properties();
			InputStream input = getClass().getClassLoader().getResourceAsStream("sql.properties");
			props.load(input);
			String selectPrecioIngrediente = props.getProperty("selectPrecioIngrediente");
			conn = conector.getConexion();
			pstmnt = conn.prepareStatement(selectPrecioIngrediente);
			pstmnt.setInt(1, idTamaño);
			pstmnt.setInt(2, idIngrediente);
			datos = pstmnt.executeQuery();
			while(datos.next())
			{
				precio=datos.getInt("precioSegunTamaño");
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
		JsonObject json = new JsonObject();
		json.addProperty("precio", precio);
		return json.toString();
	}
	//Registro de usuario
	@RequestMapping("/RagistrerInfo")
	String InfoData(@RequestParam("name")String name,
			@RequestParam("email") String email,
			@RequestParam("username")String username,
			@RequestParam("phone")String phone,
			@RequestParam("direction")String direction,
			@RequestParam("password")String password){

		InputStream input = getClass().getClassLoader().getResourceAsStream("sql.properties");
		Properties props = new Properties();
		Connection conn = null;
		PreparedStatement pstmnt = null;
		int datos = 0;
		String mensaje ="";

		try
		{

			props.load(input);
			String InsertRegistro = props.getProperty("InsertRegistro");
			Conector conector = Conector.getConector();
			conn = conector.getConexion();
			pstmnt = conn.prepareStatement(InsertRegistro);
			pstmnt.setString(1, name);
			pstmnt.setString(2, email);
			pstmnt.setString(3, password);
			pstmnt.setString(4, phone);

			datos = pstmnt.executeUpdate();
			if(datos != 0)
			{
				mensaje = "usuario registrado al cien";
			}else
			{
				mensaje = "tronó como ejote";
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			try{
				pstmnt.close();
			}
			catch(Exception ex){
				ex.printStackTrace();
			}
		}
		JsonObject objeto = new JsonObject();
		objeto.addProperty("contenido", mensaje);
		return objeto.toString();
	}
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}

