export const datos = {
  personales: {
    nombre: "Saúl",
    apellidos: "García Calvo",
    nickname: "@sauliyo15",
    descripcion:
      "Soy un apasionado de la programación, con un enfoque especial en el desarrollo de aplicaciones móviles. Disfruto trabajando con bases de datos para garantizar un rendimiento óptimo en mis proyectos. Siempre estoy buscando oportunidades para aprender y crecer en este emocionante campo de la tecnología.",
    urlImagen: "/imagenes/foto_personal.jpg",
  },
  cursos: [
    {
      id: "gsi",
      nombre: "Grado en Sistemas de Información",
      descripcion: "Antigua Ingeniería Técnica en Informática de Gestión",
      descripcionLarga:
        "En el año 2008, continue mi travesía académica con la ya extinta Ingeniería Técnica en Informática de Gestión. Con la irrupción del Plan Bolonia en 2009, la universidad nos instó a realizar la transición al Grado en Sistemas de Información, un proceso que, aunque demandó un esfuerzo intenso y personal significativo, resultó en logros académicos satisfactorios. Sin embargo, enfrenté la complejidad de ser parte de la primera promoción de este nuevo grado, experimentando desafíos inherentes a la novedad de los contenidos y la estructura del programa, lo que añadió un matiz de dificultad a mi experiencia educativa.",
      edicion: "2009 - 2013",
      modalidad: "PRESENCIAL",
      entidad: "Universidad de Alcalá de Henares",
      duracion: "4 cursos",
      urlImagen: "/imagenes/uah.svg",
      enlace: "/cursos/gsi",
      urlDiploma: "/imagenes/diplomas/gsi.PNG",
      cursos: [
        {
          nombre: "Primer curso",
          descripcion:
            "Fundamentos de programación, Gestión de equipos y personas, Programación, Sistemas operativos, Estadística, etc",
          urlImagen: "/imagenes/numeros/numero-1.png",
        },
        {
          nombre: "Segundo curso",
          descripcion:
            "Bases de datos, Estructuras de datos, Ingeniería del software, Fundamentos de los sistemas de información, Redes, etc",
          urlImagen: "/imagenes/numeros/numero-2.png",
        },
        {
          nombre: "Tercer curso",
          descripcion:
            "Bases de datos avanzadas, Desarrollo con tecnologías emergentes, Ingeniería del software avanzada, Organización de la información y proyectos, etc",
          urlImagen: "/imagenes/numeros/numero-3.png",
        },
        {
          nombre: "Cuarto y último curso",
          descripcion:
            "Arquitectura y diseño de sistemas web, Computación ubicua, Seguridad en sistemas distribuidos, Fundamentos del comercio electónico, etc",
          urlImagen: "/imagenes/numeros/numero-4.png",
        },
      ],
      tfg: [
        {
          titulo: "Trabajo Fin de Grado",
          nombre: "Sistema de Gestión de Pedidos",
          descripcion: "Desarrollo de una aplicación de escritorio en Java para la gestión integral de pedidos en una empresa de transporte, con una base de datos PostgreSQL integrada. Además, se complementa con una aplicación Android diseñada para que los repartidores accedan y completen sus asignaciones de entregas de manera eficaz y organizada.",
          urlImagen: "/imagenes/tfg.png",
          tecnologias: [
            {
              nombre: "ANDROIDSTUDIO",
              urlIcono: "/imagenes/tecnologias/androidstudio.png",
            },
            {
              nombre: "JAVA",
              urlIcono: "/imagenes/tecnologias/java.png",
            },
            {
              nombre: "POSTGRESQL",
              urlIcono: "/imagenes/tecnologias/postgresql.png"
            },
            {
              nombre: "SQLITE",
              urlIcono: "/imagenes/tecnologias/sqlite.png",
            },
            {
              nombre: "ANDROID",
              urlIcono: "/imagenes/android.png"
            }
          ],
        }
      ],
      practicas: [
        {
          titulo: "Prácticas en Empresa",
          nombre: "Mercedes Benz España S.A.",
          descripcion: "Desarrollo de un proyecto para el tratamiento automático de datos y la visualización de resultados, basado en la codificación de macros en Visual Basic for Applications (VBA) en Microsoft Access y Excel. El sistema recopila datos de diversas fuentes, filtra los datos no válidos y brinda al usuario la opción de visualizarlos en informes y/o gráficos.",
          urlImagen: "/imagenes/mercedesbenz.png",
          tecnologias: [
            {
              nombre: "VBA",
              urlIcono: "/imagenes/tecnologias/vba.png",
            },
            {
              nombre: "ACCESS",
              urlIcono: "/imagenes/tecnologias/access.png",
            },
            {
              nombre: "EXCEL",
              urlIcono: "/imagenes/tecnologias/excel.png",
            },
            {
              nombre: "SQLSEVER",
              urlIcono: "/imagenes/tecnologias/sqlserver.png",
            },
            {
              nombre: "BAT",
              urlIcono: "/imagenes/tecnologias/bat.png",
            },
          ],
        }
      ]
    },
    {
      id: "android",
      nombre: "Android",
      descripcion: "Programación de aplicaciones móviles",
      descripcionLarga:
        "La programación de aplicaciones para Android implica utilizar Java o Kotlin con Android Studio, diseñar interfaces mediante XML y emplear las APIs de Android. Después de pruebas en emuladores o dispositivos reales, las aplicaciones se distribuyen en la tienda Google Play.",
      edicion: "2013",
      modalidad: "ONLINE",
      entidad: "Universitat Politècnica de València",
      duracion: "120 horas",
      urlImagen: "/imagenes/android.png",
      enlace: "/cursos/android",
      urlDiploma: "/imagenes/diplomas/android.PNG",
      temario: [
        "La plataforma Android y su entorno de desarrollo",
        "Diseño de la interfaz de usuario",
        "Actividades e Intents",
        "Gráficos en Android",
        "Hilos de ejecuccion y entradas en Android",
        "Multimedia y ciclo de vida de una actividad",
        "Seguridad y posicionamiento",
        "Servicios, notificaciones y receptores de anuncios",
        "Almacenamiento de datos",
        "Internet: sockets, HTTP y servicios web",
      ],
      tecnologias: [
        {
          nombre: "JAVA",
          urlIcono: "/imagenes/tecnologias/java.png",
        },
        {
          nombre: "PLAYSTORE",
          urlIcono: "/imagenes/playstore.png",
        },
        {
          nombre: "ANDROIDSTUDIO",
          urlIcono: "/imagenes/tecnologias/androidstudio.png",
        },
        {
          nombre: "SQLITE",
          urlIcono: "/imagenes/tecnologias/sqlite.png",
        },
      ],
      proyectos: {
        introduccion:
          "El objetivo principal del curso es familiarizarse con las diversas opciones que ofrece Android y aplicar algunas de ellas en la creación de una aplicación funcional o juego, culminando con su publicación en la tienda de aplicaciones.",
        listado: [
          {
            nombre: "Little Space 2",
            descripcion:
              "Un juego clásico de arcade ambientado en el espacio, donde controlas una nave. Incluye la función de almacenamiento local para mostrar las diez mejores puntuaciones.",
            enlace: "https://play.google.com/store/apps/details?id=saul.littlespace2&hl=es_419&gl=US",
            urlImagen: "/imagenes/littlespace.webp",
            target_blank: true,
          },
        ],
      },
    },
    {
      id: "frontend",
      nombre: "Frontend",
      descripcion: "Desarrollo Frontend con HTML, CSS y JavaScript",
      descripcionLarga:
        "Frontend es la parte de un sitio web que los usuarios ven y con la que interactúan. Involucra diseño, interfaz de usuario y programación con tecnologías como HTML, CSS y JavaScript.",
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
        "PWAs. Desarrollando aplicaciones para Android/IOS/Escritorio",
      ],
      tecnologias: [
        {
          nombre: "HTML5",
          urlIcono: "/imagenes/tecnologias/html5.webp",
        },
        {
          nombre: "CSS3",
          urlIcono: "/imagenes/tecnologias/css3.webp",
        },
        {
          nombre: "JAVASCRIPT",
          urlIcono: "/imagenes/tecnologias/javascript.webp",
        },
        {
          nombre: "JSON",
          urlIcono: "/imagenes/tecnologias/json.png",
        },

        {
          nombre: "JQUERY",
          urlIcono: "/imagenes/tecnologias/jquery.png",
        },

        {
          nombre: "AJAX",
          urlIcono: "/imagenes/tecnologias/ajax.png",
        },
        {
          nombre: "PWA",
          urlIcono: "/imagenes/tecnologias/pwa.png",
        },
      ],
      proyectos: {
        introduccion:
          "Además de los ejercicios simples realizados durante los módulos del curso, como resultado y recopilación de todos los conocimientos adquiridos se encuentra el siguiente proyecto.",
        listado: [
          {
            nombre: "Mis Películas Favoritas",
            descripcion:
              "Pequeña PWA (aplicación web progresiva) que permite el CRUD completo de películas, siguiendo el patrón de diseño MVC y utilizando como endpoint la API de la plataforma JsonStorage App. Desplegada en el servidor de desarrollo y hosting Glitch.",
            enlace: "https://sauliyo15peliculascompleto.glitch.me",
            urlImagen: "/imagenes/mispeliculasfavoritas.png",
            target_blank: true,
          },
        ],
      },
    },
    {
      id: "gitgithub",
      nombre: "Git y GitHub",
      descripcion: "Gestión de proyectos Software con Git y GitHub",
      descripcionLarga:
        "Git es un sistema de control de versiones para rastrear cambios en el código. GitHub es una plataforma en la nube que utiliza Git para alojar y colaborar en proyectos de desarrollo de software.",
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
        "Contribuir a un repositorio de terceros con pull-request",
      ],
      tecnologias: [
        {
          nombre: "LINUX",
          urlIcono: "/imagenes/tecnologias/linux.png",
        },
        {
          nombre: "UNIX",
          urlIcono: "/imagenes/tecnologias/unix.png",
        },
        {
          nombre: "GIT",
          urlIcono: "/imagenes/tecnologias/git.png",
        },
        {
          nombre: "GITHUB",
          urlIcono: "/imagenes/tecnologias/github.png",
        },
      ],
    },
    {
      id: "backend",
      nombre: "Backend",
      descripcion: "Desarrollo Backend con Node.js, Expres y BB.DD",
      descripcionLarga:
        "Backend es la parte oculta de un sitio web que maneja la lógica y la base de datos. Utiliza tecnologías como Python o Java para garantizar el funcionamiento y la seguridad. Su función es facilitar la interacción entre el usuario y la infraestructura del servidor.",
      edicion: "3ª Edición - 2023",
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
        "Websockets, protocolo y aplicaciones",
      ],
      tecnologias: [
        {
          nombre: "NODEJS",
          urlIcono: "/imagenes/tecnologias/nodejs.png",
        },
        {
          nombre: "NPM",
          urlIcono: "/imagenes/tecnologias/npm.png",
        },
        {
          nombre: "SQLITE",
          urlIcono: "/imagenes/tecnologias/sqlite.png",
        },
        {
          nombre: "SEQUELIZE",
          urlIcono: "/imagenes/tecnologias/sequelize.png",
        },
        {
          nombre: "EXPRESSJS",
          urlIcono: "/imagenes/tecnologias/expressjs.png",
        },
      ],
      proyectos: {
        introduccion:
          "Además de las diferentes prácticas realizadas durante los módulos del curso (cuyo código se encuentra disponible en GitHub), como resultado y recopilación de todos los conocimientos adquiridos se destaca el siguiente proyecto.",
        listado: [
          {
            nombre: "Quizzes",
            descripcion:
              "Pequeña API que permite el CRUD completo de una aplicación de juegos. A través de sus MWs y controladores se llevan a cabo las acciones adecuadas con la Base de Datos en SQLIite, y devolviendo las respuestas en formato HTTP para permitir la interacción desde el navegador. Desplegada en el servidor de desarrollo y hosting Glitch.",
            enlace: "https://sauliyo15quizzescompleto.glitch.me",
            urlImagen: "/imagenes/quiz.jpg",
            target_blank: true,
          },
        ],
      },
    },
    {
      id: "fullstack",
      nombre: "Full Stack",
      descripcion: "Desarrollo de un proyecto Full Stack con JavaScript",
      descripcionLarga:
        "Fullstack implica la capacidad de desarrollar tanto el frontend como el backend de una aplicación, abarcando la interfaz de usuario y la lógica del servidor. Es un enfoque integral que ofrece una visión completa del desarrollo de software.",
      edicion: "3ª Edición - 2023",
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
        "HTTPS, roles, autores de Quizzes y Mis Quizzes",
      ],
      tecnologias: [
        {
          nombre: "NODEJS",
          urlIcono: "/imagenes/tecnologias/nodejs.png",
        },
        {
          nombre: "EXPRESSJS",
          urlIcono: "/imagenes/tecnologias/expressjs.png",
        },
        {
          nombre: "EJS",
          urlIcono: "/imagenes/tecnologias/ejs.png",
        },
        {
          nombre: "MVC",
          urlIcono: "/imagenes/tecnologias/mvc.png",
        },
        {
          nombre: "OAUTH2",
          urlIcono: "/imagenes/tecnologias/oauth2.png",
        },
        {
          nombre: "HTTPS",
          urlIcono: "/imagenes/tecnologias/https.png",
        },
      ],
      proyectos: {
        listado: [
          {
            nombre: "The Quiz Site",
            descripcion:
              "Pequeño sitio Fullstack construido con express-generator en el que a lo largo de este curso se van incorporando diferentes componentes como la paginación, autenticación y roles de usuarios, etc. Desplegada en el servidor de desarrollo y hosting Glitch.",
            enlace: "https://sauliyo15quizfullstack.glitch.me/",
            urlImagen: "/imagenes/quiz.jpg",
            target_blank: true,
          },
        ],
      },
    },
    {
      id: "basesdedatos",
      nombre: "Bases de Datos Relacionales y No Relacionales",
      descripcion: "Conceptos, diseño y aplicación a entornos web",
      descripcionLarga:
        "Las bases de datos relacionales utilizan tablas con relaciones predefinidas, mientras que las no relacionales (NoSQL) permiten una estructura más flexible y escalabilidad horizontal sin un esquema fijo.",
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
        "Replicación, particionamiento y desarrollo de aplicaciones con NoSQL",
      ],
      tecnologias: [
        {
          nombre: "RELACIONAL",
          urlIcono: "/imagenes/tecnologias/modelorelacional.webp",
        },
        {
          nombre: "SQL",
          urlIcono: "/imagenes/tecnologias/sql.png",
        },
        {
          nombre: "MYSQL",
          urlIcono: "/imagenes/tecnologias/mysql.png",
        },
        {
          nombre: "SEQUELIZE",
          urlIcono: "/imagenes/tecnologias/sequelize.png",
        },
        {
          nombre: "NOSQL",
          urlIcono: "/imagenes/tecnologias/nosql.webp",
        },
        {
          nombre: "JSON",
          urlIcono: "/imagenes/tecnologias/json.png",
        },
        {
          nombre: "MONGODB",
          urlIcono: "/imagenes/tecnologias/mongodb.png",
        },
      ],
      proyectos: {
        introduccion:
          "Debido a la necesidad de instalaciones locales de MySQL y MongoDB, los proyectos de este curso no son visualizables directamente. Puedes acceder al código en los repositorios de GitHub proporcionado a continuación.",
        listado: [
          {
            nombre: "Prácticas Bases de Datos",
            descripcion:
              "La primera práctica involucra el uso de SQL para manipular estructuras de datos. En la segunda, una aplicación web interactúa con la base de datos MySQL mediante el ORM de Sequelize. La tercera permite realizar operaciones CRUD en una base de datos MongoDB a través del ODM de Mongoose.",
            enlace:
              "https://github.com/stars/sauliyo15/lists/curso-bases-de-datos-miriadax",
            urlImagen: "/imagenes/basededatos.png",
            target_blank: true,
          },
        ],
      },
    },
    {
      id: "react",
      nombre: "React y React Native",
      descripcion: "Desarrolo de aplicaciones con React y React Native",
      descripcionLarga:
        "React es una biblioteca de JavaScript para construir interfaces web interactivas, mientras que React Native es un marco que utiliza React para desarrollar aplicaciones móviles nativas.",
      edicion: "2ª Edición - 2023",
      modalidad: "ONLINE",
      entidad: "Universidad Politécnica de Madrid",
      duracion: "75 horas",
      urlImagen: "/imagenes/react.png",
      enlace: "/cursos/react",
      urlDiploma: "/imagenes/diplomas/react.PNG",
      temario: [
        "Bases del desarrollo de aplicaciones web",
        "Conceptos principales de React y JSX",
        "Componentes y su ciclo de vida. Composición de componentes. Hooks",
        "Implementando un buscador de usuarios",
        "Implementando un tres en raya",
        "Context y Rutas",
        "Añadiendo Redux, completando la arquitectura",
        "React Native. Introducción, conceptos básicos, componentes y APIs",
        "React Native. Navegadores, componentes nativos y conceptos avanzados",
      ],
      tecnologias: [
        {
          nombre: "REACT",
          urlIcono: "/imagenes/tecnologias/react.png",
        },
        {
          nombre: "REDUX",
          urlIcono: "/imagenes/tecnologias/redux.png",
        },
        {
          nombre: "JAVASCRIPT",
          urlIcono: "/imagenes/tecnologias/javascript.webp",
        },
        {
          nombre: "BOOTSTRAP",
          urlIcono: "/imagenes/tecnologias/bootstrap.png",
        },
        {
          nombre: "REACTNATIVE",
          urlIcono: "/imagenes/tecnologias/reactnative.png",
        },
        {
          nombre: "FIREBASE",
          urlIcono: "/imagenes/tecnologias/firebase.webp",
        },
      ],
      proyectos: {
        introduccion:
          "Durante este curso han sido incontables los ejercicios realizados durante cada módulo. Con el objetivo de recopilar conocimientos e incorporar diferentes funcionalidades en aplicaciones más complejas se exponen los siguientes proyectos.",
        listado: [
          {
            nombre: "Buscador de Usuarios",
            descripcion:
              "Pequeña aplicación que simula un buscador de usuarios con datos previamente obtenidos de la API de muestra dummyJSON.com. Incorpora React Bootstrap para la maquetación o la librería Router-dom para la navegación. Desplegada en el servidor de desarrollo y hosting Glitch.",
            enlace: "https://sauliyo15buscadorusuarios.glitch.me/",
            urlImagen: "/imagenes/buscadorusuarios.png",
            target_blank: true,
          },
          {
            nombre: "Catálogo de Productos",
            descripcion:
              "Aplicación web, que simula un catálogo de productos, también con datos de dummJSON.com. Incorpora diferentes formas de filtrar o buscar un producto y mostrar sus datos. Desplegada en el hosting de Firebase.",
            enlace: "https://catalogodesaul.web.app/",
            urlImagen: "/imagenes/producto.png",
            target_blank: true,
          },
          {
            nombre: "Catálogo de Productos - React Native",
            descripcion:
              "Aplicación móvil, que surge como transformación de la web del proyecto anterior en una aplicación nativa para móviles. Puesto que no hay manera de visualizarlo, se proporciona el repositorio de Github para comprobar su codificación.",
            enlace: "https://github.com/sauliyo15/catalogo_productos_rn",
            urlImagen: "/imagenes/tecnologias/reactnative.png",
            target_blank: true,
          },
        ],
      },
    },
    {
      id: "java",
      nombre: "Java Web - IFCT034PO",
      descripcion: "Desarrollo de aplicaciones web con Java",
      descripcionLarga:
        "En el desarrollo web con Java, los desarrolladores utilizan este lenguaje de programación para crear aplicaciones web sólidas y escalables. Java ofrece una plataforma versátil y eficiente, con frameworks como Spring que facilitan la construcción de sitios web dinámicos y de alto rendimiento mediante la gestión efectiva de la lógica de negocio y la interacción con bases de datos.",
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
        "Hibernate",
      ],
      tecnologias: [
        {
          nombre: "JAVA",
          urlIcono: "/imagenes/tecnologias/java.png",
        },
        {
          nombre: "JSP",
          urlIcono: "/imagenes/tecnologias/jsp.webp",
        },
        {
          nombre: "STRUTS2",
          urlIcono: "/imagenes/tecnologias/struts2.png",
        },
        {
          nombre: "SPRINGMVC",
          urlIcono: "/imagenes/tecnologias/springmvc.png",
        },
        {
          nombre: "HIBERNATE",
          urlIcono: "/imagenes/tecnologias/hibernate.png",
        },
      ],
    },
    {
      id: "flutter",
      nombre: "Flutter",
      descripcion: "Actualmente aprendizaje autónomo con resursos de la red",
      urlImagen: "/imagenes/flutter.png",
      enlace: "https://github.com/stars/sauliyo15/lists/flutter",
      target_blank: true,
    },
  ],
  proyectos: [
    {
      id: "nosvamosdeencierro",
      nombre: "Nos Vamos De Encierro",
      descripcion: "Las aplicaciones de referencia de los festejos taurinos",
      descripcionLarga:
        "El proyecto Nos Vamos De Encierro surge de una idea personal que fusiona mi afición por los festejos taurinos con mi experiencia en programación y el gusto por el desarrollo de aplicaciones móviles. La ampliación constante de funcionalidad y contenido  y la difusión a través de la redes sociales han llegado a convertir estas aplicaciones en referentes nacionales.",
      urlImagen: "/imagenes/nvde.jpg",
      enlace: "/proyectos/nosvamosdeencierro",
      puntuaciones: [
        {
          nombre: "Puntuacion Play Store",
          valor: "4.8",
          urlIcono: "/imagenes/star.png"
        },
        {
          nombre: "Descargas",
          valor: "10K+ descargas",
          urlIcono: "/imagenes/download.png"
        },
        {
          nombre: "Seguidores instagram",
          valor: "+4.000 seguidores",
          urlIcono: "/imagenes/seguidor.png"
        }
      ],
      tecnologias: [
        {
          nombre: "PLAYSTORE",
          urlIcono: "/imagenes/playstore.png",
        },
        {
          nombre: "POSTGRESQL",
          urlIcono: "/imagenes/tecnologias/postgresql.png",
        },
        {
          nombre: "AWS",
          urlIcono: "/imagenes/tecnologias/aws.png",
        },
        {
          nombre: "ADMOB",
          urlIcono: "/imagenes/tecnologias/admob.png",
        },
        {
          nombre: "FIREBASE",
          urlIcono: "/imagenes/tecnologias/firebase.webp",
        },
        {
          nombre: "ONESIGNAL",
          urlIcono: "/imagenes/tecnologias/onesignal.png",
        },
        {
          nombre: "NODEJS",
          urlIcono: "/imagenes/tecnologias/nodejs.png",
        },
      ],
      componentes: {
        listado: [
          {
            nombre: "Nos Vamos De Encierro",
            descripcion:
              "Núcleo esencial del proyecto, está desarrollada en Java y se monetizada con AdMob. Incorpora varios SDKs, incluyendo OneSignal y Firebase, para potenciar su funcionalidad.",
            enlace: "https://play.google.com/store/apps/details?id=saul.agendatoros&hl=es_CL",
            urlImagen: "/imagenes/nvde.jpg",
            target_blank: true,
          },
          {
            nombre: "Toreando",
            descripcion:
              "Aplicación secundaria del proyecto, con un propósito similar, desarrollada bajo las mismas directrices que la aplicación principal y también con monetización a través de AdMob.",
            enlace: "https://play.google.com/store/apps/details?id=saul.toreando&hl=es_GT",
            urlImagen: "/imagenes/toreando.webp",
            target_blank: true,
          },
          {
            nombre: "API",
            descripcion:
              "Codificada en Express procesa solicitudes de datos para las aplicaciones, con una interfaz web visible en la ruta principal. Desplegada en Glitch para eficiencia y confiabilidad.",
            enlace: "https://nosvamosdeencierro.glitch.me/",
            urlImagen: "/imagenes/tecnologias/api.png",
            target_blank: true,
          },
          {
            nombre: "Base de Datos",
            descripcion:
              "La base de datos, alojada en AWS, utiliza PostgreSQL, con varias tablas para organizar eficientemente los datos cifrados, garantizando la seguridad y confidencialidad.",
            enlace: "https://aws.amazon.com/es/rds/",
            urlImagen: "/imagenes/tecnologias/postgresql.png",
            target_blank: true,
          },
          {
            nombre: "Aplicación de Escritorio",
            descripcion:
              "Una aplicación de escritorio en Java centraliza la gestión de toda la información, ofreciendo una solución eficiente y versátil.",
            enlace: "/imagenes/nvde_escritorio.PNG",
            urlImagen: "/imagenes/pc.png",
            target_blank: true,
          },
          {
            nombre: "Redes Sociales",
            descripcion:
              "Esenciales para promocionar apps y comunicar novedades. Las redes sociales son fundamentales para mantener a la audiencia informada sobre nuevas características y contenido.",
            enlace: "https://www.instagram.com/nosvamosdeencierro/",
            urlImagen: "/imagenes/instagram.png",
            target_blank: true,
          },
          {
            nombre: "Próximos pasos",
            descripcion:
              "Traslado de la API al hosting de Vercel con el objetivo de reducir los tiempos de carga, junto con el desarrollo de la aplicación principal para ofrecer su disponibilidad en la plataforma iPhone.",
            enlace: "https://vercel.com/",
            urlImagen: "/imagenes/proximo.png",
            target_blank: true,
          }
        ],
      },
    },
    {
      id: "misdnis",
      nombre: "Mis DNIs",
      descripcion: "Almacenamiento de datos personales",
      descripcionLarga:
        "Una idea concebida con el propósito de desarrollar rápidamente algo simple y funcional. Esta aplicación tiene dos objetivos claros y logrados: proporcionar un bloc de notas simple para almacenar diversos datos y tener un nombre atractivo que genere una gran cantidad de descargas.",
      urlImagen: "/imagenes/misdnis.webp",
      enlace: "/proyectos/misdnis",
      puntuaciones: [
        {
          nombre: "Puntuacion Play Store",
          valor: "3.3",
          urlIcono: "/imagenes/star.png"
        },
        {
          nombre: "Descargas",
          valor: "50K+ Descargas",
          urlIcono: "/imagenes/download.png"
        }
      ],
      tecnologias: [
        {
          nombre: "ANDROIDSTUDIO",
          urlIcono: "/imagenes/tecnologias/androidstudio.png"
        },
        {
          nombre: "JAVA",
          urlIcono: "/imagenes/tecnologias/java.png"
        },
        {
          nombre: "PLAYSTORE",
          urlIcono: "/imagenes/playstore.png"
        },
        {
          nombre: "ADMOB",
          urlIcono: "/imagenes/tecnologias/admob.png"
        },
        {
          nombre: "FIREBASE",
          urlIcono: "/imagenes/tecnologias/firebase.webp"
        },
        {
          nombre: "ONESIGNAL",
          urlIcono: "/imagenes/tecnologias/onesignal.png",
        }
      ],
      componentes: {
        listado: [
          {
            nombre: "Aplicación Android",
            descripcion: "Desarrollada en Java y se monetiza con Admob. Integra varios SDKs, incluyendo OneSignal para el envío de notificaciones a los usuarios.",
            enlace: "https://play.google.com/store/apps/details?id=saul.dni&hl=es&gl=US",
            urlImagen: "/imagenes/android.png",
            target_blank: true
          },
          {
            nombre: "Base de Datos",
            descripcion: "Se utiliza SQLite se utiliza y almacena internamente en el dispositivo móvil para gestionar y organizar datos de la aplicación de manera eficiente y localizada.",
            enlace: "",
            urlImagen: "/imagenes/tecnologias/sqlite.png",
            target_blank: true
          }
        ]
      }
    },
    {
      id: "eltiempo",
      nombre: "El Tiempo",
      descripcion: "Codificada en React y Bootstrap, utilizando datos de OpenWeatherMap para pronósticos meteorológicos",
      urlImagen: "/imagenes/eltiempo.png",
      enlace: "https://eltiempo.glitch.me/",
      target_blank: true
    },
    {
      id: "juegos2023",
      nombre: "Juegos 2023",
      descripcion: "Versión mejorada del proyecto final del curso Fullstack, con imágenes y funciones adicionales.",
      urlImagen: "/imagenes/juegos2023.png",
      enlace: "https://sauliyo15juegosfullstack.glitch.me/",
      target_blank: true
    },
    {
      id: "paginagoogleplay",
      nombre: "Todas mis aplicaciones móviles",
      descripcion: "Accede a mi página de Google Play",
      descripcionLarga:
        "Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.",
      urlImagen: "/imagenes/playstore.png",
      enlace: "https://play.google.com/store/apps/developer?id=Sauliyo15",
      target_blank: true,
    },
  ],
  contacto: [
    {
      nombre: "Correo electrónico",
      descripcion: "gc.saul.7@gmail.com",
      urlImagen: "/imagenes/email.png",
      enlace: "mailto:gc.saul.7@gmail.com",
    },
    {
      nombre: "Teléfono y Whatsapp",
      descripcion: "665 69 79 48",
      urlImagen: "/imagenes/whatsapp.png",
      enlace: "https://wa.me/665697948",
      target_blank: true,
    },
    {
      nombre: "Curriculum Vitae",
      descripcion: "Más información sobre mí",
      urlImagen: "/imagenes/curriculum.jpg",
      enlace: "/cvsaul.pdf",
      target_blank: true,
    },
    {
      nombre: "GitHub",
      descripcion: "https://github.com/sauliyo15",
      urlImagen: "/imagenes/github.png",
      enlace: "https://github.com/sauliyo15",
      target_blank: true,
    },
    {
      nombre: "Instagram",
      descripcion: "@sauliyo15",
      urlImagen: "/imagenes/instagram.png",
      enlace: "https://www.instagram.com/sauliyo15/",
      target_blank: true,
    },
  ],
};
