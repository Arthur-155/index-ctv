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
        <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-10">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Enviar vídeo para análise
                </h1>
                <label
                    htmlFor="dropzone-file"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    aria-busy={uploading}
                    className="
                    flex flex-col items-center justify-center
                    w-full h-60 rounded-xl border-2 border-dashed cursor-pointer
                    bg-gray-50 dark:bg-gray-700
                    border-gray-300 dark:border-gray-600
                    hover:bg-gray-100 dark:hover:bg-gray-600
                    transition
                "
                >
                    <div className="flex flex-col items-center justify-center text-center px-4">
                        <svg
                            className="w-10 h-10 mb-3 text-gray-500 dark:text-gray-300"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 
                               5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 
                               4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>

                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <span className="font-semibold">Clique aqui</span> ou arraste um vídeo
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Formatos suportados: mp4, mov, mkv</p>
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
                <div className="mt-5">
                    {file && (
                        <div className="p-3 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm">
                            <strong>Arquivo selecionado:</strong> {file.name} ({file.size} bytes)
                        </div>
                    )}
                </div>

                {file && (
                    <video
                        src={URL.createObjectURL(file)}
                        controls
                        className="w-full mt-4 rounded-lg max-h-64 object-cover"
                    />
                )}


                <button
                    onClick={handleUpload}
                    disabled={!file || uploading}
                    className="
                    w-full mt-6 py-3 rounded-lg
                    bg-green-600 hover:bg-green-900
                    text-white font-medium
                    transition disabled:opacity-50
                "
                >
                    {uploading ? "Enviando vídeo..." : "Enviar vídeo"}
                </button>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 break-all text-center">
                    {status}
                </p>
            </div>
        </section>
    );

}
