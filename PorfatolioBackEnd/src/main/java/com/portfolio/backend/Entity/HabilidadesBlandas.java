
package com.portfolio.backend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HabilidadesBlandas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreHB;
    private String descripHB;
    private int porcentajeHB;

    public HabilidadesBlandas() {
    }

    public HabilidadesBlandas(String nombreHB, String descripHB, int porcentajeHB) {
        this.nombreHB = nombreHB;
        this.descripHB = descripHB;
        this.porcentajeHB = porcentajeHB;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreHB() {
        return nombreHB;
    }

    public void setNombreHB(String nombreHB) {
        this.nombreHB = nombreHB;
    }

    public String getDescripHB() {
        return descripHB;
    }

    public void setDescripHB(String descripHB) {
        this.descripHB = descripHB;
    }   
    
     public int getPorcentajeHB() {
        return porcentajeHB;
    }

    public void setPorcentajeHB(int porcentajeHB){
        this.porcentajeHB = porcentajeHB;
    }
}