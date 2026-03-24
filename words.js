const WORDS = [
    {
        "spanish": "ser",
        "english": "to be"
    },
    {
        "spanish": "tener",
        "english": "to have"
    },
    {
        "spanish": "ese",
        "english": "that"
    },
    {
        "spanish": "eso",
        "english": "it"
    },
    {
        "spanish": "para",
        "english": "for"
    },
    {
        "spanish": "ella",
        "english": "she"
    },
    {
        "spanish": "como",
        "english": "as"
    },
    {
        "spanish": "decir",
        "english": "to say"
    },
    {
        "spanish": "desde",
        "english": "from"
    },
    {
        "spanish": "pero",
        "english": "but"
    },
    {
        "spanish": "ellos",
        "english": "they"
    },
    {
        "spanish": "todos",
        "english": "all"
    },
    {
        "spanish": "esta",
        "english": "this"
    },
    {
        "spanish": "uno",
        "english": "one"
    },
    {
        "spanish": "afuera",
        "english": "out"
    },
    {
        "spanish": "arriba",
        "english": "up"
    },
    {
        "spanish": "saber",
        "english": "to know"
    },
    {
        "spanish": "podría",
        "english": "could"
    },
    {
        "spanish": "llegar",
        "english": "to get"
    },
    {
        "spanish": "nosotros",
        "english": "we"
    },
    {
        "spanish": "venir",
        "english": "to come"
    },
    {
        "spanish": "hombre",
        "english": "man"
    },
    {
        "spanish": "qué",
        "english": "what"
    },
    {
        "spanish": "ahí",
        "english": "there"
    },
    {
        "spanish": "cual",
        "english": "which"
    },
    {
        "spanish": "dentro",
        "english": "into"
    },
    {
        "spanish": "pensar",
        "english": "to think"
    },
    {
        "spanish": "mirar",
        "english": "to look"
    },
    {
        "spanish": "quien",
        "english": "who"
    },
    {
        "spanish": "cuando",
        "english": "when"
    },
    {
        "spanish": "tomar",
        "english": "to take"
    },
    {
        "spanish": "hora",
        "english": "time"
    },
    {
        "spanish": "atrás",
        "english": "back"
    },
    {
        "spanish": "más",
        "english": "more"
    },
    {
        "spanish": "entonces",
        "english": "then"
    },
    {
        "spanish": "abajo",
        "english": "down"
    },
    {
        "spanish": "bueno",
        "english": "good"
    },
    {
        "spanish": "terminado",
        "english": "over"
    },
    {
        "spanish": "ahora",
        "english": "now"
    },
    {
        "spanish": "mano",
        "english": "hand"
    },
    {
        "spanish": "algunos",
        "english": "some"
    },
    {
        "spanish": "querer",
        "english": "to want"
    },
    {
        "spanish": "sólo",
        "english": "just"
    },
    {
        "spanish": "solamente",
        "english": "only"
    },
    {
        "spanish": "camino",
        "english": "way"
    },
    {
        "spanish": "otro",
        "english": "other"
    },
    {
        "spanish": "día",
        "english": "day"
    },
    {
        "spanish": "ojo",
        "english": "eye"
    },
    {
        "spanish": "preguntar",
        "english": "to ask"
    },
    {
        "spanish": "encontrar",
        "english": "to find"
    },
    {
        "spanish": "dos",
        "english": "two"
    },
    {
        "spanish": "pequeño",
        "english": "little"
    },
    {
        "spanish": "largo",
        "english": "long"
    },
    {
        "spanish": "muy",
        "english": "very"
    },
    {
        "spanish": "sentir",
        "english": "to feel"
    },
    {
        "spanish": "alguna",
        "english": "any"
    },
    {
        "spanish": "cosa",
        "english": "thing"
    },
    {
        "spanish": "también",
        "english": "too"
    },
    {
        "spanish": "aquí",
        "english": "here"
    },
    {
        "spanish": "nunca",
        "english": "never"
    },
    {
        "spanish": "dejar",
        "english": "to leave"
    },
    {
        "spanish": "persona",
        "english": "person"
    },
    {
        "spanish": "antiguo",
        "english": "old"
    },
    {
        "spanish": "cabeza",
        "english": "head"
    },
    {
        "spanish": "girar",
        "english": "to turn"
    },
    {
        "spanish": "mediante",
        "english": "through"
    },
    {
        "spanish": "incluso",
        "english": "even"
    },
    {
        "spanish": "cara",
        "english": "face"
    },
    {
        "spanish": "mucho",
        "english": "much"
    },
    {
        "spanish": "apagado",
        "english": "off"
    },
    {
        "spanish": "primero",
        "english": "first"
    },
    {
        "spanish": "correcto",
        "english": "right"
    },
    {
        "spanish": "nuestro",
        "english": "our"
    },
    {
        "spanish": "cómo",
        "english": "how"
    },
    {
        "spanish": "dónde",
        "english": "where"
    },
    {
        "spanish": "después",
        "english": "after"
    },
    {
        "spanish": "sus",
        "english": "its"
    },
    {
        "spanish": "mujer",
        "english": "woman"
    },
    {
        "spanish": "lejos",
        "english": "away"
    },
    {
        "spanish": "vida",
        "english": "life"
    },
    {
        "spanish": "llamar",
        "english": "to call"
    },
    {
        "spanish": "todavía",
        "english": "still"
    },
    {
        "spanish": "escuchar",
        "english": "to hear"
    },
    {
        "spanish": "año",
        "english": "year"
    },
    {
        "spanish": "propio",
        "english": "own"
    },
    {
        "spanish": "trabajar",
        "english": "to work"
    },
    {
        "spanish": "debería",
        "english": "should"
    },
    {
        "spanish": "lugar",
        "english": "place"
    },
    {
        "spanish": "habitación",
        "english": "room"
    },
    {
        "spanish": "bien",
        "english": "well"
    },
    {
        "spanish": "pararse",
        "english": "to stand"
    },
    {
        "spanish": "deber",
        "english": "to must"
    },
    {
        "spanish": "alrededor",
        "english": "around"
    },
    {
        "spanish": "puerta",
        "english": "door"
    },
    {
        "spanish": "intentar",
        "english": "to try"
    },
    {
        "spanish": "amar",
        "english": "to love"
    },
    {
        "spanish": "casa",
        "english": "house"
    },
    {
        "spanish": "noche",
        "english": "night"
    },
    {
        "spanish": "poner",
        "english": "to put"
    },
    {
        "spanish": "genial",
        "english": "great"
    },
    {
        "spanish": "tal",
        "english": "such"
    },
    {
        "spanish": "mantener",
        "english": "to keep"
    },
    {
        "spanish": "sentarse",
        "english": "to sit"
    },
    {
        "spanish": "último",
        "english": "last"
    },
    {
        "spanish": "empezar",
        "english": "to begin"
    },
    {
        "spanish": "porque",
        "english": "because"
    },
    {
        "spanish": "aquellos",
        "english": "those"
    },
    {
        "spanish": "estas",
        "english": "these"
    },
    {
        "spanish": "palabra",
        "english": "word"
    },
    {
        "spanish": "usar",
        "english": "to use"
    },
    {
        "spanish": "necesitar",
        "english": "to need"
    },
    {
        "spanish": "abrir",
        "english": "to open"
    },
    {
        "spanish": "sostener",
        "english": "to hold"
    },
    {
        "spanish": "mientras",
        "english": "while"
    },
    {
        "spanish": "hablar",
        "english": "to talk"
    },
    {
        "spanish": "sobre",
        "english": "upon"
    },
    {
        "spanish": "sonreír",
        "english": "to smile"
    },
    {
        "spanish": "siempre",
        "english": "always"
    },
    {
        "spanish": "voz",
        "english": "voice"
    },
    {
        "spanish": "niño",
        "english": "child"
    },
    {
        "spanish": "padre",
        "english": "father"
    },
    {
        "spanish": "andar",
        "english": "to walk"
    },
    {
        "spanish": "joven",
        "english": "young"
    },
    {
        "spanish": "significar",
        "english": "to mean"
    },
    {
        "spanish": "nada",
        "english": "nothing"
    },
    {
        "spanish": "correr",
        "english": "to run"
    },
    {
        "spanish": "aunque",
        "english": "though"
    },
    {
        "spanish": "momento",
        "english": "moment"
    },
    {
        "spanish": "madre",
        "english": "mother"
    },
    {
        "spanish": "mismo",
        "english": "same"
    },
    {
        "spanish": "nombre",
        "english": "name"
    },
    {
        "spanish": "muchos",
        "english": "many"
    },
    {
        "spanish": "mente",
        "english": "mind"
    },
    {
        "spanish": "pocos",
        "english": "few"
    },
    {
        "spanish": "traer",
        "english": "to bring"
    },
    {
        "spanish": "ligero",
        "english": "light"
    },
    {
        "spanish": "cerrar",
        "english": "to close"
    },
    {
        "spanish": "lado",
        "english": "side"
    },
    {
        "spanish": "amigo",
        "english": "friend"
    },
    {
        "spanish": "cada",
        "english": "every"
    },
    {
        "spanish": "brazo",
        "english": "arm"
    },
    {
        "spanish": "tres",
        "english": "three"
    },
    {
        "spanish": "suficiente",
        "english": "enough"
    },
    {
        "spanish": "niña",
        "english": "girl"
    },
    {
        "spanish": "debajo",
        "english": "under"
    },
    {
        "spanish": "nuevo",
        "english": "new"
    },
    {
        "spanish": "fin",
        "english": "end"
    },
    {
        "spanish": "vivir",
        "english": "to live"
    },
    {
        "spanish": "además",
        "english": "also"
    },
    {
        "spanish": "ayudar",
        "english": "to help"
    },
    {
        "spanish": "entre",
        "english": "between"
    },
    {
        "spanish": "mundo",
        "english": "world"
    },
    {
        "spanish": "caer",
        "english": "to fall"
    },
    {
        "spanish": "esperar",
        "english": "to wait"
    },
    {
        "spanish": "ver",
        "english": "to watch"
    },
    {
        "spanish": "ambos",
        "english": "both"
    },
    {
        "spanish": "pie",
        "english": "foot"
    },
    {
        "spanish": "parte",
        "english": "part"
    },
    {
        "spanish": "pequeña",
        "english": "small"
    },
    {
        "spanish": "hasta",
        "english": "until"
    },
    {
        "spanish": "contestar",
        "english": "to answer"
    },
    {
        "spanish": "mostrar",
        "english": "to show"
    },
    {
        "spanish": "mentir",
        "english": "to lie"
    },
    {
        "spanish": "curso",
        "english": "course"
    },
    {
        "spanish": "pasar",
        "english": "to happen"
    },
    {
        "spanish": "creer",
        "english": "to believe"
    },
    {
        "spanish": "regresar",
        "english": "to return"
    },
    {
        "spanish": "detrás",
        "english": "behind"
    },
    {
        "spanish": "punto",
        "english": "point"
    },
    {
        "spanish": "siguiente",
        "english": "next"
    },
    {
        "spanish": "corazón",
        "english": "heart"
    },
    {
        "spanish": "agua",
        "english": "water"
    },
    {
        "spanish": "casi",
        "english": "almost"
    },
    {
        "spanish": "cuerpo",
        "english": "body"
    },
    {
        "spanish": "mañana",
        "english": "morning"
    },
    {
        "spanish": "sonar",
        "english": "sound"
    },
    {
        "spanish": "conocer",
        "english": "to meet"
    },
    {
        "spanish": "dios",
        "english": "god"
    },
    {
        "spanish": "blanco",
        "english": "white"
    },
    {
        "spanish": "recordar",
        "english": "to remember"
    },
    {
        "spanish": "tipo",
        "english": "kind"
    },
    {
        "spanish": "alcanzar",
        "english": "to reach"
    },
    {
        "spanish": "morir",
        "english": "to die"
    },
    {
        "spanish": "difícil",
        "english": "hard"
    },
    {
        "spanish": "malo",
        "english": "bad"
    },
    {
        "spanish": "mitad",
        "english": "half"
    },
    {
        "spanish": "reir",
        "english": "to laugh"
    },
    {
        "spanish": "familia",
        "english": "family"
    },
    {
        "spanish": "alto",
        "english": "high"
    },
    {
        "spanish": "libro",
        "english": "book"
    },
    {
        "spanish": "importar",
        "english": "matter"
    },
    {
        "spanish": "paso",
        "english": "step"
    },
    {
        "spanish": "cambiar",
        "english": "to change"
    },
    {
        "spanish": "pregunta",
        "english": "question"
    },
    {
        "spanish": "comprender",
        "english": "to understand"
    },
    {
        "spanish": "seguir",
        "english": "to follow"
    },
    {
        "spanish": "juntos",
        "english": "together"
    },
    {
        "spanish": "esposa",
        "english": "wife"
    },
    {
        "spanish": "tirar",
        "english": "to pull"
    },
    {
        "spanish": "mesa",
        "english": "table"
    },
    {
        "spanish": "jugar",
        "english": "to play"
    },
    {
        "spanish": "perder",
        "english": "to lose"
    },
    {
        "spanish": "grande",
        "english": "big"
    },
    {
        "spanish": "llorar",
        "english": "to cry"
    },
    {
        "spanish": "negro",
        "english": "black"
    },
    {
        "spanish": "pelo",
        "english": "hair"
    },
    {
        "spanish": "leer",
        "english": "to read"
    },
    {
        "spanish": "frente",
        "english": "front"
    },
    {
        "spanish": "mandar",
        "english": "to send"
    },
    {
        "spanish": "bastante",
        "english": "quite"
    },
    {
        "spanish": "romper",
        "english": "to break"
    },
    {
        "spanish": "minuto",
        "english": "minute"
    },
    {
        "spanish": "oscuro",
        "english": "dark"
    },
    {
        "spanish": "pronto",
        "english": "soon"
    },
    {
        "spanish": "cama",
        "english": "bed"
    },
    {
        "spanish": "hacia",
        "english": "toward"
    },
    {
        "spanish": "todo",
        "english": "whole"
    },
    {
        "spanish": "coche",
        "english": "car"
    },
    {
        "spanish": "ventana",
        "english": "window"
    },
    {
        "spanish": "agitar",
        "english": "to shake"
    },
    {
        "spanish": "descanso",
        "english": "rest"
    },
    {
        "spanish": "dinero",
        "english": "money"
    },
    {
        "spanish": "hecho",
        "english": "fact"
    },
    {
        "spanish": "hijo",
        "english": "son"
    },
    {
        "spanish": "escribir",
        "english": "to write"
    },
    {
        "spanish": "fuego",
        "english": "fire"
    },
    {
        "spanish": "segundo",
        "english": "second"
    },
    {
        "spanish": "quedarse",
        "english": "to stay"
    },
    {
        "spanish": "caso",
        "english": "case"
    },
    {
        "spanish": "historia",
        "english": "story"
    },
    {
        "spanish": "línea",
        "english": "line"
    },
    {
        "spanish": "crecer",
        "english": "to grow"
    },
    {
        "spanish": "aire",
        "english": "air"
    },
    {
        "spanish": "desear",
        "english": "to wish"
    },
    {
        "spanish": "levantar",
        "english": "to rise"
    },
    {
        "spanish": "menos",
        "english": "least"
    },
    {
        "spanish": "completo",
        "english": "full"
    },
    {
        "spanish": "atrapar",
        "english": "to catch"
    },
    {
        "spanish": "liderar",
        "english": "to lead"
    },
    {
        "spanish": "llevar",
        "english": "to carry"
    },
    {
        "spanish": "muerte",
        "english": "death"
    },
    {
        "spanish": "dormir",
        "english": "to sleep"
    },
    {
        "spanish": "matar",
        "english": "to kill"
    },
    {
        "spanish": "responder",
        "english": "to reply"
    },
    {
        "spanish": "pared",
        "english": "wall"
    },
    {
        "spanish": "conducir",
        "english": "to drive"
    },
    {
        "spanish": "cerca",
        "english": "near"
    },
    {
        "spanish": "dibujar",
        "english": "to draw"
    },
    {
        "spanish": "hombro",
        "english": "shoulder"
    },
    {
        "spanish": "semana",
        "english": "week"
    },
    {
        "spanish": "pasado",
        "english": "past"
    },
    {
        "spanish": "muerto",
        "english": "dead"
    },
    {
        "spanish": "temprano",
        "english": "early"
    },
    {
        "spanish": "solo",
        "english": "alone"
    },
    {
        "spanish": "sentido",
        "english": "sense"
    },
    {
        "spanish": "boca",
        "english": "mouth"
    },
    {
        "spanish": "soportar",
        "english": "to bear"
    },
    {
        "spanish": "cuatro",
        "english": "four"
    },
    {
        "spanish": "continuar",
        "english": "to continue"
    },
    {
        "spanish": "árbol",
        "english": "tree"
    },
    {
        "spanish": "hermano",
        "english": "brother"
    },
    {
        "spanish": "razón",
        "english": "reason"
    },
    {
        "spanish": "caballo",
        "english": "horse"
    },
    {
        "spanish": "otros",
        "english": "others"
    },
    {
        "spanish": "orden",
        "english": "order"
    },
    {
        "spanish": "cinco",
        "english": "five"
    },
    {
        "spanish": "tocar",
        "english": "to touch"
    },
    {
        "spanish": "redondo",
        "english": "round"
    },
    {
        "spanish": "profundo",
        "english": "deep"
    },
    {
        "spanish": "carta",
        "english": "letter"
    },
    {
        "spanish": "suponer",
        "english": "to suppose"
    },
    {
        "spanish": "fuerza",
        "english": "force"
    },
    {
        "spanish": "pueblo",
        "english": "town"
    },
    {
        "spanish": "comer",
        "english": "to eat"
    },
    {
        "spanish": "claro",
        "english": "clear"
    },
    {
        "spanish": "casarse",
        "english": "to marry"
    },
    {
        "spanish": "país",
        "english": "country"
    },
    {
        "spanish": "presente",
        "english": "present"
    },
    {
        "spanish": "piso",
        "english": "floor"
    },
    {
        "spanish": "pagar",
        "english": "to pay"
    },
    {
        "spanish": "asentir",
        "english": "to nod"
    },
    {
        "spanish": "dedo",
        "english": "finger"
    },
    {
        "spanish": "permanecer",
        "english": "to remain"
    },
    {
        "spanish": "lágrima",
        "english": "tear"
    },
    {
        "spanish": "calle",
        "english": "street"
    },
    {
        "spanish": "dama",
        "english": "lady"
    },
    {
        "spanish": "temor",
        "english": "fear"
    },
    {
        "spanish": "alguien",
        "english": "someone"
    },
    {
        "spanish": "negocio",
        "english": "business"
    },
    {
        "spanish": "poder",
        "english": "able"
    },
    {
        "spanish": "silla",
        "english": "chair"
    },
    {
        "spanish": "olvidar",
        "english": "to forget"
    },
    {
        "spanish": "rojo",
        "english": "red"
    },
    {
        "spanish": "quizás",
        "english": "perhaps"
    },
    {
        "spanish": "corto",
        "english": "short"
    },
    {
        "spanish": "suelo",
        "english": "ground"
    },
    {
        "spanish": "cierto",
        "english": "true"
    },
    {
        "spanish": "labio",
        "english": "lip"
    },
    {
        "spanish": "vestirse",
        "english": "to dress"
    },
    {
        "spanish": "mes",
        "english": "month"
    },
    {
        "spanish": "tarde",
        "english": "late"
    },
    {
        "spanish": "colegio",
        "english": "school"
    },
    {
        "spanish": "quién",
        "english": "whom"
    },
    {
        "spanish": "bajo",
        "english": "low"
    },
    {
        "spanish": "marido",
        "english": "husband"
    },
    {
        "spanish": "diferente",
        "english": "different"
    },
    {
        "spanish": "beber",
        "english": "to drink"
    },
    {
        "spanish": "aprender",
        "english": "to learn"
    },
    {
        "spanish": "papel",
        "english": "paper"
    },
    {
        "spanish": "tierra",
        "english": "land"
    },
    {
        "spanish": "ordenar",
        "english": "sort"
    },
    {
        "spanish": "encima",
        "english": "above"
    },
    {
        "spanish": "cien",
        "english": "hundred"
    },
    {
        "spanish": "notar",
        "english": "to notice"
    },
    {
        "spanish": "hija",
        "english": "daughter"
    },
    {
        "spanish": "oficina",
        "english": "office"
    },
    {
        "spanish": "frío",
        "english": "cold"
    },
    {
        "spanish": "figura",
        "english": "figure"
    },
    {
        "spanish": "sensación",
        "english": "feeling"
    },
    {
        "spanish": "colgar",
        "english": "to hang"
    },
    {
        "spanish": "cortar",
        "english": "to cut"
    },
    {
        "spanish": "número",
        "english": "number"
    },
    {
        "spanish": "multa",
        "english": "fine"
    },
    {
        "spanish": "ciudad",
        "english": "city"
    },
    {
        "spanish": "sorprender",
        "english": "to surprise"
    },
    {
        "spanish": "elevar",
        "english": "to raise"
    },
    {
        "spanish": "llenar",
        "english": "to fill"
    },
    {
        "spanish": "varios",
        "english": "several"
    },
    {
        "spanish": "cuyo",
        "english": "whose"
    },
    {
        "spanish": "pobre",
        "english": "poor"
    },
    {
        "spanish": "hace",
        "english": "ago"
    },
    {
        "spanish": "causar",
        "english": "to cause"
    },
    {
        "spanish": "entrar",
        "english": "to enter"
    },
    {
        "spanish": "listo",
        "english": "ready"
    },
    {
        "spanish": "azul",
        "english": "blue"
    },
    {
        "spanish": "adelante",
        "english": "forward"
    },
    {
        "spanish": "hermana",
        "english": "sister"
    },
    {
        "spanish": "gastar",
        "english": "to spend"
    },
    {
        "spanish": "estado",
        "english": "state"
    },
    {
        "spanish": "pelear",
        "english": "to fight"
    },
    {
        "spanish": "fuerte",
        "english": "strong"
    },
    {
        "spanish": "besar",
        "english": "to kiss"
    },
    {
        "spanish": "durante",
        "english": "during"
    },
    {
        "spanish": "poco",
        "english": "bit"
    },
    {
        "spanish": "pierna",
        "english": "leg"
    },
    {
        "spanish": "querido",
        "english": "dear"
    },
    {
        "spanish": "feliz",
        "english": "happy"
    },
    {
        "spanish": "sueño",
        "english": "dream"
    },
    {
        "spanish": "nota",
        "english": "note"
    },
    {
        "spanish": "incorrecto",
        "english": "wrong"
    },
    {
        "spanish": "interesar",
        "english": "interest"
    },
    {
        "spanish": "sangre",
        "english": "blood"
    },
    {
        "spanish": "viento",
        "english": "wind"
    },
    {
        "spanish": "humano",
        "english": "human"
    },
    {
        "spanish": "señor",
        "english": "lord"
    },
    {
        "spanish": "cubrir",
        "english": "to cover"
    },
    {
        "spanish": "apoyarse",
        "english": "to lean"
    },
    {
        "spanish": "permitir",
        "english": "to allow"
    },
    {
        "spanish": "diez",
        "english": "ten"
    },
    {
        "spanish": "duda",
        "english": "doubt"
    },
    {
        "spanish": "veinte",
        "english": "twenty"
    },
    {
        "spanish": "hermoso",
        "english": "beautiful"
    },
    {
        "spanish": "guerra",
        "english": "war"
    },
    {
        "spanish": "bonita",
        "english": "pretty"
    },
    {
        "spanish": "despacio",
        "english": "slowly"
    },
    {
        "spanish": "posible",
        "english": "possible"
    },
    {
        "spanish": "problema",
        "english": "trouble"
    },
    {
        "spanish": "visitar",
        "english": "to visit"
    },
    {
        "spanish": "gratis",
        "english": "free"
    },
    {
        "spanish": "trozo",
        "english": "piece"
    },
    {
        "spanish": "dom",
        "english": "sun"
    },
    {
        "spanish": "verdad",
        "english": "truth"
    },
    {
        "spanish": "considerar",
        "english": "to consider"
    },
    {
        "spanish": "actuar",
        "english": "to act"
    },
    {
        "spanish": "nadie",
        "english": "anyone"
    },
    {
        "spanish": "firmar",
        "english": "sign"
    },
    {
        "spanish": "acuerdo",
        "english": "deal"
    },
    {
        "spanish": "vaso",
        "english": "glass"
    },
    {
        "spanish": "trabajo",
        "english": "job"
    },
    {
        "spanish": "susurrar",
        "english": "to whisper"
    },
    {
        "spanish": "formar",
        "english": "form"
    },
    {
        "spanish": "fácil",
        "english": "easy"
    },
    {
        "spanish": "años",
        "english": "age"
    },
    {
        "spanish": "imagen",
        "english": "picture"
    },
    {
        "spanish": "seis",
        "english": "six"
    },
    {
        "spanish": "finalmente",
        "english": "finally"
    },
    {
        "spanish": "comprar",
        "english": "to buy"
    },
    {
        "spanish": "silencio",
        "english": "silence"
    },
    {
        "spanish": "perro",
        "english": "dog"
    },
    {
        "spanish": "visión",
        "english": "sight"
    },
    {
        "spanish": "oreja",
        "english": "ear"
    },
    {
        "spanish": "ofrecer",
        "english": "to offer"
    },
    {
        "spanish": "enviar",
        "english": "ship"
    },
    {
        "spanish": "mar",
        "english": "sea"
    },
    {
        "spanish": "anillo",
        "english": "ring"
    },
    {
        "spanish": "prometer",
        "english": "to promise"
    },
    {
        "spanish": "mil",
        "english": "thousand"
    },
    {
        "spanish": "adivinar",
        "english": "to guess"
    },
    {
        "spanish": "esquina",
        "english": "corner"
    },
    {
        "spanish": "teléfono",
        "english": "phone"
    },
    {
        "spanish": "atención",
        "english": "attention"
    },
    {
        "spanish": "esconder",
        "english": "to hide"
    },
    {
        "spanish": "perderse",
        "english": "to miss"
    },
    {
        "spanish": "mirada",
        "english": "gaze"
    },
    {
        "spanish": "policía",
        "english": "police"
    },
    {
        "spanish": "ahorrar",
        "english": "to save"
    },
    {
        "spanish": "partido",
        "english": "party"
    },
    {
        "spanish": "inglés",
        "english": "english"
    },
    {
        "spanish": "piedra",
        "english": "stone"
    },
    {
        "spanish": "londres",
        "english": "london"
    },
    {
        "spanish": "extraño",
        "english": "strange"
    },
    {
        "spanish": "bebé",
        "english": "baby"
    },
    {
        "spanish": "temeroso",
        "english": "afraid"
    },
    {
        "spanish": "dolor",
        "english": "pain"
    },
    {
        "spanish": "ola",
        "english": "wave"
    },
    {
        "spanish": "cocina",
        "english": "kitchen"
    },
    {
        "spanish": "verde",
        "english": "green"
    },
    {
        "spanish": "pareja",
        "english": "couple"
    },
    {
        "spanish": "chico",
        "english": "guy"
    },
    {
        "spanish": "americano",
        "english": "american"
    },
    {
        "spanish": "asiento",
        "english": "seat"
    },
    {
        "spanish": "rodar",
        "english": "to roll"
    },
    {
        "spanish": "soplar",
        "english": "to blow"
    },
    {
        "spanish": "pesado",
        "english": "heavy"
    },
    {
        "spanish": "alma",
        "english": "soul"
    },
    {
        "spanish": "importante",
        "english": "important"
    },
    {
        "spanish": "calentar",
        "english": "warm"
    },
    {
        "spanish": "mía",
        "english": "mine"
    },
    {
        "spanish": "posición",
        "english": "position"
    },
    {
        "spanish": "caliente",
        "english": "hot"
    },
    {
        "spanish": "gritar",
        "english": "to shout"
    },
    {
        "spanish": "tema",
        "english": "subject"
    },
    {
        "spanish": "cena",
        "english": "dinner"
    },
    {
        "spanish": "verificar",
        "english": "to check"
    },
    {
        "spanish": "espíritu",
        "english": "spirit"
    },
    {
        "spanish": "oficial",
        "english": "officer"
    },
    {
        "spanish": "tranquilo",
        "english": "quiet"
    },
    {
        "spanish": "deseo",
        "english": "desire"
    },
    {
        "spanish": "excepto",
        "english": "except"
    },
    {
        "spanish": "imaginar",
        "english": "to imagine"
    },
    {
        "spanish": "pausar",
        "english": "to pause"
    },
    {
        "spanish": "acercarse",
        "english": "to approach"
    },
    {
        "spanish": "cuello",
        "english": "neck"
    },
    {
        "spanish": "milla",
        "english": "mile"
    },
    {
        "spanish": "manera",
        "english": "manner"
    },
    {
        "spanish": "unir",
        "english": "to join"
    },
    {
        "spanish": "comida",
        "english": "food"
    },
    {
        "spanish": "edificio",
        "english": "building"
    },
    {
        "spanish": "pegarse",
        "english": "to stick"
    },
    {
        "spanish": "borde",
        "english": "edge"
    },
    {
        "spanish": "campo",
        "english": "field"
    },
    {
        "spanish": "naturaleza",
        "english": "nature"
    },
    {
        "spanish": "río",
        "english": "river"
    },
    {
        "spanish": "pistola",
        "english": "gun"
    },
    {
        "spanish": "mencionar",
        "english": "to mention"
    },
    {
        "spanish": "derecho",
        "english": "straight"
    },
    {
        "spanish": "amplio",
        "english": "wide"
    },
    {
        "spanish": "empresa",
        "english": "company"
    },
    {
        "spanish": "cielo",
        "english": "sky"
    },
    {
        "spanish": "madera",
        "english": "wood"
    },
    {
        "spanish": "golpear",
        "english": "to hit"
    },
    {
        "spanish": "bailar",
        "english": "to dance"
    },
    {
        "spanish": "multitud",
        "english": "crowd"
    },
    {
        "spanish": "compañero",
        "english": "fellow"
    },
    {
        "spanish": "expresión",
        "english": "expression"
    },
    {
        "spanish": "caja",
        "english": "box"
    },
    {
        "spanish": "controlar",
        "english": "control"
    },
    {
        "spanish": "iglesia",
        "english": "church"
    },
    {
        "spanish": "suspirar",
        "english": "to sigh"
    },
    {
        "spanish": "elegir",
        "english": "to choose"
    },
    {
        "spanish": "sugerir",
        "english": "to suggest"
    },
    {
        "spanish": "rey",
        "english": "king"
    },
    {
        "spanish": "agradable",
        "english": "nice"
    },
    {
        "spanish": "resbalar",
        "english": "to slip"
    },
    {
        "spanish": "memoria",
        "english": "memory"
    },
    {
        "spanish": "ropa",
        "english": "clothes"
    },
    {
        "spanish": "informe",
        "english": "report"
    },
    {
        "spanish": "aceptar",
        "english": "to accept"
    },
    {
        "spanish": "disfrutar",
        "english": "to enjoy"
    },
    {
        "spanish": "piel",
        "english": "skin"
    },
    {
        "spanish": "secreto",
        "english": "secret"
    },
    {
        "spanish": "juego",
        "english": "game"
    },
    {
        "spanish": "bote",
        "english": "boat"
    },
    {
        "spanish": "vacío",
        "english": "empty"
    },
    {
        "spanish": "hoy",
        "english": "today"
    },
    {
        "spanish": "infierno",
        "english": "hell"
    },
    {
        "spanish": "servir",
        "english": "to serve"
    },
    {
        "spanish": "suave",
        "english": "soft"
    },
    {
        "spanish": "escapar",
        "english": "to escape"
    },
    {
        "spanish": "tono",
        "english": "tone"
    },
    {
        "spanish": "odiar",
        "english": "to hate"
    },
    {
        "spanish": "dirección",
        "english": "direction"
    },
    {
        "spanish": "intento",
        "english": "attempt"
    },
    {
        "spanish": "grupo",
        "english": "group"
    },
    {
        "spanish": "mejilla",
        "english": "cheek"
    },
    {
        "spanish": "bolsillo",
        "english": "pocket"
    },
    {
        "spanish": "buscar",
        "english": "to search"
    },
    {
        "spanish": "oler",
        "english": "to smell"
    },
    {
        "spanish": "primavera",
        "english": "spring"
    },
    {
        "spanish": "medio",
        "english": "middle"
    },
    {
        "spanish": "cuenta",
        "english": "account"
    },
    {
        "spanish": "izquierda",
        "english": "left"
    },
    {
        "spanish": "servicio",
        "english": "service"
    },
    {
        "spanish": "siguiendo",
        "english": "following"
    },
    {
        "spanish": "lastimar",
        "english": "to hurt"
    },
    {
        "spanish": "cargar",
        "english": "charge"
    },
    {
        "spanish": "público",
        "english": "public"
    },
    {
        "spanish": "placer",
        "english": "pleasure"
    },
    {
        "spanish": "hidalgo",
        "english": "gentleman"
    },
    {
        "spanish": "oro",
        "english": "gold"
    },
    {
        "spanish": "noticias",
        "english": "news"
    },
    {
        "spanish": "rodilla",
        "english": "knee"
    },
    {
        "spanish": "brillante",
        "english": "bright"
    },
    {
        "spanish": "alegre",
        "english": "glad"
    },
    {
        "spanish": "vencer",
        "english": "to beat"
    },
    {
        "spanish": "rápido",
        "english": "fast"
    },
    {
        "spanish": "soltero",
        "english": "single"
    },
    {
        "spanish": "distancia",
        "english": "distance"
    },
    {
        "spanish": "escena",
        "english": "scene"
    },
    {
        "spanish": "admitir",
        "english": "to admit"
    },
    {
        "spanish": "entrenar",
        "english": "train"
    },
    {
        "spanish": "clase",
        "english": "class"
    },
    {
        "spanish": "escritorio",
        "english": "desk"
    },
    {
        "spanish": "sala",
        "english": "hall"
    },
    {
        "spanish": "pecho",
        "english": "chest"
    },
    {
        "spanish": "dominar",
        "english": "master"
    },
    {
        "spanish": "café",
        "english": "coffee"
    },
    {
        "spanish": "confiar",
        "english": "to trust"
    },
    {
        "spanish": "guardia",
        "english": "guard"
    },
    {
        "spanish": "efecto",
        "english": "effect"
    },
    {
        "spanish": "sombra",
        "english": "shadow"
    },
    {
        "spanish": "cantar",
        "english": "to sing"
    },
    {
        "spanish": "bolso",
        "english": "bag"
    },
    {
        "spanish": "probar",
        "english": "to prove"
    },
    {
        "spanish": "francés",
        "english": "french"
    },
    {
        "spanish": "ninguna",
        "english": "none"
    },
    {
        "spanish": "apurarse",
        "english": "to rush"
    },
    {
        "spanish": "montaña",
        "english": "mountain"
    },
    {
        "spanish": "preparar",
        "english": "to prepare"
    },
    {
        "spanish": "soldado",
        "english": "soldier"
    },
    {
        "spanish": "apenas",
        "english": "hardly"
    },
    {
        "spanish": "limpiar",
        "english": "clean"
    },
    {
        "spanish": "vender",
        "english": "to sell"
    },
    {
        "spanish": "matrimonio",
        "english": "marriage"
    },
    {
        "spanish": "acción",
        "english": "action"
    },
    {
        "spanish": "miembro",
        "english": "member"
    },
    {
        "spanish": "futuro",
        "english": "future"
    },
    {
        "spanish": "colina",
        "english": "hill"
    },
    {
        "spanish": "jardín",
        "english": "garden"
    },
    {
        "spanish": "dulce",
        "english": "sweet"
    },
    {
        "spanish": "lluvia",
        "english": "rain"
    },
    {
        "spanish": "personaje",
        "english": "character"
    },
    {
        "spanish": "viajar",
        "english": "to travel"
    },
    {
        "spanish": "ataque",
        "english": "attack"
    },
    {
        "spanish": "fumar",
        "english": "smoke"
    },
    {
        "spanish": "seguro",
        "english": "safe"
    },
    {
        "spanish": "espacio",
        "english": "space"
    },
    {
        "spanish": "zona",
        "english": "area"
    },
    {
        "spanish": "situación",
        "english": "situation"
    },
    {
        "spanish": "rehusar",
        "english": "to refuse"
    },
    {
        "spanish": "treinta",
        "english": "thirty"
    },
    {
        "spanish": "seco",
        "english": "dry"
    },
    {
        "spanish": "saltar",
        "english": "to jump"
    },
    {
        "spanish": "repetir",
        "english": "to repeat"
    },
    {
        "spanish": "salvaje",
        "english": "wild"
    },
    {
        "spanish": "inglaterra",
        "english": "england"
    },
    {
        "spanish": "tercero",
        "english": "third"
    },
    {
        "spanish": "camisa",
        "english": "shirt"
    },
    {
        "spanish": "ganar",
        "english": "to win"
    },
    {
        "spanish": "nariz",
        "english": "nose"
    },
    {
        "spanish": "verano",
        "english": "summer"
    },
    {
        "spanish": "garganta",
        "english": "throat"
    },
    {
        "spanish": "esfuerzo",
        "english": "effort"
    },
    {
        "spanish": "sencillo",
        "english": "simple"
    },
    {
        "spanish": "término",
        "english": "term"
    },
    {
        "spanish": "enseñar",
        "english": "to teach"
    },
    {
        "spanish": "carrera",
        "english": "race"
    },
    {
        "spanish": "lento",
        "english": "slow"
    },
    {
        "spanish": "música",
        "english": "music"
    },
    {
        "spanish": "indio",
        "english": "indian"
    },
    {
        "spanish": "evento",
        "english": "event"
    },
    {
        "spanish": "flor",
        "english": "flower"
    },
    {
        "spanish": "marcar",
        "english": "to mark"
    },
    {
        "spanish": "pájaro",
        "english": "bird"
    },
    {
        "spanish": "corte",
        "english": "court"
    },
    {
        "spanish": "reunión",
        "english": "meeting"
    },
    {
        "spanish": "sombrero",
        "english": "hat"
    },
    {
        "spanish": "fallar",
        "english": "to fail"
    },
    {
        "spanish": "escalar",
        "english": "to climb"
    },
    {
        "spanish": "asesinato",
        "english": "murder"
    },
    {
        "spanish": "caber",
        "english": "to fit"
    },
    {
        "spanish": "ninguno",
        "english": "neither"
    },
    {
        "spanish": "delgado",
        "english": "thin"
    },
    {
        "spanish": "resultado",
        "english": "result"
    },
    {
        "spanish": "completar",
        "english": "complete"
    },
    {
        "spanish": "diente",
        "english": "tooth"
    },
    {
        "spanish": "propósito",
        "english": "purpose"
    },
    {
        "spanish": "página",
        "english": "page"
    },
    {
        "spanish": "así",
        "english": "thus"
    },
    {
        "spanish": "traje",
        "english": "suit"
    },
    {
        "spanish": "enemigo",
        "english": "enemy"
    },
    {
        "spanish": "siglo",
        "english": "century"
    },
    {
        "spanish": "luchar",
        "english": "to struggle"
    },
    {
        "spanish": "objeto",
        "english": "object"
    },
    {
        "spanish": "despertar",
        "english": "to wake"
    },
    {
        "spanish": "rico",
        "english": "rich"
    },
    {
        "spanish": "reclamar",
        "english": "to claim"
    },
    {
        "spanish": "justa",
        "english": "fair"
    },
    {
        "spanish": "común",
        "english": "common"
    },
    {
        "spanish": "grueso",
        "english": "thick"
    },
    {
        "spanish": "cosas",
        "english": "stuff"
    },
    {
        "spanish": "dirigirse",
        "english": "to address"
    },
    {
        "spanish": "vivo",
        "english": "living"
    },
    {
        "spanish": "siete",
        "english": "seven"
    },
    {
        "spanish": "reconocer",
        "english": "to recognize"
    },
    {
        "spanish": "apoyar",
        "english": "to support"
    },
    {
        "spanish": "yarda",
        "english": "yard"
    },
    {
        "spanish": "agarrar",
        "english": "to grab"
    },
    {
        "spanish": "marrón",
        "english": "brown"
    },
    {
        "spanish": "mando",
        "english": "command"
    },
    {
        "spanish": "presencia",
        "english": "presence"
    },
    {
        "spanish": "capa",
        "english": "coat"
    },
    {
        "spanish": "estación",
        "english": "station"
    },
    {
        "spanish": "necesario",
        "english": "necessary"
    },
    {
        "spanish": "hundir",
        "english": "to sink"
    },
    {
        "spanish": "banco",
        "english": "bank"
    },
    {
        "spanish": "estirar",
        "english": "to stretch"
    },
    {
        "spanish": "perfecto",
        "english": "perfect"
    },
    {
        "spanish": "sufrir",
        "english": "to suffer"
    },
    {
        "spanish": "repentino",
        "english": "sudden"
    },
    {
        "spanish": "ocho",
        "english": "eight"
    },
    {
        "spanish": "especial",
        "english": "particular"
    },
    {
        "spanish": "oscuridad",
        "english": "darkness"
    },
    {
        "spanish": "escalera",
        "english": "stair"
    },
    {
        "spanish": "agradecer",
        "english": "to thank"
    },
    {
        "spanish": "movimiento",
        "english": "movement"
    },
    {
        "spanish": "tienda",
        "english": "shop"
    },
    {
        "spanish": "pálido",
        "english": "pale"
    },
    {
        "spanish": "pertenecer",
        "english": "to belong"
    },
    {
        "spanish": "idioma",
        "english": "language"
    },
    {
        "spanish": "grave",
        "english": "serious"
    },
    {
        "spanish": "estrecho",
        "english": "narrow"
    },
    {
        "spanish": "condición",
        "english": "condition"
    },
    {
        "spanish": "estrella",
        "english": "star"
    },
    {
        "spanish": "botella",
        "english": "bottle"
    },
    {
        "spanish": "viva",
        "english": "alive"
    },
    {
        "spanish": "llave",
        "english": "key"
    },
    {
        "spanish": "balancear",
        "english": "to swing"
    },
    {
        "spanish": "ruidoso",
        "english": "loud"
    },
    {
        "spanish": "error",
        "english": "mistake"
    },
    {
        "spanish": "belleza",
        "english": "beauty"
    },
    {
        "spanish": "portón",
        "english": "gate"
    },
    {
        "spanish": "deslizarse",
        "english": "to slide"
    },
    {
        "spanish": "consciente",
        "english": "aware"
    },
    {
        "spanish": "atreverse",
        "english": "to dare"
    },
    {
        "spanish": "servidor",
        "english": "servant"
    },
    {
        "spanish": "inclinarse",
        "english": "to bow"
    },
    {
        "spanish": "circulo",
        "english": "circle"
    },
    {
        "spanish": "grabar",
        "english": "record"
    },
    {
        "spanish": "enojado",
        "english": "angry"
    },
    {
        "spanish": "nube",
        "english": "cloud"
    },
    {
        "spanish": "regla",
        "english": "rule"
    },
    {
        "spanish": "batalla",
        "english": "battle"
    },
    {
        "spanish": "tablero",
        "english": "board"
    },
    {
        "spanish": "privado",
        "english": "private"
    },
    {
        "spanish": "herida",
        "english": "wound"
    },
    {
        "spanish": "gusto",
        "english": "taste"
    },
    {
        "spanish": "arreglar",
        "english": "to fix"
    },
    {
        "spanish": "fácilmente",
        "english": "easily"
    },
    {
        "spanish": "criatura",
        "english": "creature"
    },
    {
        "spanish": "longitud",
        "english": "length"
    },
    {
        "spanish": "almacenar",
        "english": "store"
    },
    {
        "spanish": "fresco",
        "english": "fresh"
    },
    {
        "spanish": "vino",
        "english": "wine"
    },
    {
        "spanish": "ocasión",
        "english": "occasion"
    },
    {
        "spanish": "sistema",
        "english": "system"
    },
    {
        "spanish": "juez",
        "english": "judge"
    },
    {
        "spanish": "lengua",
        "english": "tongue"
    },
    {
        "spanish": "libra",
        "english": "pound"
    },
    {
        "spanish": "crear",
        "english": "to create"
    },
    {
        "spanish": "forma",
        "english": "shape"
    },
    {
        "spanish": "valor",
        "english": "worth"
    },
    {
        "spanish": "canción",
        "english": "song"
    },
    {
        "spanish": "enfermo",
        "english": "ill"
    },
    {
        "spanish": "nieve",
        "english": "snow"
    },
    {
        "spanish": "nivel",
        "english": "level"
    },
    {
        "spanish": "tonto",
        "english": "fool"
    },
    {
        "spanish": "enfermos",
        "english": "sick"
    },
    {
        "spanish": "detalle",
        "english": "detail"
    },
    {
        "spanish": "opinión",
        "english": "opinion"
    },
    {
        "spanish": "involucrar",
        "english": "to involve"
    },
    {
        "spanish": "dólar",
        "english": "dollar"
    },
    {
        "spanish": "enorme",
        "english": "huge"
    },
    {
        "spanish": "guay",
        "english": "cool"
    },
    {
        "spanish": "acampar",
        "english": "camp"
    },
    {
        "spanish": "ejemplo",
        "english": "example"
    },
    {
        "spanish": "viaje",
        "english": "trip"
    },
    {
        "spanish": "par",
        "english": "pair"
    },
    {
        "spanish": "cuento",
        "english": "tale"
    },
    {
        "spanish": "probable",
        "english": "likely"
    },
    {
        "spanish": "imposible",
        "english": "impossible"
    },
    {
        "spanish": "sociedad",
        "english": "society"
    },
    {
        "spanish": "robar",
        "english": "to steal"
    },
    {
        "spanish": "paz",
        "english": "peace"
    },
    {
        "spanish": "mensaje",
        "english": "message"
    },
    {
        "spanish": "asunto",
        "english": "affair"
    },
    {
        "spanish": "requerir",
        "english": "to require"
    },
    {
        "spanish": "zapato",
        "english": "shoe"
    },
    {
        "spanish": "pretender",
        "english": "to intend"
    },
    {
        "spanish": "calor",
        "english": "heat"
    },
    {
        "spanish": "ejército",
        "english": "army"
    },
    {
        "spanish": "ocupado",
        "english": "busy"
    },
    {
        "spanish": "gris",
        "english": "gray"
    },
    {
        "spanish": "alemán",
        "english": "german"
    },
    {
        "spanish": "contener",
        "english": "to contain"
    },
    {
        "spanish": "amarillo",
        "english": "yellow"
    },
    {
        "spanish": "tarjeta",
        "english": "card"
    },
    {
        "spanish": "agudo",
        "english": "sharp"
    },
    {
        "spanish": "calma",
        "english": "calm"
    },
    {
        "spanish": "bola",
        "english": "ball"
    },
    {
        "spanish": "fondo",
        "english": "bottom"
    },
    {
        "spanish": "peligro",
        "english": "danger"
    },
    {
        "spanish": "pez",
        "english": "fish"
    },
    {
        "spanish": "principal",
        "english": "main"
    },
    {
        "spanish": "pintar",
        "english": "to paint"
    },
    {
        "spanish": "autor",
        "english": "author"
    },
    {
        "spanish": "ruido",
        "english": "noise"
    },
    {
        "spanish": "enfado",
        "english": "anger"
    },
    {
        "spanish": "diferencia",
        "english": "difference"
    },
    {
        "spanish": "huésped",
        "english": "guest"
    },
    {
        "spanish": "sospechar",
        "english": "to suspect"
    },
    {
        "spanish": "choque",
        "english": "shock"
    },
    {
        "spanish": "disparo",
        "english": "shot"
    },
    {
        "spanish": "jefe",
        "english": "chief"
    },
    {
        "spanish": "brillar",
        "english": "to shine"
    },
    {
        "spanish": "respirar",
        "english": "to breathe"
    },
    {
        "spanish": "gobierno",
        "english": "government"
    },
    {
        "spanish": "pasantía",
        "english": "stage"
    },
    {
        "spanish": "cincuenta",
        "english": "fifty"
    },
    {
        "spanish": "agujero",
        "english": "hole"
    },
    {
        "spanish": "escritor",
        "english": "writer"
    },
    {
        "spanish": "reventar",
        "english": "to burst"
    },
    {
        "spanish": "elección",
        "english": "choice"
    },
    {
        "spanish": "plateado",
        "english": "silver"
    },
    {
        "spanish": "minúsculo",
        "english": "tiny"
    },
    {
        "spanish": "hierba",
        "english": "grass"
    },
    {
        "spanish": "dirigir",
        "english": "to direct"
    },
    {
        "spanish": "apariencia",
        "english": "appearance"
    },
    {
        "spanish": "américa",
        "english": "america"
    },
    {
        "spanish": "empacar",
        "english": "to pack"
    },
    {
        "spanish": "suavemente",
        "english": "softly"
    },
    {
        "spanish": "pista",
        "english": "track"
    },
    {
        "spanish": "evidencia",
        "english": "evidence"
    },
    {
        "spanish": "malvado",
        "english": "evil"
    },
    {
        "spanish": "revelar",
        "english": "to reveal"
    },
    {
        "spanish": "existir",
        "english": "to exist"
    },
    {
        "spanish": "arrastrar",
        "english": "to drag"
    },
    {
        "spanish": "rezar",
        "english": "to pray"
    },
    {
        "spanish": "aparte",
        "english": "aside"
    },
    {
        "spanish": "invierno",
        "english": "winter"
    },
    {
        "spanish": "período",
        "english": "period"
    },
    {
        "spanish": "bloque",
        "english": "block"
    },
    {
        "spanish": "claramente",
        "english": "clearly"
    },
    {
        "spanish": "murmurar",
        "english": "to murmur"
    },
    {
        "spanish": "publicar",
        "english": "post"
    },
    {
        "spanish": "corriente",
        "english": "stream"
    },
    {
        "spanish": "barrer",
        "english": "to sweep"
    },
    {
        "spanish": "insistir",
        "english": "to insist"
    },
    {
        "spanish": "cuarto",
        "english": "quarter"
    },
    {
        "spanish": "cerebro",
        "english": "brain"
    },
    {
        "spanish": "llanura",
        "english": "plain"
    },
    {
        "spanish": "plano",
        "english": "flat"
    },
    {
        "spanish": "cuestión",
        "english": "issue"
    },
    {
        "spanish": "deleite",
        "english": "delight"
    },
    {
        "spanish": "isla",
        "english": "island"
    },
    {
        "spanish": "planta",
        "english": "plant"
    },
    {
        "spanish": "alegría",
        "english": "joy"
    },
    {
        "spanish": "relación",
        "english": "relationship"
    },
    {
        "spanish": "cuchillo",
        "english": "knife"
    },
    {
        "spanish": "cepillar",
        "english": "to brush"
    },
    {
        "spanish": "maldito",
        "english": "damn"
    },
    {
        "spanish": "temblar",
        "english": "to tremble"
    },
    {
        "spanish": "parque",
        "english": "park"
    },
    {
        "spanish": "sexo",
        "english": "sex"
    },
    {
        "spanish": "juventud",
        "english": "youth"
    },
    {
        "spanish": "practicar",
        "english": "practice"
    },
    {
        "spanish": "desayuno",
        "english": "breakfast"
    },
    {
        "spanish": "capitán",
        "english": "captain"
    },
    {
        "spanish": "destruir",
        "english": "to destroy"
    },
    {
        "spanish": "envolver",
        "english": "to wrap"
    },
    {
        "spanish": "gato",
        "english": "cat"
    },
    {
        "spanish": "comodidad",
        "english": "comfort"
    },
    {
        "spanish": "gesto",
        "english": "gesture"
    },
    {
        "spanish": "sacerdote",
        "english": "priest"
    },
    {
        "spanish": "francia",
        "english": "france"
    },
    {
        "spanish": "manejar",
        "english": "to handle"
    },
    {
        "spanish": "testigo",
        "english": "witness"
    },
    {
        "spanish": "patear",
        "english": "to kick"
    },
    {
        "spanish": "asumir",
        "english": "to assume"
    },
    {
        "spanish": "dormido",
        "english": "asleep"
    },
    {
        "spanish": "apretado",
        "english": "tight"
    },
    {
        "spanish": "bosque",
        "english": "forest"
    },
    {
        "spanish": "falta",
        "english": "lack"
    },
    {
        "spanish": "compañera",
        "english": "companion"
    },
    {
        "spanish": "decisión",
        "english": "decision"
    },
    {
        "spanish": "incluir",
        "english": "to include"
    },
    {
        "spanish": "invitar",
        "english": "to invite"
    },
    {
        "spanish": "emoción",
        "english": "emotion"
    },
    {
        "spanish": "hueso",
        "english": "bone"
    },
    {
        "spanish": "rodear",
        "english": "to surround"
    },
    {
        "spanish": "superficie",
        "english": "surface"
    },
    {
        "spanish": "cajas",
        "english": "dozen"
    },
    {
        "spanish": "declarar",
        "english": "to declare"
    },
    {
        "spanish": "arma",
        "english": "weapon"
    },
    {
        "spanish": "centro",
        "english": "center"
    },
    {
        "spanish": "bienvenido",
        "english": "welcome"
    },
    {
        "spanish": "crimen",
        "english": "crime"
    },
    {
        "spanish": "peso",
        "english": "weight"
    },
    {
        "spanish": "amante",
        "english": "lover"
    },
    {
        "spanish": "espada",
        "english": "sword"
    },
    {
        "spanish": "lista",
        "english": "list"
    },
    {
        "spanish": "fecha",
        "english": "date"
    },
    {
        "spanish": "discurso",
        "english": "speech"
    },
    {
        "spanish": "cristiano",
        "english": "christian"
    },
    {
        "spanish": "pasion",
        "english": "passion"
    },
    {
        "spanish": "influencia",
        "english": "influence"
    },
    {
        "spanish": "gente",
        "english": "folk"
    },
    {
        "spanish": "tormenta",
        "english": "storm"
    },
    {
        "spanish": "luna",
        "english": "moon"
    },
    {
        "spanish": "político",
        "english": "political"
    },
    {
        "spanish": "rogar",
        "english": "to beg"
    },
    {
        "spanish": "acordar",
        "english": "to accord"
    },
    {
        "spanish": "maquina",
        "english": "machine"
    },
    {
        "spanish": "cuarenta",
        "english": "forty"
    },
    {
        "spanish": "nueve",
        "english": "nine"
    },
    {
        "spanish": "norte",
        "english": "north"
    },
    {
        "spanish": "tio",
        "english": "uncle"
    },
    {
        "spanish": "triste",
        "english": "sad"
    },
    {
        "spanish": "británico",
        "english": "british"
    },
    {
        "spanish": "desmayarse",
        "english": "faint"
    },
    {
        "spanish": "doble",
        "english": "double"
    },
    {
        "spanish": "tumba",
        "english": "grave"
    },
    {
        "spanish": "instante",
        "english": "instant"
    },
    {
        "spanish": "plato",
        "english": "plate"
    },
    {
        "spanish": "enterrar",
        "english": "to bury"
    },
    {
        "spanish": "encantador",
        "english": "lovely"
    },
    {
        "spanish": "hielo",
        "english": "ice"
    },
    {
        "spanish": "separar",
        "english": "to separate"
    },
    {
        "spanish": "morder",
        "english": "to bite"
    },
    {
        "spanish": "robo",
        "english": "roof"
    },
    {
        "spanish": "jurar",
        "english": "to swear"
    },
    {
        "spanish": "pulgada",
        "english": "inch"
    },
    {
        "spanish": "conductor",
        "english": "driver"
    },
    {
        "spanish": "espejo",
        "english": "mirror"
    },
    {
        "spanish": "estómago",
        "english": "stomach"
    },
    {
        "spanish": "siendo",
        "english": "being"
    },
    {
        "spanish": "ignorar",
        "english": "to ignore"
    },
    {
        "spanish": "opuesto",
        "english": "opposite"
    },
    {
        "spanish": "molestar",
        "english": "to bother"
    },
    {
        "spanish": "barco",
        "english": "boot"
    },
    {
        "spanish": "polvo",
        "english": "dust"
    },
    {
        "spanish": "frotar",
        "english": "to rub"
    },
    {
        "spanish": "resplandor",
        "english": "glow"
    },
    {
        "spanish": "enfermera",
        "english": "nurse"
    },
    {
        "spanish": "señora",
        "english": "mrs"
    },
    {
        "spanish": "orgulloso",
        "english": "proud"
    },
    {
        "spanish": "loco",
        "english": "mad"
    },
    {
        "spanish": "autoridad",
        "english": "authority"
    },
    {
        "spanish": "contactar",
        "english": "contact"
    },
    {
        "spanish": "periódico",
        "english": "newspaper"
    },
    {
        "spanish": "navidad",
        "english": "christmas"
    },
    {
        "spanish": "riesgo",
        "english": "risk"
    },
    {
        "spanish": "grado",
        "english": "degree"
    },
    {
        "spanish": "algo",
        "english": "somewhat"
    },
    {
        "spanish": "estilo",
        "english": "style"
    },
    {
        "spanish": "poseer",
        "english": "to possess"
    },
    {
        "spanish": "camion",
        "english": "truck"
    },
    {
        "spanish": "broma",
        "english": "joke"
    },
    {
        "spanish": "propiedad",
        "english": "property"
    },
    {
        "spanish": "desnudo",
        "english": "bare"
    },
    {
        "spanish": "carne",
        "english": "flesh"
    },
    {
        "spanish": "alivio",
        "english": "relief"
    },
    {
        "spanish": "dudar",
        "english": "to hesitate"
    },
    {
        "spanish": "agarre",
        "english": "grip"
    },
    {
        "spanish": "suministro",
        "english": "supply"
    },
    {
        "spanish": "primo",
        "english": "cousin"
    },
    {
        "spanish": "proceso",
        "english": "process"
    },
    {
        "spanish": "pérdida",
        "english": "loss"
    },
    {
        "spanish": "cigarrillo",
        "english": "cigarette"
    },
    {
        "spanish": "hierro",
        "english": "iron"
    },
    {
        "spanish": "convencer",
        "english": "to convince"
    },
    {
        "spanish": "fila",
        "english": "row"
    },
    {
        "spanish": "ritmo",
        "english": "pace"
    },
    {
        "spanish": "fluir",
        "english": "to flow"
    },
    {
        "spanish": "paciente",
        "english": "patient"
    },
    {
        "spanish": "fingir",
        "english": "to pretend"
    },
    {
        "spanish": "tamaño",
        "english": "size"
    },
    {
        "spanish": "casamiento",
        "english": "wedding"
    },
    {
        "spanish": "anunciar",
        "english": "to announce"
    },
    {
        "spanish": "hoja",
        "english": "sheet"
    },
    {
        "spanish": "diseño",
        "english": "design"
    },
    {
        "spanish": "cocinar",
        "english": "to cook"
    },
    {
        "spanish": "rueda",
        "english": "wheel"
    },
    {
        "spanish": "peligroso",
        "english": "dangerous"
    },
    {
        "spanish": "despierto",
        "english": "awake"
    },
    {
        "spanish": "suelto",
        "english": "loose"
    },
    {
        "spanish": "desierto",
        "english": "desert"
    },
    {
        "spanish": "revolver",
        "english": "to stir"
    },
    {
        "spanish": "trazo",
        "english": "stroke"
    },
    {
        "spanish": "ala",
        "english": "wing"
    },
    {
        "spanish": "doblar",
        "english": "to fold"
    },
    {
        "spanish": "pila",
        "english": "pile"
    },
    {
        "spanish": "llama",
        "english": "flame"
    },
    {
        "spanish": "entrada",
        "english": "entrance"
    },
    {
        "spanish": "navegar",
        "english": "to sail"
    },
    {
        "spanish": "poderoso",
        "english": "powerful"
    },
    {
        "spanish": "costo",
        "english": "cost"
    },
    {
        "spanish": "millones",
        "english": "million"
    },
    {
        "spanish": "tragar",
        "english": "to swallow"
    },
    {
        "spanish": "puente",
        "english": "bridge"
    },
    {
        "spanish": "estudiante",
        "english": "student"
    },
    {
        "spanish": "medir",
        "english": "measure"
    },
    {
        "spanish": "ciego",
        "english": "blind"
    },
    {
        "spanish": "fortuna",
        "english": "fortune"
    },
    {
        "spanish": "debido",
        "english": "due"
    },
    {
        "spanish": "gentil",
        "english": "gentle"
    },
    {
        "spanish": "diversión",
        "english": "fun"
    },
    {
        "spanish": "orgullo",
        "english": "pride"
    },
    {
        "spanish": "prueba",
        "english": "test"
    },
    {
        "spanish": "marco",
        "english": "frame"
    },
    {
        "spanish": "limpio",
        "english": "proper"
    },
    {
        "spanish": "vagar",
        "english": "to wander"
    },
    {
        "spanish": "granja",
        "english": "farm"
    },
    {
        "spanish": "equipo",
        "english": "team"
    },
    {
        "spanish": "tiempo",
        "english": "weather"
    },
    {
        "spanish": "dificultad",
        "english": "difficulty"
    },
    {
        "spanish": "débil",
        "english": "weak"
    },
    {
        "spanish": "vuelo",
        "english": "flight"
    },
    {
        "spanish": "cubierta",
        "english": "deck"
    },
    {
        "spanish": "cuidado",
        "english": "careful"
    },
    {
        "spanish": "cuadrado",
        "english": "square"
    },
    {
        "spanish": "excusa",
        "english": "excuse"
    },
    {
        "spanish": "firme",
        "english": "firm"
    },
    {
        "spanish": "rama",
        "english": "branch"
    },
    {
        "spanish": "precio",
        "english": "price"
    },
    {
        "spanish": "doce",
        "english": "twelve"
    },
    {
        "spanish": "abogado",
        "english": "lawyer"
    },
    {
        "spanish": "traza",
        "english": "trace"
    },
    {
        "spanish": "oración",
        "english": "prayer"
    },
    {
        "spanish": "cualquiera",
        "english": "anybody"
    },
    {
        "spanish": "campana",
        "english": "bell"
    },
    {
        "spanish": "regalo",
        "english": "gift"
    },
    {
        "spanish": "cristo",
        "english": "christ"
    },
    {
        "spanish": "energia",
        "english": "energy"
    },
    {
        "spanish": "hábito",
        "english": "habit"
    },
    {
        "spanish": "dispuesto",
        "english": "willing"
    },
    {
        "spanish": "calidad",
        "english": "quality"
    },
    {
        "spanish": "culpa",
        "english": "fault"
    },
    {
        "spanish": "bajar",
        "english": "to lower"
    },
    {
        "spanish": "discutir",
        "english": "to argue"
    },
    {
        "spanish": "comienzo",
        "english": "beginning"
    },
    {
        "spanish": "guapo",
        "english": "handsome"
    },
    {
        "spanish": "culpar",
        "english": "to blame"
    },
    {
        "spanish": "prisionero",
        "english": "prisoner"
    },
    {
        "spanish": "torcer",
        "english": "to twist"
    },
    {
        "spanish": "héroe",
        "english": "hero"
    },
    {
        "spanish": "suerte",
        "english": "luck"
    },
    {
        "spanish": "contenido",
        "english": "content"
    },
    {
        "spanish": "informar",
        "english": "to inform"
    },
    {
        "spanish": "arruinar",
        "english": "to ruin"
    },
    {
        "spanish": "líder",
        "english": "leader"
    },
    {
        "spanish": "ayer",
        "english": "yesterday"
    },
    {
        "spanish": "quince",
        "english": "fifteen"
    },
    {
        "spanish": "agente",
        "english": "agent"
    },
    {
        "spanish": "respuesta",
        "english": "response"
    },
    {
        "spanish": "pasaje",
        "english": "passage"
    },
    {
        "spanish": "estúpido",
        "english": "stupid"
    },
    {
        "spanish": "tarea",
        "english": "task"
    },
    {
        "spanish": "curioso",
        "english": "curious"
    },
    {
        "spanish": "sabio",
        "english": "wise"
    },
    {
        "spanish": "cantidad",
        "english": "amount"
    },
    {
        "spanish": "telefono",
        "english": "telephone"
    },
    {
        "spanish": "negar",
        "english": "to deny"
    },
    {
        "spanish": "cavar",
        "english": "to dig"
    },
    {
        "spanish": "instar",
        "english": "to urge"
    },
    {
        "spanish": "comunidad",
        "english": "community"
    },
    {
        "spanish": "físico",
        "english": "physical"
    },
    {
        "spanish": "fuente",
        "english": "source"
    },
    {
        "spanish": "palma",
        "english": "palm"
    },
    {
        "spanish": "profesor",
        "english": "teacher"
    },
    {
        "spanish": "esclavo",
        "english": "slave"
    },
    {
        "spanish": "gordo",
        "english": "fat"
    },
    {
        "spanish": "preferir",
        "english": "to prefer"
    },
    {
        "spanish": "militar",
        "english": "military"
    },
    {
        "spanish": "cabina",
        "english": "cabin"
    },
    {
        "spanish": "plenamente",
        "english": "fully"
    },
    {
        "spanish": "incapaz",
        "english": "unable"
    },
    {
        "spanish": "acompañar",
        "english": "to accompany"
    },
    {
        "spanish": "proceder",
        "english": "to proceed"
    },
    {
        "spanish": "misa",
        "english": "mass"
    },
    {
        "spanish": "solicitud",
        "english": "request"
    },
    {
        "spanish": "establecer",
        "english": "to establish"
    },
    {
        "spanish": "orilla",
        "english": "shore"
    },
    {
        "spanish": "dorado",
        "english": "golden"
    },
    {
        "spanish": "mero",
        "english": "mere"
    },
    {
        "spanish": "amenazar",
        "english": "to threaten"
    },
    {
        "spanish": "tasa",
        "english": "rate"
    },
    {
        "spanish": "maldecir",
        "english": "to curse"
    },
    {
        "spanish": "oso",
        "english": "beer"
    },
    {
        "spanish": "distante",
        "english": "distant"
    },
    {
        "spanish": "obvio",
        "english": "obvious"
    },
    {
        "spanish": "comentar",
        "english": "comment"
    },
    {
        "spanish": "ventaja",
        "english": "advantage"
    },
    {
        "spanish": "pesar",
        "english": "spite"
    },
    {
        "spanish": "archivo",
        "english": "file"
    },
    {
        "spanish": "moderno",
        "english": "modern"
    },
    {
        "spanish": "enfocar",
        "english": "to focus"
    },
    {
        "spanish": "pantalla",
        "english": "screen"
    },
    {
        "spanish": "existencia",
        "english": "existence"
    },
    {
        "spanish": "arena",
        "english": "sand"
    },
    {
        "spanish": "víctima",
        "english": "victim"
    },
    {
        "spanish": "propina",
        "english": "tip"
    },
    {
        "spanish": "locura",
        "english": "rage"
    },
    {
        "spanish": "contador",
        "english": "counter"
    },
    {
        "spanish": "asustar",
        "english": "to scare"
    },
    {
        "spanish": "accidente",
        "english": "accident"
    },
    {
        "spanish": "impresión",
        "english": "impression"
    },
    {
        "spanish": "enrollarse",
        "english": "to curl"
    },
    {
        "spanish": "playa",
        "english": "beach"
    },
    {
        "spanish": "tia",
        "english": "aunt"
    },
    {
        "spanish": "cómodo",
        "english": "comfortable"
    },
    {
        "spanish": "lástima",
        "english": "pity"
    },
    {
        "spanish": "obviamente",
        "english": "obviously"
    },
    {
        "spanish": "comercio",
        "english": "trade"
    },
    {
        "spanish": "celular",
        "english": "cell"
    },
    {
        "spanish": "salud",
        "english": "health"
    },
    {
        "spanish": "cuero",
        "english": "leather"
    },
    {
        "spanish": "áspero",
        "english": "rough"
    },
    {
        "spanish": "jadear",
        "english": "to gasp"
    },
    {
        "spanish": "banda",
        "english": "band"
    },
    {
        "spanish": "sentencia",
        "english": "sentence"
    },
    {
        "spanish": "artículo",
        "english": "article"
    },
    {
        "spanish": "cadena",
        "english": "chain"
    },
    {
        "spanish": "carro",
        "english": "carriage"
    },
    {
        "spanish": "pronunciar",
        "english": "to utter"
    },
    {
        "spanish": "avión",
        "english": "plane"
    },
    {
        "spanish": "perdonar",
        "english": "to forgive"
    },
    {
        "spanish": "poema",
        "english": "poem"
    },
    {
        "spanish": "cuerda",
        "english": "rope"
    },
    {
        "spanish": "lampara",
        "english": "lamp"
    },
    {
        "spanish": "instancia",
        "english": "instance"
    },
    {
        "spanish": "puro",
        "english": "pure"
    },
    {
        "spanish": "apoderarse",
        "english": "to seize"
    },
    {
        "spanish": "trasero",
        "english": "rear"
    },
    {
        "spanish": "honesto",
        "english": "honest"
    },
    {
        "spanish": "mayor",
        "english": "major"
    },
    {
        "spanish": "actividad",
        "english": "activity"
    },
    {
        "spanish": "ocupar",
        "english": "to occupy"
    },
    {
        "spanish": "famoso",
        "english": "famous"
    },
    {
        "spanish": "ansioso",
        "english": "anxious"
    },
    {
        "spanish": "gracioso",
        "english": "funny"
    },
    {
        "spanish": "argumento",
        "english": "argument"
    },
    {
        "spanish": "diablo",
        "english": "devil"
    },
    {
        "spanish": "confianza",
        "english": "confidence"
    },
    {
        "spanish": "lamentar",
        "english": "to regret"
    },
    {
        "spanish": "sudor",
        "english": "sweat"
    },
    {
        "spanish": "ruso",
        "english": "russian"
    },
    {
        "spanish": "rango",
        "english": "range"
    },
    {
        "spanish": "alarma",
        "english": "alarm"
    },
    {
        "spanish": "seguridad",
        "english": "security"
    },
    {
        "spanish": "rugir",
        "english": "to roar"
    },
    {
        "spanish": "amanecer",
        "english": "dawn"
    },
    {
        "spanish": "nación",
        "english": "nation"
    },
    {
        "spanish": "nervioso",
        "english": "nervous"
    },
    {
        "spanish": "prisión",
        "english": "prison"
    },
    {
        "spanish": "abandonar",
        "english": "to abandon"
    },
    {
        "spanish": "poeta",
        "english": "poet"
    },
    {
        "spanish": "actitud",
        "english": "attitude"
    },
    {
        "spanish": "ceja",
        "english": "brow"
    },
    {
        "spanish": "moralidad",
        "english": "moral"
    },
    {
        "spanish": "rolle",
        "english": "role"
    },
    {
        "spanish": "cola",
        "english": "tail"
    },
    {
        "spanish": "nacimiento",
        "english": "birth"
    },
    {
        "spanish": "aplicar",
        "english": "to apply"
    },
    {
        "spanish": "destino",
        "english": "fate"
    },
    {
        "spanish": "proyecto",
        "english": "project"
    },
    {
        "spanish": "valle",
        "english": "valley"
    },
    {
        "spanish": "mercado",
        "english": "market"
    },
    {
        "spanish": "puño",
        "english": "fist"
    },
    {
        "spanish": "intención",
        "english": "intention"
    },
    {
        "spanish": "conexión",
        "english": "connection"
    },
    {
        "spanish": "serie",
        "english": "series"
    },
    {
        "spanish": "coraje",
        "english": "courage"
    },
    {
        "spanish": "torre",
        "english": "tower"
    },
    {
        "spanish": "lago",
        "english": "lake"
    },
    {
        "spanish": "emerger",
        "english": "to emerge"
    },
    {
        "spanish": "apostar",
        "english": "to bet"
    },
    {
        "spanish": "película",
        "english": "movie"
    },
    {
        "spanish": "falda",
        "english": "skirt"
    },
    {
        "spanish": "cámara",
        "english": "chamber"
    },
    {
        "spanish": "juicio",
        "english": "trial"
    },
    {
        "spanish": "magia",
        "english": "magic"
    },
    {
        "spanish": "motor",
        "english": "engine"
    },
    {
        "spanish": "gracias",
        "english": "thanks"
    },
    {
        "spanish": "escritura",
        "english": "writing"
    },
    {
        "spanish": "botón",
        "english": "button"
    },
    {
        "spanish": "cazar",
        "english": "to hunt"
    },
    {
        "spanish": "ordinario",
        "english": "ordinary"
    },
    {
        "spanish": "extender",
        "english": "to extend"
    },
    {
        "spanish": "teoría",
        "english": "theory"
    },
    {
        "spanish": "conceder",
        "english": "to grant"
    },
    {
        "spanish": "junio",
        "english": "june"
    },
    {
        "spanish": "judio",
        "english": "jew"
    },
    {
        "spanish": "texto",
        "english": "text"
    },
    {
        "spanish": "honor",
        "english": "honour"
    },
    {
        "spanish": "flotar",
        "english": "to float"
    },
    {
        "spanish": "misterio",
        "english": "mystery"
    },
    {
        "spanish": "temporada",
        "english": "season"
    },
    {
        "spanish": "permitirse",
        "english": "to afford"
    },
    {
        "spanish": "color",
        "english": "colour"
    },
    {
        "spanish": "socio",
        "english": "partner"
    },
    {
        "spanish": "admirar",
        "english": "to admire"
    },
    {
        "spanish": "tapa",
        "english": "cap"
    },
    {
        "spanish": "libertad",
        "english": "freedom"
    },
    {
        "spanish": "merecer",
        "english": "to deserve"
    },
    {
        "spanish": "saludar",
        "english": "to greet"
    },
    {
        "spanish": "abrazar",
        "english": "to hug"
    },
    {
        "spanish": "personal",
        "english": "staff"
    },
    {
        "spanish": "empujar",
        "english": "to thrust"
    },
    {
        "spanish": "depender",
        "english": "to depend"
    },
    {
        "spanish": "nadar",
        "english": "to swim"
    },
    {
        "spanish": "piscina",
        "english": "pool"
    },
    {
        "spanish": "señal",
        "english": "signal"
    },
    {
        "spanish": "inocente",
        "english": "innocent"
    },
    {
        "spanish": "talón",
        "english": "heel"
    },
    {
        "spanish": "generelt",
        "english": "generally"
    },
    {
        "spanish": "cortina",
        "english": "curtain"
    },
    {
        "spanish": "posesión",
        "english": "possession"
    },
    {
        "spanish": "fotografía",
        "english": "photograph"
    },
    {
        "spanish": "nativo",
        "english": "native"
    },
    {
        "spanish": "formulario",
        "english": "blanket"
    },
    {
        "spanish": "entrevista",
        "english": "interview"
    },
    {
        "spanish": "sucio",
        "english": "dirty"
    },
    {
        "spanish": "vergüenza",
        "english": "shame"
    },
    {
        "spanish": "cesar",
        "english": "to cease"
    },
    {
        "spanish": "huevo",
        "english": "egg"
    },
    {
        "spanish": "vagón",
        "english": "wagon"
    },
    {
        "spanish": "audiencia",
        "english": "audience"
    },
    {
        "spanish": "horrible",
        "english": "awful"
    },
    {
        "spanish": "pipa",
        "english": "pipe"
    },
    {
        "spanish": "colar",
        "english": "to strain"
    },
    {
        "spanish": "artista",
        "english": "artist"
    },
    {
        "spanish": "apretar",
        "english": "to squeeze"
    },
    {
        "spanish": "novela",
        "english": "roman"
    },
    {
        "spanish": "paño",
        "english": "cloth"
    },
    {
        "spanish": "volumen",
        "english": "volume"
    },
    {
        "spanish": "este",
        "english": "east"
    },
    {
        "spanish": "sección",
        "english": "section"
    },
    {
        "spanish": "amistoso",
        "english": "friendly"
    },
    {
        "spanish": "hambriento",
        "english": "hungry"
    },
    {
        "spanish": "visitante",
        "english": "visitor"
    },
    {
        "spanish": "religioso",
        "english": "religious"
    },
    {
        "spanish": "criada",
        "english": "maid"
    },
    {
        "spanish": "justicia",
        "english": "justice"
    },
    {
        "spanish": "progreso",
        "english": "progress"
    },
    {
        "spanish": "regazo",
        "english": "lap"
    },
    {
        "spanish": "creencia",
        "english": "belief"
    },
    {
        "spanish": "fantasma",
        "english": "ghost"
    },
    {
        "spanish": "apuntar",
        "english": "to aim"
    },
    {
        "spanish": "arrojar",
        "english": "to fling"
    },
    {
        "spanish": "sábado",
        "english": "saturday"
    },
    {
        "spanish": "cirugía",
        "english": "operation"
    },
    {
        "spanish": "trota",
        "english": "despite"
    },
    {
        "spanish": "cintura",
        "english": "waist"
    },
    {
        "spanish": "leche",
        "english": "milk"
    },
    {
        "spanish": "olla",
        "english": "pot"
    },
    {
        "spanish": "finca",
        "english": "estate"
    },
    {
        "spanish": "anterior",
        "english": "previous"
    },
    {
        "spanish": "ficción",
        "english": "fiction"
    },
    {
        "spanish": "magnífico",
        "english": "grand"
    },
    {
        "spanish": "trampa",
        "english": "trap"
    },
    {
        "spanish": "afectar",
        "english": "to affect"
    },
    {
        "spanish": "truco",
        "english": "trick"
    },
    {
        "spanish": "droga",
        "english": "drug"
    },
    {
        "spanish": "seda",
        "english": "silk"
    },
    {
        "spanish": "sopas",
        "english": "supper"
    },
    {
        "spanish": "borracho",
        "english": "drunk"
    },
    {
        "spanish": "indicio",
        "english": "hint"
    },
    {
        "spanish": "fruta",
        "english": "fruit"
    },
    {
        "spanish": "ordenador",
        "english": "computer"
    },
    {
        "spanish": "codo",
        "english": "elbow"
    },
    {
        "spanish": "descender",
        "english": "to descend"
    },
    {
        "spanish": "porche",
        "english": "porch"
    },
    {
        "spanish": "hincharse",
        "english": "to swell"
    },
    {
        "spanish": "ups",
        "english": "upper"
    },
    {
        "spanish": "poli",
        "english": "cop"
    },
    {
        "spanish": "abuelo",
        "english": "grandfather"
    },
    {
        "spanish": "ejercicio",
        "english": "exercise"
    },
    {
        "spanish": "biblioteca",
        "english": "library"
    },
    {
        "spanish": "músculo",
        "english": "muscle"
    },
    {
        "spanish": "congelar",
        "english": "to freeze"
    },
    {
        "spanish": "quejarse",
        "english": "to complain"
    },
    {
        "spanish": "europa",
        "english": "europe"
    },
    {
        "spanish": "favorecer",
        "english": "favor"
    },
    {
        "spanish": "raíz",
        "english": "root"
    },
    {
        "spanish": "bestia",
        "english": "beast"
    },
    {
        "spanish": "surgir",
        "english": "to arise"
    },
    {
        "spanish": "desafío",
        "english": "challenge"
    },
    {
        "spanish": "ducha",
        "english": "shower"
    },
    {
        "spanish": "griego",
        "english": "greek"
    },
    {
        "spanish": "límite",
        "english": "limit"
    },
    {
        "spanish": "religión",
        "english": "religion"
    },
    {
        "spanish": "presión",
        "english": "pressure"
    },
    {
        "spanish": "gracia",
        "english": "grace"
    },
    {
        "spanish": "vasto",
        "english": "vast"
    },
    {
        "spanish": "confesar",
        "english": "to confess"
    },
    {
        "spanish": "sacrificio",
        "english": "sacrifice"
    },
    {
        "spanish": "llegada",
        "english": "arrival"
    },
    {
        "spanish": "sacudirse",
        "english": "to jerk"
    },
    {
        "spanish": "lección",
        "english": "lesson"
    },
    {
        "spanish": "cadera",
        "english": "hip"
    },
    {
        "spanish": "aceite",
        "english": "oil"
    },
    {
        "spanish": "patrón",
        "english": "pattern"
    },
    {
        "spanish": "afortunado",
        "english": "lucky"
    },
    {
        "spanish": "culo",
        "english": "ass"
    },
    {
        "spanish": "aburrido",
        "english": "dull"
    },
    {
        "spanish": "lío",
        "english": "mess"
    },
    {
        "spanish": "elemento",
        "english": "element"
    },
    {
        "spanish": "gemir",
        "english": "to groan"
    },
    {
        "spanish": "konsekvens",
        "english": "consequence"
    },
    {
        "spanish": "equilibrio",
        "english": "balance"
    },
    {
        "spanish": "principio",
        "english": "principle"
    },
    {
        "spanish": "afecto",
        "english": "affection"
    },
    {
        "spanish": "actual",
        "english": "current"
    },
    {
        "spanish": "vela",
        "english": "candle"
    },
    {
        "spanish": "mierda",
        "english": "shit"
    },
    {
        "spanish": "altura",
        "english": "height"
    },
    {
        "spanish": "valores",
        "english": "stock"
    },
    {
        "spanish": "caballero",
        "english": "knight"
    },
    {
        "spanish": "reloj",
        "english": "clock"
    },
    {
        "spanish": "castillo",
        "english": "castle"
    },
    {
        "spanish": "valla",
        "english": "fence"
    },
    {
        "spanish": "culpable",
        "english": "guilty"
    },
    {
        "spanish": "templo",
        "english": "temple"
    },
    {
        "spanish": "revista",
        "english": "magazine"
    },
    {
        "spanish": "favorito",
        "english": "favorite"
    },
    {
        "spanish": "sentado",
        "english": "seated"
    },
    {
        "spanish": "abril",
        "english": "april"
    },
    {
        "spanish": "tradición",
        "english": "tradition"
    },
    {
        "spanish": "amargo",
        "english": "bitter"
    },
    {
        "spanish": "apreciar",
        "english": "to appreciate"
    },
    {
        "spanish": "ciencia",
        "english": "science"
    },
    {
        "spanish": "abuela",
        "english": "grandmother"
    },
    {
        "spanish": "modelo",
        "english": "model"
    },
    {
        "spanish": "diario",
        "english": "daily"
    },
    {
        "spanish": "discusión",
        "english": "discussion"
    },
    {
        "spanish": "príncipe",
        "english": "prince"
    },
    {
        "spanish": "encanto",
        "english": "charm"
    },
    {
        "spanish": "desnudarse",
        "english": "to strip"
    },
    {
        "spanish": "uniforme",
        "english": "uniform"
    },
    {
        "spanish": "techo",
        "english": "ceiling"
    },
    {
        "spanish": "arbusto",
        "english": "bush"
    },
    {
        "spanish": "falso",
        "english": "false"
    },
    {
        "spanish": "trayectos",
        "english": "interested"
    },
    {
        "spanish": "aferrarse",
        "english": "to cling"
    },
    {
        "spanish": "perseguir",
        "english": "to pursue"
    },
    {
        "spanish": "valiente",
        "english": "brave"
    },
    {
        "spanish": "autobús",
        "english": "bus"
    },
    {
        "spanish": "literario",
        "english": "literary"
    },
    {
        "spanish": "sangriento",
        "english": "bloody"
    },
    {
        "spanish": "extranjero",
        "english": "foreign"
    },
    {
        "spanish": "proponer",
        "english": "to propose"
    },
    {
        "spanish": "pluma",
        "english": "pen"
    },
    {
        "spanish": "ayuda",
        "english": "aid"
    },
    {
        "spanish": "amistad",
        "english": "friendship"
    },
    {
        "spanish": "chocar",
        "english": "to crash"
    },
    {
        "spanish": "aventura",
        "english": "adventure"
    },
    {
        "spanish": "cultura",
        "english": "culture"
    },
    {
        "spanish": "haz",
        "english": "beam"
    },
    {
        "spanish": "marzo",
        "english": "march"
    },
    {
        "spanish": "gafas",
        "english": "glasses"
    },
    {
        "spanish": "evne",
        "english": "ability"
    },
    {
        "spanish": "excelente",
        "english": "excellent"
    },
    {
        "spanish": "firmemente",
        "english": "firmly"
    },
    {
        "spanish": "acero",
        "english": "steel"
    },
    {
        "spanish": "nervio",
        "english": "nerve"
    },
    {
        "spanish": "ángel",
        "english": "angel"
    },
    {
        "spanish": "gigante",
        "english": "giant"
    },
    {
        "spanish": "sospecha",
        "english": "suspicion"
    },
    {
        "spanish": "igual",
        "english": "equal"
    },
    {
        "spanish": "generación",
        "english": "generation"
    },
    {
        "spanish": "deletrear",
        "english": "spell"
    },
    {
        "spanish": "reacción",
        "english": "reaction"
    },
    {
        "spanish": "educación",
        "english": "education"
    },
    {
        "spanish": "excitar",
        "english": "to excite"
    },
    {
        "spanish": "azotar",
        "english": "to whip"
    },
    {
        "spanish": "cuenco",
        "english": "bowl"
    },
    {
        "spanish": "exponer",
        "english": "to expose"
    },
    {
        "spanish": "capítulo",
        "english": "chapter"
    },
    {
        "spanish": "arreglo",
        "english": "arrangement"
    },
    {
        "spanish": "doler",
        "english": "to ache"
    },
    {
        "spanish": "italiano",
        "english": "italian"
    },
    {
        "spanish": "reír",
        "english": "to chuckle"
    },
    {
        "spanish": "palacio",
        "english": "palace"
    },
    {
        "spanish": "seriamente",
        "english": "seriously"
    },
    {
        "spanish": "retirarse",
        "english": "to retreat"
    },
    {
        "spanish": "pintura",
        "english": "painting"
    },
    {
        "spanish": "reina",
        "english": "queen"
    },
    {
        "spanish": "muñeca",
        "english": "wrist"
    },
    {
        "spanish": "lodos",
        "english": "to slam"
    },
    {
        "spanish": "mandíbula",
        "english": "jaw"
    },
    {
        "spanish": "mal",
        "english": "badly"
    },
    {
        "spanish": "pasajero",
        "english": "passenger"
    },
    {
        "spanish": "apertura",
        "english": "opening"
    },
    {
        "spanish": "julio",
        "english": "july"
    },
    {
        "spanish": "habilidad",
        "english": "skill"
    },
    {
        "spanish": "misión",
        "english": "mission"
    },
    {
        "spanish": "costumbre",
        "english": "custom"
    },
    {
        "spanish": "método",
        "english": "method"
    },
    {
        "spanish": "vaca",
        "english": "cow"
    },
    {
        "spanish": "guerrero",
        "english": "warrior"
    },
    {
        "spanish": "percibir",
        "english": "to perceive"
    },
    {
        "spanish": "cueva",
        "english": "cave"
    },
    {
        "spanish": "crédito",
        "english": "credit"
    },
    {
        "spanish": "alabanza",
        "english": "praise"
    },
    {
        "spanish": "capaz",
        "english": "capable"
    },
    {
        "spanish": "contratar",
        "english": "to hire"
    },
    {
        "spanish": "versión",
        "english": "version"
    },
    {
        "spanish": "vecino",
        "english": "neighbor"
    },
    {
        "spanish": "simpatía",
        "english": "sympathy"
    },
    {
        "spanish": "alambre",
        "english": "wire"
    },
    {
        "spanish": "curiosidad",
        "english": "curiosity"
    },
    {
        "spanish": "cinturón",
        "english": "belt"
    },
    {
        "spanish": "pariente",
        "english": "relative"
    },
    {
        "spanish": "noción",
        "english": "notion"
    },
    {
        "spanish": "correo",
        "english": "mail"
    },
    {
        "spanish": "sofá",
        "english": "couch"
    },
    {
        "spanish": "corredor",
        "english": "corridor"
    },
    {
        "spanish": "español",
        "english": "spanish"
    },
    {
        "spanish": "amenaza",
        "english": "threat"
    },
    {
        "spanish": "chino",
        "english": "chinese"
    },
    {
        "spanish": "emplear",
        "english": "to employ"
    },
    {
        "spanish": "enlace",
        "english": "link"
    },
    {
        "spanish": "ausencia",
        "english": "absence"
    },
    {
        "spanish": "estructura",
        "english": "structure"
    },
    {
        "spanish": "solitario",
        "english": "lonely"
    },
    {
        "spanish": "agradecido",
        "english": "grateful"
    },
    {
        "spanish": "mapa",
        "english": "map"
    },
    {
        "spanish": "ministro",
        "english": "minister"
    },
    {
        "spanish": "almohada",
        "english": "pillow"
    },
    {
        "spanish": "buque",
        "english": "vessel"
    },
    {
        "spanish": "adjuntar",
        "english": "to attach"
    },
    {
        "spanish": "delicado",
        "english": "delicate"
    },
    {
        "spanish": "confundir",
        "english": "to confuse"
    },
    {
        "spanish": "roto",
        "english": "broken"
    },
    {
        "spanish": "agotar",
        "english": "to exhaust"
    },
    {
        "spanish": "daño",
        "english": "damage"
    },
    {
        "spanish": "traicionar",
        "english": "to betray"
    },
    {
        "spanish": "vestido",
        "english": "gown"
    },
    {
        "spanish": "sólido",
        "english": "solid"
    },
    {
        "spanish": "frase",
        "english": "phrase"
    },
    {
        "spanish": "uña",
        "english": "nail"
    },
    {
        "spanish": "agosto",
        "english": "august"
    },
    {
        "spanish": "trabajador",
        "english": "worker"
    },
    {
        "spanish": "bala",
        "english": "bullet"
    },
    {
        "spanish": "tronco",
        "english": "trunk"
    },
    {
        "spanish": "cabaña",
        "english": "cottage"
    },
    {
        "spanish": "ciudadano",
        "english": "citizen"
    },
    {
        "spanish": "silbar",
        "english": "to whistle"
    },
    {
        "spanish": "aspecto",
        "english": "aspect"
    },
    {
        "spanish": "confusión",
        "english": "confusion"
    },
    {
        "spanish": "feo",
        "english": "ugly"
    },
    {
        "spanish": "papá",
        "english": "dad"
    },
    {
        "spanish": "curva",
        "english": "curve"
    },
    {
        "spanish": "brisa",
        "english": "breeze"
    },
    {
        "spanish": "lika",
        "english": "equally"
    },
    {
        "spanish": "cinta",
        "english": "tape"
    },
    {
        "spanish": "olor",
        "english": "scent"
    },
    {
        "spanish": "desarrollo",
        "english": "development"
    },
    {
        "spanish": "médico",
        "english": "medical"
    },
    {
        "spanish": "pendiente",
        "english": "slope"
    },
    {
        "spanish": "suciedad",
        "english": "dirt"
    },
    {
        "spanish": "cáscara",
        "english": "shell"
    },
    {
        "spanish": "parcela",
        "english": "plot"
    },
    {
        "spanish": "corona",
        "english": "crown"
    },
    {
        "spanish": "exitoso",
        "english": "successful"
    },
    {
        "spanish": "virtud",
        "english": "virtue"
    },
    {
        "spanish": "inundación",
        "english": "flood"
    },
    {
        "spanish": "roma",
        "english": "rome"
    },
    {
        "spanish": "poesía",
        "english": "poetry"
    },
    {
        "spanish": "vientre",
        "english": "belly"
    },
    {
        "spanish": "énorme",
        "english": "enormous"
    },
    {
        "spanish": "aplastar",
        "english": "to crush"
    },
    {
        "spanish": "baloncesto",
        "english": "basket"
    },
    {
        "spanish": "abrigo",
        "english": "shelter"
    },
    {
        "spanish": "ansvarlig",
        "english": "responsible"
    },
    {
        "spanish": "senaste",
        "english": "recent"
    },
    {
        "spanish": "dividir",
        "english": "to divide"
    },
    {
        "spanish": "precioso",
        "english": "precious"
    },
    {
        "spanish": "alentar",
        "english": "to encourage"
    },
    {
        "spanish": "frontera",
        "english": "border"
    },
    {
        "spanish": "océano",
        "english": "ocean"
    },
    {
        "spanish": "hojas",
        "english": "blade"
    },
    {
        "spanish": "muslo",
        "english": "thigh"
    },
    {
        "spanish": "reflexión",
        "english": "reflection"
    },
    {
        "spanish": "raro",
        "english": "unusual"
    },
    {
        "spanish": "vehículo",
        "english": "vehicle"
    },
    {
        "spanish": "temer",
        "english": "dread"
    },
    {
        "spanish": "estándar",
        "english": "standard"
    },
    {
        "spanish": "televisión",
        "english": "television"
    },
    {
        "spanish": "acusar",
        "english": "to accuse"
    },
    {
        "spanish": "totalmente",
        "english": "totally"
    },
    {
        "spanish": "beneficio",
        "english": "benefit"
    },
    {
        "spanish": "asociar",
        "english": "to associate"
    },
    {
        "spanish": "empleado",
        "english": "clerk"
    },
    {
        "spanish": "permiso",
        "english": "permission"
    },
    {
        "spanish": "costa",
        "english": "coast"
    },
    {
        "spanish": "ansiedad",
        "english": "anxiety"
    },
    {
        "spanish": "título",
        "english": "title"
    },
    {
        "spanish": "tierno",
        "english": "tender"
    },
    {
        "spanish": "pastel",
        "english": "cake"
    },
    {
        "spanish": "granjero",
        "english": "farmer"
    },
    {
        "spanish": "violencia",
        "english": "violence"
    },
    {
        "spanish": "vislumbre",
        "english": "glimpse"
    },
    {
        "spanish": "sugerencia",
        "english": "suggestion"
    },
    {
        "spanish": "infancia",
        "english": "childhood"
    },
    {
        "spanish": "recompensa",
        "english": "reward"
    },
    {
        "spanish": "gancho",
        "english": "hook"
    },
    {
        "spanish": "apagarse",
        "english": "dim"
    },
    {
        "spanish": "cliente",
        "english": "client"
    },
    {
        "spanish": "digno",
        "english": "worthy"
    },
    {
        "spanish": "misterioso",
        "english": "mysterious"
    },
    {
        "spanish": "pollo",
        "english": "chicken"
    },
    {
        "spanish": "túnica",
        "english": "robe"
    },
    {
        "spanish": "tropezar",
        "english": "to stumble"
    },
    {
        "spanish": "suma",
        "english": "sum"
    },
    {
        "spanish": "muebles",
        "english": "furniture"
    },
    {
        "spanish": "retraso",
        "english": "delay"
    },
    {
        "spanish": "formación",
        "english": "training"
    },
    {
        "spanish": "manga",
        "english": "sleeve"
    },
    {
        "spanish": "tesoro",
        "english": "treasure"
    },
    {
        "spanish": "pulgar",
        "english": "thumb"
    },
    {
        "spanish": "incidente",
        "english": "incident"
    }
];