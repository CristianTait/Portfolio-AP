package com.portfolio.backend.Repository;

import com.portfolio.backend.Entity.Proyectos;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RProyectos extends JpaRepository<Proyectos, Integer> {
    public Optional<Proyectos> findByTituloProy(String tituloProy);
    public boolean existsByTituloProy(String tituloProy);
}
