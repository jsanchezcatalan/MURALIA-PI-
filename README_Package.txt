📦 ARCHIVOS DE GESTIÓN DE DEPENDENCIAS (NPM)

───────────────────────────────────────────────
🔹 package.json
───────────────────────────────────────────────
Este archivo define la configuración principal del proyecto Node/Angular.
Contiene la información básica y las dependencias que necesita el proyecto.

Campos principales:
- "name": nombre del proyecto.
- "version": versión del proyecto.
- "scripts": comandos que puedes ejecutar con "npm run" (por ejemplo, "npm run start").
- "dependencies": paquetes necesarios para ejecutar la aplicación.
- "devDependencies": paquetes usados solo durante el desarrollo (testing, build, lint, etc.).

📌 No admite comentarios dentro del archivo (formato JSON estricto).
Cualquier aclaración o explicación debe hacerse en este README.

───────────────────────────────────────────────
🔹 package-lock.json
───────────────────────────────────────────────
Archivo generado automáticamente por npm cuando se instalan dependencias.

Funciones:
- Guarda las versiones exactas de cada dependencia instalada.
- Garantiza que todos los desarrolladores y entornos usen las mismas versiones.
- Permite reproducir instalaciones idénticas en cualquier máquina.

⚠️ No debe editarse manualmente.
⚠️ No admite comentarios.
Si hay problemas con dependencias, puedes eliminarlo y ejecutar:
    npm install
para regenerarlo automáticamente.

───────────────────────────────────────────────
💡 En resumen:
- package.json → lo configuras tú.
- package-lock.json → lo genera npm automáticamente.
