package com.backend.model;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class Conector {
	private String driver;
	private String url;
	private String user;
	private String password;
	private Connection conn;
	private static Conector obj = new Conector();
	private Conector()
	{
		try {
			InputStream input = getClass().getClassLoader().getResourceAsStream("config.properties");
			Properties props = new Properties();
			props.load(input);
			driver=props.getProperty("driver");
			url=props.getProperty("url");
			user=props.getProperty("user");
			password=props.getProperty("password");
			Class.forName(driver).getDeclaredConstructor().newInstance();
			conn = DriverManager.getConnection(url, user, password);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static Conector getConector()
	{
		return obj;
	}
	public Connection getConexion()
	{
		return conn;
	}
}