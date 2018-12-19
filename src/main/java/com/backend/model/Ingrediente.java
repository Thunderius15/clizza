package com.backend.model;

public class Ingrediente {
	private int idIngrediente;
	private String nombreIngrediente;
	private String categoriaIngrediente;
	private String nombreImagen;
	
	public Ingrediente()
	{
	}
	public Ingrediente(int idIngrediente, String nombreIngrediente, String categoriaIngrediente, String nombreImagen)
	{
		setIdIngrediente(idIngrediente);
		setNombreIngrediente(nombreIngrediente);
		setCategoriaIngrediente(categoriaIngrediente);
		setNombreImagen(nombreImagen);
	}
	public int getIdIngrediente()
	{
		return idIngrediente;
	}
	public void setIdIngrediente(int idIngrediente)
	{
		this.idIngrediente=idIngrediente;
	}
	public String getNombreIngrediente()
	{
		return nombreIngrediente;
	}
	public void setNombreIngrediente(String nombreIngrediente)
	{
		this.nombreIngrediente=nombreIngrediente;
	}
	public String getCategoriaIngrediente()
	{
		return this.categoriaIngrediente;
	}
	public void setCategoriaIngrediente(String categoriaIngrediente)
	{
		this.categoriaIngrediente=categoriaIngrediente;
	}
	public String getNombreImagen()
	{
		return this.nombreImagen;
	}
	public void setNombreImagen(String nombreImagen)
	{
		this.nombreImagen=nombreImagen;
	}
}
