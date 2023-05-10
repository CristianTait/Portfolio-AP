package com.portfolio.backend.dto;

import javax.validation.constraints.NotBlank;

public class dtoHabilidadesBlandas {
    @NotBlank
    private String nombreHB;
    
    @NotBlank
    private String descripHB;
    
    private int porcentajeHB;

    public dtoHabilidadesBlandas() {
    }

    public dtoHabilidadesBlandas(String nombreHB, String descripHB, int porcentajeHB) {
        this.nombreHB = nombreHB;
        this.descripHB = descripHB;
        this.porcentajeHB = porcentajeHB;
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

    public void setPorcentajeHB(int porcentajeHB) {
        this.porcentajeHB = porcentajeHB;
    }
}