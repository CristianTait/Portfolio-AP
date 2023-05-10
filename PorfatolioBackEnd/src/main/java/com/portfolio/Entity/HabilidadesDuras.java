package com.portfolio.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HabilidadesDuras {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreHD;
    private String tituloHD;
    private int porcentajeHD;

    public HabilidadesDuras() {
    }

    public HabilidadesDuras(String nombreHD, int porcentajeHD, String tituloHD) {
        this.nombreHD = nombreHD;
        this.tituloHD = tituloHD;
        this.porcentajeHD = porcentajeHD;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreHD() {
        return nombreHD;
    }

    public void setNombreHD(String nombreHD) {
        this.nombreHD = nombreHD;
    }    
    
    public String getTituloHD() {
        return tituloHD;
    }

    public void setTituloHD(String tituloHD) {
        this.tituloHD = tituloHD;
    }
    
    public int getPorcentajeHD() {
        return porcentajeHD;
    }

    public void setPorcentajeHD(int porcentajeHD) {
        this.porcentajeHD = porcentajeHD;
    }
    
}
