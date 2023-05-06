package com.portfolio.portfolioback.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyectos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imagenProy;
    private String tituloProy;
    private String descripProy;
    private String tecnoProy;
    private String fechaProy;
    private String urlProy; 

    public Proyectos() {
    }

    public Proyectos(String imagenProy, String tituloProy, String descripProy, String tecnoProy, String fechaProy, String urlProy) {
        this.imagenProy = imagenProy;
        this.tituloProy = tituloProy;
        this.descripProy = descripProy;
        this.tecnoProy = tecnoProy;
        this.fechaProy = fechaProy;
        this.urlProy = urlProy;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
