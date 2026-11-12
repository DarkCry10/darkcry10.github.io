# Registro visual — DarkCry 1.0

## Estado de la curaduría
Este registro documenta las 59 imágenes extraídas del Documento maestro de DarkCry 1.0 (49 páginas). Las imágenes fueron clasificadas por página, función, era y destino editorial. La colección de originales y sus derivados WebP está organizada fuera de este repositorio; este registro no afirma que los binarios ya estén publicados aquí.

## Portadas matrices para el portal
| Pilar | Obra matriz | Página fuente |
|---|---|---:|
| 1 | The Invisible Boy | 1 |
| 2 | Crying in the Bubblebath | 11 |
| 3 | Walking Through the Blue Street | 16 |
| 4 | I'm bad, so bad | 18 |

Estas cuatro portadas deben funcionar como imagen principal de sus respectivas tarjetas. No intercambiar su orden ni usar portadas satélite como sustitutos de las matrices.

## Colecciones y obras conectadas
- Era 1 / satélites: The Day I Told You (págs. 7–8); When the Sky Turned Crimson (and warm), Side A y Side B (págs. 9–10); adaptaciones y artes de canciones (págs. 2–6).
- Era 2: Crying in the Bubblebath (pág. 11); In hell, I'm well (pág. 13); S.O.S / Cry for help — Espejo (págs. 14–15).
- Era 3: Echoes in Blue (pág. 17).
- Era 4: Bad baby, Greys Pants, Double Trouble, álbumes de versiones y More / Dame más (págs. 19–24).
- Transversal y raíz: The Invisible Boy 2.0 (pág. 27); The Horror Film That Is My Life (pág. 28); My LIVE “HOME” Side A, Mommy's Playground y A Plea for Shelter (págs. 31–33).
- Ramas y obras conectadas: Captivity (pág. 34, easter egg); The End of My Blue Hell y The Ice Throne (págs. 35–36); Drive, Poli / Amor, Más / AG, Another EP Remixes, Ring Ring, DELETE My Age, Forbidden Biter y Man, Better Be Hung (págs. 37–44).
- Colecciones y cierres: Therian Collection (págs. 45–47); Under My Thumb (pág. 48); Shadow & Ban (pág. 49).
- Identidad: escudo e isologo (págs. 25–26).

## Reglas de asociación
1. Los cuatro Pilares son The Invisible Boy, Crying in the Bubblebath, Walking Through the Blue Street e I'm bad, so bad.
2. When the Sky Turned Crimson (and warm) pertenece a Era 1.9, con Side A y Side B.
3. Cry for help es la versión Espejo de S.O.S.
4. Captivity se presenta como easter egg / no canon formal, según el documento.
5. Las páginas 5–6 y las imágenes alternativas de Ring Ring (pág. 41) permanecen como referencias visuales.

## Organización web recomendada
- assets/covers/pillars/ — cuatro portadas matrices.
- assets/covers/eras/ — portadas de sub-eras y satélites.
- assets/covers/transversal/ — álbum 0, Tracking Markers, My LIVE “HOME” y Mommy's Playground.
- assets/covers/branches/ — líneas alternativas y easter eggs.
- assets/covers/collections/ — Therian y colecciones relacionadas.
- assets/covers/identity/ — escudo e isologo.

Importante: este commit añade el mapa editorial, no los archivos binarios. Las referencias HTML deben añadirse solo después de que los archivos de imagen estén realmente publicados en assets/covers/, para evitar imágenes rotas.


## Integración efectiva de portadas
La biblioteca pública central se encuentra en [assets/covers](https://github.com/DarkCry10/darkcry10.github.io/tree/main/assets/covers). Los sitios complementarios consumen sus WebP mediante rutas públicas del dominio darkcry10.github.io. Las portadas de alta calidad están en `01-webp-alta/`, las miniaturas en `02-miniaturas/` y el catálogo en `03-catalogo/`.
