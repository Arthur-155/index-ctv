import logoJava from '../../assets/image/logoJava.png';
import Image from 'next/image'
import Script from 'next/script';
import emBreve from '../../assets/image/emBreve.png';
import pDesafio from '../../assets/image/pDesafio.png';

export default function CppDesafios() {
    return(
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Vídeos sobre C / C++</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Resolvendo alguns desafios propostos pelo professor moreno!</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Começar
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="/modulos" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Ver Módulos
                    </a>
                </div>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Vídeo</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">Linguagem</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1HR+</dt>
                            <dd className="font-light text-gray-500 dark:text-gray-400">De conteúdo</dd>
                        </div>
                    </dl>
                </div>

                <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                            <div>
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li className="inline-flex items-center">
                                            <a href="/home" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                                <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                </svg>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                            </div>
                                        </li>
                                        <li aria-current="page">
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                                </svg>
                                                <a href="/modulos" className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Módulos</a>
                                            </div>
                                        </li>
                                        <li aria-current="page">
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                                </svg>
                                                <a href="" className='className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2"'>C++ - Desafios</a>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                                <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Módulos Disponíveis</h2>
                            </div>
                            <div className="flex items-center space-x-4">
                            </div>
                        </div>
                        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="h-56 w-full">
                                    <a href="/videoCpp">
                                        <Image className="mx-auto h-full dark:hidden" src={pDesafio} alt="" />
                                        <Image className="mx-auto hidden h-full dark:block" src={pDesafio} alt="" />
                                    </a>
                                </div>
                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">

                                        <div className="flex items-center justify-end gap-1">

                                            <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span className="sr-only"> Add to Favorites </span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                </svg>
                                            </button>
                                            <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Add to favorites
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/videoJava1" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">1° Desafio</a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Realizando o primeiro desafio proposto pelo professor moreno!</p>
                                    </div>

                                    <ul className="mt-2 flex items-center gap-4">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                                            </svg>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1 Hora</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="h-56 w-full">
                                    <a href="/videoJava45">
                                        <Image className="mx-auto h-full dark:hidden" src={emBreve} alt="" />
                                        <Image className="mx-auto hidden h-full dark:block" src={emBreve} alt="" />
                                    </a>
                                </div>

                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">

                                        <div className="flex items-center justify-end gap-1">
                                            <div id="tooltip-quick-look-2" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Quick look
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>

                                            <button type="button" data-tooltip-target="tooltip-add-to-favorites-2" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span className="sr-only"> Add to Favorites </span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                </svg>
                                            </button>
                                            <div id="tooltip-add-to-favorites-2" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Add to favorites
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/videoJava45" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Desafio ?</a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <div className="flex items-center">
                                        </div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Realizando o segundo desafio</p>
                                    </div>

                                    <ul className="mt-2 flex items-center gap-4">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                                            </svg>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">5 Horas</p>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="h-56 w-full">
                                    <a href="/videoJava6">
                                        <Image className="mx-auto h-full dark:hidden" src={emBreve} alt="" />
                                        <Image className="mx-auto hidden h-full dark:block" src={emBreve} alt="" />
                                    </a>
                                </div>

                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">

                                        <div className="flex items-center justify-end gap-1">
                                            <div id="tooltip-quick-look-3" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Quick look
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>

                                            <button type="button" data-tooltip-target="tooltip-add-to-favorites-3" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span className="sr-only"> Add to Favorites </span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                </svg>
                                            </button>
                                            <div id="tooltip-add-to-favorites-3" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Add to favorites
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/videoJava6" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Desafio ?</a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Realizando o terceiro desafio</p>
                                    </div>

                                    <ul className="mt-2 flex items-center gap-4">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                                            </svg>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">5 Horas</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 flex flex-col">
                                <div className="h-full w-full flex align-center justify-center">
                                    <a href="/videoJava78">
                                        <Image className="mx-auto h-full dark:hidden" src={emBreve} alt="" />
                                        <Image className="mx-auto hidden h-50 dark:block" src={emBreve} alt="" />
                                    </a>
                                </div>

                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">

                                        <div className="flex items-center justify-end gap-1">
                                            <div id="tooltip-quick-look-4" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Quick look
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>

                                            <button type="button" data-tooltip-target="tooltip-add-to-favorites-4" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span className="sr-only"> Add to Favorites </span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                </svg>
                                            </button>
                                            <div id="tooltip-add-to-favorites-4" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Add to favorites
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/videoJava78" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Desafio ?</a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Realizando o quarto desafio</p>
                                    </div>

                                    <ul className="mt-2 flex items-center gap-4">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                                            </svg>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">5 Horas</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>   
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="h-56 w-full">
                                    <a href="#">
                                        <Image className="mx-auto h-full dark:hidden" src={emBreve} alt="" />
                                        <Image className="mx-auto hidden h-full dark:block" src={emBreve} alt="" />
                                    </a>
                                </div>
                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">

                                        <div className="flex items-center justify-end gap-1">
                                            <div id="tooltip-quick-look-8" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Quick look
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>

                                            <button type="button" data-tooltip-target="tooltip-add-to-favorites-8" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span className="sr-only"> Add to Favorites </span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                </svg>
                                            </button>
                                            <div id="tooltip-add-to-favorites-8" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                Add to favorites
                                                <div className="tooltip-arrow" data-popper-arrow=""></div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="videoJava10" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Desafio ?</a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Realizando o quinto desafio</p>
                                    </div>

                                    <ul className="mt-2 flex items-center gap-4">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                                            </svg>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">5 Horas</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
                        </div>
                    </div>
                </section>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
            </section>

        </section>
    )
}
