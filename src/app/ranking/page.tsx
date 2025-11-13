import { getRanking, RankingItem } from "@/services/api";

function posStyle(pos: number) {
    if (pos === 1) return "bg-yellow-400 text-gray-900";
    if (pos === 2) return "bg-gray-300 text-gray-900";
    if (pos === 3) return "bg-orange-500 text-white";
    return "bg-gray-200 text-gray-700";
}

function RoleBadge({ tag }: { tag: string }) {
    const base =
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border";
    const lower = tag?.toLowerCase();

    if (lower === "aluno") {
        return (
            <span className={`${base} bg-green-100 text-green-700 border-green-300`}>
                Aluno
            </span>
        );
    }

    if (lower === "professor") {
        return (
            <span
                className={`${base} bg-blue-100 text-blue-700 border-blue-300`}
            >
                Professor
            </span>
        );
    }

    if (lower === "admin") {
        return (
            <span
                className={`${base} bg-purple-100 text-purple-700 border-purple-300`}
            >
                Admin
            </span>
        );
    }

    return (
        <span className={`${base} bg-gray-100 text-gray-700 border-gray-300`}>
            Usuário
        </span>
    );
}

async function loadData(): Promise<RankingItem[] | "error"> {
    try {
        return await getRanking();
    } catch {
        return "error";
    }
}

export default async function RankingPage() {
    const data = await loadData();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10 mb-8 m-1">
                    <span className="bg-green-100 text-green-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                        Ranking da Comunidade
                    </span>
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-2">
                        Top 10 alunos e professores
                    </h1>
                    <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
                        Pontos baseados em criação de vídeos, likes, comentários, respostas,
                        validações e penalidades configuradas no backend.
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 m-1">
                    <div className="grid grid-cols-12 gap-2 pb-3 border-b border-gray-200 dark:border-gray-700 text-[10px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        <div className="col-span-2 md:col-span-1">Posição</div>
                        <div className="col-span-6 md:col-span-6">Usuário</div>
                        <div className="col-span-2 md:col-span-2">Tipo</div>
                        <div className="col-span-2 md:col-span-3 text-right">Pontos</div>
                    </div>

                    {/* Estados especiais */}
                    {data === "error" && (
                        <div className="py-6 text-sm text-red-500">
                            Não foi possível carregar o ranking. Confirme se o backend está
                            rodando em <span className="font-mono">/login/ranking</span> e com CORS liberado.
                        </div>
                    )}

                    {data !== "error" && data.length === 0 && (
                        <div className="py-6 text-sm text-gray-500 dark:text-gray-400">
                            Nenhum usuário ranqueado ainda.
                        </div>
                    )}

                    {data !== "error" &&
                        data.map((user, index) => {
                            const pos = index + 1;
                            const topBg =
                                pos <= 3
                                    ? "bg-green-50/80 dark:bg-gray-900/70"
                                    : "bg-transparent";

                            return (
                                <div
                                    key={user.id}
                                    className={`grid grid-cols-12 gap-2 items-center py-3 border-b border-gray-100/60 dark:border-gray-800/60 last:border-0 ${topBg}`}
                                >
                                    <div className="col-span-2 md:col-span-1">
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold ${posStyle(
                                                pos
                                            )}`}
                                        >
                                            {pos}
                                        </div>
                                    </div>

                                    <div className="col-span-6 md:col-span-6">
                                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                            {user.nome}
                                        </div>
                                        <div className="text-[10px] text-gray-500 dark:text-gray-500">
                                            ID #{user.id}
                                        </div>
                                    </div>

                                    <div className="col-span-2 md:col-span-2">
                                        <RoleBadge tag={user.tag} />
                                    </div>
                                    <div className="col-span-2 md:col-span-3 text-right">
                                        <span className="text-sm font-bold text-green-600 dark:text-green-400">
                                            {user.pontos}
                                        </span>
                                        <span className="ml-1 text-[10px] text-gray-500 dark:text-gray-400">
                                            pts
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    <br />
                    <strong className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Regras exemplo:</strong>
                    <br />
                    criar vídeo (+20), criar vídeo (+20), comentário
                    positivo (+3), assistir até o final (+1), responder dúvida (+10),
                    vídeo validado (+30), denúncia confirmada (-10), mau comportamento
                    (-999). A lógica está no backend.

                </p>


            </div>
        </section>
    );
}