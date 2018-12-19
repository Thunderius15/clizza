package com.backend.model;

public class Tamaño {
	private int idTamaños;
	private String tamaño;
	
	public Tamaño()
	{
	}
	public Tamaño(int idTamaños, String tamaño)
	{
		setIdTamaños(idTamaños);
		setTamaño(tamaño);
	}
	public int getIdTamaños()
	{
		return idTamaños;
	}
	public void setIdTamaños(int idTamaños)
	{
		this.idTamaños=idTamaños;
	}
	public String getTamaño()
	{
		return tamaño;
	}
	public void setTamaño(String tamaño)
	{
		this.tamaño=tamaño;
	}
}
