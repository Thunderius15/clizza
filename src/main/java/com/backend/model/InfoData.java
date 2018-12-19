package com.backend.model;

public class InfoData {
	private String name;
	private String email;
	private String username;
	private int phone;
	//private String direction;
	private String password;
	
	public InfoData()
	{
		
	}
	public InfoData (String name, String email, String username, int phone, String password)
	{
		setName(name);
		setEmail(email);
		setUsername(username);
		setPhone(phone);
		//setDirection(direction);
		setPassword(password);
	}
	public int getPhone()
	{
		return phone;
	}
	public void setPhone(int phone)
	{
		this.phone = phone;
	}
	public String getName()
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public String getEmail()
	{
		return email;
	}
	public void setEmail(String email)
	{
		this.email = email;
	}
	public String getUsername()
	{
		return username;
	}
	public void setUsername(String username)
	{
		this.username = username;
	}
	/*public String getDirection()
	{
		return direction;
	}
	public void setDirection(String direction)
	{
		this.direction = direction;
	}*/
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password)
	{
		this.password = password;
	}
}
