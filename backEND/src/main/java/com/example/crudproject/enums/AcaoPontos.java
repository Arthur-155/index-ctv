package com.example.crudproject.enums;

public enum AcaoPontos {
    CRIAR_VIDEO(20, "Criar um vídeo"),
    RECEBER_LIKE(5, "Receber um like em um vídeo"),
    COMENTARIO_POSITIVO(3, "Receber um comentário positivo"),
    ASSISTIR_COMPLETO(1, "Assistir a um vídeo até o final"),
    RESPONDER_DUVIDA(10, "Responder a uma dúvida"),
    VIDEO_VALIDADO(30, "Ter um vídeo validado por um professor"),
    DENUNCIA_VALIDA(-10, "Denúncia de conteúdo confirmada"),
    MAU_COMPORTAMENTO(-999, "Mal comportamento");

    private final int pontos;
    private final String descricao;

    AcaoPontos(int pontos, String descricao) {
        this.pontos = pontos;
        this.descricao = descricao;
    }

    public int getPontos() { return pontos; }
    public String getDescricao() { return descricao; }
}