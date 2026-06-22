import type {Project} from '../types'

//Same portfolio
import IMGPort from '../assets/IMGPortfolio/Base.png'
import PrePort1 from '../assets/IMGPortfolio/preproduction1.png'
import PrePort2 from '../assets/IMGPortfolio/preproduction2.png'
import ProPort from '../assets/IMGPortfolio/production.png'
import PostPort from '../assets/IMGPortfolio/postproduction.png'

//Web Experiment

//Villarica


export const WebProjectsES: Project[] = [
    {
        id: 'p1',
        title: 'Projecto base - Portafolio web',
        description:
            'Este es un projecto desarrollado en 2026, despues de multiples versiones del mismo usando diferentes herramientas. Este portafolio fue creado usando react y hosteado desde github pages. Este projecto demuestra mi evolución como programador, ademas de mi nivel de organización a lo largo de los años.',
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
                    description: ["Mi portafolio digital ha pasado por diferentes herramientas y procesos, desde hacerlo con programas ya exsistentes como Adobe Express, hasta programarlo usando HTML y CSS Vanila en servidores como el de Glitch.",
                        "Sin embargo, una vez entendi como desarrollarme como programador frontend y empezar a avanzar usando react, logre impulsarme para formalizar un projecto mas formal.",
                        "Esto no solamente como base para mostrar mis otros projectos, sino para demostrar mi potencial de aprendizaje y de crecimiento personal."
                        ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "El desarrollo actual",
                    description: ['El concepto primero era generar la base de las paginas navegables, luego el sistema del lenguaje y finalmente el contenido en si.',
                    'Tenia que ser capaz de tener toda la información en abmos idiomas, dado a que algunos projectos unicamente tenian uno de los dos.',
                    'La idea era generar interfases y variables que despues se pudieran usar dentro del modulo de cada sección con el fin de pudieran cambiar de idioma dinamicamente.',
                    'De igual forma, el contenido necesitaba su propia version tanto en ingles como en español y aunque es una logica repetitiva, al ser ambas descripciones unicas, son necesarias.',
                    'Esto tambien dividido por modulo y los differentes projectos.',
                    'Disclaimer: Se que estos datos deberian estar en un archivo .env, pero en este caso no es de tanta inseguridad subir estos datos.'],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Pulir detalles",
                    description: ["Ya dentro del final, es mas de organizar contenido, de hacer pruebas y de ver que todo se encuentre dentro de su lugar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", 
                        "Todo con el objetivo de concluir el projecto de la mejor manera possible",
                    'Esto sin mensionar que, este no es el fin del projecto; ya que lo seguire mejorando con base en que mejore mis habilidades.'],
                    media: [PostPort],
                },
            },
            sectionFooter: "Todo el contenido del web y visual es propio, a menos de que este sea declarado que no.",
        }
    },
    {
        id: 'p2',
        title: 'Projecto web - Plataforma de juego',
        description:
            'Esta pagina web hecha en 2016 fue desarrollado como un projecto de clase usando react como base para una pagina web.' +
            'Este se conecta directamente com una base de datos, usando el serivicio de Google Firebase, el cual guarda los datos de los jugados y lo registra en la tabla de posiciones.' +
            'Tambien esta conectado con juegop base de unity, el cual es una replcia del juego "Flappy Bird".' +
            'Este dispone de registo con google, aceso de metadatos vinculado con un archivo de python, ademas de un pase de administrado, controlado desde el mismo firebase.',
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
                    description: ['Al ser un projecto de aprendizaje, este no tiene mucha libertad creativa de diseño ni de funcionalidad.'
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "El desarrollo actual",
                    description: ['El concepto primero era generar la base de las paginas navegables, luego el sistema del lenguaje y finalmente el contenido en si.',
                        'Tenia que ser capaz de tener toda la información en abmos idiomas, dado a que algunos projectos unicamente tenian uno de los dos.',
                        'La idea era generar interfases y variables que despues se pudieran usar dentro del modulo de cada sección con el fin de pudieran cambiar de idioma dinamicamente.',
                        'De igual forma, el contenido necesitaba su propia version tanto en ingles como en español y aunque es una logica repetitiva, al ser ambas descripciones unicas, son necesarias.',
                        'Esto tambien dividido por modulo y los differentes projectos.'],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Pulir detalles",
                    description: ["Ya dentro del final, es mas de organizar contenido, de hacer pruebas y de ver que todo se encuentre dentro de su lugar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [PostPort],
                },
            },
            sectionFooter: "Todo el contenido del web y visual es propio, a menos de que este sea declarado que no.",
        }
    },
    {
        id: 'p3',
        title: 'Projecto base - Portafolio web',
        description:
            'Este es un projecto desarrollado en 2026, despues de multiples versiones del mismo usando diferentes herramientas. Este portafolio fue creado usando react y hosteado desde github pages. Este projecto demuestra mi evolución como programador, ademas de mi nivel de organización a lo largo de los años.',
        isProjectDeployed: false,
        iframeSrc: '',
        imageSrc: IMGPort,
        section: '2025',
        hasExternalLinks: true,
        externalLinks: "https://github.com/neondsilvam/Web_Framework_portfolio",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Idea Base",
                    description: ["Mi portafolio digital ha pasado por diferentes herramientas y procesos, desde hacerlo con programas ya exsistentes como Adobe Express, hasta programarlo usando HTML y CSS Vanila en servidores como el de Glitch.",
                        "Sin embargo, una vez entendi como desarrollarme como programador frontend y empezar a avanzar usando react, logre impulsarme para formalizar un projecto mas formal.",
                        "Esto no solamente como base para mostrar mis otros projectos, sino para demostrar mi potencial de aprendizaje y de crecimiento personal."
                    ],
                    media: [PrePort2, PrePort1],
                },
                production: {
                    title: "El desarrollo actual",
                    description: ['El concepto primero era generar la base de las paginas navegables, luego el sistema del lenguaje y finalmente el contenido en si.',
                        'Tenia que ser capaz de tener toda la información en abmos idiomas, dado a que algunos projectos unicamente tenian uno de los dos.',
                        'La idea era generar interfases y variables que despues se pudieran usar dentro del modulo de cada sección con el fin de pudieran cambiar de idioma dinamicamente.',
                        'De igual forma, el contenido necesitaba su propia version tanto en ingles como en español y aunque es una logica repetitiva, al ser ambas descripciones unicas, son necesarias.',
                        'Esto tambien dividido por modulo y los differentes projectos.'],
                    media: [ProPort],
                },
                postproduction: {
                    title: "Pulir detalles",
                    description: ["Ya dentro del final, es mas de organizar contenido, de hacer pruebas y de ver que todo se encuentre dentro de su lugar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [PostPort],
                },
            },
            sectionFooter: "Todo el contenido del web y visual es propio, a menos de que este sea declarado que no.",
        }
    },
    
]

export const WebProjectsEN: Project[] = [
    {
        id: 'p1',
        title: 'La Familia Amarilla sin derechos de autor',
        description:
            'Este proyecto, inspirado en el formato "Couch Gag", fusiona las introducciones de dos series de la antigua cadena FOX. Fue realizado únicamente con fines académicos y sin fines comerciales.\n' +
            '\n' +
            'La animación fue desarrollada a lo largo de dos semanas con Adobe Photoshop y Adobe After Effects, como parte de un ejercicio práctico de animación y experimentación creativa.',
        isProjectDeployed: false,
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        imageSrc: "",
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del projecto",
                    description: ["Este es un projecto de 2 semanas, el cual tenia el desafio de combinar dos intros de series conocidas. Debido a este, el desarrollo de este elemento se concentra en experimentar con la animacion, mostrando el potencial visual.",
                        "Mi objetivo principal era intentar aplicar el diseño original del estilo artistico de 'Los Simpson' al mismo tiempo que poder concervar el rimto accelerado de modern family.",
                        'Despues de una lluvia de idea, pude desarrollar mas a fondo el concepto para poder empezar la animación', 'Referencias:',
                        'Groening, M. (Creador). (1989–presente). The Simpsons [Serie de televisión].',
                        'Levitan, S., & Lloyd, C. (Creadores). (2009–2020). Modern Family [Serie de televisión].'],
                    media: [],
                },
                production: {
                    title: "La producción actual",
                    description: ["El processo en si se divido en tres secciones: creación de fondos, animación tradicional y la animación vectorial.",
                        'En primera instancia, la creación de fondos, la cual se refiere a todas las escenas que despues se animarian de forma vectorial con Adobe After Effects. Esto incluyendo las imagenes del abuelo y de las tias.',
                        'Dentro de la animación vectorial, me enfoque en un estilo "In between", donde sub dividi cada frame a la mitad, con el fin de poder hacer el movimiento de la familia sentandose lo mas fluido posible.',
                        'Finalmente, la animación vectorial une los clips animados tradicionalmente con loas imagenes estaticas de los fondos. Al mismo tiempo, se configura la linea de tiempo para que esta tengan ese alejamiento progresivo. Para este proceso era importante que las imagenes fueran vectores graficos, para que no cambiara la calidad de la misma durante el proceso.'],
                    media: [],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro del desarrollo del projecto, no se genera unicamente unicamente la animación, sino que la totalidad de la hisotira que se quiere contar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    }
]

export const MobileProjectsES: Project[] = [
    {
        id: 'p1',
        title: 'La Familia Amarilla sin derechos de autor',
        description:
            'Este proyecto, inspirado en el formato "Couch Gag", fusiona las introducciones de dos series de la antigua cadena FOX. Fue realizado únicamente con fines académicos y sin fines comerciales.\n' +
            '\n' +
            'La animación fue desarrollada a lo largo de dos semanas con Adobe Photoshop y Adobe After Effects, como parte de un ejercicio práctico de animación y experimentación creativa.',
        isProjectDeployed: false,
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        imageSrc: "",
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del projecto",
                    description: ["Este es un projecto de 2 semanas, el cual tenia el desafio de combinar dos intros de series conocidas. Debido a este, el desarrollo de este elemento se concentra en experimentar con la animacion, mostrando el potencial visual.",
                        "Mi objetivo principal era intentar aplicar el diseño original del estilo artistico de 'Los Simpson' al mismo tiempo que poder concervar el rimto accelerado de modern family.",
                        'Despues de una lluvia de idea, pude desarrollar mas a fondo el concepto para poder empezar la animación', 'Referencias:',
                        'Groening, M. (Creador). (1989–presente). The Simpsons [Serie de televisión].',
                        'Levitan, S., & Lloyd, C. (Creadores). (2009–2020). Modern Family [Serie de televisión].'],
                    media: [],
                },
                production: {
                    title: "La producción actual",
                    description: ["El processo en si se divido en tres secciones: creación de fondos, animación tradicional y la animación vectorial.",
                        'En primera instancia, la creación de fondos, la cual se refiere a todas las escenas que despues se animarian de forma vectorial con Adobe After Effects. Esto incluyendo las imagenes del abuelo y de las tias.' ,
                        'Dentro de la animación vectorial, me enfoque en un estilo "In between", donde sub dividi cada frame a la mitad, con el fin de poder hacer el movimiento de la familia sentandose lo mas fluido posible.',
                        'Finalmente, la animación vectorial une los clips animados tradicionalmente con loas imagenes estaticas de los fondos. Al mismo tiempo, se configura la linea de tiempo para que esta tengan ese alejamiento progresivo. Para este proceso era importante que las imagenes fueran vectores graficos, para que no cambiara la calidad de la misma durante el proceso.'],
                    media: [],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro del desarrollo del projecto, no se genera unicamente unicamente la animación, sino que la totalidad de la hisotira que se quiere contar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    },

]

export const MobileProjectsEN: Project[] = [
    {
        id: 'p1',
        title: 'La Familia Amarilla sin derechos de autor',
        description:
            'Este proyecto, inspirado en el formato "Couch Gag", fusiona las introducciones de dos series de la antigua cadena FOX. Fue realizado únicamente con fines académicos y sin fines comerciales.\n' +
            '\n' +
            'La animación fue desarrollada a lo largo de dos semanas con Adobe Photoshop y Adobe After Effects, como parte de un ejercicio práctico de animación y experimentación creativa.',
        isProjectDeployed: false,
        iframeSrc: 'https://www.youtube.com/embed/ffGX5rWSqyM',
        imageSrc: "",
        section: '2025',
        hasExternalLinks: false,
        externalLinks: "",
        isShowingTheProcess: false,
        process: {
            sections: {
                preproduction: {
                    title: "Concepto del projecto",
                    description: ["Este es un projecto de 2 semanas, el cual tenia el desafio de combinar dos intros de series conocidas. Debido a este, el desarrollo de este elemento se concentra en experimentar con la animacion, mostrando el potencial visual.",
                        "Mi objetivo principal era intentar aplicar el diseño original del estilo artistico de 'Los Simpson' al mismo tiempo que poder concervar el rimto accelerado de modern family.",
                        'Despues de una lluvia de idea, pude desarrollar mas a fondo el concepto para poder empezar la animación', 'Referencias:',
                        'Groening, M. (Creador). (1989–presente). The Simpsons [Serie de televisión].',
                        'Levitan, S., & Lloyd, C. (Creadores). (2009–2020). Modern Family [Serie de televisión].'],
                    media: [],
                },
                production: {
                    title: "La producción actual",
                    description: ["El processo en si se divido en tres secciones: creación de fondos, animación tradicional y la animación vectorial.",
                        'En primera instancia, la creación de fondos, la cual se refiere a todas las escenas que despues se animarian de forma vectorial con Adobe After Effects. Esto incluyendo las imagenes del abuelo y de las tias.',
                        'Dentro de la animación vectorial, me enfoque en un estilo "In between", donde sub dividi cada frame a la mitad, con el fin de poder hacer el movimiento de la familia sentandose lo mas fluido posible.',
                        'Finalmente, la animación vectorial une los clips animados tradicionalmente con loas imagenes estaticas de los fondos. Al mismo tiempo, se configura la linea de tiempo para que esta tengan ese alejamiento progresivo. Para este proceso era importante que las imagenes fueran vectores graficos, para que no cambiara la calidad de la misma durante el proceso.'],
                    media: [],
                },
                postproduction: {
                    title: "Detalles finales",
                    description: ["Dentro del desarrollo del projecto, no se genera unicamente unicamente la animación, sino que la totalidad de la hisotira que se quiere contar.",
                        "Por ende, durante esta etapa se agregan sonidos, se pullen detalles, se revisa que todo este en su lugar.", "Todo con el objetivo de concluir el projecto de la mejor manera possible"],
                    media: [],
                },
            },
            sectionFooter: "Este projecto no infrinje ningun derecho de autor y le da el credito del concepto original a sus respectivos autores.",
        }
    }
]
