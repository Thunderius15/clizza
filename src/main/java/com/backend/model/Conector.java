package com.backend.model;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class Conector {
	private InputStream input = getClass().getClassLoader().getResourceAsStream("config.properties");
	private Properties props = new Properties();
	private String driver;
	private String url;
	private String user;
	private String password;
	private static Connection conn;
	private Conector()
	{
		try {
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
	public static Connection getConector()
	{
		return conn;
	}
}