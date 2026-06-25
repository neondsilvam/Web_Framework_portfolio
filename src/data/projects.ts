import type {Project} from '../types'

//Same portfolio
import IMGPort from '../assets/IMGPortfolio/Base.png'
import PrePort1 from '../assets/IMGPortfolio/preproduction1.png'
import PrePort2 from '../assets/IMGPortfolio/preproduction2.png'
import ProPort from '../assets/IMGPortfolio/production.png'
import PostPort from '../assets/IMGPortfolio/postproduction.png'

//Web Experiment
import PreWeb from '../assets/FlappyBirdExperiment/preproduction.png'
import ProWeb from '../assets/FlappyBirdExperiment/production.png'
import PostWeb from '../assets/FlappyBirdExperiment/postproduction.png'

//Villarica
import PreVilla1 from '../assets/Villarica/preprocess1.png'
import PreVilla2 from '../assets/Villarica/preprocess2.png'
import PreVilla3 from '../assets/Villarica/preprocess3.png'
import PreVilla4 from '../assets/Villarica/preprocess4.png'
import ProVilla1 from '../assets/Villarica/process1.png'
import ProVilla2 from '../assets/Villarica/process2.png'
import PostVilla1 from '../assets/Villarica/postprocess1.png'
import PostVilla2 from '../assets/Villarica/postprocess2.png'

//(Des)conectado
import PreDes1 from '../assets/(Des)conectado/predes1.png'
import PreDes2 from '../assets/(Des)conectado/predes2.png'
import PreDes3 from '../assets/(Des)conectado/predes3.png'
import ProDes1 from '../assets/(Des)conectado/prodes1.png'
import ProDes2 from '../assets/(Des)conectado/prodes2.png'
import ProDes3 from '../assets/(Des)conectado/prodes3.png'
import PostDes1 from '../assets/(Des)conectado/postdes1.png'
import PostDes2 from '../assets/(Des)conectado/postdes2.png'
import DesConectado from '../assets/(Des)conectado/(des)conectado.jpg'

//TaskManagerApp
import preTaskManager from '../assets/TaskManagerApp/preprocess.png'
import proTaskManager from '../assets/TaskManagerApp/process.png'
import postTaskManager from '../assets/TaskManagerApp/postprocess.png'

//CocktailApp
import preCocktail from '../assets/CocktailApp/preprocess.png'
import proCocktail from '../assets/CocktailApp/process.png'
import postCocktail from '../assets/CocktailApp/postprocess.png'

export const WebProjectsES: Project[] = [
    {
        id: 'p1',
        title: 'Proyecto base - Portafolio web',
        description:
            'Este proyecto fue desarrollado en 2026, tras múltiples versiones previas construidas con diferentes herramientas. Este portafolio fue creado usando React y alojado en GitHub Pages. Refleja mi evolución como programador, así como mi nivel de organización y crecimiento a lo largo de los años.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: IMGPort,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Web_Framework_portfolio",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        "Mi portafolio digital ha pasado por diversas herramientas y procesos: desde crearlo con plataformas existentes como Adobe Express, hasta programarlo con HTML y CSS vainilla en servidores como Glitch.",
                        "Sin embargo, una vez comprendí cómo desarrollarme como programador frontend y comencé a avanzar con React, logré formalizar un proyecto más sólido.",
                        "Este portafolio no solo sirve como base para mostrar mis otros proyectos, sino también para demostrar mi potencial de aprendizaje y crecimiento personal."
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "El desarrollo actual",
                    description: [
                        'El concepto inicial fue generar la estructura de las páginas navegables, luego el sistema de idiomas y finalmente el contenido en sí.',
                        'Era necesario que toda la información estuviera disponible en ambos idiomas, dado que algunos proyectos contaban únicamente con uno de los dos.',
                        'La idea fue crear interfaces y variables reutilizables dentro del módulo de cada sección, con el fin de permitir el cambio de idioma de forma dinámica.',
                        'De igual forma, el contenido requería su propia versión tanto en inglés como en español; y aunque es una lógica repetitiva, al ser ambas descripciones únicas, resultan necesarias.',
                        'Todo esto también dividido por módulo y por proyecto.',
                        'Aclaración: soy consciente de que estos datos deberían estar en un archivo .env, pero en este caso particular no representa un riesgo de seguridad significativo.'
                    ],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Pulir detalles",
                    description: [
                        "En la etapa final, el enfoque estuvo en organizar el contenido, realizar pruebas y verificar que todo estuviera en su lugar.",
                        "Durante esta fase se agregaron sonidos, se refinaron detalles visuales y se aseguró la coherencia general del proyecto.",
                        "Todo con el objetivo de concluir el proyecto de la mejor manera posible.",
                        "Cabe mencionar que este no es el fin del proyecto, ya que continuará evolucionando conforme mejoren mis habilidades."
                    ],
                    media: [PostPort],
                },
            },
            sectionFooter: "Todo el contenido web y visual es de creación propia, salvo que se indique lo contrario.",
        }
    },
    {
        id: 'p2',
        title: 'Proyecto web - Plataforma de juego',
        description:
            'Esta página web, desarrollada en 2026 como proyecto de clase, fue construida con React como base. ' +
            'Se conecta directamente con una base de datos mediante el servicio Google Firebase, el cual almacena los datos de las partidas y los registra en la tabla de posiciones. ' +
            'También está vinculada con un juego desarrollado en Unity, el cual es una réplica del clásico "Flappy Bird". ' +
            'Cuenta con registro mediante Google, acceso a metadatos a través de un script en Python, y un panel de administrador controlado desde el propio Firebase.',
        isProjectDeployed: true,
        iframeSrc: 'https://pg29juliandsilva.github.io/CloudComputingGameWebApp/',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/CloudComputingGameWebApp",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        'Al ser un proyecto de aprendizaje, este no contaba con mucha libertad creativa en cuanto a diseño ni funcionalidad.',
                        'El concepto inicial era simplemente lograr que la página web se conectara con el juego entregado previamente.',
                        'Dentro de este proceso, el objetivo no era solo entender la funcionalidad básica, sino también desarrollar el pensamiento lógico necesario para comprender cómo debían funcionar los sistemas internos.'
                    ],
                    media: [PreWeb],
                },
                production: {
                    title: "La producción en sí",
                    description: [
                        'Durante este proyecto, fue necesario implementar diferentes elementos en distintos lenguajes de código.',
                        'En primer lugar, estaba el juego desarrollado en Unity con C#, exportado como aplicación web mediante GitHub Pages.',
                        'Luego, la plataforma web construida en React con TypeScript, conectada a Firebase desde el backend.',
                        'Finalmente, se desarrolló el módulo de integración entre ambos entornos, permitiendo un flujo de datos continuo y consistente.'
                    ],
                    media: [ProWeb],
                },
                postproduction: {
                    title: "Telemetría",
                    description: [
                        'En la etapa final, el enfoque no fue pulir detalles visuales, sino implementar la telemetría del sistema.',
                        'Esto incluyó las opciones de administrador, reguladas desde Firebase y accesibles únicamente con las credenciales correspondientes (más información en GitHub).',
                        'Este sistema utiliza los datos recolectados para mostrar estadísticas personalizadas del jugador, presentadas como un panel de análisis de datos configurable.'
                    ],
                    media: [PostWeb],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p3',
        title: 'Villarica - P5.js',
        description:
            'Este proyecto fue desarrollado para el semillero de investigación "SENDA" de la Universidad de los Andes, Colombia. ' +
            'Su propósito principal fue construir un relato periodístico expresado a través de una propuesta de código narrativo. ' +
            'El enfoque central era lograr que el usuario experimentara lo mismo que vivieron los sobrevivientes, desde sus distintas perspectivas, en uno de los eventos más trágicos de la historia de Colombia. ' +
            'Está desarrollado en P5.js, un framework de JavaScript orientado a la programación creativa, y apoyado por la librería ml5 para la captura de movimiento en pantalla.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto Inicial",
                    description: [
                        'En síntesis, la tragedia de Villarica es uno de los eventos más violentos y dolorosos de la historia de Colombia.',
                        'Trajo consigo muerte, desplazamiento y abandono, y marca el origen de uno de los grupos armados más peligrosos del país.',
                        'No era un evento que pudiera abordarse a la ligera; requería una investigación profunda y rigurosa.',
                        'Fue necesario comprender los detalles del suceso: quiénes fueron las víctimas, cómo fueron afectadas y cuál fue su experiencia.',
                        'Finalmente, decidí narrar la historia de Ana María Molina, una joven que sobrevivió al bombardeo del pueblo escondiéndose en un hueco bajo su casa.',
                        'La intención era contar su historia con el mayor respeto posible, al mismo tiempo que transmitir el dolor que vivió.',
                        'Durante esta etapa también fue necesario investigar el aspecto técnico: comprender el funcionamiento de la librería P5.js y obtener los recursos necesarios para el proyecto.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Creando la pieza",
                    description: [
                        'Con un plan sólido, el desarrollo se volvió más directo y estructurado.',
                        'Utilizamos P5.js para construir un sistema de escenas que avanza o retrocede según las decisiones del usuario.',
                        'Todo controlado mediante captura de movimiento, que analiza el video en tiempo real e identifica las manos a partir de una serie de puntos de referencia específicos.',
                        'La única excepción es el botón de inicio, controlado por el mouse como medida de seguridad para evitar activaciones prematuras.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentación",
                    description: [
                        'Para presentar la propuesta creativa, se desarrolló un concepto de presentación sólido y coherente.',
                        'El objetivo era demostrar un ciclo narrativo completo: el inicio, el conflicto y el desenlace.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
        }
    },
]

export const WebProjectsEN: Project[] = [
    {
        id: 'p1',
        title: 'Base Project - Web Portfolio',
        description:
            'This project was developed in 2026, following multiple previous versions built with different tools. This portfolio was created using React and hosted on GitHub Pages. It reflects my evolution as a developer, as well as my level of organization and personal growth over the years.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: IMGPort,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Web_Framework_portfolio",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Idea",
                    description: [
                        "My digital portfolio has gone through various tools and processes — from building it with existing platforms like Adobe Express, to coding it from scratch with vanilla HTML and CSS on servers like Glitch.",
                        "However, once I understood how to grow as a frontend developer and began advancing with React, I was able to formalize a more structured and professional project.",
                        "This portfolio not only serves as a base to showcase my other projects, but also as a demonstration of my learning potential and personal growth."
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "Current Development",
                    description: [
                        'The initial concept was to build the navigable page structure first, then the language system, and finally the content itself.',
                        'All information needed to be available in both languages, since some projects were only documented in one of the two.',
                        'The goal was to create reusable interfaces and variables within each section module, enabling dynamic language switching throughout the app.',
                        'Similarly, the content required its own version in both English and Spanish; and while this involves repetitive logic, both descriptions are unique and therefore necessary.',
                        'This structure was also divided by module and by individual project.',
                        'Note: I am aware that this data should ideally be stored in a .env file, but in this particular case it does not represent a significant security risk.'
                    ],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Polishing the Details",
                    description: [
                        "In the final stage, the focus shifted to organizing content, running tests, and ensuring everything was in its proper place.",
                        "During this phase, sounds were added, visual details were refined, and the overall coherence of the project was reviewed.",
                        "All of this was done with the goal of delivering the project in the best possible state.",
                        "It is worth noting that this is not the end of the project — it will continue to evolve as my skills improve."
                    ],
                    media: [PostPort],
                },
            },
            sectionFooter: "All web and visual content is original and self-authored, unless otherwise stated.",
        }
    },
    {
        id: 'p2',
        title: 'Web Project - Gaming Platform',
        description:
            'This web application, developed in 2026 as a class project, was built using React as its foundation. ' +
            'It connects directly to a database through Google Firebase, which stores gameplay data and registers it on the leaderboard. ' +
            'It is also integrated with a Unity-based game — a recreation of the classic "Flappy Bird." ' +
            'The platform features Google authentication, metadata access via a Python script, and an admin panel managed through Firebase.',
        isProjectDeployed: true,
        iframeSrc: 'https://pg29juliandsilva.github.io/CloudComputingGameWebApp/',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/CloudComputingGameWebApp",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Idea",
                    description: [
                        'As a learning project, this one had limited creative freedom in terms of design and functionality.',
                        'The initial goal was simply to establish a working connection between the web platform and the previously developed game.',
                        'Beyond understanding the basic functionality, the process was also about developing the logical thinking required to understand how the internal systems should work together.'
                    ],
                    media: [PreWeb],
                },
                production: {
                    title: "The Development Process",
                    description: [
                        'Throughout this project, it was necessary to implement different elements across multiple coding languages.',
                        'First, there was the Unity game written in C#, exported as a web application and deployed via GitHub Pages.',
                        'Then came the web platform, built with React and TypeScript, connected to Firebase on the backend.',
                        'Finally, an integration module was developed to bridge both environments, enabling a seamless and consistent flow of data between them.'
                    ],
                    media: [ProWeb],
                },
                postproduction: {
                    title: "Telemetry",
                    description: [
                        'In the final stage, the focus was not on polishing visual details, but on implementing the system telemetry.',
                        'This included the admin panel features, regulated through Firebase and accessible only with the appropriate credentials (more details available on GitHub).',
                        'The system uses the collected data to display personalized player statistics, presented as a configurable data analytics dashboard.'
                    ],
                    media: [PostWeb],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p3',
        title: 'Villarica - P5.js',
        description:
            'This project was developed for the "SENDA" research group at Universidad de los Andes, Colombia. ' +
            'Its main purpose was to build a journalistic narrative expressed through a creative coding piece. ' +
            'The central focus was to make the user feel what the survivors experienced, from their different perspectives, during one of the most tragic events in Colombian history. ' +
            'It was built using P5.js, a JavaScript framework focused on creative programming, and supported by the ml5 library for on-screen motion capture.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Initial Concept",
                    description: [
                        'In brief, the tragedy of Villarica is one of the most violent and painful events in Colombian history.',
                        'It brought death, forced displacement, and abandonment — and marks the origin of one of the most dangerous armed groups in the country.',
                        'This was not a subject that could be approached lightly; it required deep and rigorous research.',
                        'It was necessary to understand the details of the event: who the victims were, how they were affected, and what their experience was like.',
                        'Ultimately, I chose to tell the story of Ana María Molina, a young woman who survived the bombing of her village by hiding in a hollow beneath her home.',
                        'The intention was to tell her story with the utmost respect, while also conveying the pain and trauma she endured.',
                        'This stage also required technical research: understanding how the P5.js library works and gathering the resources needed for the project.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Building the Piece",
                    description: [
                        'With a solid plan in place, the development process became more direct and structured.',
                        'We used P5.js to build a scene system that advances or rewinds based on the user\'s decisions.',
                        'Everything is controlled through motion capture, which analyzes the video feed in real time and identifies the user\'s hands through a set of specific reference points.',
                        'The only exception is the start button, which is controlled by the mouse as a safeguard to prevent unintended early activation.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentation",
                    description: [
                        'To present the creative proposal, a solid and coherent presentation concept was developed.',
                        'The goal was to demonstrate a complete narrative cycle: the beginning, the conflict, and the resolution.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
        }
    },
]

export const MobileProjectsES: Project[] = [
    {
        id: 'p1',
        title: '(Des)Conectado - Un juego fuera del dispositivo',
        description:
            'Este fue un projecto desarrollado en colaboracion con la universidad de los andes.' +
            'Este presenta el DEMO de una novela grafica interactiva para dispositivos moviles ANDROID acerca de Ashley, una joven nomofobica, la cual se pierde en un bosque meintras su familia va de campament, y ahora tiene que volver.' +
            'Este projecto refleja mi primer acercamiento profesional a unity y mi inicio en el area de programacion formalmente, ya que antes solo habia hecho ejercicios menores.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: DesConectado,
        section: '2025',
        hasExternalLinks: false,
        externalLinks: '',
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Proceso de creacion y diseno",
                    description: [
                        'El concepto inicial comenzo con el concepto de crear un juego que motivara a la gente a reducir la nomofobia, tambien conocido como el miedo a estar desconectado del mundo electrico.',
                        ''
                    ],
                    media: [PreDes1, PreDes2, PreDes3],
                },
                production: {
                    title: "Producir La App",
                    description: [
                        'El concepto inicial fue generar la estructura de las páginas navegables, luego el sistema de idiomas y finalmente el contenido en sí.',
                        'Era necesario que toda la información estuviera disponible en ambos idiomas, dado que algunos proyectos contaban únicamente con uno de los dos.',
                        'La idea fue crear interfaces y variables reutilizables dentro del módulo de cada sección, con el fin de permitir el cambio de idioma de forma dinámica.',
                        'De igual forma, el contenido requería su propia versión tanto en inglés como en español; y aunque es una lógica repetitiva, al ser ambas descripciones únicas, resultan necesarias.',
                        'Todo esto también dividido por módulo y por proyecto.',
                        'Aclaración: soy consciente de que estos datos deberían estar en un archivo .env, pero en este caso particular no representa un riesgo de seguridad significativo.'
                    ],
                    media: [ProDes1, ProDes2, ProDes3],
                },
                postproduction: {
                    title: "Playtest y Corregir",
                    description: [
                        "En la etapa final, el enfoque estuvo en organizar el contenido, realizar pruebas y verificar que todo estuviera en su lugar.",
                        "Durante esta fase se agregaron sonidos, se refinaron detalles visuales y se aseguró la coherencia general del proyecto.",
                        "Todo con el objetivo de concluir el proyecto de la mejor manera posible.",
                        "Cabe mencionar que este no es el fin del proyecto, ya que continuará evolucionando conforme mejoren mis habilidades."
                    ],
                    media: [PostDes1, PostDes2],
                },
            },
            sectionFooter: "Agradecimientos especiales a la universidad de los Andes por la colaboracion.",
        }
    },
    {
        id: 'p2',
        title: 'Lista de Tareas',
        description:
            'Esta página web, desarrollada en 2026 como proyecto de clase, fue construida con React como base. ' +
            'Se conecta directamente con una base de datos mediante el servicio Google Firebase, el cual almacena los datos de las partidas y los registra en la tabla de posiciones. ' +
            'También está vinculada con un juego desarrollado en Unity, el cual es una réplica del clásico "Flappy Bird". ' +
            'Cuenta con registro mediante Google, acceso a metadatos a través de un script en Python, y un panel de administrador controlado desde el propio Firebase.',
        isProjectDeployed: true,
        iframeSrc: 'https://pg29juliandsilva.github.io/CloudComputingGameWebApp/',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/CloudComputingGameWebApp",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        'Al ser un proyecto de aprendizaje, este no contaba con mucha libertad creativa en cuanto a diseño ni funcionalidad.',
                        'El concepto inicial era simplemente lograr que la página web se conectara con el juego entregado previamente.',
                        'Dentro de este proceso, el objetivo no era solo entender la funcionalidad básica, sino también desarrollar el pensamiento lógico necesario para comprender cómo debían funcionar los sistemas internos.'
                    ],
                    media: [preTaskManager],
                },
                production: {
                    title: "La producción en sí",
                    description: [
                        'Durante este proyecto, fue necesario implementar diferentes elementos en distintos lenguajes de código.',
                        'En primer lugar, estaba el juego desarrollado en Unity con C#, exportado como aplicación web mediante GitHub Pages.',
                        'Luego, la plataforma web construida en React con TypeScript, conectada a Firebase desde el backend.',
                        'Finalmente, se desarrolló el módulo de integración entre ambos entornos, permitiendo un flujo de datos continuo y consistente.'
                    ],
                    media: [proTaskManager],
                },
                postproduction: {
                    title: "Telemetría",
                    description: [
                        'En la etapa final, el enfoque no fue pulir detalles visuales, sino implementar la telemetría del sistema.',
                        'Esto incluyó las opciones de administrador, reguladas desde Firebase y accesibles únicamente con las credenciales correspondientes (más información en GitHub).',
                        'Este sistema utiliza los datos recolectados para mostrar estadísticas personalizadas del jugador, presentadas como un panel de análisis de datos configurable.'
                    ],
                    media: [postTaskManager],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p3',
        title: 'Cocktail App - Learning to prepare',
        description:
            'Este proyecto fue desarrollado para el semillero de investigación "SENDA" de la Universidad de los Andes, Colombia. ' +
            'Su propósito principal fue construir un relato periodístico expresado a través de una propuesta de código narrativo. ' +
            'El enfoque central era lograr que el usuario experimentara lo mismo que vivieron los sobrevivientes, desde sus distintas perspectivas, en uno de los eventos más trágicos de la historia de Colombia. ' +
            'Está desarrollado en P5.js, un framework de JavaScript orientado a la programación creativa, y apoyado por la librería ml5 para la captura de movimiento en pantalla.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto Inicial",
                    description: [
                        'En síntesis, la tragedia de Villarica es uno de los eventos más violentos y dolorosos de la historia de Colombia.',
                        'Trajo consigo muerte, desplazamiento y abandono, y marca el origen de uno de los grupos armados más peligrosos del país.',
                        'No era un evento que pudiera abordarse a la ligera; requería una investigación profunda y rigurosa.',
                        'Fue necesario comprender los detalles del suceso: quiénes fueron las víctimas, cómo fueron afectadas y cuál fue su experiencia.',
                        'Finalmente, decidí narrar la historia de Ana María Molina, una joven que sobrevivió al bombardeo del pueblo escondiéndose en un hueco bajo su casa.',
                        'La intención era contar su historia con el mayor respeto posible, al mismo tiempo que transmitir el dolor que vivió.',
                        'Durante esta etapa también fue necesario investigar el aspecto técnico: comprender el funcionamiento de la librería P5.js y obtener los recursos necesarios para el proyecto.'
                    ],
                    media: [preCocktail],
                },
                production: {
                    title: "Creando la pieza",
                    description: [
                        'Con un plan sólido, el desarrollo se volvió más directo y estructurado.',
                        'Utilizamos P5.js para construir un sistema de escenas que avanza o retrocede según las decisiones del usuario.',
                        'Todo controlado mediante captura de movimiento, que analiza el video en tiempo real e identifica las manos a partir de una serie de puntos de referencia específicos.',
                        'La única excepción es el botón de inicio, controlado por el mouse como medida de seguridad para evitar activaciones prematuras.'
                    ],
                    media: [proCocktail],
                },
                postproduction: {
                    title: "Presentación",
                    description: [
                        'Para presentar la propuesta creativa, se desarrolló un concepto de presentación sólido y coherente.',
                        'El objetivo era demostrar un ciclo narrativo completo: el inicio, el conflicto y el desenlace.'
                    ],
                    media: [postCocktail],
                },
            },
            sectionFooter: "",
        }
    },
]

export const MobileProjectsEN: Project[] = [
    {
        id: 'p1',
        title: 'Proyecto base - Portafolio web',
        description:
            'Este proyecto fue desarrollado en 2026, tras múltiples versiones previas construidas con diferentes herramientas. Este portafolio fue creado usando React y alojado en GitHub Pages. Refleja mi evolución como programador, así como mi nivel de organización y crecimiento a lo largo de los años.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: IMGPort,
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Web_Framework_portfolio",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        "Mi portafolio digital ha pasado por diversas herramientas y procesos: desde crearlo con plataformas existentes como Adobe Express, hasta programarlo con HTML y CSS vainilla en servidores como Glitch.",
                        "Sin embargo, una vez comprendí cómo desarrollarme como programador frontend y comencé a avanzar con React, logré formalizar un proyecto más sólido.",
                        "Este portafolio no solo sirve como base para mostrar mis otros proyectos, sino también para demostrar mi potencial de aprendizaje y crecimiento personal."
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "El desarrollo actual",
                    description: [
                        'El concepto inicial fue generar la estructura de las páginas navegables, luego el sistema de idiomas y finalmente el contenido en sí.',
                        'Era necesario que toda la información estuviera disponible en ambos idiomas, dado que algunos proyectos contaban únicamente con uno de los dos.',
                        'La idea fue crear interfaces y variables reutilizables dentro del módulo de cada sección, con el fin de permitir el cambio de idioma de forma dinámica.',
                        'De igual forma, el contenido requería su propia versión tanto en inglés como en español; y aunque es una lógica repetitiva, al ser ambas descripciones únicas, resultan necesarias.',
                        'Todo esto también dividido por módulo y por proyecto.',
                        'Aclaración: soy consciente de que estos datos deberían estar en un archivo .env, pero en este caso particular no representa un riesgo de seguridad significativo.'
                    ],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Pulir detalles",
                    description: [
                        "En la etapa final, el enfoque estuvo en organizar el contenido, realizar pruebas y verificar que todo estuviera en su lugar.",
                        "Durante esta fase se agregaron sonidos, se refinaron detalles visuales y se aseguró la coherencia general del proyecto.",
                        "Todo con el objetivo de concluir el proyecto de la mejor manera posible.",
                        "Cabe mencionar que este no es el fin del proyecto, ya que continuará evolucionando conforme mejoren mis habilidades."
                    ],
                    media: [PostPort],
                },
            },
            sectionFooter: "Todo el contenido web y visual es de creación propia, salvo que se indique lo contrario.",
        }
    },
    {
        id: 'p2',
        title: 'Proyecto web - Plataforma de juego',
        description:
            'Esta página web, desarrollada en 2026 como proyecto de clase, fue construida con React como base. ' +
            'Se conecta directamente con una base de datos mediante el servicio Google Firebase, el cual almacena los datos de las partidas y los registra en la tabla de posiciones. ' +
            'También está vinculada con un juego desarrollado en Unity, el cual es una réplica del clásico "Flappy Bird". ' +
            'Cuenta con registro mediante Google, acceso a metadatos a través de un script en Python, y un panel de administrador controlado desde el propio Firebase.',
        isProjectDeployed: true,
        iframeSrc: 'https://pg29juliandsilva.github.io/CloudComputingGameWebApp/',
        imageSrc: '',
        section: '2026',
        hasExternalLinks: true,
        externalLinks: "https://github.com/pg29JulianDSilva/CloudComputingGameWebApp",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: [
                        'Al ser un proyecto de aprendizaje, este no contaba con mucha libertad creativa en cuanto a diseño ni funcionalidad.',
                        'El concepto inicial era simplemente lograr que la página web se conectara con el juego entregado previamente.',
                        'Dentro de este proceso, el objetivo no era solo entender la funcionalidad básica, sino también desarrollar el pensamiento lógico necesario para comprender cómo debían funcionar los sistemas internos.'
                    ],
                    media: [PreWeb],
                },
                production: {
                    title: "La producción en sí",
                    description: [
                        'Durante este proyecto, fue necesario implementar diferentes elementos en distintos lenguajes de código.',
                        'En primer lugar, estaba el juego desarrollado en Unity con C#, exportado como aplicación web mediante GitHub Pages.',
                        'Luego, la plataforma web construida en React con TypeScript, conectada a Firebase desde el backend.',
                        'Finalmente, se desarrolló el módulo de integración entre ambos entornos, permitiendo un flujo de datos continuo y consistente.'
                    ],
                    media: [ProWeb],
                },
                postproduction: {
                    title: "Telemetría",
                    description: [
                        'En la etapa final, el enfoque no fue pulir detalles visuales, sino implementar la telemetría del sistema.',
                        'Esto incluyó las opciones de administrador, reguladas desde Firebase y accesibles únicamente con las credenciales correspondientes (más información en GitHub).',
                        'Este sistema utiliza los datos recolectados para mostrar estadísticas personalizadas del jugador, presentadas como un panel de análisis de datos configurable.'
                    ],
                    media: [PostWeb],
                },
            },
            sectionFooter: "",
        }
    },
    {
        id: 'p3',
        title: 'Villarica - P5.js',
        description:
            'Este proyecto fue desarrollado para el semillero de investigación "SENDA" de la Universidad de los Andes, Colombia. ' +
            'Su propósito principal fue construir un relato periodístico expresado a través de una propuesta de código narrativo. ' +
            'El enfoque central era lograr que el usuario experimentara lo mismo que vivieron los sobrevivientes, desde sus distintas perspectivas, en uno de los eventos más trágicos de la historia de Colombia. ' +
            'Está desarrollado en P5.js, un framework de JavaScript orientado a la programación creativa, y apoyado por la librería ml5 para la captura de movimiento en pantalla.',
        isProjectDeployed: true,
        iframeSrc: 'https://editor.p5js.org/neon.d.silvam/full/Ob_nfUxlD',
        imageSrc: '',
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://editor.p5js.org/neon.d.silvam/sketches/Ob_nfUxlD",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto Inicial",
                    description: [
                        'En síntesis, la tragedia de Villarica es uno de los eventos más violentos y dolorosos de la historia de Colombia.',
                        'Trajo consigo muerte, desplazamiento y abandono, y marca el origen de uno de los grupos armados más peligrosos del país.',
                        'No era un evento que pudiera abordarse a la ligera; requería una investigación profunda y rigurosa.',
                        'Fue necesario comprender los detalles del suceso: quiénes fueron las víctimas, cómo fueron afectadas y cuál fue su experiencia.',
                        'Finalmente, decidí narrar la historia de Ana María Molina, una joven que sobrevivió al bombardeo del pueblo escondiéndose en un hueco bajo su casa.',
                        'La intención era contar su historia con el mayor respeto posible, al mismo tiempo que transmitir el dolor que vivió.',
                        'Durante esta etapa también fue necesario investigar el aspecto técnico: comprender el funcionamiento de la librería P5.js y obtener los recursos necesarios para el proyecto.'
                    ],
                    media: [PreVilla1, PreVilla4, PreVilla2, PreVilla3],
                },
                production: {
                    title: "Creando la pieza",
                    description: [
                        'Con un plan sólido, el desarrollo se volvió más directo y estructurado.',
                        'Utilizamos P5.js para construir un sistema de escenas que avanza o retrocede según las decisiones del usuario.',
                        'Todo controlado mediante captura de movimiento, que analiza el video en tiempo real e identifica las manos a partir de una serie de puntos de referencia específicos.',
                        'La única excepción es el botón de inicio, controlado por el mouse como medida de seguridad para evitar activaciones prematuras.'
                    ],
                    media: [ProVilla1, ProVilla2],
                },
                postproduction: {
                    title: "Presentación",
                    description: [
                        'Para presentar la propuesta creativa, se desarrolló un concepto de presentación sólido y coherente.',
                        'El objetivo era demostrar un ciclo narrativo completo: el inicio, el conflicto y el desenlace.'
                    ],
                    media: [PostVilla1, PostVilla2],
                },
            },
            sectionFooter: "",
        }
    },
]
