package com.example.crudproject.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_login")
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

    @Column(name = "pontos")
    private int pontos = 0;

    @Column(name = "tag")
    private String tag = "usuario";

    public int getId() { return id; }
    public String getNome() { return nome; }
    public String getEmail() { return email; }
    public String getSenha() { return senha; }
    public int getPontos() { return pontos; }
    public String getTag() { return tag; }

    public void setNome(String nome) { this.nome = nome; }
    public void setEmail(String email) { this.email = email; }
    public void setSenha(String senha) { this.senha = senha; }
    public void setPontos(int pontos) { this.pontos = pontos; }
    public void setTag(String tag) { this.tag = tag; }
}