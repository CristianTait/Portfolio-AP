package com.portfolio.portfolioback.Security.Controller;

import com.portfolio.portfolioback.Security.Dto.JWTDTO;
import com.portfolio.portfolioback.Security.Dto.LoginUsuario;
import com.portfolio.portfolioback.Security.Dto.NuevoUsuario;
import com.portfolio.portfolioback.Security.Entity.Rol;
import com.portfolio.portfolioback.Security.Entity.Usuario;
import com.portfolio.portfolioback.Security.Enums.RolNombre;
import com.portfolio.portfolioback.Security.Service.RolService;
import com.portfolio.portfolioback.Security.Service.UsuarioService;
import com.portfolio.portfolioback.Security.jwt.JWTProvider;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import java.util.HashSet;
import java.util.Set;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"http://localhost:4200"})
public class AuthController {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UsuarioService usuarioService;
    @Autowired
    RolService rolService;
    @Autowired
    JWTProvider jwtProvider;
    
    @PostMapping("/nuevo")
    public ResponseEntity<?> nuevo(@Valid @RequestBody NuevoUsuario nuevoUsuario, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("Campos mal puestos o email invalido"),HttpStatus.BAD_REQUEST);
        
        if(usuarioService.existsByNombreUsuario(nuevoUsuario.getNombreUsuario()))
            return new ResponseEntity(new Mensaje("Ese nombre de usuario ya existe"), HttpStatus.BAD_REQUEST);
        
        if(usuarioService.existsByEmail(nuevoUsuario.getEmail()))
            return new ResponseEntity(new Mensaje("Ese email ya existe"), HttpStatus.BAD_REQUEST);
        
        Usuario usuario = new Usuario(nuevoUsuario.getNombre(), nuevoUsuario.getNombreUsuario(),
            nuevoUsuario.getEmail(), passwordEncoder.encode(nuevoUsuario.getPassword()));
        
        Set<Rol> roles = new HashSet<>();
    roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).orElseThrow(() -> new RuntimeException("El rol ROLE_USER no existe")));
        
        if(nuevoUsuario.getRoles().contains("admin"))
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        usuario.setRoles(roles);
        usuarioService.save(usuario);
        
        return new ResponseEntity(new Mensaje("Usuario guardado"),HttpStatus.CREATED);
    }
    
    @PostMapping("/login")
    public ResponseEntity<JWTDTO> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult){
        if(bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("Campos mal puestos"), HttpStatus.BAD_REQUEST);
        
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
        loginUsuario.getNombreUsuario(), loginUsuario.getPassword()));
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        String jwt = jwtProvider.generateToken(authentication);
        
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        
        JWTDTO jwtDto = new JWTDTO(jwt, userDetails.getUsername(), userDetails.getAuthorities());
        
        return new ResponseEntity(jwtDto, HttpStatus.OK);
    }
    
    @GetMapping("/verificar-token")
    public ResponseEntity<String> verificarToken(@RequestHeader("Authorization") String authorizationHeader) {
    String token = authorizationHeader.replace("Bearer ", "");
    try {
        Jwts.parser().setSigningKey("mi_clave_secreta").parseClaimsJws(token);
        return ResponseEntity.ok("El token es válido");
    } catch (JwtException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("El token es inválido o ha expirado");
    }
}

}
