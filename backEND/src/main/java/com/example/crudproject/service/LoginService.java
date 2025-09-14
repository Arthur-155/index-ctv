package com.example.crudproject.service;

import com.example.crudproject.model.Login;
import com.example.crudproject.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login insertLogin(Login login){
        return loginRepository.save(login);
    }

    public List<Login> selectAllLogin(){
        return loginRepository.findAll();
    }

    public Login selectLoginById(int id){
        Optional<Login> lg = loginRepository.findById(id);
        if(lg.isPresent()){
            return lg.get();
        } else {
            throw new RuntimeException("Login não encontrado.");
        }
    }

    public void deletarLogin(int id){
        loginRepository.deleteById(id);
    }

    public Optional<Login> autenticar(String email, String senha) {
        return loginRepository.findByEmail(email)
                .filter(u -> u.getSenha().equals(senha));
    }
}