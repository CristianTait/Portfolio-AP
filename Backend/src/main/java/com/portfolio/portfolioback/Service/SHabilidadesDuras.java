package com.portfolio.portfolioback.Service;

import com.portfolio.portfolioback.Entity.HabilidadesDuras;
import com.portfolio.portfolioback.Repository.RHabilidadesDuras;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SHabilidadesDuras {
    
    @Autowired
    RHabilidadesDuras rHabilidadesDuras;
    
    public List<HabilidadesDuras> list(){
        return rHabilidadesDuras.findAll();
    }
    
    public Optional<HabilidadesDuras> getOne(int id){
        return rHabilidadesDuras.findById(id);
    }
    
    public Optional<HabilidadesDuras> getByNombreHD(String nombreHD){
        return rHabilidadesDuras.findByNombreHD(nombreHD);
    }
    
    public void save(HabilidadesDuras habilidadesDuras){
       rHabilidadesDuras.save(habilidadesDuras);
    }
    
    public void delete(int id){
        rHabilidadesDuras.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHabilidadesDuras.existsById(id);
    }
    
    public boolean existsByNombreHD(String nombreHD){
        return rHabilidadesDuras.existsByNombreHD(nombreHD);
    }
}
