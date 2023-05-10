package com.portfolio.dto;

import javax.validation.constraints.NotBlank;

public class dtoHabilidadesDuras {
    @NotBlank
    private String nombreHD;
    private String tituloHD;
    private int porcentajeHD;

    public dtoHabilidadesDuras() {
    }

    public dtoHabilidadesDuras(String nombreHD, int porcentajeHD, String tituloHD) {
        this.nombreHD = nombreHD;
        this.tituloHD = tituloHD;
        this.porcentajeHD = porcentajeHD;
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
