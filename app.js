// 1. BASE DE DATOS DE INTEGRANTES (CON TUS IMÁGENES REALES)
const charactersData = [
  {
    id: "ib",
    name: "Invisible Boy (I.B.) 🫥",
    role: "El Origen del Dolor • Núcleo a los 16 años",
    image: "assets/I.B..jpg",
    accentColor: "var(--accent-sepia)",
    desc: "Representa el trauma original, el abandono doméstico y la herida de los 16 años bajo la 'Cold Law'. Lleva el reloj de bolsillo del tiempo detenido y el broche Kitsune en el pecho que anticipa su disociación en DCX.",
    traits: [
      "Paleta: Sepia melancólico y tonos vintage",
      "Símbolo: Reloj de bolsillo, león de peluche y cuaderno con gafas",
      "Eras clave: My LIVE 'HOME', The Invisible Boy, Crimson Sky"
    ]
  },
  {
    id: "violet",
    name: "Violet 🎧",
    role: "Vocalista Principal (Eras 1 a 3) • La Voz del Dolor",
    image: "assets/Violet.jpg",
    accentColor: "var(--accent-blue)",
    desc: "Exterioriza todo lo que I.B. calla. Encarna el miedo al rechazo, el llanto bajo la lluvia nocturna y el intento desesperado de lavar la memoria en la ducha de hotel.",
    traits: [
      "Paleta: Azul medianoche y destellos ámbar de farolas",
      "Símbolo: Audífonos grandes como barrera contra el ruido",
      "Eras clave: The Day I Told You, Bubblebath, Blue Street"
    ]
  },
  {
    id: "dcx",
    name: "DCX (DarkCryXXX) 🦊",
    role: "La Contraparte Oscura • Función Pura de Evasión",
    image: "assets/DCX.jpg",
    accentColor: "var(--accent-pink)",
    desc: "Nacido de la fractura de I.B. tras 'Burn the heaven'. Utiliza la máscara Kitsune para borrar el rostro del niño herido, entregándose a la noche, el placer efímero y la satisfacción física sin remordimiento moral.",
    traits: [
      "Paleta: Neón bicolor rojo carmesí y azul eléctrico",
      "Símbolo: Máscara Kitsune tradicional y camisa blanca abierta",
      "Eras clave: I'm bad, so bad, Therian Collection (WOW, Grrr grrr)"
    ]
  },
  {
    id: "dolly",
    name: "Dolly 💛🖤",
    role: "La Voz de la Liberación • Armadura de Neón (Eras 4 y 5)",
    image: "assets/Dolly.jpg",
    accentColor: "var(--accent-gold)",
    desc: "La 'cicatriz con purpurina' sobre la mancha de Marigold. Con su cabello bicolor y ojos heterocromáticos (uno azul de Violet y otro ámbar de audacia), convierte la sexualidad en poder y control sobre figuras de autoridad ('Daddies').",
    traits: [
      "Paleta: Magenta nocturno, dorado y negro",
      "Símbolo: Corazón bicolor y ojos heterocromáticos",
      "Eras clave: I'm bad, so bad 1.0/2.0, Bad Baby, The Ice Throne"
    ]
  }
];

// 2. CINTA MAESTRA: THE HORROR FILM THAT IS MY LIFE (3 TRACKING MARKERS)
const masterTapeData = [
  {
    marker: "Tracking Marker 1 (Pistas 1 - 6)",
    stage: "Etapa I: Infancia y Pre-Adolescencia",
    tracks: [
      { num: 1, title: "Possession (TM 1)", trope: "Maldición de Sangre", desc: "La infección original y el trauma intergeneracional heredado desde el vientre." },
      { num: 2, title: "Alien", trope: "Invasión / Desajuste", desc: "Incompatibilidad biológica frente a una madre que mira la TV sin comprenderlo." },
      { num: 3, title: "The shape of water", trope: "Monstruo Sumergido", desc: "Acoso escolar, el corte forzado de su cabello largo y el deseo de permanecer bajo el agua." },
      { num: 4, title: "Zombie", trope: "Body Horror / Apatía", desc: "Cuerpo frágil llamado 'zombie' en clase, prefiriendo las piedras escolares a la sombra de 'Ella'." },
      { num: 5, title: "Sabbath", trope: "Aquelarre Doméstico", desc: "La sesión de cada sábado fingiendo ser una familia entera mientras sacrifican su juventud." },
      { num: 6, title: "Poltergeist Vol. 2", trope: "Casa Embrujada / TEPT", desc: "Golpes y gritos en la madrugada; escondido tras la puerta abrazando a su león de peluche." }
    ]
  },
  {
    marker: "Tracking Marker 2 (Pistas 7 - 12)",
    stage: "Etapa II y III: Juventud y Adultez",
    tracks: [
      { num: 7, title: "Exorcism (TM 2)", trope: "Ritual Médico Fallido", desc: "El médico y el sacerdote invalidan su dolor diciendo que 'solo exagera'; el demonio escribe con su sangre." },
      { num: 8, title: "Vampire heart", trope: "Parasitismo Materno", desc: "'Lady of the night': la madre como vampiro que no bebe sangre, sino que devora el espíritu de sus hijos." },
      { num: 9, title: "The Black Cat", trope: "Horror Gótico (Poe)", desc: "Paredes de concreto heladas, secretos enterrados y la soga al cuello llamada 'familia'." },
      { num: 10, title: "Psycho", trope: "Psicosis / Disociación", desc: "Diálogo interno ('1, 2, 3... 4, 5, 6') y consolidación de la tríada: 'Me, you, and him'." },
      { num: 11, title: "Succubus", trope: "Demonio Seductor", desc: "Del campo de cempasúchil y las sábanas de seda en otoño a devorar almas de hombres en la noche." },
      { num: 12, title: "Frankenstein", trope: "Criatura Ensamblada", desc: "Autopsia consciente: reconocerse cosido a pedazos con el veneno de 'Ella' y el caos de 'Él'." }
    ]
  },
  {
    marker: "Tracking Marker 3 (Pista 13 - Cierre)",
    stage: "Consumación y Necrosis de la Cinta",
    tracks: [
      { num: 13, title: "Insidious (TM 3)", trope: "Invasión Sombría Total", desc: "El dolor como droga letal y el demonio interno que usa su médula y sangre como tinta para escribir canciones." }
    ]
  }
];

// 3. LOS 7 MANDAMIENTOS DE LA COLD LAW
const coldLawData = [
  { num: "1", rule: "No se habla de lo que te duele", lore: "La raíz del silencio forzado en 'Invisible Boy' y 'Cold at home'." },
  { num: "2", rule: "No se recuerdan los gritos pasados", lore: "La prohibición de evocar la violencia física documentada en 'Poltergeist' y 'Purple Crayon'." },
  { num: "3", rule: "Siempre una cara diferente para el público", lore: "El ritual de los sábados en 'Sabbath' y la máscara social en 'I'm Ok'." },
  { num: "4", rule: "Nunca dirás que estás mal", lore: "El firmware defectuoso que empuja a la ceguera voluntaria en 'Indifference' y 'Lenses'." },
  { num: "5", rule: "Si lloras te daré razones para llorar", lore: "El terror doméstico en 'Hide & Seek' y 'Juegos de un niño'." },
  { num: "6", rule: "Sé que te duele, pero me duele más a mí", lore: "Gaslighting materno y transferencia de culpa retratada en 'The Worst Son' y 'The Way You Made Me'." },
  { num: "7", rule: "Te amo, aunque no lo diga y aunque te duela", lore: "La distorsión que fusionó amor con dolor, empujando a I.B. a 'Silk sheets' y 'Marigold Scent'." }
];

// 4. DISCOGRAFÍA COMPLETA POR ERAS Y LÍNEAS ALTERNATIVAS
const discographyData = [
  {
    id: "pre-era1",
    eraName: "Raíz Pre-Era 1 (Side A & Side B)",
    title: "My LIVE 'HOME' & A Plea for Shelter",
    vocalist: "I.B. / Violet",
    concept: "La deconstrucción del 'Hogar' (Side A) seguida de la fuga adolescente hacia la calle, el sexo por supervivencia y sus dos caminos finales (Side B).",
    tracks: [
      { name: "Side A: Cold at home / The empty plate", role: "Llegar de la escuela a una nevera emocional y hambre afectiva." },
      { name: "Side A: Like the others / Purple Crayon", role: "Moretones morados ocultos bajo la excusa de 'me caí'." },
      { name: "Side A: Stuffed lion / Scape (+ Purple Arms)", role: "Escondido en el clóset con el león de peluche antes de huir." },
      { name: "Side B: Cold All Around / Eat Cigarettes", role: "Noche 0 de huida; fumar un cigarro para anestesiar el hambre conservando sus poemas." },
      { name: "Side B: Locked Door / Need The Green", role: "Falsa ayuda bajo llave y la decisión de cobrar por su cuerpo." },
      { name: "Side B: Hotel Bed 2.0 / Midnight Steps / Drenched 2.0", role: "Rutina disociada e inercia en hoteles." },
      { name: "Side B: The Water Won't Wash (+ When you left & She)", role: "Quiebre en el suelo de la ducha." },
      { name: "Final 9a (Soul Road) & 9b (Body Road)", role: "Crying In The Bubblebath vs. Captivity (Easter egg de Dolly)." }
    ]
  },
  {
    id: "era0",
    eraName: "Álbum 0 (Espiral No Lineal X-Y-Z)",
    title: "The Invisible Boy 2.0: The Dark Side of the Moon",
    vocalist: "I.B. / Sad & Lofi Boy",
    concept: "Dimensión transversal que corta toda la cronología en tres coordenadas: Era X (Paralela al Álbum 1), Era Y (Puente de evasión) y Era Z (Post-Álbum 8, Parte 9).",
    tracks: [
      { name: "Índice X1, X2, X3", role: "Corpse party • Poltergeist • The way you made me" },
      { name: "Índice Y1, Y2, Y3", role: "Razor heart • The rusty shell • I don't wanna know" },
      { name: "Índice Y4, Y5", role: "Attention • ADDICTED" },
      { name: "Índice Z1, Z2, Z3 (Cierre)", role: "Immaculate prison • Plastic flowers • Broken doll" }
    ]
  },
  {
    id: "era1",
    eraName: "Era 1.0 y Era 1.5 (Génesis y Quiebre)",
    title: "The Invisible Boy & The Day I Told You",
    vocalist: "Violet • I.B. • Sad & Lofi Boy",
    concept: "El aislamiento en el portón bajo la Cold Law y el despertar de la sed afectiva que desemboca en el ataque de 'Marigold Scent'.",
    tracks: [
      { name: "The Invisible Boy / Paper Heart", role: "El corazón frágil quebrado por la ley fría." },
      { name: "Hide & Seek / Juegos de un niño / Please stay away", role: "Esconderse en casa para sobrevivir." },
      { name: "Unseen Brilliance / The Worst Son / Disappear", role: "Excelencia académica ignorada y deseo de evaporarse." },
      { name: "My own skin / Self love / Curious for love", role: "Autoexploración en soledad y sed patológica de afecto." },
      { name: "Marigold Scent / Sickness / After the shame", role: "La mancha de cempasúchil y alcohol que mata la inocencia." }
    ]
  },
  {
    id: "era1-9",
    eraName: "Era 1.9 (Clímax de la Era 1.x)",
    title: "When the sky turned crimson (and warm)",
    vocalist: "I.B. / Violet",
    concept: "Doble acto sobre el romance a los 16 años con Toño (20 años), la opresión fanática de la madre de la cruz de plata y la quema del león de peluche.",
    tracks: [
      { name: "Lado A: 1. Honey lonely / 2. Moon tune", role: "La trampa de miel por internet y la luna como madre." },
      { name: "Lado A: 3. Intervals / 4. Otoño", role: "Anhelo a distancia y primer encuentro en otoño." },
      { name: "Lado A: 5. Silk sheets / 6. The cross of love", role: "Entrega en el hotel y castigo con vara frente a la cruz." },
      { name: "Lado B: 7. Ocean abyss / 8. Call waiting", role: "Ducha intentando lavar el cempasúchil y línea en espera." },
      { name: "Lado B: 9. Sunday in the city / 10. The outstanding student", role: "Viaje en autobús con su león y visita a la escuela." },
      { name: "Lado B: 11. The prayer / 12. Burn the heaven", role: "Toño llorando en su regazo e incineración del león y poemas." }
    ]
  },
  {
    id: "era2",
    eraName: "Era 2.0 y Era 2.9 (Colapso y Negación)",
    title: "Crying in the Bubblebath & In hell, I'm well",
    vocalist: "Violet",
    concept: "El fracaso definitivo de la purificación por el agua y la construcción de la máscara social perfecta cuando las pastillas pierden efecto.",
    tracks: [
      { name: "Fleeting Warmth / Fire / Drenched", role: "Calor fugaz en cuerpos extraños para silenciar la mente." },
      { name: "The water won't cleanse / Wake up at 3:00 AM", role: "La ducha estéril y el insomnio de las 3:00 AM." },
      { name: "S.O.S / Cry for help (Versión Espejo)", role: "Grito de auxilio con cintas rojas y ojos vendados." },
      { name: "I'm Ok / Indifference / Blurred view / Fallen illusion", role: "La sonrisa ensayada y la vista borrosa como escudo." }
    ]
  },
  {
    id: "era3",
    eraName: "Era 3.0 y Líneas Alternativas",
    title: "Walking Through the Blue Street, Echoes in Blue & Blue Hell",
    vocalist: "Violet / I.B.",
    concept: "La huida definitiva hacia la metrópoli de neón, la disociación como muñeca de porcelana y el descenso en 'The End of My Blue Hell'.",
    tracks: [
      { name: "Walking through the blue Street / Lost in the city", role: "Audífonos puestos para apagar el mundo bajo la lluvia." },
      { name: "I'm down / Erase You / Run from home", role: "Muñeca de porcelana buscando borrar el pasado." },
      { name: "Seed of my own hell / Hidden fire / Dante's inferno PT 1 & 2", role: "Ciclos autodestructivos en 'The End of My Blue Hell'." }
    ]
  },
  {
    id: "era4-5",
    eraName: "Eras 4 y 5 (Liberación, Remixes & Therian)",
    title: "I'm bad, so bad (1.0/2.0), Bad Baby, The Ice Throne & Therian Collection",
    vocalist: "Dolly 💛🖤 & DCX 🦊",
    concept: "La rebelión contra la Cold Law. Hipersexualidad como control, dominio sobre 'Daddies', reinado en el trono de hielo y el catálogo salvaje de DCX.",
    tracks: [
      { name: "More/Dame más / ¡Oh my! / ¡Oh ah!/Tonight", role: "'Baby yo no soy tuya, no soy de tu propiedad'." },
      { name: "Grays pants / Más/AG (Reggaeton Remix) / Double Trouble", role: "Dolly dominando dinámicas de poder." },
      { name: "Married dared / Ring Ring (The EP) / Poli/Amor / Drive", role: "Desafío a las instituciones de matrimonio y moral." },
      { name: "DELETE My Age / Forbidden bite / Under my thumb / Nopor Queen", role: "Reinado desde The Ice Throne en Full HD." },
      { name: "Therian Collection (DCX)", role: "WOW • Daddy's b*tch • Waos Daddy • KITTY KITTY • Grrr grrr • Miau Miau" }
    ]
  },
  {
    id: "horror-era",
    eraName: "Master Tape Conceptual",
    title: "The horror film that is my life",
    vocalist: "I.B. • Violet • Dolly • DCX",
    concept: "La obra cumbre de 13 pistas dividida por 3 Tracking Markers en cinta VHS que sintetiza toda la vida del protagonista como una película de terror.",
    tracks: [
      { name: "TM 1 (1-6): Possession • Alien • The shape of water", role: "Zombie • Sabbath • Poltergeist Vol. 2" },
      { name: "TM 2 (7-12): Exorcism • Vampire heart • The black cat", role: "Psycho • Succubus • Frankenstein" },
      { name: "TM 3 (13): Insidious", role: "El demonio que escribe con su sangre y médula." }
    ]
  }
];

// 5. BASE DE DATOS DE CANCIONES CON LETRAS Y ANÁLISIS (CATÁLOGO INTERACTIVO)
const songLoreDatabase = [
  {
    title: "Possession (Tracking Marker 1)",
    category: "horror",
    album: "The horror film that is my life (Pista 1)",
    character: "I.B. 🫥 / Violet 🎧",
    analysis: "Abre la Cinta Maestra estableciendo el tropo de la maldición de sangre y el trauma intergeneracional: nacer de un cuerpo sin amor y heredar las cicatrices como una posesión desde la semilla.",
    lyrics: `[Intro]
Now... ever since that fateful night.

[Verse 1]
From your bloody body, my own body was torn
While your lips were screaming my name with such scorn
You prayed to the heavens that this wasn't true
But there was never any love inside of you
You only gave me a darkness so deep.

[Chorus]
But me, oh what happened to me?
The shadows took over, possessed since a seed
Inheriting your blood, the scars and the pain
Hiding the sorrow while going insane
This is my cursed possession!

[Outro]
Black dust in my soul...
Possessed.`
  },
  {
    title: "The shape of water",
    category: "horror",
    album: "The horror film that is my life (Pista 3)",
    character: "I.B. 🫥",
    analysis: "Relata la marginación escolar y el episodio traumático en que los profesores obligan al niño a cortarse el cabello largo para dejarlo entrar al salón, apagando su luz y empujándolo a 'permanecer sumergido'.",
    lyrics: `[Chorus]
Swimming through the halls of this cold place,
Dodging all the eyes, hiding my face.
I'm just a shadow in the water,
Do I really look that bad?
My heart is holding on, but it's getting sad.

[Verse 3]
I asked the teachers to let me look pretty,
My short hair just makes me feel so gritty.
But a boy with long hair is their biggest fear,
They forced me to cut it to keep me here.
Couldn't enter the room without looking right,
They cut off my hair and put out my light.`
  },
  {
    title: "Sabbath",
    category: "horror",
    album: "The horror film that is my life (Pista 5)",
    character: "I.B. 🫥",
    analysis: "Retrata la hipocresía familiar de cada sábado ('Every Saturday you call the session'): la familia operando como una secta que sacrifica la juventud de los hijos para mantener una fachada ante el público.",
    lyrics: `[Chorus]
Every Saturday you call the session
Where we sacrifice a piece of who we are
Bound together in a dark confession
Something that we'll never understand so far
Every Saturday we wear the disguise
At least we get to fake that we are whole
Feeding everybody all your lies
So nobody questions what you stole`
  },
  {
    title: "Exorcism (Tracking Marker 2)",
    category: "horror",
    album: "The horror film that is my life (Pista 7)",
    character: "I.B. 🫥 / Violet 🎧",
    analysis: "Marca la degradación intermedia de la cinta. Denuncia la negligencia médica e institucional: cuando el joven pide ayuda a un doctor por su dolor interno, le responden que 'solo está haciendo un show y exagerando'.",
    lyrics: `[Chorus]
I need an exorcism right now, oh my God,
Somebody call the priest, I’m bleeding in the dark...
Bleeding, my insides bleed apart.
'Cause there ain't no exorcist alive today
Who can wash the stains of this past away.

[Verse 3]
I remember once I tried on my own
To call a doctor, someone on the phone.
He told me: "You're fine, it's just a show you make."
When I asked for an exorcism to be healed,
The doctor said: "Go, there's nothing to be revealed."`
  },
  {
    title: "Vampire heart",
    category: "horror",
    album: "The horror film that is my life (Pista 8)",
    character: "I.B. 🫥",
    analysis: "Retrata a 'Ella' como la 'Dama de la Noche' con corazón de vampiro: un ser que no bebe sangre para sobrevivir, sino que devora el espíritu y la inocencia de sus propios hijos.",
    lyrics: `[Chorus]
Lady of the night, love’s gentle light burns deep,
Like the morning sun melting away your skin.
You disguise your curse so no one else can see,
A truth the world refused to let sink in.
Lady of the night with a vampire heart,
Feeding on the innocence of youth and grace,
Draining those who loved you right from the start,
Leaving them cold, hollowed out, erased.`
  },
  {
    title: "Frankenstein & Insidious (TM 3)",
    category: "horror",
    album: "The horror film that is my life (Pistas 12 y 13)",
    character: "I.B. • Violet • DCX • Dolly",
    analysis: "El cierre de la Cinta Maestra. En 'Frankenstein', el protagonista se reconoce ensamblado a pedazos con el frío de su madre y el caos de su abusador; en 'Insidious', confiesa que el demonio nunca salió y ahora usa su sangre y médula como tinta para escribir canciones.",
    lyrics: `[Frankenstein - Chorus]
I am not complete, there’s a piece I’m always missing,
She left me shattered, but overflowing...
With a heavy darkness down into my soul,
Built with different traumas taking their toll.

[Insidious - Outro]
But they never pulled the demon out of me
The one who uses my blood as its ink
Uses my marrow to write what it sees
Torturing my soul...
I'm addicted on the brink...`
  },
  {
    title: "Cold at home & Purple Crayon",
    category: "home",
    album: "My LIVE 'HOME' (Side A - Pistas 1 y 4)",
    character: "I.B. 🫥 (Niñez)",
    analysis: "El núcleo del Side A. Usa elementos infantiles (crayones morados, cuadernos de dibujo) para narrar cómo el niño oculta los moretones en los brazos y la sangre en la boca diciendo que 'se cayó', porque 'Ella' dice que el amor verdadero debe dejar una mancha.",
    lyrics: `[Purple Crayon - Chorus]
You painted my arms with a purple crayon
And stained my mouth red when I spoke for too long
If they see the blue, I will say that I fell
It hurts me a little, but it's love, so you tell.

[Bridge]
My arms are the canvas where you put the dye
A hug I won't get, no matter how hard I try
I draw in my notebook a wish for the dawn
Knowing that nobody will hear my quiet song.`
  },
  {
    title: "Stuffed Lion & Purple Arms (Deluxe)",
    category: "home",
    album: "My LIVE 'HOME' (Side A - Pista 5 + Deluxe)",
    character: "I.B. 🫥",
    analysis: "Presenta el símbolo más sagrado de la inocencia de I.B.: su pequeño león de peluche con ojos de botón, el único testigo que lo acompaña en el rincón oscuro del clóset mientras es arrojado como un juguete.",
    lyrics: `[Stuffed Lion - Chorus]
Crying right here underneath all my covers,
hugging my little stuffed lion so tight.
I didn't want to be bruised, am I bother?
I only wanted some love and some light.
Hiding away in the dark closet corner,
where only my lion can watch as I cry.

[Outro]
My little stuffed lion, my friend...
If you could just open your mouth and speak.
Tell God to listen to me at the end...`
  },
  {
    title: "Cold All Around & Eat Cigarettes",
    category: "home",
    album: "A Plea for Shelter (Side B - Pistas 1 y 2)",
    character: "I.B. 🫥",
    analysis: "La Noche 0 tras huir de casa. El frío del asfalto es brutal, pero el corazón de su madre era más frío. En 'Eat Cigarettes', sin dinero para comer, fuma un solo cigarrillo para anestesiar el estómago, agradeciendo haber rescatado sus poemas.",
    lyrics: `[Cold All Around - Chorus]
I want and I need to find a safe space,
Just a quiet corner to make it through the night.
Escaped from the prison that was never my place,
With nothing in my hands and terrified of the light.

[Eat Cigarettes - Chorus]
I've got nothing left but a single cigarette,
So I'll smoke and I'll smoke to forget the regret...
At least I brought my poems, no matter what the cost.`
  },
  {
    title: "Locked Door & Need The Green",
    category: "home",
    album: "A Plea for Shelter (Side B - Pistas 3 y 4)",
    character: "I.B. 🫥",
    analysis: "La bisagra del Side B. Un hombre mayor le ofrece refugio pero cierra la puerta con llave para cobrar 'la deuda' con su cuerpo. Tras escapar nuevamente a la calle, el joven comprende en 'Need The Green' que su cuerpo es su única moneda para no dormir en la estación.",
    lyrics: `[Locked Door - Chorus]
He called you inside, and the door was closed tight.
(My little boy, you don't know how sorry I am.)
He told you "you can stay," promising the light,
(But you know that the shelter was part of the scam.)

[Need The Green - Chorus]
I really need the green of those dollar bills,
I need it so bad just to cure these chills...
From what I see, my body is the only thing I've got,
And it's the only thing these men are looking at a lot.`
  },
  {
    title: "Crying In The Bubblebath (9a) vs. Captivity (9b)",
    category: "home",
    album: "A Plea for Shelter (Side B - Los Dos Caminos Finales)",
    character: "I.B. 🫥 / Semilla de Dolly 💛🖤",
    analysis: "El doble clímax conceptual del Side B: 'Soul Road' (9a) donde el alma se rinde en una bañera llena de burbujas, frente a 'Body Road' (9b - Captivity), donde el joven león queda enjaulado pero jura que algún día 'volteará todo este juego' (el easter egg pre-nacimiento de Dolly).",
    lyrics: `[9a: Soul Road - Crying In The Bubblebath]
Mom, if you hear me, I hold no hate inside
God knows I tried to stem this painful tide...
I’ll fill the bathtub with water to the brim
With delicate bubbles while the lights go dim.

[9b: Body Road - Captivity]
Now I'm just a young lion locked in a cage,
Caught in his bed by the hunter's dark rage...
I'm just a foolish young boy, making a show,
But someday I'll flip this whole game, that's for sure.`
  },
  {
    title: "Honey lonely & Otoño",
    category: "crimson",
    album: "When the sky turned crimson (and warm) - Lado A",
    character: "I.B. (16 años)",
    analysis: "Documenta la 'trampa de miel' digital de la Era 1.9: el adolescente de 16 años conoce por internet a Toño (20 años). La desnutrición afectiva en casa lo lleva a ignorar la diferencia de edad y entregarse con devoción absoluta cuando se encuentran en otoño.",
    lyrics: `[Honey lonely - Bridge]
Numbers don't matter if love is real
Age is just nothing compared to what we feel...
You're twenty years old, turned to a new page
If I am sixteen, what does it mean?
Just tell me you love me behind the screen...

[Otoño - Chorus]
In the autumn, oh, Toño
I finally see you, you're finally here
Today you are my everything, my blossom
Thank you for giving this hug to me.`
  },
  {
    title: "The cross of love & Burn the heaven",
    category: "crimson",
    album: "When the sky turned crimson (and warm) - Lado A (6) y Lado B (12)",
    character: "I.B. 🫥",
    analysis: "El choque contra el fanatismo religioso. En 'The cross of love', la madre de Toño lo golpea con una vara frente a la cruz de plata mientras Toño le suelta la mano. En 'Burn the heaven', la mujer quema sus cuadernos de poemas y su amado león de peluche ('su cielo') mientras Toño permanece arrodillado sin defenderlo.",
    lyrics: `[Burn the heaven - Climax & Final Chorus]
Please tell me, tell them to stop, I'm just a foolish boy!
I don't believe that this is what's supposed to be
My stuffed lion was my everything, my only joy!
The only thing that kept the lonely child in me!

The heaven... the heaven that they deeply profess
Is it true? Could it be real if it's so cruel?
Why is my stuffed lion burning in this mess?!
Why can't my crying make you break their rule?!`
  },
  {
    title: "Marigold Scent & Marigold tears",
    category: "darkside",
    album: "The Day I Told You (Era 1.5)",
    character: "I.B. 🫥 / Violet 🎧",
    analysis: "El momento exacto en que muere la inocencia en la Era 1.5. Tras ser seguido y agredido al bajar del transporte, el olor a alcohol y flor de cempasúchil (Marigold, la flor de los muertos) queda impregnado en su piel sin que el agua fría pueda borrarlo.",
    lyrics: `[Marigold Scent - Final Stanzas]
He finished. I ran back home so fast.
Took off my clothes without a single thought
Turn on the cold water to try
To wash away the memory I was caught.
I still remember that peculiar scent
The one that stained my skin with Marigold.`
  },
  {
    title: "Attention & Razor heart (Era Y)",
    category: "darkside",
    album: "The Dark Side of the Moon (Álbum 0 - Índices Y4 & Y1)",
    character: "I.B. 🫥 / Violet 🎧",
    analysis: "El puente de metamorfosis del Álbum 0. En 'Attention' busca en la mirada de los hombres el amor paterno ausente para confirmar que sigue respirando; en 'Razor heart', el corazón de papel se afila en una navaja de acero que rechaza la moralidad de quienes lo rompieron.",
    lyrics: `[Attention - Chorus]
I want attention, I want it from men,
I need them to know I’m breathing again.
It isn't love, no, that’s not the chase,
Just want to be seen, to have a place.

[Razor heart - Chorus]
I own a paper heart that turned into a blade,
cutting everyone through the mess I've made.
Should I offer an apology?
For being "bad", for this personality?
'Cause my mind doesn't work with your morality.`
  },
  {
    title: "Immaculate prison & Broken doll (Era Z)",
    category: "darkside",
    album: "The Dark Side of the Moon (Álbum 0 - Índices Z1 & Z3)",
    character: "I.B. Adulto / DCX",
    analysis: "El cierre cronológico (Parte 9). En 'Immaculate prison', el protagonista finalmente tiene un esposo y un amor real, pero haber crecido entre 'flores de plástico' hace que la paz se sienta como una cárcel inmaculada y termine saboteándola. En 'Broken doll', quien fue juguete en la infancia ahora rompe a otros.",
    lyrics: `[Immaculate prison - Chorus]
And I have it all, I have everything from you,
A beautiful life and a love that is real.
But I don't know if this is what I should do,
Or if there's even a heart left to feel.
Now my comfort and my perfect little life
Are nothing but an immaculate jail.`
  },
  {
    title: "More/Dame más, Double Trouble & Ring Ring",
    category: "dolly-dcx",
    album: "I'm bad, so bad / Bad Baby / Ring Ring EP",
    character: "Dolly 💛🖤 & DCX 🦊",
    analysis: "El estallido Hyperpop y bilingüe de las Eras 4 y 5. Dolly toma el control absoluto ('Baby yo no soy tuya, no soy de tu propiedad'), desafía la estabilidad hipócrita en 'Ring Ring' y 'Married dared', y convierte el deseo masculino en su propio tablero de juego.",
    lyrics: `[More/Dame más - Chorus]
Baby yo no soy tuya,
Yo no soy de tu propieda-a-a-a-ad
Aunque te diga mío,
Se que en la noche no estara-a-a-a-as
Así que me busco a otro papi
Que en la cama me haga grita-ah-ah-ah-ar`
  },
  {
    title: "DELETE My Age, Under my thumb & Drive",
    category: "dolly-dcx",
    album: "The Ice Throne / I'm bad, so bad",
    character: "Dolly 💛🖤",
    analysis: "La consolidación de Dolly en el Trono de Hielo. En 'DELETE My Age' confronta el fantasma de la diferencia de edad desde una posición de mando; en 'Under my thumb' domina a través de la pantalla en Full HD sin permitir que nadie la toque si ella no lo ordena.",
    lyrics: `[Under my thumb - Chorus]
Stay right under my thumb
Look through the glass, but you're feeling numb
In Full HD, baby, put the record on
The number is fake, and the moment is gone.
If you think that you own me just touching my skin
Let me tell you right now: I dictate the win.`
  }
];

// 6. ÍNDICE OFICIAL DE LAS 169 OBRAS REGISTRADAS (CERTIFICADO Nº 2026-A-8311)
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

// 7. INICIALIZACIÓN DEL DOM
document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  renderMasterTape();
  renderColdLaw();
  renderEraFilters();
  renderDiscography(discographyData);
  renderSongSelector(songLoreDatabase);

  const searchInput = document.getElementById("song-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderSongSelector(songLoreDatabase);
        return;
      }
      const matchedDetailed = songLoreDatabase.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.album.toLowerCase().includes(q) ||
        s.analysis.toLowerCase().includes(q) ||
        s.lyrics.toLowerCase().includes(q)
      );
      const matchedIndex = registered169Works
        .filter(item => item.toLowerCase().includes(q))
        .map(item => ({
          title: item,
          category: "index169",
          album: "El Chico Invisible: Poemario y Letras Completo (Registro Nº 2026-A-8311)",
          character: "Catálogo Oficial DarkCry 1.0",
          analysis: "Obra lírica y musical registrada oficialmente ante el Departamento de Derechos Intelectuales (Certificado Nº 2026-A-8311) por Jesús Ríos Vásquez.",
          lyrics: "Obra incluida en el compendio oficial 'EL CHICO INVISIBLE POEMARIO Y LETRAS COMPLETO'."
        }));
      renderSongSelector([...matchedDetailed, ...matchedIndex]);
    });
  }
});

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

  container.innerHTML = masterTapeData.map(block => `
    <div class="tm-card">
      <div class="tm-badge">${block.marker}</div>
      <h3 class="tm-title">${block.stage}</h3>
      <ul class="tm-tracklist">
        ${block.tracks.map(t => `
          <li onclick="jumpToHorrorSong('${t.title}')">
            <div class="tm-track-top">
              <span>${t.num}.${t.title}</span>
              <span class="tm-trope">${t.trope}</span>
            </div>
            <p class="tm-track-desc">${t.desc}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function jumpToHorrorSong(titleQuery) {
  const archiveSection = document.getElementById("archivo");
  if (archiveSection) archiveSection.scrollIntoView({ behavior: "smooth" });
  const match = songLoreDatabase.find(s => s.title.toLowerCase().includes(titleQuery.split(" ")[0].toLowerCase()));
  if (match) {
    displayTrackDetail(match);
  }
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

function renderEraFilters() {
  const container = document.getElementById("era-filters");
  if (!container) return;

  const filters = [
    { id: "all", label: "Todas las Eras" },
    { id: "pre-era1", label: "My LIVE HOME (A & B)" },
    { id: "era0", label: "Álbum 0 (X-Y-Z)" },
    { id: "era1", label: "Era 1.0 & 1.5" },
    { id: "era1-9", label: "Era 1.9 (Crimson)" },
    { id: "era2", label: "Era 2.0 & 2.9" },
    { id: "era3", label: "Era 3.0 (Blue)" },
    { id: "era4-5", label: "Eras 4 & 5 (Dolly/DCX)" },
    { id: "horror-era", label: "The Horror Film" }
  ];

  container.innerHTML = filters.map((f, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" onclick="filterEras('${f.id}', this)">
      ${f.label}
    </button>
  `).join('');
}

function filterEras(eraId, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (eraId === "all") {
    renderDiscography(discographyData);
  } else {
    renderDiscography(discographyData.filter(d => d.id === eraId));
  }
}

function renderDiscography(data) {
  const container = document.getElementById("discography-container");
  if (!container) return;

  container.innerHTML = data.map(album => `
    <div class="album-card">
      <div class="album-meta">
        <span>${album.eraName}</span>
        <span>${album.vocalist}</span>
      </div>
      <h3 class="album-title">${album.title}</h3>
      <p class="album-concept">${album.concept}</p>
      <ul class="album-tracklist">
        ${album.tracks.map(t => `
          <li>
            <strong>${t.name}</strong>
            <span>${t.role}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function filterSongList(category, btn) {
  document.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  if (category === "all") {
    renderSongSelector(songLoreDatabase);
  } else if (category === "index169") {
    const fullList = registered169Works.map(item => ({
      title: item,
      category: "index169",
      album: "Compendio Oficial: El Chico Invisible Poemario y Letras Completo",
      character: "Jesús Ríos Vásquez • DarkCry 1.0",
      analysis: "Obra inscrita bajo el Certificado Oficial de Propiedad Intelectual Nº 2026-A-8311 (169 poemas y letras).",
      lyrics: "Esta pieza forma parte de las 169 obras registradas en 'EL CHICO INVISIBLE POEMARIO Y LETRAS COMPLETO'."
    }));
    renderSongSelector(fullList);
  } else {
    renderSongSelector(songLoreDatabase.filter(s => s.category === category));
  }
}

function renderSongSelector(list) {
  const selector = document.getElementById("track-selector");
  if (!selector) return;

  if (list.length === 0) {
    selector.innerHTML = `<p style="color: var(--text-muted); padding: 1rem;">No se encontraron resultados para tu búsqueda.</p>`;
    return;
  }

  selector.innerHTML = list.map((item, idx) => `
    <button class="track-btn ${idx === 0 ? 'active' : ''}" onclick="selectSongByIndex(${idx})">
      <span>${item.title}</span>
      <span class="track-era-pill">${item.category.toUpperCase()}</span>
    </button>
  `).join('');

  window._currentSongList = list;
  displayTrackDetail(list[0]);
}

function selectSongByIndex(idx) {
  const list = window._currentSongList || songLoreDatabase;
  const buttons = document.querySelectorAll(".track-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (buttons[idx]) buttons[idx].classList.add("active");
  if (list[idx]) displayTrackDetail(list[idx]);
}

function displayTrackDetail(song) {
  const container = document.getElementById("track-detail");
  if (!container || !song) return;

  container.innerHTML = `
    <h3 class="detail-title">${song.title}</h3>
    <div class="detail-badge">${song.album} • Intérprete / Avatar: ${song.character}</div>
    <div class="detail-section-title">Análisis Psicológico y Posición en el Lore</div>
    <p class="detail-text">${song.analysis}</p>
    <div class="detail-section-title">Extracto Lírico / Registro Oficial</div>
    <pre class="lyrics-box">${song.lyrics}</pre>
  `;
}