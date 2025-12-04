# Plan de Implementación y Despliegue de la Aplicación (con json-server)

## Resumen de la Aplicación Actual

La aplicación es un proyecto Next.js que consta de una interfaz pública y un panel de administración.

- **Frontend:** Desarrollado con Next.js, React, Shadcn UI y Tailwind CSS. Incluye un formulario de contacto y varias secciones informativas.
- **Panel de Administración:** Permite a los administradores gestionar las propuestas recibidas a través del formulario de contacto (ver, aceptar, rechazar, responder). Incorpora un sistema de autenticación básico.
- **Backend:** Actualmente utiliza `json-server` para simular una API RESTful, almacenando datos en `db.json` para las propuestas (`/proposals`) y los usuarios (`/users`) de administración.

## Objetivo del Plan

El objetivo es preparar la aplicación para un despliegue funcional, manteniendo `json-server` como backend provisional y abordando las funcionalidades restantes. Esto implica asegurar que `json-server` se ejecute correctamente en un entorno de producción y que el frontend se comunique con él.

## Plan de Acción Detallado

### Fase 1: Confirmación y Ajustes del Frontend (para json-server)

1.  **Revisión y Estabilización de Rutas de API:**

    - **Formulario de Contacto (`app/page.tsx`):** Asegurar que el `handleSubmit` en el componente `ContactSection` utilice una URL de API configurable para enviar las nuevas propuestas al `json-server`. Por ejemplo, `process.env.NEXT_PUBLIC_API_BASE_URL + "/proposals"`.
    - **Panel de Administración (`app/admin/dashboard/page.tsx`):** Verificar que `fetchProposals`, `updateStatus` y `handleReply` construyan sus URLs de destino usando la misma variable de entorno: `process.env.NEXT_PUBLIC_API_BASE_URL + "/proposals"` o `process.env.NEXT_PUBLIC_API_BASE_URL + "/proposals/:id"`.
    - **Login de Administración (`app/admin/login/page.tsx`):** Confirmar que `handleLogin` envíe las credenciales a `process.env.NEXT_PUBLIC_API_BASE_URL + "/users?email=:email&password=:password"`.

2.  **Revisión de `db.json`:**
    - Asegurar que `db.json` contenga una estructura inicial adecuada y datos de prueba o producción para los endpoints `proposals` y `users`.
    - Para `users`, al menos un usuario administrador debe estar definido por defecto. Ejemplo:
      ```json
      {
        "proposals": [
          {
            "id": "1",
            "nombre": "Ejemplo Empresa",
            "email": "contacto@ejemplo.com",
            "servicio": "Desarrollo Web",
            "mensaje": "Mensaje de prueba",
            "status": "pending",
            "date": "2023-10-26T10:00:00Z"
          }
        ],
        "users": [
          { "id": "1", "email": "admin@example.com", "password": "password123" }
        ]
      }
      ```
      _¡Advertencia: Las contraseñas en `json-server` no se encriptan. Esto es aceptable solo para entornos de demostración o desarrollo. Para producción real, se necesitaría un backend con autenticación segura!_

### Fase 2: Configuración de Entorno y Variables

1.  **Variables de Entorno para la URL del Backend:**
    - Crear un archivo `.env.local` en la raíz del proyecto para desarrollo local:
      ```
      NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
      ```
    - Crear un archivo `.env.production` (o configurar variables en la plataforma de despliegue) para el entorno de producción, apuntando a la URL pública donde se desplegará `json-server`:
      ```
      NEXT_PUBLIC_API_BASE_URL=https://tu-json-server-api.com
      ```
2.  **Configuración de CORS para `json-server`:**
    - Para permitir que el frontend, desplegado en un dominio diferente, acceda a `json-server`, este último debe estar configurado para aceptar peticiones CORS desde el dominio del frontend. Esto se puede lograr ejecutando `json-server` con la bandera `--cors`. Si se usa un proxy, se puede configurar allí.

### Fase 3: Estrategia de Despliegue para `json-server` y Next.js

1.  **Despliegue de la Aplicación Next.js (Frontend):**

    - **Plataformas Sugeridas:** Vercel o Netlify son excelentes opciones, ya que están optimizadas para Next.js.
    - **Configuración:** Conectar el repositorio de Git, configurar la variable `NEXT_PUBLIC_API_BASE_URL` en la configuración de la plataforma para que apunte a la URL pública de `json-server`.
    - **Comando de Build:** Asegurarse de que el comando `next build` se ejecute correctamente.

2.  **Despliegue de `json-server` (Backend simulado):**
    - **Opciones de Plataforma:**
      - **Servidor Privado Virtual (VPS):** Como DigitalOcean, AWS EC2. Necesitarás instalar Node.js, clonar el repositorio, e iniciar `json-server` como un servicio en segundo plano (usando `pm2`, `forever` o un servicio de sistema como `systemd`).
      - **Plataformas PaaS:** Render, Heroku o Cyclic (verificar compatibilidad con `json-server`). Estas plataformas simplifican la ejecución de servicios Node.js.
      - **Servicios "Always-on" (NO RECOMENDADO para datos persistentes):** Glitch, Replit. Podrían funcionar para una demostración muy básica, pero no garantizan persistencia de datos de `db.json` entre reinicios y no son adecuados para uso serio.
    - **Persistencia de Datos:** Es crucial entender que `json-server` guarda los cambios en `db.json`. Si se despliega en un entorno sin un sistema de archivos persistente o que se reinicia con frecuencia (como algunos servicios PaaS gratuitos), los cambios se perderán. Para un despliegue funcional, se necesitaría:
      - Un VPS donde `db.json` se guarde persistentemente.
      - O modificar `json-server` para usar una pequeña base de datos real (lo cual implicaría migrar a un backend real en ese punto).
    - **Ejecución:** El comando para iniciar `json-server` debería ser: `json-server --watch db.json --port 3001 --host 0.0.0.0 --cors` (el `--host 0.0.0.0` es para que sea accesible externamente).

### Consideraciones Futuras

Aunque el plan actual se enfoca en `json-server`, es vital recordar que para una aplicación de producción real:

- **Autenticación Segura:** Se debe implementar un sistema de autenticación robusto (JWT, OAuth) con contraseñas con hash en el backend.
- **Base de Datos Real:** Se debe migrar de `json-server` a una base de datos real (MongoDB, PostgreSQL, MySQL) para la persistencia, escalabilidad y seguridad de los datos.
- **Backend Sólido:** Desarrollar una API RESTful o GraphQL con un framework backend apropiado (Node.js/Express, Python/Django/Flask, etc.) es el paso siguiente natural.
