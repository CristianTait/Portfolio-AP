package com.portfolio.portfolioback.Service;

import com.portfolio.portfolioback.Entity.Proyectos;
import com.portfolio.portfolioback.Repository.RProyectos;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SProyectos {
    
    @Autowired
    RProyectos rProyectos;
    
    public List<Proyectos> list(){
        return rProyectos.findAll();
    }
    
    public Optional<Proyectos> getOne(int id){
        return rProyectos.findById(id);
    }
    
    public Optional<Proyectos> getByTituloProy(String tituloProy){
        return rProyectos.findByTituloProy(tituloProy);
    }
    
    public void save(Proyectos proyectos){
       rProyectos.save(proyectos);
    }
    
    public void delete(int id){
        rProyectos.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rProyectos.existsById(id);
    }
    
    public boolean existsByTituloProy(String tituloProy){
        return rProyectos.existsByTituloProy(tituloProy);
    }
}
