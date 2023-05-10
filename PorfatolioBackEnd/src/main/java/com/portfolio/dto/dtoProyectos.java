package com.portfolio.dto;

import javax.validation.constraints.NotBlank;

public class dtoProyectos {
    @NotBlank
    private String imagenProy;
    @NotBlank
    private String tituloProy;
    @NotBlank
    private String descripProy;
    @NotBlank
    private String tecnoProy;
    @NotBlank
    private String fechaProy;
    @NotBlank
    private String urlProy;

    public dtoProyectos() {
    }

    public dtoProyectos(String imagenProy, String tituloProy, String descripProy, String tecnoProy, String fechaProy, String urlProy) {
        this.imagenProy = imagenProy;
        this.tituloProy = tituloProy;
        this.descripProy = descripProy;
        this.tecnoProy = tecnoProy;
        this.fechaProy = fechaProy;
        this.urlProy = urlProy;
    }

    public String getImagenProy() {
        return imagenProy;
    }

    public void setImagenProy(String imagenProy) {
        this.imagenProy = imagenProy;
    }

    public String getTituloProy() {
        return tituloProy;
    }

    public void setTituloProy(String tituloProy) {
        this.tituloProy = tituloProy;
    }

    public String getDescripProy() {
        return descripProy;
    }

    public void setDescripProy(String descripProy) {
        this.descripProy = descripProy;
    }

    public String getTecnoProy() {
        return tecnoProy;
    }

    public void setTecnoProy(String tecnoProy) {
        this.tecnoProy = tecnoProy;
    }

    public String getFechaProy() {
        return fechaProy;
    }

    public void setFechaProy(String fechaProy) {
        this.fechaProy = fechaProy;
    }

    public String getUrlProy() {
        return urlProy;
    }

    public void setUrlProy(String urlProy) {
        this.urlProy = urlProy;
    }
    
    
}
