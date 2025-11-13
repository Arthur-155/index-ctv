package com.example.crudproject.controller;

import com.example.crudproject.model.Login;
import com.example.crudproject.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:3000"})
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/register")
    public Login criarLogin(@RequestBody Login login){
        return loginService.insertLogin(login);
    }

    @PostMapping("/auth")
    public ResponseEntity<?> autenticar(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String senha = body.get("senha");

        return loginService.autenticar(email, senha)
                .<ResponseEntity<?>>map(u -> ResponseEntity.ok(Map.of(
                        "id", u.getId(),
                        "nome", u.getNome(),
                        "email", u.getEmail()
                )))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("error", "Credenciais inválidas")));
    }

    @GetMapping
    public List<Login> listarLogin(){
        return loginService.selectAllLogin();
    }

    @GetMapping("/{id}")
    public Login buscarById(@PathVariable int id){
        return loginService.selectLoginById(id);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id){
        loginService.deletarLogin(id);
    }

    @GetMapping("/ranking")
    public List<Map<String, Object>> rankingTop10() {
        var tags = List.of("aluno", "professor","usuario");
        return loginService.rankingTop10(tags);
    }
}