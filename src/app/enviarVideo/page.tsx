"use client";

import { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EnviarVideo() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState("");
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    function onDrop(e: React.DragEvent) {
        e.preventDefault();
        const f = e.dataTransfer.files?.[0];
        if (f) setFile(f);
    }

    async function handleUpload() {
        if (!file || uploading) return;

        try {
            setUploading(true);
            setStatus("Enviando vídeo...");

            const path = `videos/${Date.now()}-${file.name}`;

            const { error: uploadError } = await supabase.storage
                .from("videos")
                .upload(path, file);

            if (uploadError) {
                setStatus("Erro no upload: " + uploadError.message);
                return;
            }

            const { data: publicData } = supabase.storage
                .from("videos")
                .getPublicUrl(path);

            const videoUrl = publicData.publicUrl;

            setStatus("Salvando no banco...");

            const res = await fetch("http://localhost:8080/videos/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ urlDoVideo: videoUrl }),
            });

            if (!res.ok) {
                const err = await res.text();
                setStatus("Erro no backend: " + err);
                return;
            }

            setStatus("Vídeo salvo com sucesso!");
            setFile(null);
            inputRef.current && (inputRef.current.value = "");
        } catch (e: any) {
            setStatus("Erro: " + e.message);
        } finally {
            setUploading(false);
        }
    }


    return (
        <section className="flex-col dark:bg-gray-800">
            <div className="flex items-center justify-center w-full dark:bg-gray-800 p-2">
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
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Envie seu vídeo
                        </p>
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
                    {uploading ? "Enviando..." : "Enviar vídeo"}
                </button>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 break-all">
                    {file ? `Selecionado: ${file.name} (${file.size} bytes)` : "Nenhum arquivo selecionado"}
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 break-all">
                    {status}
                </p>
            </div>
        </section>
    );
}
