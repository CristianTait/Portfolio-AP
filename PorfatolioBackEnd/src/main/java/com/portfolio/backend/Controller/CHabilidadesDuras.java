package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.HabilidadesDuras;
import com.portfolio.backend.Security.Controller.Mensaje;
import com.portfolio.backend.Service.SHabilidadesDuras;
import com.portfolio.backend.dto.dtoHabilidadesDuras;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/habduras")
@CrossOrigin(origins = {"*"})
public class CHabilidadesDuras {
    
    @Autowired
    SHabilidadesDuras sHabilidadesDuras;
    
    @GetMapping("/lista")
    public ResponseEntity<List<HabilidadesDuras>> list(){
        List<HabilidadesDuras> list = sHabilidadesDuras.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<HabilidadesDuras> getById(@PathVariable("id") int id){
        if(!sHabilidadesDuras.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el Id"), HttpStatus.BAD_REQUEST);
        }
        HabilidadesDuras habilidadesDuras = sHabilidadesDuras.getOne(id).get();
        return new ResponseEntity(habilidadesDuras, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sHabilidadesDuras.existsById(id)){
            return new ResponseEntity(new Mensaje("No extiste el ID"), HttpStatus.NOT_FOUND);
        } 
        sHabilidadesDuras.delete(id);
        return new ResponseEntity(new Mensaje("Habilidad Dura eliminada"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHabilidadesDuras dtohabilidadesduras) {
        if (StringUtils.isBlank(dtohabilidadesduras.getNombreHD())) {
            return new ResponseEntity<>(new Mensaje("El nombre de la habilidad es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sHabilidadesDuras.existsByNombreHD(dtohabilidadesduras.getNombreHD())) {
            return new ResponseEntity<>(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        }
        HabilidadesDuras habilidadesDuras = new HabilidadesDuras(dtohabilidadesduras.getNombreHD(), dtohabilidadesduras.getPorcentajeHD(), dtohabilidadesduras.getTituloHD());
        sHabilidadesDuras.save(habilidadesDuras);
        return new ResponseEntity<>(new Mensaje("Habilidad Dura creada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHabilidadesDuras dtohabilidadesduras){
        if(!sHabilidadesDuras.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        } 
        if(sHabilidadesDuras.existsByNombreHD(dtohabilidadesduras.getNombreHD()) && sHabilidadesDuras.getByNombreHD(dtohabilidadesduras.getNombreHD()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtohabilidadesduras.getNombreHD())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacío"), HttpStatus.BAD_REQUEST);
        }
        HabilidadesDuras habilidadesDuras = sHabilidadesDuras.getOne(id).get();
        habilidadesDuras.setNombreHD(dtohabilidadesduras.getNombreHD());
        habilidadesDuras.setPorcentajeHD(dtohabilidadesduras.getPorcentajeHD());
        
        sHabilidadesDuras.save(habilidadesDuras);
        
        return new ResponseEntity(new Mensaje("Habilidad Dura actualizada"), HttpStatus.OK);
    }
}
