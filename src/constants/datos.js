export const datos = {
    personales : {
        nombre: "Saúl",
        apellidos: "García Calvo",
        nickname: "@sauliyo15",
        descripcion: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
        urlImagen: "/imagenes/foto_personal.jpg"
    },
    cursos: [
        {
            id: "gsi",
            nombre: "Grado en Sistemas de Información",
            descripcion: "Antigua Ingeniería Técnica en Informática de Gestión",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            edicion: "2019 - 2023",
            modalidad: "PRESENCIAL",
            entidad: "Universidad de Alcalá de Henares",
            duracion: "4 cursos",
            urlImagen: "/imagenes/uah.svg",
            enlace: "/cursos/gsi"
        },
        {
            id: "frontend",
            nombre: "Frontend",
            descripcion: "Desarrollo Frontend con HTML, CSS y JavaScript",
            descripcionLarga: "Frontend es la parte de un sitio web que los usuarios ven y con la que interactúan. Involucra diseño, interfaz de usuario y programación con tecnologías como HTML, CSS y JavaScript.",
            edicion: "3ª Edición - 2023",
            modalidad: "ONLINE",
            entidad: "Universidad Politécnica de Madrid",
            duracion: "56 horas",
            urlImagen: "/imagenes/frontend.png",
            enlace: "/cursos/frontend",
            urlDiploma: "/imagenes/diplomas/frontend.PNG",
            temario: [
                "Introducción a HTML Y CSS, estructura, herencia",
                "Menús, Estructura CSS, texto, fuentes, imágenes y multimedia",
                "Intro ES6+, let, función, VSCode, DOM, bool, if, bucles, arrays",
                "Eventos, objetos, arrays, MVC, JSON, boolean y Storage API",
                "Tipos y clases, herencia, number, multi-asignación, Spread/Rest",
                "Strings, iteradores y bucles, programación funcional y regexp",
                "Excepciones, promesas, Async/Await, HTTP, AJAX y JQuery",
                "Arq. información, UX, wireframes, iconos, SEO, SASS. @Media",
                "Transiciones, animaciones CSS, SVG, interacción gestual",
                "PWAs. Desarrollando aplicaciones para Android/IOS/Escritorio"
            ],
            tecnologias: [
                {
                    nombre: "HTML5",
                    urlIcono: "/imagenes/tecnologias/html5.webp"
                },
                {
                    nombre: "CSS3",
                    urlIcono: "/imagenes/tecnologias/css3.webp"
                },
                {
                    nombre: "JAVASCRIPT",
                    urlIcono: "/imagenes/tecnologias/javascript.webp"
                },
                {
                    nombre: "JSON",
                    urlIcono: "/imagenes/tecnologias/json.png"
                },
                
                {
                    nombre: "JQUERY",
                    urlIcono: "/imagenes/tecnologias/jquery.png"
                },
                
                {
                    nombre: "AJAX",
                    urlIcono: "/imagenes/tecnologias/ajax.png"
                },
                {
                    nombre: "PWA",
                    urlIcono: "/imagenes/tecnologias/pwa.png"
                }
            ],
            proyectos: {
                introduccion: "Además de los ejercicios simples realizados durante los módulos del curso, como resultado y recopilación de todos los conocimientos adquiridos se encuentra el siguiente proyecto.",
                listado: [
                    {
                        nombre: "Mis Películas Favoritas",
                        descripcion: "Pequeña PWA (aplicación web progresiva) que permite el CRUD completo de películas, siguiendo el patrón de diseño MVC y utilizando como endpoint la API de la plataforma JsonStorage App. Desplegada en el servidor de desarrollo y hosting Glitch.",
                        enlace: "https://sauliyo15peliculascompleto.glitch.me",
                        urlImagen: "/imagenes/mispeliculasfavoritas.png",
                        target_blank: true,
                    }
                ]
            }
        },
        {
            id: "gitgithub",
            nombre: "Git y GitHub",
            descripcion: "Gestión de proyectos Software con Git y GitHub",
            descripcionLarga: "Git es un sistema de control de versiones para rastrear cambios en el código. GitHub es una plataforma en la nube que utiliza Git para alojar y colaborar en proyectos de desarrollo de software.",
            edicion: "3ª Edición - 2023",
            modalidad: "ONLINE",
            entidad: "Universidad Politécnica de Madrid",
            duracion: "56 horas",
            urlImagen: "/imagenes/gitgithub.png",
            enlace: "/cursos/gitgithub",
            urlDiploma: "/imagenes/diplomas/gitgithub.PNG",
            temario: [
                "Introducción a UNIX y a su sistema de archivos",
                "La interfaz de usuario de UNIX",
                "Repositorios locales y remotos, directorio de trabajo y commit",
                "Ramas, grafo de commits e intregración de ramas con merge",
                "Integrar ramas con rebase, .gitignore, remote, arrancar proyectos",
                "Colaborar utilizando Github",
                "Contribuir a un repositorio de terceros con pull-request"
            ],
            tecnologias: [
                {
                    nombre: "LINUX",
                    urlIcono: "/imagenes/tecnologias/linux.png"
                },
                {
                    nombre: "UNIX",
                    urlIcono: "/imagenes/tecnologias/unix.png"
                },
                {
                    nombre: "GIT",
                    urlIcono: "/imagenes/tecnologias/git.png"
                },
                {
                    nombre: "GITHUB",
                    urlIcono: "/imagenes/tecnologias/github.png"
                }
            ]
        },
        {
            id: "backend",
            nombre: "Backend",
            descripcion: "Desarrollo Backend con Node.js, Expres y BB.DD",
            descripcionLarga: "Backend es la parte oculta de un sitio web que maneja la lógica y la base de datos. Utiliza tecnologías como Python o Java para garantizar el funcionamiento y la seguridad. Su función es facilitar la interacción entre el usuario y la infraestructura del servidor.",
            edicion:  "3ª Edición - 2023",
            modalidad: "ONLINE",
            entidad: "Universidad Politécnica de Madrid",
            duracion: "56 horas",
            urlImagen: "/imagenes/backend.png",
            enlace: "/cursos/backend",
            urlDiploma: "/imagenes/diplomas/backend.PNG",
            temario: [
                "Introducción a Node.js, módulos, paquetes npm, eventos y ficheros",
                "Introducción a las BBDDS, SGBDR, ORM Sequelize, modelos y tablas",
                "Modelos de datos con relaciones entre tablas, relaciones",
                "Nivel de transporte, interfaz de sockets y ejemplos",
                "Introducción a la plataforma Web moderno HTTP y REST",
                "Introducción a Express.js y sus Middlewares, MVC",
                "Prueba de programas y entornos de test para Node.js",
                "Websockets, protocolo y aplicaciones"
            ],
            tecnologias: [
                {
                    nombre: "NODEJS",
                    urlIcono: "/imagenes/tecnologias/nodejs.png"
                },
                {
                    nombre: "NPM",
                    urlIcono: "/imagenes/tecnologias/npm.png"
                },
                {
                    nombre: "SQLITE",
                    urlIcono: "/imagenes/tecnologias/sqlite.png"
                },
                {
                    nombre: "SEQUELIZE",
                    urlIcono: "/imagenes/tecnologias/sequelize.png"
                },
                {
                    nombre: "EXPRESSJS",
                    urlIcono: "/imagenes/tecnologias/expressjs.png"
                }
            ],
            proyectos: {
                introduccion: "Además de las diferentes prácticas realizadas durante los módulos del curso (cuyo código se encuentra disponible en GitHub), como resultado y recopilación de todos los conocimientos adquiridos se destaca el siguiente proyecto.",
                listado: [
                    {
                        nombre: "Quizzes",
                        descripcion: "Pequeña API que permite el CRUD completo de una aplicación de juegos. A través de sus MWs y controladores se llevan a cabo las acciones adecuadas con la Base de Datos en SQLIite, y devolviendo las respuestas en formato HTTP para permitir la interacción desde el navegador. Desplegada en el servidor de desarrollo y hosting Glitch.",
                        enlace: "https://sauliyo15quizzescompleto.glitch.me",
                        urlImagen: "/imagenes/quiz.jpg",
                        target_blank: true,
                    }
                ]
            }
        },
        {
            id: "fullstack",
            nombre: "Full Stack",
            descripcion: "Desarrollo de un proyecto Full Stack con JavaScript",
            descripcionLarga: "Fullstack implica la capacidad de desarrollar tanto el frontend como el backend de una aplicación, abarcando la interfaz de usuario y la lógica del servidor. Es un enfoque integral que ofrece una visión completa del desarrollo de software.",
            edicion:  "3ª Edición - 2023",
            modalidad: "ONLINE",
            entidad: "Universidad Politécnica de Madrid",
            duracion: "64 horas",
            urlImagen: "/imagenes/fullstack.jpg",
            enlace: "/cursos/fullstack",
            urlDiploma: "/imagenes/diplomas/fullstack.PNG",
            temario: [
                "Introducción al Proyecto Quiz y a Express Generator",
                "Añadir Home, Favicon, Author, Layout, Reponsive y Cookie Consent",
                "Recurso Quizzes - Tabla y MVC",
                "Paginación, búsqueda, sesiones, mensajes flash, ruta de restauración y testing",
                "Recurso Users, autenticación, Passport y OAuth2",
                "HTTPS, roles, autores de Quizzes y Mis Quizzes"
            ],
            tecnologias: [
                {
                    nombre: "NODEJS",
                    urlIcono: "/imagenes/tecnologias/nodejs.png"
                },
                {
                    nombre: "EXPRESSJS",
                    urlIcono: "/imagenes/tecnologias/expressjs.png"
                },
                {
                    nombre: "EJS",
                    urlIcono: "/imagenes/tecnologias/ejs.png"
                },
                {
                    nombre: "MVC",
                    urlIcono: "/imagenes/tecnologias/mvc.png"
                },
                {
                    nombre: "OAUTH2",
                    urlIcono: "/imagenes/tecnologias/oauth2.png"
                },
                {
                    nombre: "HTTPS",
                    urlIcono: "/imagenes/tecnologias/https.png"
                }
            ]
        },
        {
            id: "basesdedatos",
            nombre: "Bases de Datos Relacionales y No Relacionales",
            descripcion: "Conceptos, diseño y aplicación a entornos web",
            descripcionLarga: "Las bases de datos relacionales utilizan tablas con relaciones predefinidas, mientras que las no relacionales (NoSQL) permiten una estructura más flexible y escalabilidad horizontal sin un esquema fijo.",
            edicion: "2ª Edición - 2023",
            modalidad: "ONLINE",
            entidad: "Universidad Politécnica de Madrid",
            duracion: "60 horas",
            urlImagen: "/imagenes/basededatos.png",
            enlace: "/cursos/basesdedatos",
            urlDiploma: "/imagenes/diplomas/basesdatos.PNG",
            temario: [
                "Modelado Conceptual y Modelos de Datos Semánticos",
                "Modelado de Datos Relacional y Bases de Datos Relacionales",
                "Diseño de Bases de Datos Relacionales",
                "Lenguaje SQL y Sistemas de Gestión de Bases de Datos Relacionales",
                "Aplicaciones y Servicios con Bases de Datos Relacionales",
                "Introducción a NoSQL",
                "Soluciones NoSQL",
                "Diseño del esquema de datos",
                "Shell de acceso y agregación",
                "Replicación, particionamiento y desarrollo de aplicaciones con NoSQL"
            ],
            tecnologias: [
                {
                    nombre: "RELACIONAL",
                    urlIcono: "/imagenes/tecnologias/modelorelacional.webp"
                },
                {
                    nombre: "SQL",
                    urlIcono: "/imagenes/tecnologias/sql.png"
                },
                {
                    nombre: "MYSQL",
                    urlIcono: "/imagenes/tecnologias/mysql.png"
                },
                {
                    nombre: "SEQUELIZE",
                    urlIcono: "/imagenes/tecnologias/sequelize.png"
                },
                {
                    nombre: "NOSQL",
                    urlIcono: "/imagenes/tecnologias/nosql.webp"
                },
                {
                    nombre: "JSON",
                    urlIcono: "/imagenes/tecnologias/json.png"
                },
                {
                    nombre: "MONGODB",
                    urlIcono: "/imagenes/tecnologias/mongodb.png"
                },
            ]
        },
        {
            id: "react",
            nombre: "React y React Native",
            descripcion: "Desarrolo de aplicaciones con React y React Native",
            descripcionLarga: "React es una biblioteca de JavaScript para construir interfaces web interactivas, mientras que React Native es un marco que utiliza React para desarrollar aplicaciones móviles nativas.",
            edicion: "2ª Edición - 2023",
            modalidad: "ONLINE",
            entidad: "Universidad Politécnica de Madrid",
            duracion: "75 horas",
            urlImagen: "/imagenes/react.png",
            enlace: "/cursos/react",
            urlDiploma: "/imagenes/diplomas/react.PNG",
            temario:  [
                "Bases del desarrollo de aplicaciones web",
                "Conceptos principales de React y JSX",
                "Componentes y su ciclo de vida. Composición de componentes. Hooks",
                "Implementando un buscador de usuarios",
                "Implementando un tres en raya",
                "Context y Rutas",
                "Añadiendo Redux, completando la arquitectura",
                "React Native. Introducción, conceptos básicos, componentes y APIs",
                "React Native. Navegadores, componentes nativos y conceptos avanzados"
            ],
            tecnologias: [
                {
                    nombre: "REACT",
                    urlIcono: "/imagenes/tecnologias/react.png"
                },
                {
                    nombre: "REDUX",
                    urlIcono: "/imagenes/tecnologias/redux.png"
                },
                {
                    nombre: "JAVASCRIPT",
                    urlIcono: "/imagenes/tecnologias/javascript.webp"
                },
                {
                    nombre: "BOOTSTRAP",
                    urlIcono: "/imagenes/tecnologias/bootstrap.png"
                },
                {
                    nombre: "REACTNATIVE",
                    urlIcono: "/imagenes/tecnologias/reactnative.png"
                },
            ]
        },
        {
            id: "java",
            nombre: "Java Web - IFCT034PO",
            descripcion: "Desarrollo de aplicaciones web con Java",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            edicion: "Noviembre - Diciembre 2023",
            modalidad: "ONLINE",
            entidad: "Servicio Público de Empleo Estatal",
            duracion: "120 horas",
            urlImagen: "/imagenes/java.png",
            enlace: "/cursos/java",
            urlDiploma: "/imagenes/diplomas/java.PNG",
            temario: [
                "Programación Orientada a Objetos (POO)",
                "Aplicaciones Web con Java",
                "Java Struts 2.0 Avanzado",
                "Spring MVC",
                "Hibernate"
            ],
            tecnologias: [
                {
                    nombre: "JAVA",
                    urlIcono: "/imagenes/tecnologias/java.png"
                },
                {
                    nombre: "JSP",
                    urlIcono: "/imagenes/tecnologias/jsp.webp"
                },
                {
                    nombre: "STRUTS2",
                    urlIcono: "/imagenes/tecnologias/struts2.png"
                },
                {
                    nombre: "SPRINGMVC",
                    urlIcono: "/imagenes/tecnologias/springmvc.png"
                },
                {
                    nombre: "HIBERNATE",
                    urlIcono: "/imagenes/tecnologias/hibernate.png"
                },
            ]
        }
    ],
    proyectos: [
        {
            id: "nosvamosdeencierro",
            nombre: "Nos Vamos De Encierro",
            descripcion: "Las aplicaciones de referencia de los festejos taurinos",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/nvde.jpg",
            enlace: "/proyectos/nosvamosdeencierro"
        },
        {
            id: "misdnis",
            nombre: "Mis DNIs",
            descripcion: "Almacenamiento de datos personales",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/misdnis.webp",
            enlace: "/proyectos/misdnis"
        },
        {
            id: "littlespace2",
            nombre: "Little Space 2",
            descripcion: "Clásico juego de arcade del espacio",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/littlespace.webp",
            enlace: "/proyectos/littlespace2"
        },
        {
            id: "eltiempo",
            nombre: "El Tiempo",
            descripcion: "Aplicación web de datos meteorológicos",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/eltiempo.png",
            enlace: "https://eltiempo.glitch.me/"
        },
        {
            id: "juegos2023",
            nombre: "Juegos 2023",
            descripcion: "Sitio web de juegos de preguntas y respuestas",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/juegos2023.png",
            enlace: "https://sauliyo15juegosfullstack.glitch.me/"
        },
        {
            id: "buscadorusuarios",
            nombre: "Buscador de Usuarios",
            descripcion: "Web que simula un buscador de usuarios",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/buscadorusuarios.png",
            enlace: "https://sauliyo15buscadorusuarios.glitch.me/"

        },
        {
            id: "paginagoogleplay",
            nombre: "Todas mis aplicaciones móviles",
            descripcion: "Accede a mi página de Google Play",
            descripcionLarga: "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
            urlImagen: "/imagenes/android.png",
            enlace: "https://play.google.com/store/apps/developer?id=Sauliyo15",
            target_blank: true,
        }
    ],
    contacto: [
        {
            nombre: "Correo electrónico",
            descripcion: "gc.saul.7@gmail.com",
            urlImagen: "/imagenes/email.png",
            enlace: "mailto:gc.saul.7@gmail.com"
        },
        {
            nombre: "Teléfono y Whatsapp",
            descripcion: "665 69 79 48",
            urlImagen: "/imagenes/whatsapp.png",
            enlace: "https://wa.me/665697948",
            target_blank: true,
        },
        {
            nombre: "Instagram",
            descripcion: "@sauliyo15",
            urlImagen: "/imagenes/instagram.png",
            enlace: "https://www.instagram.com/sauliyo15/",
            target_blank: true,
        },
        {
            nombre: "GitHub",
            descripcion: "https://github.com/sauliyo15",
            urlImagen: "/imagenes/github.png",
            enlace: "https://github.com/sauliyo15",
            target_blank: true,
        }
    ],
}