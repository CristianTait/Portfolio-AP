package com.portfolio.portfolioback.Repository;

import com.portfolio.portfolioback.Entity.HabilidadesDuras;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RHabilidadesDuras extends JpaRepository<HabilidadesDuras, Integer>{
    public Optional<HabilidadesDuras> findByNombreHD(String nombreHD);
    public boolean existsByNombreHD(String nombreHD);
}
