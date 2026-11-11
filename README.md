# DarkCry 1.0 — Portal maestro

Portal principal del universo musical, poético y narrativo de DarkCry 1.0.

Este repositorio funciona como índice editorial y punto de entrada. Los micrositios conectados conservan sus propios formatos y atmósferas; el portal los organiza sin convertirlos artificialmente en una sola línea temporal.

## Estructura del portal

- `index.html`: contenido, secciones, navegación y metadatos del portal.
- `styles.css`: sistema visual responsive, tipografía, tarjetas, navegación, cronología y lectura documental.
- `app.js`: datos de personajes, Master Tape, transmutación, Cold Law, eras pilares, archivos conectados y buscador.
- `assets/`: escudo, isologo, retratos y documentos públicos de consulta.

## Niveles de continuidad

### 1. Eras pilares

El documento fundacional identifica cuatro eras pilares:

| Era | Álbumes pilares |
| --- | --- |
| Era 1 | The Invisible Boy · The Day I Told You |
| Era 2 | Crying in the Bubblebath · In hell, I'm well |
| Era 3 | Walking through the blue street · Echoes in blue |
| Era 4 | I'm bad, so bad · Bad baby |

La cronología fundamental deja abierta la posibilidad de que nuevas obras se conecten con estas eras o sean cronológicamente anteriores. Por esa razón, el portal no fuerza todos los proyectos a una era numerada.

### 2. Archivos y obras conectadas

El índice expandido distingue, entre otros:

- My LIVE “HOME” y A Plea for Shelter: archivos conectados del origen y la supervivencia.
- Mommy's Playground: perspectiva materna y metáfora de los juguetes.
- The Invisible Boy 2.0: The Dark Side of the Moon: dimensión transversal X/Y/Z.
- Your Eromenos: manifiesto y diario íntimo asociado a Eros.
- When the sky turned crimson (and warm): libreta de I.B. y Toño; no debe confundirse con la relación de Your Eromenos.
- The Horror Film That Is My Life: Master Tape de 13 pistas y tres Tracking Markers.
- Black Tuesday EP: rama conceptual asociada a la presión económica de la vida adulta.
- Smoke In The Kitchen: recetario con tronco común y dos rutas narrativas.
- Dolly & DCX: ampliaciones ligadas a Ice Throne, Therian Collection y Shadow & Ban.

Las flechas y recorridos del portal indican relación y orientación de lectura, no necesariamente una cronología absoluta.

## Archivo lírico

El portal mantiene dos niveles de información:

1. **Índice de 169 obras:** títulos enumerados en la compilación.
2. **Fichas agrupadas desarrolladas:** análisis y extractos que existen actualmente en la base de datos del portal.

Un título del índice no se presenta como una ficha completa si todavía no tiene análisis y texto desarrollado en el portal. En esos casos, la ficha deriva a la compilación pública.

## Documentos de consulta

En `assets/documents/` se conservan las ediciones públicas:

- `El-Chico-Invisible-Compilacion-Textual-Publica.pdf`: PDF textual de 210 páginas, con el índice y los textos extraídos. Las páginas dedicadas exclusivamente a arte o portadas se indican como no reproducidas en esta edición.
- `Compilacion-El-Chico-Invisible-Edicion-Textual-Publica.html`: lector HTML página por página, con el índice y el texto extraído.

Estas ediciones omiten RUT, domicilio y código de validación del certificado. Conservan el número registral 2026-A-8311 y las fechas documentales. Son ediciones de consulta y no sustituyen la copia visual ni el certificado original.

El documento de cronología usado para estructurar el portal se conserva como fuente de referencia en la conversación del proyecto; su contenido fundamental se resume en la sección “Las cuatro eras pilares”.

## Principios de mantenimiento

1. Mantener separadas las eras pilares y los proyectos conectados.
2. No inferir fechas narrativas a partir de fechas de commits o publicación web.
3. No confundir personajes ni vínculos distintos, especialmente Eros y Toño.
4. Conservar los títulos originales del índice de la compilación.
5. Diferenciar con claridad títulos registrados, fichas analíticas y texto completo.
6. Antes de sustituir imágenes, comparar peso, dimensiones, legibilidad y calidad visual; preservar una fuente maestra.
7. Comprobar los identificadores HTML, enlaces internos, rutas de recursos y comportamiento mobile después de cada cambio.

## Desarrollo

El portal es estático y publica directamente desde la rama `main`. La presentación se construye con HTML, CSS y JavaScript, sin proceso de compilación.

