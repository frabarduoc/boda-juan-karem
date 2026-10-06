# Invitación de boda — Juan & Karem

Sitio estático (HTML/CSS/JS, sin frameworks ni build). Pensado para Vercel,
pero funciona en cualquier hosting estático.

## Estructura

```
index.html
css/styles.css
js/script.js
assets/        → fotos y audio (ver assets/README.txt)
```

## Ver en local

Abre `index.html` directamente en el navegador, o levanta un servidor simple:

```
npx serve .
```

## Desplegar en Vercel

1. Crea un repositorio nuevo en GitHub y sube esta carpeta completa
   (`git init`, `git add .`, `git commit -m "Invitación inicial"`,
   `git push`).
2. En Vercel: **Add New... → Project** → importa ese repositorio.
3. Framework Preset: **Other** (no requiere build command ni output
   directory, es un sitio estático).
4. Deploy. Vercel te da un dominio tipo `boda-juan-karem.vercel.app`; puedes
   cambiarlo en Settings → Domains.

## Pendiente antes de compartir el link

- [ ] Agregar la foto real en `assets/` y actualizar `index.html` (ver nota
      dentro del archivo, sección `#hero`).
- [ ] Agregar `assets/cancion.mp3` con la canción.
- [ ] Reemplazar "Capilla XXX" / "Dirección XXX" por los datos reales
      (aparece dos veces: en la tarjeta de ceremonia y en el link de Google
      Maps dentro de `js/script.js`).
- [ ] Crear el Google Form de confirmación y reemplazar el enlace de
      ejemplo en la sección `#rsvp` de `index.html`.
- [ ] Definir la fecha límite de confirmación y reemplazar
      `[FECHA LÍMITE]`.
