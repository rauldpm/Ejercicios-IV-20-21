## Tema 4 - Integración continua.

---

Contenido teórico [aquí](https://jj.github.io/IV/documentos/temas/Integracion_continua) y [aquí](https://github.com/JJ/IV/blob/master/documentos/temas/Integracion_continua.md).

---

1. Hacer los dos primeros pasos antes de pasar al tercero

    - Darse de alta. Muchos están conectados con GitHub por lo que puedes autentificarte directamente desde ahí. A través de un proceso de autorización, puedes acceder al contenido e incluso informar del resultado de los tests a GitHub.

   - Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

   - Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

      Estos tres pasos se pueden observar en el siguiente [enlace](https://github.com/rauldpm/InmobilIV/blob/master/docs/ci_funcionando.md#id1).

      El fichero de configuración .travis.yml se puede observar [aquí](https://github.com/rauldpm/InmobilIV/blob/master/.travis.yml).

---

2. Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.

    Se puede observar la integración continua funcionando [aquí](https://travis-ci.com/github/rauldpm/InmobilIV).