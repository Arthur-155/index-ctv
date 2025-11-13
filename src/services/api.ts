const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export type RankingItem = {
    id: number;
    nome: string;
    pontos: number;
    tag: string;
};

export async function getRanking(): Promise<RankingItem[]> {
    const res = await fetch(`${API_BASE_URL}/login/ranking`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Erro ao buscar ranking");
    }

    return res.json();
}