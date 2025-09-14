import Image from 'next/image'
import minhaFoto from '../../assets/image/eu.jpeg';
import Yuki from '../../assets/image/Yuki.png';
import diogo from '../../assets/image/diogo.png';
import silas from '../../assets/image/Silas.png'

export default function sobreNos() {
    return (
        <section className="bg-white dark:bg-gray-900">


            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sobre o nosso projeto</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">O motivo por trás do desenvolvimento do CTV</p>
                    </div>
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
                                            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Sobre Nós</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                        </div>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">

                            <div className="p-5">
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    <br/>
                                    <strong className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Como Começou</strong>
                                    <br/>
                                    O Cat the Vision começou de uma forma bastante simples, <strong className='text-light-400 dark:text-green-400'>como um método de estudo</strong>. Eu, Arthur, sempre busquei maneiras eficientes de fixar o conteúdo das aulas e, por isso, comecei a gravar vídeos resolvendo os problemas e exercícios passados pelos professores. A idéia era revisar o material de uma forma mais dinâmica e, ao mesmo tempo, consolidar meu próprio aprendizado.

                                    Com o tempo, compartilhei essa prática com alguns amigos, que logo se interessaram pelos vídeos. Eles começaram a pedir que eu enviasse os vídeos para ajudá-los a entender melhor os conteúdos das aulas. Foi então que percebi que aquilo que era inicialmente um método de estudo pessoal poderia ajudar muito mais pessoas além dos meus amigos. Surgiu, assim, a ideia de <strong className='text-light-400 dark:text-green-400'>criar uma plataforma</strong> onde esses vídeos pudessem ser acessados por qualquer pessoa que precisasse de ajuda: o Cat the Vision.
                                    <br/>
                                    <strong className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Nossa missão</strong>
                                    <br/>
                                    No Cat the Vision, <strong className='text-light-400 dark:text-green-400'>acreditamos que o conhecimento é mais eficaz quando compartilhado.</strong> Nossa missão é oferecer uma plataforma acessível e colaborativa, onde estudantes possam encontrar vídeos explicativos que simplificam a resolução de problemas e exercícios. Queremos ser uma ferramenta que ajude não apenas a entender o conteúdo, mas também a fixá-lo de forma prática e eficiente.
                                    <br/>
                                    <strong className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Como funciona</strong>
                                    <br/>
                                    A plataforma reúne vídeos gravados durante sessões de estudo, <strong className='text-light-400 dark:text-green-400'>onde é resolvido problemas e exercícios passados em aulas ou estudos pessoais.</strong> Esses vídeos são organizados de forma clara e intuitiva, para que qualquer pessoa possa encontrar o conteúdo que precisa de maneira rápida e fácil.

                                    <strong className='text-light-400 dark:text-green-400'>Mas o Cat the Vision não para por aí!</strong> No futuro, planejamos expandir a plataforma, incluindo conteúdos independentes e abrangendo novas áreas do conhecimento. Além disso, <strong className='text-light-400 dark:text-green-400'>queremos que a plataforma seja um espaço colaborativo.</strong> Por isso, estamos criando um sistema onde qualquer pessoa pode contribuir com vídeos. Se você tem vontade de gravar um vídeo explicativo, basta entrar em contato conosco. Nossa equipe analisará o material e, se aprovado, ele será publicado em um módulo correspondente ao conteúdo. Afinal, acreditamos que o conhecimento cresce quando é compartilhado.
                                    <br/>
                                    <strong className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Nossa visão para o futuro</strong>
                                    <br/>
                                    Queremos que o Cat the Vision se torne uma referência para estudantes que buscam ajuda prática e direta. Nosso objetivo é expandir a plataforma, alcançando cada vez mais pessoas e oferecendo conteúdos diversificados e de alta qualidade. Além disso,  <strong className='text-light-400 dark:text-green-400'>queremos fortalecer a comunidade de colaboradores, criando uma rede de apoio onde todos possam aprender e ensinar.</strong>
                                    <br/>
                                    <strong className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>Faça parte dessa jornada</strong>
                                    <br/>
                                    <strong className='text-green-400 dark:text-green-400'>Se você se identifica com nossa missão e quer contribuir de alguma forma,</strong> seja assistindo aos vídeos, compartilhando a plataforma ou enviando seu próprio conteúdo, você é parte fundamental do Cat the Vision. Juntos, podemos transformar a maneira como aprendemos e ensinamos.
                                </p>
                                <a href="/contato">
                                    <button type="button" className="cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Entrar em contato</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nosso Time</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Esses são os envolvidos no planejamento, desenvolvimento e estilização do Cat The Vision</p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-full">
                        <a href="#">
                            <Image className="m-5 w-40 h-55 rounded-full sm:rounded-full sm:rounded-full" src={minhaFoto} alt="Bonnie Avatar" />
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Arthur Vieira Bergamo</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor Full-Stack </span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Estudante de Analise e Desenvolvimento de Sistemas</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Sobre Arthur</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor do projeto CTV</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Olá! Meu nome é Arthur, sou um desenvolvedor full-stack e Analista na DB1 Group, apaixonado por tecnologia e soluções criativas. Minha jornada na programação começou em 2024, quando eu entrei na faculdade. Desde então, tenho me dedicado a criar aplicações web que sejam intuitivas e eficientes. Ao longo desse tempo de estudos, adquiri experiência com diversas tecnologias.
                            Acredito que a tecnologia deve ser usada para resolver problemas reais e melhorar a vida das pessoas. Por isso, busco sempre criar soluções que sejam não apenas funcionais, mas também acessíveis e impactantes.
                            Atualmente, estou focado em aprender mais sobre técnologias no geral (sou um curioso, quanto a isso) e contribuir para projetos de código aberto. Fora do mundo da programação, sou um entusiasta de corrida, e acredito que equilibrar trabalho e paixões é essencial para a criatividade e o bem-estar. </p>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-full">
                        <a href="#">
                            <Image className="m-5 w-40 h-55 rounded-full sm:rounded-full sm:rounded-full" src={Yuki} alt="Jese Avatar" />
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Victor Yuki Fernandes</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor Back-End</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Estudante de analise e desenvolvimento de sistemas.</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Sobre Victor</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor do projeto CTV</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Fala, minha rapazeada! Sou o Yuki, estudante de Análise e Desenvolvimento de Sistemas e um apaixonado por tecnologia. No meu tempo livre, curto jogar,
                                ir pra academia e, principalmente, ler. Decidi participar desse projeto porque quero ampliar e fortalecer meus conhecimentos em front-end,
                                e espero contribuir com meu esforço e dedicação. Me considero uma pessoa curiosa, que sempre testa suas capacidades – por isso, adoro um desafio!
                            </p>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-full">
                        <a href="#">
                            <Image className="m-5 w-40 h-55 rounded-full sm:rounded-full sm:rounded-full" src={diogo} alt="Bonnie Avatar" />
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Diogo Keiti Nakashima Valgas</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor Front-End </span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Estudante de Analise e Desenvolvimento de Sistemas</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Sobre Diogo</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor do projeto CTV</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Olá! Meu nome é Diogo, sou estudante de Análise e Desenvolvimento de Sistemas e sempre gostei da ideia de usar a tecnologia como uma forma de
                                transformar a vida das pessoas. Acredito que o conhecimento só tem valor real quando é compartilhado. Foi justamente por isso que decidi participar da criação deste site junto com meus amigos.
                                Se esse site conseguir facilitar a vida de alguém, já vai ter cumprido o propósito pelo qual nasceu.</p>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-full">
                        <a href="#">
                            <Image className="m-5 w-40 h-55 rounded-full sm:rounded-full sm:rounded-full" src={silas} alt="Bonnie Avatar" />
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#"> Sousa Espinola</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Analista de Dados</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Estudante de Analise e Desenvolvimento de Sistemas</p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                        </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">

                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Sobre Silas</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Desenvolvedor do projeto CTV</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Olá! Meu nome é Silas, sou estudante de Análise e Desenvolvimento de Sistemas e já atuo no ramo da tecnologia. Tenho experiência em análise de dados e Power BI, áreas que me motivam pela capacidade de transformar informações em soluções práticas e visuais.
                                Além do mundo da tecnologia, lidero um grupo de adolescentes e tenho a oportunidade de compartilhar mensagens que já alcançaram mais de 200 pessoas. Essa experiência fortalece minha comunicação, liderança e paixão por inspirar vidas.
                                Acredito que unir propósito e tecnologia é essencial: enquanto a tecnologia gera inovação, o propósito dá sentido ao que fazemos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}