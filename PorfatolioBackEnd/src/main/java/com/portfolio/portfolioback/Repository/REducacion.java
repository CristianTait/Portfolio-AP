package com.portfolio.portfolioback.Repository;

import com.portfolio.portfolioback.Entity.Educacion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface REducacion extends JpaRepository<Educacion, Integer>{
    
    public Optional<Educacion> findByCursoEdu(String cursoEdu);
    public boolean existsByCursoEdu (String cursoEdu);
}
