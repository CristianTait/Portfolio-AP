package com.portfolio.portfolioback.dto;

import javax.validation.constraints.NotBlank;

public class dtoPersona {

    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido; 
    @NotBlank
    private String descripcion;
    
    private String img;
    
    private String logo;
    
    @NotBlank
    private String ubicacion;
    
    @NotBlank
    private String mail;
    
    private String linkedin;
    
    private String github;

    public dtoPersona() {
    }

    public dtoPersona(String nombre, String apellido, String descripcion, String img, String logo, String ubicacion, String mail, String linkedin, String github) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.logo = logo;
        this.ubicacion = ubicacion;
        this.mail = mail;
        this.linkedin = linkedin;
        this.github = github;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    } 
        
}
