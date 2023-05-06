package com.portfolio.portfolioback.Security.Repository;

import com.portfolio.portfolioback.Security.Entity.Rol;
import com.portfolio.portfolioback.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer> {
    
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
