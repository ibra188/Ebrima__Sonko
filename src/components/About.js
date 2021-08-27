import React from 'react';

export default function About () {
return(
    <section id="about">
        <div className="container  mx-auto py-20 md:flex-row flex-col flex px-10 items-center">
            <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Ciao, sono Ibra.
                <br className="hidden lg:inline-block" /> Amo costruire incredibili
                     app.
                </h1>

                <p className="mb-8 leading-relaxed">
                Sviluppatore front-end Il mio ruolo è scrivere e definire lo stile dei componenti front-end che soddisfano i requisiti dei nostri mock e soddisfano le nostre storie di utenti.
                Controllo ed elaborato anche le richieste per le distribuzioni di produzione.
                Tecnologie utilizzate: HTML5 & CSS3 SASS, JavaScript, React-js, Tailwind-Css, Bootstrap, Style-Components.
                </p>

                <div className="flex justify-center">
                    <a href="#contact" className="inline-flex text-white bg-gray-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Lavora con me
                    </a>
                    <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    Guarda il mio lavoro passato
                    </a>
                </div>
            </div>

            <div className="lg:mx-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded"
                     alt="hero"
                     src="./ibra.JPG"
                />
            </div>
        </div>
    </section>
);
}