# FitCore

FitCore es una PWA estática de entrenamiento personal (HTML/CSS/JS vanilla). No tiene backend, base de datos ni cuentas: todos los datos se guardan en `localStorage` del navegador. Toda la app vive en `public/index.html`, con `public/sw.js` (Service Worker) y `public/manifest.json`.

## Cursor Cloud specific instructions

- Servicio único (requerido): servidor estático que sirve `public/` en el puerto 3000. Arráncalo con `npm run dev` (ejecuta `npx serve public -p 3000`). Pruébalo en `http://localhost:3000`.
- Gotcha: `npx serve` muestra un prompt interactivo de instalación ("Ok to proceed? (y)") la primera vez si `serve` no está en la caché de npx, lo que bloquea el arranque. El update script precachea `serve` (`npx --yes serve --version`) para evitarlo. Si aún aparece el prompt, ejecuta `npx --yes serve public -p 3000` manualmente una vez.
- No hay scripts de `lint` ni `test` definidos, ni framework de pruebas. La única validación de "build" es `npm run build`, que solo comprueba que `public/index.html` existe (no compila nada).
- Características PWA (Service Worker, push, instalar) requieren contexto seguro; `localhost` es válido en desarrollo. La persistencia es por `localStorage`, así que para reiniciar el estado de la app hay que limpiar el almacenamiento del navegador (o Ajustes → Borrar todos los datos).
- `npm run icons` (genera iconos con Python + Pillow) es opcional; los iconos ya están en `public/icons/`. No es necesario para correr ni probar la app.
