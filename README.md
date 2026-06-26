# FitCore 💪

**Tu entrenador personal · PWA instalable · 100% offline**

---

## ¿Qué es FitCore?

FitCore es una aplicación web progresiva (PWA) de fitness completa que funciona sin conexión y se puede instalar en cualquier dispositivo como una app nativa. Todos los datos se guardan localmente en el dispositivo.

---

## Características

### 🏋️ Entrenar
- 14 rutinas predefinidas: Fuerza, HIIT, Tabata, Cardio, CrossFit y Movilidad
- Temporizador con voz en español (cuenta atrás, avisos de fase)
- Anillo de progreso visual por colores según fase
- Control total: pausar, saltar, repetir ejercicio

### 📅 Plan Semanal
- Generación automática según tu objetivo, nivel y equipamiento
- Muestra qué toca entrenar cada día
- Regenerable en cualquier momento

### 📊 Progreso
- Gráfica de evolución del peso con filtros (7D / 1M / 3M / Todo)
- Línea de objetivo en la gráfica
- Proyección matemática de semanas hasta tu meta
- Calculadora TDEE con desglose de macros (proteína, carbos, grasas)
- Registro de medidas corporales (cintura, pecho, brazos...)

### 📋 Historial
- Registro de todas las sesiones completadas
- Racha de días consecutivos
- Kcal totales quemadas

### ⚙️ Ajustes
- Perfil completo con IMC, objetivo y nivel
- Modo oscuro / claro
- Recordatorios de pesaje (notificaciones push)
- Voz on/off durante los entrenamientos

---

## Desarrollo local

```bash
npm run dev
# o: npx serve . -p 3000
```

Abre `http://localhost:3000` en Chrome o Edge.

---

## Desplegar en Vercel (recomendado para móvil)

1. Conecta este repositorio en [vercel.com/new](https://vercel.com/new)
2. **Framework Preset:** Other
3. **Build Command:** `npm run build`
4. **Output Directory:** `public` (también definido en `vercel.json`)
5. Despliega — obtendrás una URL HTTPS

### Instalar en el móvil

**Android (Chrome):**
1. Abre la URL de Vercel en Chrome
2. Menú ⋮ → *Instalar aplicación* o *Añadir a pantalla de inicio*

**iPhone (Safari):**
1. Abre la URL en Safari
2. Compartir → *Añadir a pantalla de inicio*

La app se abre en pantalla completa, funciona offline y guarda tus datos en el dispositivo.

---

## Estructura de archivos

```
fitcore/
├── public/           ← Archivos desplegados en Vercel
│   ├── index.html    ← App completa (HTML + CSS + JS)
│   ├── manifest.json ← Configuración PWA
│   ├── sw.js         ← Service Worker (offline + push)
│   └── icons/        ← Iconos PWA (72–512px)
├── vercel.json       ← outputDirectory: public
├── package.json      ← Scripts de desarrollo
└── scripts/          ← Generador de iconos
```

---

## Datos y privacidad

- **100% local**: todos los datos se guardan en `localStorage` del navegador
- **Sin servidor**: no hay backend, no hay base de datos
- **Sin cuenta**: no requiere registro ni login
- Para borrar todos los datos: Ajustes → Borrar todos los datos

---

## Tecnologías

- HTML5 / CSS3 / JavaScript vanilla
- Web Speech API (voz en español)
- Canvas API (gráficas)
- localStorage (persistencia)
- Service Worker + Web App Manifest (PWA)
- Notifications API (recordatorios)

---

Hecho con ❤️ · FitCore v3
