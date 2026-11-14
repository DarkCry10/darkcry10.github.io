// 1. BASE DE DATOS DE INTEGRANTES (CON TUS IMÁGENES EN ASSETS)
const charactersData = [
{id:"ib",name:"Invisible Boy (I.B.) 🫥",role:"El Kernel · sujeto basal · voz excepcional",image:"assets/I.B..jpg",accentColor:"var(--accent-sepia)",desc:"Raíz biográfica del sistema: abandono, Cold Law y explotación primaria. Camisa blanca, moño negro, reloj de bolsillo y pin Kitsune conservan la iconografía del niño detrás de diarios y semillas manuscritas.",traits:["Paleta: sepia, blanco gastado y sombras domésticas","Símbolo: reloj de bolsillo, león de peluche, cuadernos y pin Kitsune","Voz directa: The Worst Son, Self Love, The empty plate y la rama Your Eromenos"]},
{id:"violet",name:"Violet 🎧",role:"Repliegue · vasija del dolor · Eras 1.0–3.0",image:"assets/Violet.jpg",accentColor:"var(--accent-blue)",desc:"Escudo depresivo y puente vocal entre I.B. y el exterior. Sumisión, autoculpa y repliegue buscan evitar castigo y abandono. La lluvia, el paraguas y la ropa holgada construyen su refugio azul.",traits:["Paleta: azul nocturno, gris lluvia y ámbar distante","Símbolo: paraguas, suéter holgado, casetes y agua","Herramientas: SadMuse adapta poemas ya escritos; Donna AI se utilizó solo en la etapa inicial y durante la creación de los cuatro Pilares"]},
{id:"dcx",name:"DCX (DarkCryXXX) 🦊",role:"Libido desacoplada · anonimato · máscara Kitsune",image:"assets/DCX.jpg",accentColor:"var(--accent-pink)",desc:"No es una segunda Dolly: DCX representa una presencia corporal despersonalizada, separada del apego y de la biografía. La máscara Kitsune blanca con vivos rojos oculta los ojos; camisa abierta y corbata deshecha completan su fachada.",traits:["Paleta: blanco, rojo Kitsune, negro y neón","Símbolo: máscara sin rostro, camisa blanca abierta y brazalete oscuro","Función: anonimato erótico y despersonalización del deseo; presencia narrativa en la Therian Collection"]},
{id:"dolly",name:"Dolly 💛🖤",role:"Contraataque · armadura de neón · Era 4.0",image:"assets/Dolly.jpg",accentColor:"var(--accent-gold)",desc:"Respuesta desafiante y reinicio de la Era 4.0: convierte vulnerabilidad en desafío, cinismo y performance. Cabello mitad rubio platinado y mitad negro, heterocromía y sonrisa desafiante señalan una identidad que habla sin filtro algorítmico.",traits:["Paleta: magenta, carmesí, negro y destellos ámbar","Símbolo: cabello bicolor, ojos heterocromáticos, arañas y fuego","Sonido: Spanglish, hyperpop abrasivo y 130–155 BPM; sin SadMuse ni Donna AI"]}
];

// 2. CINTA MAESTRA: THE HORROR FILM THAT IS MY LIFE (REPORTE CURATORIAL)
const masterTapeData = [
  {
    marker: "Tracking Marker 1 (Pistas 1 - 6)",
    stage: "Cómo me poseyeron [Infancia y Pre-Adolescencia]",
    tracks: [
      { num: 1, title: "Possession (TM 1)", trope: "Maldición de Sangre", desc: "'From your bloody body, my own body was torn': no naciste, te arrancaron. Oscuridad heredada desde la semilla." },
      { num: 2, title: "Alien", trope: "Desajuste / Queer", desc: "El niño que despierta al anochecer y se siente 'out of space' frente a una madre que mira la TV sin saber cómo verlo." },
      { num: 3, title: "The shape of water", trope: "Reflejo Castigado", desc: "El intento de ser 'pretty' para ser amado y el corte forzado de su cabello largo en la escuela." },
      { num: 4, title: "Zombie", trope: "Body Horror / 118 BPM", desc: "Enterrado vivo en el salón por no performar la masculinidad exigida ('too thin to be a proper man')." },
      { num: 5, title: "Sabbath", trope: "Aquelarre Doméstico", desc: "El ritual de cada sábado: sacrificar pedazos de los hijos para fingir que la familia está entera." },
      { num: 6, title: "Poltergeist Vol. 2", trope: "Ruido en la Cabeza", desc: "No es la casa embrujada, es el niño abrazando a su león de peluche detrás de la puerta pidiendo que lo escuchen." }
    ]
  },
  {
    marker: "Tracking Marker 2 (Pistas 7 - 12)",
    stage: "Cómo nombré a los monstruos [Juventud y Adultez]",
    tracks: [
      { num: 7, title: "Exorcism (TM 2)", trope: "Negligencia Institucional", desc: "Pides ayuda al doctor y al sacerdote y responden que 'es un show y exageras'." },
      { num: 8, title: "Vampire heart", trope: "La Madre Vampira", desc: "Primera confrontación directa en segunda persona ('You drank their souls'): devora el espíritu de sus hijos." },
      { num: 9, title: "The Black Cat", trope: "Poe / Culpa Emparedada", desc: "Los crímenes ocultos bajo el concreto helado y la soga al cuello llamada 'familia'." },
      { num: 10, title: "Psycho", trope: "Tríada de voces", desc: "Partirse en tres ('Me, you, and him') hablando solo en el pasillo para sobrevivir a la madre." },
      { num: 11, title: "Succubus", trope: "El Corazón Real del Álbum", desc: "Tras el campo de cempasúchil y las sábanas de seda, el protagonista habita el insulto: se vuelve súcubo como armadura." },
      { num: 12, title: "Frankenstein", trope: "El Cuerpo que Queda", desc: "El primogénito como experimento en el sótano, cosido con los traumas de ella y de él, cortado con tape rewind." }
    ]
  },
  {
    marker: "Tracking Marker 3 (Pista 13 - Cierre)",
    stage: "El Apagado Final [Bad Ending / The Further]",
    tracks: [
      { num: 13, title: "Insidious (TM 3)", trope: "Crisis y Tinta de Sangre", desc: "En la alfombra del departamento solitario, olvida tomar sus pastillas para el corazón y la ansiedad. Siente frío y calma mientras el pulso baja y el demonio escribe con su sangre y médula." }
    ]
  }
];

// 3. SISTEMA DE TRANSMUTACIÓN (MONEDA, ESPEJO Y VERSIÓN OSCURA)
const transmutationData = [
  {
    title: "🪙 Concepto 1: Moneda (Dos Caras de una Idea)",
    subtitle: "Comparten el núcleo conceptual pero mutan en ritmo, perspectiva y letra.",
    items: [
      "<strong>I don't wanna know 1.0 vs. 2.0:</strong> La 1.0 es evasión pasiva; la 2.0 es la victoria defensiva del ego.",
      "<strong>Children's game / Hide & seek:</strong> Del acto de huir de casa a la mecánica táctica para que 'Ella' no lo encuentre.",
      "<strong>Soul's fire / Fire:</strong> De luchar por una chispa de esperanza al deseo maníaco de quemar todos los recuerdos.",
      "<strong>The water won't cleanse / The water:</strong> Una cara admite el 'trato silencioso' (vender el cuerpo) y la otra ejecuta el ritual inútil en la ducha.",
      "<strong>Self love / My own skin:</strong> Dos perspectivas sobre el autodescubrimiento físico como único refugio cálido.",
      "<strong>Fleeting Nights / Just for tonight:</strong> La transición rítmica hacia el deseo sin ataduras que abre la puerta a Dolly.",
      "<strong>Angel in disguise / Fallen illusion:</strong> Dos caras de la máscara social tras tener las alas rotas por alguien conocido."
    ]
  },
  {
    title: "🪞 Concepto 2: Espejo (Misma Letra, Distinta Alma)",
    subtitle: "Disonancia cognitiva donde el cambio de arreglo musical transforma el significado sin alterar las palabras.",
    items: [
      "<strong>Más/Age vs. Más/Ag:</strong> 'Hermanas siamesas'. La V1 crea un shock silencioso con ritmo hipnótico/relajante; la V2 explota en Electro-Hyperpop y Reguetón.",
      "<strong>I'm Ok (1.0 vs. 2.0):</strong> La 1.0 es la mentira cotidiana para encajar; la 2.0 es el 'funeral de la paz mental' con cuerdas y coros de iglesia.",
      "<strong>When I'm gone vs. Before I cry:</strong> Dos producciones opuestas para reflejar el bucle atrapado del abatimiento.",
      "<strong>Sickness vs. My fault:</strong> La misma esencia de 'suciedad' que cambia de estilo para representar el momento terminal de la sobredosis en el clóset.",
      "<strong>Ring Ring (The EP):</strong> 9 versiones (Toy Phone, Nokia, Stuart Hughes Gold) que reinterpretan la misma mentira telefónica."
    ]
  },
  {
    title: "🌑 Concepto 3: Versión Oscura (Corrupción X-Y-Z)",
    subtitle: "La canción original de la Era 1 se oxida y afila en 'The Dark Side of the Moon' (Álbum 0).",
    items: [
      "<strong>Era X (Paralela al origen):</strong> <em>Corpse Party</em> (oscura de <em>Bittersweet Loneliness</em>) • <em>Poltergeist</em> (oscura de <em>Ghost Love</em>) • <em>The Way You Made Me</em> (oscura de <em>The Worst Son</em>).",
      "<strong>Era Y (Puente de evasión):</strong> <em>Razor Heart</em> (oscura de <em>Paper Heart</em>) • <em>The Rusty Shell</em> (oscura de <em>Unseen Brilliance</em>) • <em>I Don't Wanna Know</em> (oscura de <em>Disappear</em>) • <em>Attention</em> (oscura de <em>Invisible Boy</em>) • <em>ADDICTED</em> (oscura de <em>Long Nights</em>).",
      "<strong>Era Z (Sentencia final):</strong> <em>Immaculate Prison</em> (oscura de <em>Take Me Home</em>) • <em>Plastic Flowers</em> (oscura de <em>Withered Roses</em>) • <em>Broken Doll</em> (oscura de <em>Hide & Seek</em>)."
    ]
  }
];

// 4. LOS 7 MANDAMIENTOS DE LA COLD LAW
const coldLawData = [
  { num: "1", rule: "No se habla de lo que te duele", lore: "La raíz del silencio forzado en 'Invisible Boy' y 'Cold at home'." },
  { num: "2", rule: "No se recuerdan los gritos pasados", lore: "La prohibición de evocar la violencia física documentada en 'Poltergeist' y 'Purple Crayon'." },
  { num: "3", rule: "Siempre una cara diferente para el público", lore: "El ritual de los sábados en 'Sabbath' y la máscara social en 'I'm Ok'." },
  { num: "4", rule: "Nunca dirás que estás mal", lore: "El firmware defectuoso que empuja a la ceguera voluntaria en 'Indifference' y 'Lenses'." },
  { num: "5", rule: "Si lloras te daré razones para llorar", lore: "El terror doméstico en 'Hide & Seek', 'Juegos de un niño' y 'Red/Blue Ball'." },
  { num: "6", rule: "Sé que te duele, pero me duele más a mí", lore: "Gaslighting materno directo en 'Red Yoyo', 'The Worst Son' y 'The Way You Made Me'." },
  { num: "7", rule: "Te amo, aunque no lo diga y aunque te duela", lore: "Manifiesto central de 'Mommy's Love' y 'Heavy Love' que empujó a I.B. a 'Silk sheets' y 'Marigold Scent'." }
];

// 5. DISCOGRAFÍA COMPLETA POR ERAS Y EPs CONCEPTUALES
const COVER_ROOT = "https://darkcry10.github.io/assets/covers/";

const pillarEraData = [
  { id: "pilar-01", number: "01", title: "The Invisible Boy", subtitle: "Era 1.0 · Herida primaria · Infancia doméstica",
    description: "La génesis de la discografía: I.B. aprende a hacerse invisible bajo la Cold Law. Violet articula los recuerdos escritos por el autor; SadMuse 1.0 da forma a poemas que ya existen, mientras Suno aporta su sonido y voz en un bedroom pop íntimo y contenido.",
    anchor: "pilar-01", cover: "01-p01-the-invisible-boy.webp" },
  { id: "pilar-02", number: "02", title: "Crying in the Bubblebath", subtitle: "Era 2.0 · Transacción fallida · Purificación imposible",
    description: "El cuerpo intenta negociar el afecto y el agua no puede lavar la memoria. Durante la creación de este Pilar se utilizó Donna AI, dentro de la etapa inicial del proyecto, para dar tratamiento a un registro más árido, atravesado por ecos, pulsos y despertares cíclicos. La escritura de las letras permaneció en manos del autor.",
    anchor: "pilar-02", cover: "12-p11-crying-in-the-bubblebath.webp" },
  { id: "pilar-03", number: "03", title: "Walking through the Blue street", subtitle: "Era 3.0 · Ciudad · Entumecimiento",
    description: "La metrópolis no cura la herida: amplifica el aislamiento. Violet camina entre lluvia, neón y sintetizadores repetitivos mientras la sensibilidad orgánica se extingue.",
    anchor: "pilar-03", cover: "17-p16-walking-through-the-blue-street.webp" },
  { id: "pilar-04", number: "04", title: "I'm bad, so Bad", subtitle: "Era 4.0 · Dolly · Mutación psíquica",
    description: "La vulnerabilidad se cubre con una armadura de neón. Dolly toma el micrófono, prescinde de los traductores algorítmicos y transforma la necesidad de amor en una fachada de poder.",
    anchor: "pilar-04", cover: "19-p18-i-m-bad-so-bad.webp" }
];

const archiveProjectData = [
  { eyebrow: "ORIGEN · SIDE A", title: "My LIVE “HOME”", subtitle: "El cuaderno que conserva la infancia de Invisible Boy.",
    description: "Una memoria doméstica presentada como cuaderno infantil: dibujos, crayones, pequeños objetos y anotaciones que dejan ver lo que el niño todavía no sabe explicar.",
    relation: "Archivo de origen", cover: "33-p31-my-live-home-side-a.webp", links: [{ label: "Abrir el cuaderno de dibujo", url: "https://darkcry10.github.io/MyLIVEHOME/" }] },
  { eyebrow: "SUPERVIVENCIA · SIDE B", title: "A Plea for Shelter", subtitle: "Un teléfono encontrado y dos particiones de memoria.",
    description: "El registro abandona el hogar y adopta la forma de un expediente recuperado. La ruta final se divide entre Soul Road y Body Road: dos respuestas distintas a una misma desprotección.",
    relation: "Continuación conectada con My LIVE “HOME”", cover: "35-p33-a-plea-for-shelter-my-live-home-side-b.webp", links: [{ label: "Encontrar el teléfono", url: "https://darkcry10.github.io/APleaforShelter/" }] },
  { eyebrow: "PERSPECTIVA · ARCHIVO MATERNO", title: "Mommy's Playground", subtitle: "La infancia narrada desde la lógica de los juguetes.",
    description: "Yoyos, trompos y pelotas dejan de ser objetos inocentes: la metáfora del juego permite observar el control y la manipulación desde una voz distinta a la de I.B.",
    relation: "Obra conceptual conectada con el origen", cover: "34-p32-mommy-s-playground.webp",
    links: [
      { label: "Abrir la guía disciplinaria", url: "https://darkcry10.github.io/MommysPlayground/" }
    ] },
  { eyebrow: "TRANSVERSAL · ÁLBUM 0", title: "The Invisible Boy 2.0: The Dark Side of the Moon", subtitle: "Una dimensión no lineal organizada en X, Y y Z.",
    description: "Las versiones oscuras no se colocan como una continuación cronológica sencilla. Reescriben motivos de la obra original en coordenadas paralelas, puentes de evasión y sentencias finales.",
    relation: "Archivo transversal", cover: "29-p27-the-invisible-boy-2-0-the-dark-side-of-the-moon.webp" },
  { eyebrow: "DIARIO · ARCHIVO RELACIONAL", title: "Your Eromenos", subtitle: "Confesión, doce entradas y una segunda historia en las láminas.",
    description: "Un manifiesto íntimo construido con apuntes escolares, llaves, espejos, puertas y referencias clásicas. El diario cuenta una versión; los objetos y las imágenes conservan indicios que no siempre se verbalizan.",
    relation: "Vínculo de Eros · no debe confundirse con la historia de Toño", cover: "Your Eromenos.webp", coverThumb: "01-webp-alta/Your Eromenos.webp",
    links: [{ label: "Abrir la investigación escolar", url: "https://darkcry10.github.io/YourEromenos/" }] },
  { eyebrow: "DIARIO · ERA 1.9", title: "When the sky turned crimson (and warm)", subtitle: "Una libreta perdida organizada por días, semanas y meses.",
    description: "El relato de I.B. y Toño se despliega como un doble acto: ilusión de refugio, encuentro, conflicto religioso, memoria corporal y pérdida. Es un vínculo distinto al de Your Eromenos.",
    relation: "Toño y Eros son personajes distintos", cover: "10-p09-when-the-sky-turned-crimson-and-warm-side-a.webp", links: [{ label: "Leer el diario perdido", url: "https://darkcry10.github.io/CrimsonSky/" }] },
  { eyebrow: "MASTER TAPE · 13 PISTAS", title: "The Horror Film That Is My Life", subtitle: "La biografía convertida en una cinta VHS de terror.",
    description: "Trece películas y tres Tracking Markers organizan experiencias de infancia, juventud y adultez. El terror funciona como lenguaje para nombrar aquello que antes no podía explicarse.",
    relation: "Lectura biográfica y transversal", cover: "30-p28-the-horror-film-that-is-my-life.webp", links: [{ label: "Reproducir la cinta maldita", url: "https://darkcry10.github.io/HorrorFilm/" }] },
  { eyebrow: "AMPLIACIONES · ERA 4 / 5", title: "Dolly & DCX — Ice Throne, Therian & Shadow & Ban",
    subtitle: "Identidad, máscara, autonomía y conflicto con la interfaz.",
    description: "Las expansiones asociadas a Dolly y DCX desarrollan la relación entre identidad, máscara, deseo y control de la propia imagen. En la Therian Collection, las figuras felinas, caninas y ferales expresan instinto, territorialidad y una respuesta simbólica frente a la contención. The Ice Throne, Therian Collection, Shadow & Ban y Bad baby amplían la Era 4 sin sustituir el Pilar I'm bad, so Bad.",
    relation: "Proyectos y colecciones complementarias · no son nuevos pilares cronológicos", covers: ["38-p36-the-ice-throne.webp", "51-p46-therian-collection-kitty-kitty.webp", "59-p49-shadow-ban.webp"] },
  { eyebrow: "ERA 3 · RAMA CONCEPTUAL", title: "Black Tuesday EP", subtitle: "La asfixia económica y el cansancio de la vida adulta.",
    description: "Cadenas de números, deudas, intereses y trabajo convierten la precariedad en una presión cotidiana. Se conecta temáticamente con la ciudad y la vida adulta, sin ser uno de los cuatro Pilares matrices.",
    cover: "60-black-tuesday-ep.webp" },
  { eyebrow: "PROYECTO ANUNCIADO · ARCHIVO DOMÉSTICO", title: "Smoke In The Kitchen", subtitle: "Un recetario de 1955 que se abre en dos decisiones.",
    description: "Cinco recetas forman el tronco común. Después, Dolly's Path aviva el fuego y Violet's Decision permanece entre humo y anestesia. El formato de cocina transforma el deseo, el hambre y la resignación en lenguaje doméstico.",
    relation: "Proyecto anunciado para el 26 de noviembre de 2026", cover: "61-smoke-in-the-kitchen.webp", links: [{ label: "Abrir el recetario de 1955", url: "https://darkcry10.github.io/SmokeInTheKitchen/" }] }
];

const songLoreDatabase = [
  // THE HORROR FILM THAT IS MY LIFE
  {
    title: "Possession & Alien (TM 1 - Pistas 1 y 2)",
    category: "horror",
    album: "The horror film that is my life",
    character: "I.B. 🫥",
    analysis: "En 'Possession', el nacimiento es retratado como un desgarramiento ('From your bloody body, my own body was torn') que hereda la oscuridad materna desde la semilla. En 'Alien', el niño queer despierta al anochecer sintiéndose fuera de este planeta mientras su madre mira la televisión sin comprender su naturaleza.",
    lyrics: `[Possession - Chorus]
But me, oh what happened to me?
The shadows took over, possessed since a seed
Inheriting your blood, the scars and the pain
Hiding the sorrow while going insane
This is my cursed possession!

[Alien - Chorus]
You hear the moon calling through whispers of gray,
Deep down you know that the cold is okay.
You stare at the stars, wishing for another place,
'Cause down here on Earth, you just feel out of space.`
  },
  {
    title: "The shape of water & Zombie (Pistas 3 y 4)",
    category: "horror",
    album: "The horror film that is my life",
    character: "I.B. 🫥",
    analysis: "La escuela como segundo escenario de tortura: en 'The shape of water' le prohíben entrar al aula hasta que se corte el cabello largo, castigando su intento de verse 'pretty'. En 'Zombie', su delgadez e insomnio hacen que lo llamen muerto en vida, pero el puente revela que prefiere las piedras de los niños antes que enfrentar la sombra de 'Ella' en casa.",
    lyrics: `[The shape of water - Verse 3]
I asked the teachers to let me look pretty,
My short hair just makes me feel so gritty.
But a boy with long hair is their biggest fear,
They forced me to cut it to keep me here.

[Zombie - Bridge]
Their words are sharp, but they are only kids 
It’s nothing compared to the things that She says 
I'd rather take their stones and their silent bids 
Than face Her dark shadow when the daylight ends.`
  },
  {
    title: "Sabbath & Poltergeist Vol. 2 (Pistas 5 y 6)",
    category: "horror",
    album: "The horror film that is my life",
    character: "I.B. 🫥",
    analysis: "Cierre del Tracking Marker 1. 'Sabbath' expone las reuniones familiares de los sábados como un aquelarre donde sacrifican la juventud de los hijos para fingir perfección. 'Poltergeist Vol. 2' muestra al niño escondido tras la puerta de madera abrazando a su león de peluche mientras los gritos retumban en su cráneo.",
    lyrics: `[Sabbath - Chorus]
Every Saturday you call the session
Where we sacrifice a piece of who we are
Bound together in a dark confession
Every Saturday we wear the disguise
At least we get to fake that we are whole

[Poltergeist Vol. 2 - Bridge]
I hide behind the wooden door, trying to block her name
My only friend, my stuffed lion toy
Heard my wild crying, a broken little boy`
  },
  {
    title: "Exorcism, Vampire heart & The Black Cat (Pistas 7, 8 y 9)",
    category: "horror",
    album: "The horror film that is my life (TM 2)",
    character: "I.B. 🫥 / Violet 🎧",
    analysis: "El acto de nombrar a los monstruos. 'Exorcism' denuncia al médico que llama 'exageración' al trauma; 'Vampire heart' señala en segunda persona a la madre que devora el espíritu de sus hijos; y 'The Black Cat' invoca a Edgar Allan Poe para describir a la familia como una soga alrededor del cuello.",
    lyrics: `[Vampire heart - Chorus]
Lady of the night with a vampire heart,
Feeding on the innocence of youth and grace,
Draining those who loved you right from the start,
Leaving them cold, hollowed out, erased.

[The Black Cat - Chorus]
As dark as the night, but warm as the dawn
It’s the hell that will swallow us before too long
Losing the spark in my eye, watching it fall
With a rope around my neck that you call family after all`
  },
  {
    title: "Psycho & Succubus (Pistas 10 y 11)",
    category: "horror",
    album: "The horror film that is my life (TM 2)",
    character: "Tríada I.B. • Violet • Dolly",
    analysis: "'Psycho' documenta la partición de la mente en tres ('Me, you, and him') hablando a solas en el pasillo. 'Succubus' es el corazón real del álbum: conectando directamente el campo de cempasúchil (Era 1.5) y el amante de otoño en sábanas de seda (Era 1.9), el joven al que llamaron 'demonio' decide habitar el insulto y volverse súcubo para devorar a los hombres antes de ser destruido.",
    lyrics: `[Psycho]
1, 2, 3 Tell me what do you see?
When you talk to yourself in the hall...
Me, you, and him, we all know what it means

[Succubus - Intro & Verse 2]
In a field of marigolds, where the colors used to bloom...
Where my quiet innocence was buried in the gloom.
Then came the autumn lover, the one who claimed he cared,
on sheets of heavy silk, he showed me how to be impaired...
And I’ll be... the demon in the night eating souls to make them pay.`
  },
  {
    title: "Frankenstein & Insidious (TM 3 - Pistas 12 y 13)",
    category: "horror",
    album: "The horror film that is my life",
    character: "I.B. 🫥 (Cierre de la Cinta)",
    analysis: "En 'Frankenstein', el primogénito se reconoce como un experimento de sótano cosido con la frialdad de ella y el caos de él. En 'Insidious' (Bad Ending), tras olvidar sus pastillas para el corazón y la ansiedad en medio de una crisis de llanto en la alfombra de su sala, siente frío y calma mientras el reloj se detiene y el demonio usa su sangre y médula como tinta.",
    lyrics: `[Frankenstein - Chorus]
I am not complete, there’s a piece I’m always missing,
She left me shattered, but overflowing...
Built with different traumas taking their toll.

[Insidious - Chorus & Outro]
I wanna be okay, I swear to God
But my hands and my feet are freezing cold...
But they never pulled the demon out of me
The one who uses my blood as its ink
Uses my marrow to write what it sees
Torturing my soul... I'm addicted on the brink...`
  },

  // MOMMY'S PLAYGROUND
  {
    title: "Red Yoyo & Blue Yoyo",
    category: "mommy",
    album: "Mommy's playground",
    character: "'Ella' (La Madre) hacia I.B.",
    analysis: "Canciones cantadas desde la escalofriante perspectiva de 'Ella'. El niño es reducido a un yo-yo que la madre sube cuando quiere jugar y estrella contra el suelo cuando llega cansada o aburrida, culpándolo por estar cerca ('you are the toy where my demons collide').",
    lyrics: `[Red Yoyo - Chorus]
Up and down, high and low, my little yoyo,
Today I give you love, tomorrow I lose control.
I say "I love you" only when I want to play,
And when I get tired, on the floor you will stay.
Down, go down, and drop to the floor,
I'll pull you right up when I'm wanting some more.

[Blue Yoyo - Verse 2]
What is a little blood between just us two?
If I make you bleed, it's to show my love for you.`
  },
  {
    title: "Blue Top & Red Top",
    category: "mommy",
    album: "Mommy's playground",
    character: "'Ella' (La Madre)",
    analysis: "La metáfora del trompo ('Spin, spin around again'): el gaslighting materno exigiendo que el hijo deje de hacer preguntas, no mire las sonrisas de otras familias y adapte su mente a los deseos de ella, asegurándole que 'sin mí no eres nadie y no sobrevivirás afuera'.",
    lyrics: `[Blue Top - Chorus]
Spin, spin, and spin around again,
I promise one day I'll change how I think then.
Spin, spin, do it just one more time,
Settle for this reality, fall into line...
You're foolish if you think that I'll rearrange,
It's your way of thinking my desires will change.`
  },
  {
    title: "Red Ball, Blue Ball, Mommy's Love & Heavy Love",
    category: "mommy",
    album: "Mommy's playground",
    character: "'Ella' (La Madre)",
    analysis: "La culminación de la Cold Law (Mandamientos 6 y 7). En 'Red/Blue Ball' destruye la autoestima del hijo ('Eres un tonto, un inútil... solo lo dije porque estaba enojada, ¿quién podría amarte sino yo?'). En 'Mommy's Love' y 'Heavy Love' declara que los abrazos son para débiles y que su amor es frío y pesado, pero nunca cambiará.",
    lyrics: `[Red Ball - Chorus]
Will anyone ever love someone like you?
I do it, you should be grateful that I do...
You are a fool (I only said it 'cause I was mad).
You're useless (I said it 'cause I was tired and sad).
Just look at you, who'd love you? (I said it without a thought).

[Heavy Love - Chorus]
I am this way, and I am never gonna change...
My love, although it's cold, is tough but it is real,
Deep inside my heart, it's a heavy love to feel.`
  },

  // BLACK TUESDAY EP
  {
    title: "Chains of numbers, Drowning in Dues & Caught in the haze",
    category: "tuesday",
    album: "Black Tuesday EP",
    character: "I.B. Adulto / Violet",
    analysis: "El trauma de la precariedad económica en la adultez. Los números en rojo se vuelven cadenas, el sueldo desaparece como un fantasma apenas llega y la pantalla rota del celular refleja un estado interno fracturado mientras espera el autobús bajo la lluvia.",
    lyrics: `[Chains of numbers - Chorus]
The numbers are chains now, a fear I can't dismiss
They treated me like a criminal, misunderstanding my bliss...
Money, money, for God's sake, why do I lack?
It's not that I wanted, I just want to survive this track.

[Drowning in Dues - Chorus]
And I'm drowning in dues, a Phantom I choose.
A ghost inside my very room, watching all my money bloom
Just to vanish into empty gloom.`
  },
  {
    title: "The sound of debt, High interest lonely & Black Tuesday",
    category: "tuesday",
    album: "Black Tuesday EP",
    character: "I.B. Adulto",
    analysis: "Desmonta la promesa rota de la infancia ('Mamá dijo: obtén un título para ser alguien'). A pesar de haberse desvelado estudiando y trabajando sin descanso, las tasas de interés, el desempleo y una economía salvaje lo dejan hundido en el sofá bajo un 'sol negro' en un Martes Negro.",
    lyrics: `[High interest lonely - Chorus]
Stop swallowing my life, stop eating my gold,
I curse this plastic card and the lies I was told...
Mom said "get a degree to be someone, my dear,"
But the classroom was silenced by hunger and fear.

[Black Tuesday - Chorus]
In the endless pouring rain of the bills I have to pay
In a wild economy, where the bottom is where I stay
Underneath the cruelest light, of a black sun shining down
My sweet honey money's gone, before I even hit the town.`
  },

  // SHADOW & BAN
  {
    title: "Algorithm, Ghost in the Interface & System error",
    category: "shadowban",
    album: "Shadow & Ban",
    character: "DarkCry 1.0 / DCX",
    analysis: "La confrontación directa contra la tiranía digital. En 'Ghost in the Interface' (evolución de Book of faces) y 'System error', denuncia cómo un juez algorítmico invisible cierra y borra su cuenta y más de cien almas conectadas por un pequeño error de una cuenta antigua de hace tres años, justo cuando había decidido hacer las cosas bien.",
    lyrics: `[Ghost in the Interface - Chorus]
Who gave you the power to act like a king?
To wipe out my world and to tear off my wings?
I did nothing wrong, so why do you hate?
Your book of faces has written my end,
and now I’m a ghost to every single friend.

[System error - Verse 2]
It’s a delayed sentence you threw in my face,
an algorithm judge that erased my whole space.
An invisible world, and more than a hundred besides,
erased in a second where logic divides.`
  },
  {
    title: "Whit arrow, red box / You, Tu & A shot of fake love / An Instant, A gram",
    category: "shadowban",
    album: "Shadow & Ban",
    character: "DarkCry 1.0 / Dolly & DCX",
    analysis: "Doble par de canciones Espejo bilingües sobre las grandes plataformas. 'Whit arrow, red box' y 'You, Tu' atacan a la 'flecha blanca en el cuadro rojo' (YouTube) por volverse un juez de cristal insensible que apaga la luz del cuarto del artista. 'A shot of fake love' y 'An Instant, A gram' exponen la adicción a los corazones en pantalla (Instagram) que primero alimentan el ego y luego te silencian de un clic.",
    lyrics: `[You, Tu - Coro & Verso 2]
You, Tu, You, Tu... Tell me why you're so cruel.
¿Por qué ahora apagas mi luz?
Y me encierras de golpe en el fondo de tu baúl.
Una flecha blanca en un cuadro rojo,
¿Por qué tengo que existir ahora a tu antojo?

[An Instant, A gram - Coro]
Instant (Shot, shot, shot) - Un instante para este amor.
(You have an instant, you have a gram)
Have an instant, have a gram. (Insta... Gram)`
  },

  // MY LIVE HOME & A PLEA FOR SHELTER
  {
    title: "Cold at home, Purple Crayon & Stuffed Lion (Side A)",
    category: "home",
    album: "My LIVE 'HOME' (Side A)",
    character: "I.B. 🫥 (Niñez)",
    analysis: "El núcleo del Side A. Usa elementos infantiles (crayones morados, cuadernos de dibujo y el león de peluche con ojos de botón) para narrar cómo el niño oculta los moretones en los brazos diciendo que 'se cayó' y se refugia en el rincón del clóset antes de decidir escapar en 'Scape'.",
    lyrics: `[Purple Crayon - Chorus]
You painted my arms with a purple crayon
And stained my mouth red when I spoke for too long
If they see the blue, I will say that I fell
It hurts me a little, but it's love, so you tell.

[Stuffed Lion - Chorus]
Crying right here underneath all my covers,
hugging my little stuffed lion so tight.
Hiding away in the dark closet corner,
where only my lion can watch as I cry.`
  },
  {
    title: "Cold All Around, Eat Cigarettes, Locked Door & Need The Green (Side B)",
    category: "home",
    album: "A Plea for Shelter (Side B)",
    character: "I.B. 🫥",
    analysis: "La novela sonora de la huida: Noche 0 en el asfalto helado ('Cold All Around'); fumar un cigarro para calmar el hambre conservando sus poemas ('Eat Cigarettes'); el engaño del hombre que cierra con llave para cobrar el techo con su cuerpo ('Locked Door'); y la decisión de cobrar dólares para no dormir en la estación ('Need The Green').",
    lyrics: `[Eat Cigarettes - Chorus]
I've got nothing left but a single cigarette,
So I'll smoke and I'll smoke to forget the regret...
At least I brought my poems, no matter what the cost.

[Locked Door - Chorus]
He called you inside, and the door was closed tight.
He told you "you can stay," promising the light,
(But you know that the shelter was part of the scam.)`
  },
  {
    title: "Crying In The Bubblebath (9a) vs. Captivity (9b)",
    category: "home",
    album: "A Plea for Shelter (Side B - Los Dos Caminos Finales)",
    character: "I.B. 🫥 / Semilla de Dolly 💛🖤",
    analysis: "El doble clímax del Side B: 'Soul Road' (9a) donde el daño se interioriza y el alma se rinde en la bañera, frente a 'Body Road' (9b - Captivity), donde el joven león queda enjaulado pero jura que algún día 'volteará todo este juego' (el easter egg pre-nacimiento de Dolly).",
    lyrics: `[9a: Soul Road - Crying In The Bubblebath]
I’ll fill the bathtub with water to the brim
With delicate bubbles while the lights go dim
I know I had a whole lifetime ahead
But I don't want to suffer in this porcelain bed

[9b: Body Road - Captivity]
Now I'm just a young lion locked in a cage,
Caught in his bed by the hunter's dark rage...
I'm just a foolish young boy, making a show,
But someday I'll flip this whole game, that's for sure.`
  },

  // WHEN THE SKY TURNED CRIMSON
  {
    title: "Honey lonely, Otoño & Silk sheets (Lado A)",
    category: "crimson",
    album: "When the sky turned crimson (and warm)",
    character: "I.B. (16 años)",
    analysis: "La construcción de la ilusión en la Era 1.9: el adolescente de 16 años conoce por internet a Toño (20 años), ignora la diferencia de edad por su hambre de afecto, viaja a conocerlo en otoño y acepta el dolor físico en las sábanas de seda del hotel con tal de no quedarse solo.",
    lyrics: `[Honey lonely - Bridge]
You're twenty years old, turned to a new page
If I am sixteen, what does it mean?
Just tell me you love me behind the screen...

[Silk sheets - Final Chorus]
Stripping me down, wrapped in silk on the bed
You tell me you love it, taking the lead
It hurts just a little... but I love that you're here instead.`
  },
  {
    title: "The cross of love, Ocean abyss & Burn the heaven (Lado B)",
    category: "crimson",
    album: "When the sky turned crimson (and warm)",
    character: "I.B. 🫥",
    analysis: "El descenso a las cenizas. En 'The cross of love', la madre fanática de Toño lo hace arrodillarse y lo golpea con una vara frente a la cruz de plata. En 'Ocean abyss' intenta lavar en la ducha el cempasúchil previo de la Era 1.5. En 'Burn the heaven', la madre quema sus cuadernos de poemas y su león de peluche mientras Toño permanece arrodillado sin defenderlo.",
    lyrics: `[Ocean abyss - Verse 1]
The water tried one day to wash the marigold scent away
From something I let happen, being young and so naive...

[Burn the heaven - Climax]
Please tell me, tell them to stop, I'm just a foolish boy!
My stuffed lion was my everything, my only joy!
The only thing that kept the lonely child in me!
Why is my stuffed lion burning in this mess?!`
  },

  // ÁLBUM 0 (X-Y-Z) & DOLLY / DCX
  {
    title: "Corpse party, Poltergeist & The way you made me (Era X)",
    category: "darkside",
    album: "The Dark Side of the Moon (Álbum 0 - Índices X1, X2, X3)",
    character: "I.B. (Sombra Paralela)",
    analysis: "Las Versiones Oscuras paralelas al Álbum 1: mientras el I.B. original lloraba en silencio, la Era X convertía la cena solitaria en una fiesta de cadáveres ('Corpse party'), el amor fantasma en golpes contra el suelo ('Poltergeist') y la culpa de 'The Worst Son' en acusación directa a la madre ('The way you made me').",
    lyrics: `[Corpse party - Chorus]
You built a party out of hollow bones,
Look at their eyes, just empty stones.
If I leave, you’re nothing on your own,
One day you’ll reap the grief you've shown.

[The way you made me - Verse 3]
But you won't always be able to show that face,
Mother, I'll tell you, the time has come.`
  },
  {
    title: "Razor heart, The rusty shell & Attention (Era Y)",
    category: "darkside",
    album: "The Dark Side of the Moon (Álbum 0 - Índices Y1, Y2, Y4)",
    character: "I.B. / Violet",
    analysis: "El puente de endurecimiento: el corazón de papel se afila en cuchilla ('Razor heart'), el brillo académico ignorado se oxida en un caparazón que usa el dolor como combustible ('The rusty shell') y la invisibilidad se transforma en exigencia voraz de ser mirado por hombres ('Attention').",
    lyrics: `[Razor heart - Chorus]
I own a paper heart that turned into a blade,
cutting everyone through the mess I've made.

[The rusty shell - Chorus]
I struggle so much just to understand you,
The pain I carry is the strength I cling to.
It’s the heavy fuel for this rusty old shell,
the one that protects me from this living hell.`
  },
  {
    title: "Immaculate prison, Plastic flowers & Broken doll (Era Z)",
    category: "darkside",
    album: "The Dark Side of the Moon (Álbum 0 - Índices Z1, Z2, Z3)",
    character: "I.B. Adulto",
    analysis: "La Sentencia Final (Parte 9 de la cronología, posterior a Bad Baby). Al obtener finalmente un hogar real y un esposo, el protagonista descubre que crecer entre 'flores de plástico' le impide habitar la paz, sintiéndola como una cárcel inmaculada que sabotea mediante la infidelidad y tratando a quien lo ama como una muñeca rota.",
    lyrics: `[Immaculate prison - Chorus]
Now my comfort and my perfect little life
Are nothing but an immaculate jail.
I grew up surrounded by flowers of plastic,
In a home where the love was never quite real.

[Broken doll - Chorus]
Just like a toy, I treated you so,
Tossing you high, then letting you go.
Loving you cruelly... I’m the one to blame.`
  },
  {
    title: "More/Dame más, Double Trouble, DELETE My Age & Under my thumb",
    category: "dolly-dcx",
    album: "I'm bad, so bad / Bad Baby / The Ice Throne",
    character: "Dolly 💛🖤 & DCX 🦊",
    analysis: "La Era de la Liberación. Dolly y DCX rompen sistemáticamente los 7 mandamientos de la Cold Law: de la invisibilidad pasan al exhibicionismo en Full HD ('Under my thumb'), y del vacío paterno pasan al dominio sobre figuras de autoridad ('Double Trouble', 'DELETE My Age').",
    lyrics: `[More/Dame más - Chorus]
Baby yo no soy tuya,
Yo no soy de tu propieda-a-a-a-ad
Así que me busco a otro papi
Que en la cama me haga grita-ah-ah-ah-ar

[Delete My Age - Chorus]
Delete my age, pretend I'm danger
Say my name like I'm a stranger
You're not my father, but you could be my man.`
  }
];

// 7. ÍNDICE OFICIAL DE LAS 169 OBRAS REGISTRADAS (CERTIFICADO Nº 2026-A-8311)
const registered169Works = [
  "1. Book of faces", "2. System error", "3. Don't make me go", "4. He Was Older", "5. He was much older",
  "6. Find me", "7. Little Puppy Need Rest", "8. Easy Way Out", "9. Caught in the haze", "10. Chains of numbers",
  "11. Drowning in Dues", "12. The sound of debt", "13. High interest lonely", "14. Black Tuesday", "15. Ring Ring",
  "16. Pendulum heart", "17. Sugar-Coated Lies", "18. These Mirrors", "19. Ashes and Goodbye", "20. Kiss and forget",
  "21. I don't want", "22. In the end", "23. Though It Hurts", "24. The Last Call", "25. I'm Ok",
  "26. Fallen illusion", "27. Cold Exit", "28. Too late, for me", "29. Crystal logic", "30. I don't want to cry",
  "31. Paper Vows", "32. Síndrome de Sombra", "33. Shattered Life", "34. A Bitter Slip", "35. Don't call me back",
  "36. Dwell in the Dark", "37. Chasing Seconds", "38. Tan tarde", "39. Dear AI", "40. Tell me",
  "41. Echoes in the neon", "42. Memories of Last Party", "43. Poli/Amor", "44. Searching for light", "45. Dead wings",
  "46. A brand new headache", "47. Soy tu perro", "48. Band-Aids", "49. A word, love", "50. El Chico invisible",
  "51. Soy el chico Invisible", "52. El peor hijo", "53. Soy el peor hijo", "54. Rosas marchitas", "55. 3:00 AM",
  "56. Juegos de un niño", "57. Corazon de papel", "58. Agridulce soledad", "59. I miss the dirt", "60. Angel del invierno",
  "61. 11:11", "62. Once once", "63. Let you go", "64. Forbidden bite", "65. Delete My Age",
  "66. Man better be hung", "67. Cream/Pie", "68. Invisible Boy", "69. Paper Heart", "70. Children's Game",
  "71. Hide & Seek", "72. Unseen Brilliance", "73. Bittersweet Loneliness", "74. Disappear", "75. Ghost Love",
  "76. Long Nights", "77. Withered Roses", "78. Take me home", "79. The Worst Son", "80. My own skin",
  "81. Self love", "82. Curious for love", "83. Marigold Scent", "84. Sickness", "85. After the shame",
  "86. Moving on", "87. Fleeting Warmth", "88. Fire", "89. Soul's fire", "90. Drenched",
  "91. The water", "92. Wake up at 3:00 AM", "93. The awakening", "94. The same awakening", "95. Waking in circles",
  "96. Indifference", "97. Blurred view", "98. In my tears", "99. More than just letters", "100. A hundred lines",
  "101. Angel in disguise", "102. S.O.S", "103. When I'm gone", "104. I'm Sorry", "105. Find me in every tree",
  "106. I'm down", "107. Erase You", "108. Run from home", "109. Lonely nights", "110. Bitter Fumes",
  "111. Lost", "112. Lost in the city", "113. Fleeting Nights", "114. Just for tonight", "115. Broken",
  "116. Midnight steps", "117. Hotel bed", "118. Walking through the blue Street", "119. ¡Oh my!", "120. ¡Oh more!",
  "121. ¡Oh ah!/Tonight", "122. Go go", "123. Come & Go", "124. I like so much", "125. Grays pants",
  "126. Más/AG", "127. Double Trouble", "128. Grrr grrr", "129. Married dared", "130. In your car",
  "131. More/Dame más", "132. Another", "133. Miau miau", "134. Wao wao daddy", "135. Bigger than my",
  "136. Lover", "137. Attention", "138. Razor heart", "139. Broken doll", "140. The rusty shell",
  "141. Corpse party", "142. I don't wanna know", "143. Poltergeist", "144. ADDICTED", "145. Immaculate prison",
  "146. The way you made me", "147. Seed of my own hell", "148. Lenses", "149. Armor", "150. Runaway",
  "151. Broke down", "152. Sunglasses at midnight", "153. Fog and conformity", "154. Hidden fire", "155. Ashes of my own hell",
  "156. Dante's inferno PT 1 'Mommy tell me'", "157. Dante's inferno PT 2 'fall'", "158. On my own", "159. Bla bla bla", "160. Rose-Colored glasses",
  "161. Drive", "162. I'M BAD, SO BAD", "163. High, Stay", "164. The ruler", "165. Back to bad",
  "166. Under my thumb", "167. Nopor Queen", "168. Algorithm", "169. Marigold tears"
];

// 8. INICIALIZACIÓN DEL DOM
document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  renderMasterTape();
  renderTransmutation();
  renderColdLaw();
  renderPillarEras();
  renderArchiveProjects();
  filterSongList("all", document.querySelector('[data-filter="all"]'));

  const searchInput = document.getElementById("song-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = normalizeSearch(searchInput.value);
      if (!query) {
        filterSongList("all", document.querySelector('[data-filter="all"]'));
        return;
      }
      const detailed = songLoreDatabase.filter(song =>
        normalizeSearch([song.title, song.album, song.character, song.analysis, song.lyrics].join(" ")).includes(query)
      );
      const indexMatches = registered169Works
        .filter(title => normalizeSearch(title).includes(query))
        .map(title => ({
          title, category: "index169",
          album: "Compilación oficial · El Chico Invisible",
          character: "Índice de 169 obras", analysis: "", lyrics: ""
        }));
      renderSongSelector([...detailed, ...indexMatches]);
      setSearchCount(detailed.length, indexMatches.length, query);
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");
  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      siteNav.classList.toggle("is-open", !isOpen);
    });
    siteNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
      });
    });
  }

  const workCount = document.getElementById("work-count");
  if (workCount) workCount.textContent = String(registered169Works.length);
  const detailCount = document.getElementById("detail-count");
  if (detailCount) detailCount.textContent = String(songLoreDatabase.length);
});

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function setSearchCount(detailed, index, query) {
  const element = document.getElementById("search-count");
  if (!element) return;
  element.textContent = `${detailed + index} coincidencias para “${query}” · ${detailed} fichas agrupadas y ${index} títulos del índice`;
}

function renderCharacters() {
  const container = document.getElementById("characters-container");
  if (!container) return;

  container.innerHTML = charactersData.map(c => `
    <article class="character-card" style="--card-accent: ${c.accentColor};">
      <div class="char-img-wrapper">
        <img src="${c.image}" alt="${c.name}" class="char-img" loading="lazy">
      </div>
      <div class="char-body">
        <div class="char-badge">${c.id.toUpperCase()}</div>
        <h3 class="char-name">${c.name}</h3>
        <p class="char-role">${c.role}</p>
        <p class="char-desc">${c.desc}</p>
        <ul class="char-traits">
          ${c.traits.map(t => `<li>• ${t}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

function renderMasterTape() {
  const container = document.getElementById("master-tape-container");
  if (!container) return;
  container.innerHTML = masterTapeData.map((block, blockIndex) => `
    <article class="marker-card marker-card--${blockIndex + 1}">
      <div class="marker-card__header">
        <span class="marker-card__eyebrow">${escapeHTML(block.marker)}</span>
        <h3>${escapeHTML(block.stage)}</h3>
      </div>
      <ol class="marker-tracklist">
        ${block.tracks.map(track => `
          <li>
            <button type="button" class="marker-track" data-track-title="${escapeHTML(track.title)}">
              <span class="marker-track__number">${String(track.num).padStart(2, "0")}</span>
              <span class="marker-track__body">
                <strong>${escapeHTML(track.title)}</strong>
                <span class="marker-track__trope">${escapeHTML(track.trope)}</span>
                <span class="marker-track__description">${escapeHTML(track.desc)}</span>
              </span>
              <span class="marker-track__arrow" aria-hidden="true">↗</span>
            </button>
          </li>
        `).join("")}
      </ol>
    </article>
  `).join("");

  container.querySelectorAll(".marker-track").forEach(button => {
    button.addEventListener("click", () => jumpToHorrorSong(button.dataset.trackTitle));
  });
}

function renderTransmutation() {
  const container = document.getElementById("transmutation-container");
  if (!container) return;

  container.innerHTML = transmutationData.map(box => `
    <div class="motif-card">
      <h4>${box.title}</h4>
      <p style="color: var(--text-main); font-weight: 600; margin-bottom: 0.8rem;">${box.subtitle}</p>
      ${box.items.map(item => `<p>• ${item}</p>`).join('')}
    </div>
  `).join('');
}

function jumpToHorrorSong(titleQuery) {
  const query = normalizeSearch(String(titleQuery || "").replace(/\bTM\s+\d+\b/ig, ""));
  if (!query) return;
  const terms = query.split(/\s+/);
  const matchesOrdered = title => {
    const words = normalizeSearch(title).split(/\s+/);
    let cursor = 0;
    for (const term of terms) {
      const position = words.indexOf(term, cursor);
      if (position < 0) return false;
      cursor = position + 1;
    }
    return true;
  };
  const detailed = songLoreDatabase.find(song => normalizeSearch(song.title) === query)
    || songLoreDatabase.find(song => normalizeSearch(song.title).includes(query))
    || songLoreDatabase.find(song => matchesOrdered(song.title));
  if (detailed) {
    filterSongList(detailed.category, document.querySelector('[data-filter="' + detailed.category + '"]'));
    selectSongByIndex(window._currentSongList.indexOf(detailed));
  } else {
    const indexedTitle = registered169Works.find(title => matchesOrdered(title));
    if (indexedTitle) renderSongSelector([{
      title: indexedTitle, category: "index169",
      album: "Compilación oficial · El Chico Invisible",
      character: "Índice de 169 obras", analysis: "", lyrics: ""
    }]);
  }
  const archive = document.getElementById("archivo");
  if (archive) archive.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderColdLaw() {
  const container = document.getElementById("cold-law-container");
  if (!container) return;

  container.innerHTML = coldLawData.map(law => `
    <div class="law-card">
      <div class="law-number">MANDAMIENTO 0${law.num}</div>
      <div class="law-rule">"${law.rule}"</div>
      <div class="law-lore">${law.lore}</div>
    </div>
  `).join('');
}

function renderPillarEras() {
  const container = document.getElementById("pillar-eras");
  if (!container) return;
  container.innerHTML = pillarEraData.map(pillar => `
    <article class="era-card era-card--${pillar.number}">
      ${pillar.cover ? `<a class="era-card__cover" href="${COVER_ROOT}01-webp-alta/${pillar.cover}" target="_blank" rel="noopener noreferrer"><img src="${COVER_ROOT}02-miniaturas/${pillar.cover}" alt="Portada oficial de ${escapeHTML(pillar.title)}" loading="lazy" decoding="async"></a>` : ""}
      <div class="era-card__top">
        <span class="era-card__number">${escapeHTML(pillar.number)}</span>
        <span class="era-card__eyebrow">PILAR FUNDACIONAL · ${escapeHTML(pillar.subtitle.split(" · ")[0])}</span>
      </div>
      <h3>${escapeHTML(pillar.title)}</h3>
      <p class="era-card__subtitle">${escapeHTML(pillar.subtitle)}</p>
      <p class="era-card__description">${escapeHTML(pillar.description)}</p>
      <a class="pillar-card-link" href="pilares.html#${escapeHTML(pillar.anchor)}">Leer la ficha completa <span aria-hidden="true">↗</span></a>
    </article>
  `).join("");
}

function renderArchiveProjects() {
  const container = document.getElementById("archive-projects");
  if (!container) return;
  container.innerHTML = archiveProjectData.map((project, index) => `
    <article class="archive-card">
      ${project.covers?.length ? `<div class="archive-card__cover-strip">${project.covers.map((file, coverIndex) => `<a href="${COVER_ROOT}01-webp-alta/${file}" target="_blank" rel="noopener noreferrer"><img src="${COVER_ROOT}02-miniaturas/${file}" alt="Imagen ${coverIndex + 1} de la colección ${escapeHTML(project.title)}" loading="lazy" decoding="async"></a>`).join("")}</div>` : project.cover ? `<a class="archive-card__cover" href="${COVER_ROOT}01-webp-alta/${project.cover}" target="_blank" rel="noopener noreferrer"><img src="${COVER_ROOT}${project.coverThumb || `02-miniaturas/${project.cover}`}" alt="Portada de ${escapeHTML(project.title)}" loading="lazy" decoding="async"></a>` : ""}
      <div class="archive-card__top">
        <span class="archive-card__number">${String(index + 1).padStart(2, "0")}</span>
        <span class="archive-card__eyebrow">${escapeHTML(project.eyebrow)}</span>
      </div>
      <h3>${escapeHTML(project.title)}</h3>
      <p class="archive-card__subtitle">${escapeHTML(project.subtitle)}</p>
      <p class="archive-card__description">${escapeHTML(project.description)}</p>
      ${project.relation ? `<p class="archive-card__relation">${escapeHTML(project.relation)}</p>` : ""}
      ${project.links?.length ? `
        <div class="archive-card__links">
          ${project.links.map(link => `
            <a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} <span aria-hidden="true">↗</span></a>
          `).join("")}
        </div>
      ` : ""}
    </article>
  `).join("");
}

function filterSongList(category, btn) {
  document.querySelectorAll(".filter-chip").forEach(button => button.classList.remove("is-active"));
  if (btn) btn.classList.add("is-active");
  if (category === "all") {
    renderSongSelector(songLoreDatabase);
  } else if (category === "index169") {
    renderSongSelector(registered169Works.map(title => ({
      title, category: "index169",
      album: "Compilación oficial · El Chico Invisible",
      character: "Índice de 169 obras", analysis: "", lyrics: ""
    })));
  } else {
    renderSongSelector(songLoreDatabase.filter(song => song.category === category));
  }
  const searchCount = document.getElementById("search-count");
  if (searchCount) searchCount.textContent = category === "index169"
    ? `${registered169Works.length} títulos del índice oficial`
    : category === "all"
      ? `${songLoreDatabase.length} fichas agrupadas con análisis y extractos`
      : `${songLoreDatabase.filter(song => song.category === category).length} fichas agrupadas`;
}

function renderSongSelector(list) {
  const selector = document.getElementById("track-selector");
  if (!selector) return;
  if (!list.length) {
    selector.innerHTML = `<p class="empty-state">No hay coincidencias en esta categoría.</p>`;
    const detail = document.getElementById("track-detail");
    if (detail) detail.innerHTML = `<div class="detail-placeholder"><span>∅</span><h3>Sin resultados</h3><p>Prueba con otro título o categoría.</p></div>`;
    window._currentSongList = [];
    return;
  }
  window._currentSongList = list;
  selector.innerHTML = list.map((item, index) => `
    <button type="button" class="track-btn ${index === 0 ? "is-active" : ""}" onclick="selectSongByIndex(${index})">
      <span class="track-btn__title">${escapeHTML(item.title)}</span>
      <span class="track-btn__category">${escapeHTML(item.category === "index169" ? "ÍNDICE" : item.category.toUpperCase())}</span>
    </button>
  `).join("");
  displayTrackDetail(list[0]);
}

function selectSongByIndex(index) {
  const list = window._currentSongList || [];
  const buttons = document.querySelectorAll(".track-btn");
  buttons.forEach(button => button.classList.remove("is-active"));
  if (buttons[index]) buttons[index].classList.add("is-active");
  if (list[index]) displayTrackDetail(list[index]);
}

function displayTrackDetail(song) {
  const container = document.getElementById("track-detail");
  if (!container || !song) return;
  if (song.category === "index169") {
    container.innerHTML = `
      <div class="detail-badge">TÍTULO EN EL REGISTRO · 2026-A-8311</div>
      <h3 class="detail-title">${escapeHTML(song.title)}</h3>
      <p class="detail-text">Este título aparece en el índice de la compilación registrada. El portal todavía no dispone de una ficha individual desarrollada para esta obra; aquí no se sustituye la letra original por un texto genérico.</p>
      <div class="detail-document-link">
        <span>CONSULTA DOCUMENTAL</span>
        <a href="mailto:mriospard@gmail.com?subject=Solicitud%20de%20acceso%20a%20${encodeURIComponent(song.title)}">Solicitar acceso autorizado ↗</a>
      </div>
    `;
    return;
  }
  container.innerHTML = `
    <div class="detail-badge">${escapeHTML(song.album)} · ${escapeHTML(song.character)}</div>
    <h3 class="detail-title">${escapeHTML(song.title)}</h3>
    <div class="detail-section-title">Lectura y posición narrativa</div>
    <p class="detail-text">${escapeHTML(song.analysis)}</p>
    <div class="detail-section-title">Fragmento público seleccionado</div>
    <pre class="lyrics-box">${escapeHTML(song.lyrics)}</pre>
    <p class="detail-source-note">Fragmento curatorial del archivo. La letra completa se facilita previa autorización del artista.</p>
    <div class="detail-document-link">
      <span>FUENTE COMPLETA</span>
      <a href="mailto:mriospard@gmail.com?subject=Solicitud%20de%20acceso%20a%20${encodeURIComponent(song.title)}">Solicitar permiso al artista ↗</a>
    </div>
  `;
}

