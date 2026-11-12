# DarkCry 1.0 — Portal maestro

Portal principal del universo musical, poético y narrativo de DarkCry 1.0.

El portal deja constancia pública de la autoría, de la existencia de las obras y de sus conexiones narrativas. La navegación abierta presenta información editorial, títulos y fragmentos seleccionados; las letras completas y documentos no publicados se solicitan directamente al artista.

## Estructura del repositorio

- `index.html`: portal principal, navegación, personajes, proyectos conectados, archivo lírico y contacto.
- `pilares.html`: archivo editorial ampliado de los cuatro Pilares.
- `pilares.css`: diseño responsive del archivo de Pilares.
- `LOS-CUATRO-PILARES.md`: documento maestro en Markdown con la definición canónica, portadas, tracklists, lectura general y función narrativa de los cuatro Pilares.
- `styles.css`: sistema visual responsive del portal principal.
- `app.js`: datos de personajes, cuatro Pilares, Master Tape, archivos conectados, transmutación, Cold Law y buscador.
- `assets/`: escudo, isologo, retratos y documentos de archivo.

## Los cuatro Pilares

Un Pilar es una de las cuatro obras discográficas matrices e inamovibles que sostienen el eje troncal de Invisible Boy (I.B.). Cada una inaugura formalmente una Era y concentra una fase crítica del colapso, fragmentación o mutación psicológica del protagonista.

| Pilar | Era | Álbum matriz | Fase |
| --- | --- | --- | --- |
| 01 | 1.0 | The Invisible Boy | Herida primaria, infancia doméstica y génesis de Violet |
| 02 | 2.0 | Crying in the Bubblebath | Transacción fallida, purificación imposible y colapso del traductor |
| 03 | 3.0 | Walking through the Blue street | Alienación urbana, entumecimiento y muerte de la sensibilidad orgánica |
| 04 | 4.0 | I'm bad, so Bad | Mutación psíquica, armadura de neón y voz de Dolly |

La jerarquía detallada, las descripciones de las portadas, los tracklists y la lectura narrativa se mantienen en `pilares.html` y `LOS-CUATRO-PILARES.md`.

## Pilares y obras satélite

Un álbum satélite, EP o entrega intermedia puede documentar detonantes específicos, puentes somáticos, líneas alternativas convergentes o desgloses transversales. Su peso narrativo no lo convierte en un Pilar.

| Obra satélite | Ubicación consignada |
| --- | --- |
| The Day I Told You | Era 1.5 |
| When the sky turned crimson (and warm) | Era 1.9 |
| In hell, I'm well | Era 2.9 |
| Echoes in Blue | Era 3.9 |
| Bad baby | Obra satélite de la Era 4 |

No se deben forzar todos los proyectos a una secuencia lineal. La fecha de publicación de una página o de un commit no equivale a la cronología interna de la historia.

## Archivo lírico y fragmentos públicos

El índice contiene 169 títulos procedentes de la compilación. Las fichas del portal contienen fragmentos y análisis agrupados; no equivalen a 169 análisis individuales ni a la publicación de todas las letras completas.

Los botones de las fichas dirigen a una solicitud de acceso al artista y ya no enlazan directamente con las ediciones completas desde la interfaz del portal.

## Documentos de archivo y limitación de seguridad

Se conservan en el repositorio, sin borrarlos ni reemplazarlos, las ediciones textuales públicas existentes:

- `assets/documents/El-Chico-Invisible-Compilacion-Textual-Publica.pdf`
- `assets/documents/Compilacion-El-Chico-Invisible-Edicion-Textual-Publica.html`

Estas ediciones omiten RUT, domicilio y código de validación del certificado. El portal ya no ofrece enlaces directos de descarga; las solicitudes de lectura completa o de documentos no publicados deben dirigirse a **mriospard@gmail.com**.

**Limitación técnica:** este proyecto se publica como sitio estático desde un repositorio público en GitHub. Por tanto, retirar los enlaces de la interfaz no vuelve privados los archivos que siguen alojados en el repositorio: sus rutas pueden descubrirse y abrirse directamente. Una pantalla de contraseña implementada solo en JavaScript no ofrecería protección real. Para imponer autenticación efectiva, los documentos deberán residir en un servicio privado o detrás de un servidor que verifique permisos. Esta limitación se declara para no confundir una solicitud editorial con una protección criptográfica.

## Criterios de mantenimiento

1. Mantener separados los cuatro Pilares y las obras satélite.
2. No inventar canciones faltantes; marcar expresamente los tracklists parciales.
3. Conservar los títulos originales y sus grafías aprobadas.
4. Diferenciar títulos registrados, fichas analíticas, fragmentos públicos y letras completas.
5. No convertir los detalles de los personajes o sus relaciones en afirmaciones no documentadas.
6. Antes de sustituir imágenes, comparar peso, dimensiones, legibilidad y calidad; preservar la fuente maestra.
7. Verificar identificadores HTML, enlaces internos, rutas de recursos y comportamiento móvil después de cada cambio.

## Contacto

Consultas sobre el proyecto, solicitudes de acceso y contacto directo con el artista detrás de DarkCry 1.0:

**mriospard@gmail.com**


## Renovación editorial 1.5

La versión editorial 1.5 amplía el portal sin alterar la jerarquía del canon ni eliminar documentos preexistentes. Incorpora el modelo Kernel/avatares; la doctrina de Transmutación con ejemplos concretos; la semiótica cromática y textil; y la lectura de la colección Therian. La numeración editorial 1.5 identifica una revisión del portal, no una nueva Era narrativa. La terminología psiquiátrica se presenta como lenguaje simbólico del lore, no como diagnóstico clínico.

## Sitios hermanos
- Los cuatro Pilares: https://github.com/DarkCry10/los4pilares
- The Atlas: https://github.com/DarkCry10/theatlas


## Registro de portadas
[Consultar inventario, correspondencia editorial y notas de canon](./COVER-REGISTER.md).
