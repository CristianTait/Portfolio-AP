package com.portfolio.portfolioback.dto;

import javax.validation.constraints.NotBlank;

public class dtoIdiomas {
    @NotBlank
    private String nombreI;
    @NotBlank
    private String descripI;

    public dtoIdiomas() {
    }

    public dtoIdiomas(String nombreI, String descripI) {
        this.nombreI = nombreI;
        this.descripI = descripI;
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

