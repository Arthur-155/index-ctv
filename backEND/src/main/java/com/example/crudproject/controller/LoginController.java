package com.example.crudproject.controller;

import com.example.crudproject.model.Login;
import com.example.crudproject.service.LoginService;
import jdk.jfr.Description;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:3000"})
@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public Login criarLogin(@RequestBody Login login){
        return loginService.insertLogin(login);
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
}