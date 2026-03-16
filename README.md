# E1-M7 - Configuración de la Conexión a la Base de Datos con Node.js y PostgreSQL

Este proyecto corresponde al ejercicio **“Configuración de la Conexión a la Base de Datos”**.  
El objetivo es aprender a conectar una aplicación Node.js a una base de datos PostgreSQL utilizando el paquete `pg` y un **pool de conexiones**.

## Objetivo del ejercicio

En este trabajo se implementó una conexión básica entre Node.js y PostgreSQL para:

- instalar y utilizar el paquete `pg`
- configurar un `Pool` de conexiones
- verificar la conexión con `async/await`
- manejar errores con `try...catch`

## Tecnologías utilizadas

- Node.js
- PostgreSQL
- pg
- dotenv
- Neon

## ¿Por qué usé Neon?

Se utilizó **Neon** como servicio de base de datos PostgreSQL en la nube porque el proyecto fue desarrollado en **GitHub Codespaces** y no era posible instalar PostgreSQL localmente en el computador.

Neon permitió:

- disponer de una base de datos PostgreSQL remota
- obtener una cadena de conexión lista para usar en Node.js
- trabajar de forma rápida y práctica desde Codespaces
- evitar instalar y configurar PostgreSQL o Docker localmente

## Estructura del proyecto

```bash
.
├── db-connect.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md