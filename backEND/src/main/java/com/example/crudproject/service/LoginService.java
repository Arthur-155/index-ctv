package com.example.crudproject.service;

import com.example.crudproject.model.Login;
import com.example.crudproject.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Login insertLogin(Login login){
        login.setPontos(0);
        if (login.getTag() == null) {
            login.setTag("usuario");
        }
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

    public List<Map<String, Object>> rankingTop10(List<String> tags) {
        return loginRepository.findTop10ByTagInOrderByPontosDesc(tags)
                .stream()
                .map(u -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("id", u.getId());
                    map.put("nome", u.getNome());
                    map.put("pontos", u.getPontos());
                    map.put("tag", u.getTag());
                    return map;
                })
                .collect(Collectors.toList());
    }
}