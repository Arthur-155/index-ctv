package com.example.crudproject.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "historico_pontos")
public class HistoricoPontos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "usuario_id")
    private Login usuario;

    @Column(name = "acao")
    private String acao;

    @Column(name = "pontos")
    private int pontos;

    @Column(name = "data")
    private LocalDateTime data = LocalDateTime.now();

    public Long getId() { return id; }
    public Login getUsuario() { return usuario; }
    public String getAcao() { return acao; }
    public int getPontos() { return pontos; }
    public LocalDateTime getData() { return data; }

    public void setUsuario(Login usuario) { this.usuario = usuario; }
    public void setAcao(String acao) { this.acao = acao; }
    public void setPontos(int pontos) { this.pontos = pontos; }
    public void setData(LocalDateTime data) { this.data = data; }
}
