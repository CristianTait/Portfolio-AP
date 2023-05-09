package com.portfolio.portfolioback.Controller;

import com.portfolio.portfolioback.Entity.Idiomas;
import com.portfolio.portfolioback.Security.Controller.Mensaje;
import com.portfolio.portfolioback.Service.SIdiomas;
import com.portfolio.portfolioback.dto.dtoIdiomas;
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
@RequestMapping("/idiomas")
@CrossOrigin(origins = {"*"})
public class CIdiomas {
    
    @Autowired
    SIdiomas sIdiomas;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Idiomas>> list(){
        List<Idiomas> list = sIdiomas.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Idiomas> getById(@PathVariable("id") int id){
        if(!sIdiomas.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el Id"), HttpStatus.BAD_REQUEST);
        }
        Idiomas idiomas = sIdiomas.getOne(id).get();
        return new ResponseEntity(idiomas, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sIdiomas.existsById(id)){
            return new ResponseEntity(new Mensaje("No extiste el ID"), HttpStatus.NOT_FOUND);
        } 
        sIdiomas.delete(id);
        return new ResponseEntity(new Mensaje("Idioma eliminado"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create (@RequestBody dtoIdiomas dtoidiomas){
        if(StringUtils.isBlank(dtoidiomas.getNombreI())){
            return new ResponseEntity(new Mensaje("El nombre del idioma es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if(sIdiomas.existsByNombreI(dtoidiomas.getNombreI())){
            return new ResponseEntity(new Mensaje("Ese idioma ya existe"), HttpStatus.BAD_REQUEST);
        }
        Idiomas idiomas = new Idiomas(dtoidiomas.getNombreI(), dtoidiomas.getDescripI());
        sIdiomas.save(idiomas);
        return new ResponseEntity(new Mensaje("Idioma creada"), HttpStatus.OK);        
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoIdiomas dtoidiomas){
        if(!sIdiomas.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        } 
        if(sIdiomas.existsByNombreI(dtoidiomas.getNombreI()) && sIdiomas.getByNombreI(dtoidiomas.getNombreI()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Ese idioma ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoidiomas.getNombreI())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacío"), HttpStatus.BAD_REQUEST);
        }
        Idiomas idiomas = sIdiomas.getOne(id).get();
        idiomas.setNombreI(dtoidiomas.getNombreI());
        idiomas.setDescripI(dtoidiomas.getDescripI());
        
        sIdiomas.save(idiomas);
        
        return new ResponseEntity(new Mensaje("Idioma actualizado"), HttpStatus.OK);
    }
}
