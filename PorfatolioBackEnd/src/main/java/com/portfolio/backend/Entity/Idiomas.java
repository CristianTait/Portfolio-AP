package com.portfolio.backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Idiomas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreI;
    private String descripI;

    public Idiomas() {
    }

    public Idiomas(String nombreI, String descripI) {
        this.nombreI = nombreI;
        this.descripI = descripI;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreI() {
        return nombreI;
    }

    public void setNombreI(String nombreI) {
        this.nombreI = nombreI;
    }

    public String getDescripI() {
        return descripI;
    }

    public void setDescripI(String descripI) {
        this.descripI = descripI;
    }
    
    
}
