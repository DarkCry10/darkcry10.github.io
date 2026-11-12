# Biblioteca de portadas — DarkCry 1.0

Colección extraída del PDF maestro de 49 páginas. La fuente PDF original no se modifica.

## Contenido
- `01-originales/`: 59 imágenes originales extraídas, copiadas byte por byte desde el PDF.
- `02-webp-alta/`: copias WebP de alta calidad, máximo 1600 px por lado, calidad 88.
- `03-miniaturas/`: WebP de 480 px máximo, calidad 76, para tarjetas y listados.
- `inventario_portadas.csv` y `.json`: mapa de página, título, tipo, era, propuesta de repositorio, resolución, tamaño y SHA-256.
- `contacto_visual_*.jpg`: hojas de contacto para cotejo rápido.
- `catalogo.html`: galería local de las 59 imágenes.

## Integridad y duplicados
Se extrajeron 59 referencias de imagen, todas distintas por SHA-256. No se detectaron duplicados binarios entre las imágenes extraídas. Las variantes visuales con títulos parecidos se mantienen separadas.

## Criterio editorial
Los cuatro Pilares se identifican como `The Invisible Boy`, `Crying in the Bubblebath`, `Walking Through the Blue Street` e `I'm bad, so bad`. La portada Side B de `When the Sky Turned Crimson (and warm)` se conserva como Era 1.9. El PDF imprime en esa página la anotación “Pilar 3”, pero no se adopta porque entra en conflicto con el Pilar 3 ya establecido (`Walking Through the Blue Street`).

Las imágenes de las páginas 5, 6, 41 y parte de la colección Therian no cuentan con identificación individual completa en el texto del documento; quedan etiquetadas como referencias, variantes o elementos pendientes, sin forzarles un título/canon. `Captivity` se conserva como easter egg / no canon formal, tal como describe el propio documento.

## Correspondencia recomendada
- **Portal principal**: imagen de entrada y mosaico narrativo con los cuatro Pilares; sub-eras, proyectos conectados, líneas alternativas, logos y colección Therian en secciones diferenciadas.
- **Los 4 Pilares**: cuatro portadas matrices, y como satélites únicamente The Day I Told You, When the Sky Turned Crimson, In hell, I'm well, Echoes in Blue, Bad baby, remixes y sencillos de su era. Nunca cambiar el orden de los Pilares.
- **The Atlas**: imágenes transversales, ramas alternativas, `My LIVE “HOME”`, `Mommy's Playground`, `The Horror Film That Is My Life`, `Captivity` como easter egg y Therian Collection.

## Nota de implementación
Los nombres de archivo se normalizaron para rutas web, pero los archivos bajo `01-originales/` conservan exactamente los bytes originales. Las imágenes WebP son derivados; el PDF y los originales deben permanecer como fuente de verdad.
