package com.portfolio.backend.Service;

import com.portfolio.backend.Entity.HabilidadesBlandas;
import com.portfolio.backend.Repository.RHabilidadesBlandas;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SHabilidadesBlandas {
    
    @Autowired
    RHabilidadesBlandas rHabilidadesBlandas;
    
    public List<HabilidadesBlandas> list(){
        return rHabilidadesBlandas.findAll();
    }
    
    public Optional<HabilidadesBlandas> getOne(int id){
        return rHabilidadesBlandas.findById(id);
    }
    
    public Optional<HabilidadesBlandas> getByNombreHB(String nombreHB){
        return rHabilidadesBlandas.findByNombreHB(nombreHB);
    }
    
    public void save(HabilidadesBlandas habilidadesBlandas){
       rHabilidadesBlandas.save(habilidadesBlandas);
    }
    
    public void delete(int id){
        rHabilidadesBlandas.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHabilidadesBlandas.existsById(id);
    }
    
    public boolean existsByNombreHB(String nombreHB){
        return rHabilidadesBlandas.existsByNombreHB(nombreHB);
    }
    
}
