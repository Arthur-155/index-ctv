"use client";

import { useRef, useState } from "react";

const DRIVE_FOLDER_URL =
    "https://drive.google.com/drive/folders/1QPxMgx_EgSOypMk4j5j7J7OK9hZJidgO";

export default function EnviarVideo() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<string>("");
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    function onDrop(e: React.DragEvent) {
        e.preventDefault();
        const f = e.dataTransfer.files?.[0];
        if (f) setFile(f);
    }

    async function handleUpload() {
        if (!file || uploading) return;
        setUploading(true);
        setStatus("Enviando...");
        try {
            const fd = new FormData();
            fd.append("file", file);

            const res = await fetch("/api/upload-video", { method: "POST", body: fd });
            const data = await res.json();

            if (!res.ok) {
                setStatus(`Erro: ${data?.error || "falha no upload"}`);
                setUploading(false);
                return;
            }

            const link: string =
                data?.webViewLink || data?.webContentLink || "";

            setStatus(`OK. ID: ${data.id}${link ? ` | Link: ${link}` : ""}`);

            // Redireciona: prioriza o link do arquivo; se não houver, abre a pasta.
            window.location.assign(link || DRIVE_FOLDER_URL);
        } catch (e: any) {
            setStatus(`Erro: ${e?.message || "desconhecido"}`);
        } finally {
            setUploading(false);
            // limpa input para permitir reenviar o mesmo arquivo
            if (inputRef.current) inputRef.current.value = "";
            setFile(null);
        }
    }

    return (
        <section className="flex-col dark:bg-gray-800">
            <div className="flex items-center justify-center w-full dark:bg-gray-800 p-10">
                <label
                    htmlFor="dropzone-file"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    aria-busy={uploading}
                    className="flex flex-col items-center justify-center w-full max-w-xl h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Clique para enviar</span> ou arraste e solte
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Envie seu vídeo</p>
                    </div>
                    <input
                        ref={inputRef}
                        id="dropzone-file"
                        type="file"
                        accept="video/*"
                        className="hidden"
                        disabled={uploading}
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    />
                </label>
            </div>

            <div className="px-6">
                <button
                    onClick={handleUpload}
                    disabled={!file || uploading}
                    className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
                >
                    {uploading ? "Enviando..." : "Enviar para o Drive"}
                </button>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 break-all">
                    {file ? `Selecionado: ${file.name} (${file.size} bytes)` : "Nenhum arquivo selecionado"}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 break-all">{status}</p>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="grid gap-8 mb-6 lg:mb-16">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5">
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    <strong className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Como funciona
                                    </strong>
                                    <br />
                                    O componente envia o arquivo via <code>FormData</code> para <code>/api/upload-video</code>.
                                    O backend usa OAuth do Google Drive e grava na pasta definida por <code>DRIVE_FOLDER_ID</code>.
                                    Após o sucesso, você é redirecionado para o arquivo (ou para a pasta).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
