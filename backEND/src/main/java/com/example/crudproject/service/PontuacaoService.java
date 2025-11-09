package com.example.crudproject.service;

import com.example.crudproject.enums.AcaoPontos;
import com.example.crudproject.model.HistoricoPontos;
import com.example.crudproject.model.Login;
import com.example.crudproject.repository.HistoricoPontosRepository;
import com.example.crudproject.repository.LoginRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class PontuacaoService {

    private final LoginRepository loginRepository;
    private final HistoricoPontosRepository historicoRepository;

    public PontuacaoService(LoginRepository loginRepository,
                            HistoricoPontosRepository historicoRepository) {
        this.loginRepository = loginRepository;
        this.historicoRepository = historicoRepository;
    }

    @Transactional
    public void registrarAcao(int usuarioId, AcaoPontos acao) {
        Login usuario = loginRepository.findById(usuarioId)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));

        int novosPontos = usuario.getPontos() + acao.getPontos();
        usuario.setPontos(novosPontos);
        loginRepository.save(usuario);

        HistoricoPontos h = new HistoricoPontos();
        h.setUsuario(usuario);
        h.setAcao(acao.getDescricao());
        h.setPontos(acao.getPontos());
        historicoRepository.save(h);
    }
}