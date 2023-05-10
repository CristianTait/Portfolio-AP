package com.portfolio.backend.Repository;

import com.portfolio.backend.Entity.Idiomas;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RIdiomas extends JpaRepository<Idiomas, Integer>{
    public Optional<Idiomas> findByNombreI(String nombreI);
    public boolean existsByNombreI (String nombreI);
}
