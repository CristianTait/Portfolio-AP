package com.portfolio.portfolioback.Controller;

import com.portfolio.portfolioback.Entity.Persona;
import com.portfolio.portfolioback.Security.Controller.Mensaje;
import com.portfolio.portfolioback.Service.ImpPersonaService;
import com.portfolio.portfolioback.dto.dtoPersona;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/personas")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {
        
    @Autowired
    ImpPersonaService personaService;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Persona>> list(){
        List<Persona> list = personaService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Persona> getById(@PathVariable("id") int id){
        if(!personaService.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        Persona persona = personaService.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }
      
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoPersona dtopersona){
        if(!personaService.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if(personaService.existsByNombre(dtopersona.getNombre()) && personaService.getByNombre(dtopersona.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Ese curso ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtopersona.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacío"), HttpStatus.BAD_REQUEST);
        }
        Persona persona = personaService.getOne(id).get();
        persona.setNombre(dtopersona.getNombre());
        persona.setApellido(dtopersona.getApellido());
        persona.setDescripcion(dtopersona.getDescripcion());
        persona.setImg(dtopersona.getImg());
        persona.setLogo(dtopersona.getLogo());
        persona.setUbicacion(dtopersona.getUbicacion());
        persona.setMail(dtopersona.getMail());
        persona.setLinkedin(dtopersona.getLinkedin());
        persona.setGithub(dtopersona.getGithub());        
        personaService.save(persona);
        return new ResponseEntity(new Mensaje("Persona modificada"), HttpStatus.OK);
    }   
    
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody dtoPersona dtopersona) {
        // Creamos una nueva persona con la información del DTO
        Persona persona = new Persona();
        persona.setNombre(dtopersona.getNombre());
        persona.setApellido(dtopersona.getApellido());
        persona.setDescripcion(dtopersona.getDescripcion());
        persona.setImg(dtopersona.getImg());
        persona.setLogo(dtopersona.getLogo());
        persona.setUbicacion(dtopersona.getUbicacion());
        persona.setMail(dtopersona.getMail());
        persona.setLinkedin(dtopersona.getLinkedin());
        persona.setGithub(dtopersona.getGithub());

        // Guardamos la persona en la base de datos
        personaService.save(persona);

        // Respondemos con un mensaje de éxito
        return new ResponseEntity(new Mensaje("Persona creada"), HttpStatus.OK);
    }
    
}
