const WORDS = [
    {
        "spanish": "hacer",
        "english": "to do"
    },
    {
        "spanish": "poder",
        "english": "to be able to"
    },
    {
        "spanish": "ver",
        "english": "to see"
    },
    {
        "spanish": "saber",
        "english": "to know"
    },
    {
        "spanish": "querer",
        "english": "to want"
    },
    {
        "spanish": "pasar",
        "english": "to pass"
    },
    {
        "spanish": "poner",
        "english": "to put"
    },
    {
        "spanish": "barista",
        "english": "barista"
    },
    {
        "spanish": "adelantar",
        "english": "to advance"
    },
    {
        "spanish": "antiguo",
        "english": "ancient"
    },
    {
        "spanish": "aparcar",
        "english": "to park"
    },
    {
        "spanish": "final",
        "english": "final"
    },
    {
        "spanish": "antepasado",
        "english": "ancestor"
    },
    {
        "spanish": "barco",
        "english": "boat"
    },
    {
        "spanish": "avión",
        "english": "airplane"
    },
    {
        "spanish": "amanecer",
        "english": "to dawn"
    },
    {
        "spanish": "atardecer",
        "english": "to get late"
    },
    {
        "spanish": "anochecer",
        "english": "to get dark"
    },
    {
        "spanish": "amarrar",
        "english": "to tie up"
    },
    {
        "spanish": "dogma",
        "english": "dogma"
    },
    {
        "spanish": "civil",
        "english": "civil"
    },
    {
        "spanish": "articular",
        "english": "to articulate"
    },
    {
        "spanish": "amado",
        "english": "loved one"
    },
    {
        "spanish": "asistir",
        "english": "to assist"
    },
    {
        "spanish": "anticipar",
        "english": "to anticipate"
    },
    {
        "spanish": "afectar",
        "english": "to affect"
    },
    {
        "spanish": "camarero",
        "english": "waiter"
    },
    {
        "spanish": "bueno",
        "english": "good"
    },
    {
        "spanish": "autorizar",
        "english": "to authorize"
    },
    {
        "spanish": "atemperar",
        "english": "to temper"
    },
    {
        "spanish": "año",
        "english": "year"
    },
    {
        "spanish": "cada",
        "english": "each"
    },
    {
        "spanish": "calmar",
        "english": "to calm"
    },
    {
        "spanish": "aeropuerto",
        "english": "airport"
    },
    {
        "spanish": "asignación",
        "english": "assignment"
    },
    {
        "spanish": "abuso",
        "english": "abuse"
    },
    {
        "spanish": "beber",
        "english": "to drink"
    },
    {
        "spanish": "abuelo",
        "english": "grandfather"
    },
    {
        "spanish": "abolengo",
        "english": "ancestry"
    },
    {
        "spanish": "alguno",
        "english": "some"
    },
    {
        "spanish": "alcurnia",
        "english": "lineage"
    },
    {
        "spanish": "actual",
        "english": "current"
    },
    {
        "spanish": "corrector",
        "english": "corrector"
    },
    {
        "spanish": "celestial",
        "english": "celestial"
    },
    {
        "spanish": "anunciar",
        "english": "to announce"
    },
    {
        "spanish": "atención",
        "english": "attention"
    },
    {
        "spanish": "anden",
        "english": "platform"
    },
    {
        "spanish": "bisabuelo",
        "english": "great-grandfather"
    },
    {
        "spanish": "café",
        "english": "coffee"
    },
    {
        "spanish": "calmado",
        "english": "calm"
    },
    {
        "spanish": "cama",
        "english": "bed"
    },
    {
        "spanish": "agua",
        "english": "water"
    },
    {
        "spanish": "absorto",
        "english": "absorbed"
    },
    {
        "spanish": "bañera",
        "english": "bathtub"
    },
    {
        "spanish": "almohada",
        "english": "pillow"
    },
    {
        "spanish": "almuerzo",
        "english": "lunch"
    },
    {
        "spanish": "armario",
        "english": "closet"
    },
    {
        "spanish": "azafata",
        "english": "flight attendant"
    },
    {
        "spanish": "autobús",
        "english": "bus"
    },
    {
        "spanish": "alfombra",
        "english": "carpet"
    },
    {
        "spanish": "ascensor",
        "english": "elevator"
    },
    {
        "spanish": "discusión",
        "english": "discussion"
    },
    {
        "spanish": "billete",
        "english": "ticket"
    },
    {
        "spanish": "apunte",
        "english": "note"
    },
    {
        "spanish": "autopista",
        "english": "highway"
    },
    {
        "spanish": "camionero",
        "english": "truck driver"
    },
    {
        "spanish": "hotel",
        "english": "hotel"
    },
    {
        "spanish": "día",
        "english": "day"
    },
    {
        "spanish": "días",
        "english": "days"
    },
    {
        "spanish": "aprender",
        "english": "to learn"
    },
    {
        "spanish": "callar",
        "english": "to be quiet"
    },
    {
        "spanish": "avisar",
        "english": "to notify"
    },
    {
        "spanish": "futuro",
        "english": "future"
    },
    {
        "spanish": "aislar",
        "english": "to isolate"
    },
    {
        "spanish": "armar",
        "english": "to arm"
    },
    {
        "spanish": "atraer",
        "english": "to attract"
    },
    {
        "spanish": "adorar",
        "english": "to adore"
    },
    {
        "spanish": "agarrar",
        "english": "to grab"
    },
    {
        "spanish": "analizar",
        "english": "to analyze"
    },
    {
        "spanish": "aviso",
        "english": "notice"
    },
    {
        "spanish": "beca",
        "english": "scholarship"
    },
    {
        "spanish": "acusar",
        "english": "to accuse"
    },
    {
        "spanish": "argumentar",
        "english": "to argue"
    },
    {
        "spanish": "asaltar",
        "english": "to assault"
    },
    {
        "spanish": "agrupar",
        "english": "to group"
    },
    {
        "spanish": "anexar",
        "english": "to annex"
    },
    {
        "spanish": "blandir",
        "english": "to brandish"
    },
    {
        "spanish": "asegurar",
        "english": "to assure"
    },
    {
        "spanish": "beneficiar",
        "english": "to benefit"
    },
    {
        "spanish": "asemejar",
        "english": "to resemble"
    },
    {
        "spanish": "avanzar",
        "english": "to advance"
    },
    {
        "spanish": "bombardear",
        "english": "to bomb"
    },
    {
        "spanish": "actuar",
        "english": "to act"
    },
    {
        "spanish": "atacar",
        "english": "to attack"
    },
    {
        "spanish": "acompañar",
        "english": "to accompany"
    },
    {
        "spanish": "anular",
        "english": "to annul"
    },
    {
        "spanish": "aprobar",
        "english": "to approve"
    },
    {
        "spanish": "apurar",
        "english": "to hurry"
    },
    {
        "spanish": "atribuir",
        "english": "to attribute"
    },
    {
        "spanish": "aparentar",
        "english": "to appear"
    },
    {
        "spanish": "aparecer",
        "english": "to appear"
    },
    {
        "spanish": "aprestar",
        "english": "to prepare"
    },
    {
        "spanish": "atender",
        "english": "to attend to"
    },
    {
        "spanish": "aplacar",
        "english": "to placate"
    },
    {
        "spanish": "batir",
        "english": "to beat"
    },
    {
        "spanish": "abusar",
        "english": "to abuse"
    },
    {
        "spanish": "adquirir",
        "english": "to acquire"
    },
    {
        "spanish": "atrever",
        "english": "to dare"
    },
    {
        "spanish": "aclarar",
        "english": "to clarify"
    },
    {
        "spanish": "instructor",
        "english": "instructor"
    },
    {
        "spanish": "detestado",
        "english": "detested person"
    },
    {
        "spanish": "cargo",
        "english": "charge"
    },
    {
        "spanish": "intervalo",
        "english": "interval"
    },
    {
        "spanish": "divorciado",
        "english": "divorced person"
    },
    {
        "spanish": "demanda",
        "english": "demand"
    },
    {
        "spanish": "división",
        "english": "division"
    },
    {
        "spanish": "defensa",
        "english": "defense"
    },
    {
        "spanish": "curador",
        "english": "curator"
    },
    {
        "spanish": "cónsul",
        "english": "consul"
    },
    {
        "spanish": "dentista",
        "english": "dentist"
    },
    {
        "spanish": "cresta",
        "english": "crest"
    },
    {
        "spanish": "abeja",
        "english": "bee"
    },
    {
        "spanish": "ambos",
        "english": "both"
    },
    {
        "spanish": "atado",
        "english": "tied"
    },
    {
        "spanish": "alto",
        "english": "tall"
    },
    {
        "spanish": "añejo",
        "english": "aged"
    },
    {
        "spanish": "asilo",
        "english": "asylum"
    },
    {
        "spanish": "breve",
        "english": "brief"
    },
    {
        "spanish": "bulto",
        "english": "bundle"
    },
    {
        "spanish": "atroz",
        "english": "atrocious"
    },
    {
        "spanish": "boxeo",
        "english": "boxing"
    },
    {
        "spanish": "bajo",
        "english": "bass"
    },
    {
        "spanish": "abad",
        "english": "abbot"
    },
    {
        "spanish": "ateo",
        "english": "atheist"
    },
    {
        "spanish": "ajeno",
        "english": "alien"
    },
    {
        "spanish": "calvo",
        "english": "bald"
    },
    {
        "spanish": "ansia",
        "english": "anxiety"
    },
    {
        "spanish": "asado",
        "english": "roasted"
    },
    {
        "spanish": "bello",
        "english": "beautiful"
    },
    {
        "spanish": "alumno",
        "english": "student"
    },
    {
        "spanish": "aprobado",
        "english": "pass"
    },
    {
        "spanish": "becario",
        "english": "scholarship holder"
    },
    {
        "spanish": "anuario",
        "english": "yearbook"
    },
    {
        "spanish": "correctivo",
        "english": "corrective"
    },
    {
        "spanish": "contráctil",
        "english": "contractile"
    },
    {
        "spanish": "garaje",
        "english": "garage"
    },
    {
        "spanish": "contrario",
        "english": "contrary"
    },
    {
        "spanish": "arbitrio",
        "english": "discretion"
    },
    {
        "spanish": "barroco",
        "english": "baroque"
    },
    {
        "spanish": "apático",
        "english": "apathetic person"
    },
    {
        "spanish": "borroso",
        "english": "blurry"
    },
    {
        "spanish": "alojado",
        "english": "lodged"
    },
    {
        "spanish": "adelanto",
        "english": "advancement"
    },
    {
        "spanish": "bautizo",
        "english": "baptism"
    },
    {
        "spanish": "añadido",
        "english": "added"
    },
    {
        "spanish": "batido",
        "english": "beaten"
    },
    {
        "spanish": "altivez",
        "english": "haughtiness"
    },
    {
        "spanish": "calidad",
        "english": "quality"
    },
    {
        "spanish": "aplanado",
        "english": "flattened"
    },
    {
        "spanish": "cadena",
        "english": "chain"
    },
    {
        "spanish": "apacible",
        "english": "peaceful"
    },
    {
        "spanish": "brilloso",
        "english": "glossy"
    },
    {
        "spanish": "anónimo",
        "english": "anonymous person"
    },
    {
        "spanish": "béisbol",
        "english": "baseball"
    },
    {
        "spanish": "báscula",
        "english": "scale"
    },
    {
        "spanish": "ambiente",
        "english": "environment"
    },
    {
        "spanish": "ansiedad",
        "english": "anxiety"
    },
    {
        "spanish": "borrado",
        "english": "erased"
    },
    {
        "spanish": "boreal",
        "english": "northern"
    },
    {
        "spanish": "apócrifo",
        "english": "apocryphal"
    },
    {
        "spanish": "cantidad",
        "english": "quantity"
    },
    {
        "spanish": "aislante",
        "english": "insulating"
    },
    {
        "spanish": "atónito",
        "english": "astonished person"
    },
    {
        "spanish": "bendito",
        "english": "blessed"
    },
    {
        "spanish": "abultado",
        "english": "bulky"
    },
    {
        "spanish": "arboleda",
        "english": "grove"
    },
    {
        "spanish": "asignatura",
        "english": "subject"
    },
    {
        "spanish": "ampuloso",
        "english": "pompous"
    },
    {
        "spanish": "acortado",
        "english": "shortened"
    },
    {
        "spanish": "bolígrafo",
        "english": "pen"
    },
    {
        "spanish": "aliviado",
        "english": "relieved"
    },
    {
        "spanish": "artesano",
        "english": "craftsman"
    },
    {
        "spanish": "legal",
        "english": "legal"
    },
    {
        "spanish": "error",
        "english": "error"
    },
    {
        "spanish": "local",
        "english": "local"
    },
    {
        "spanish": "mafia",
        "english": "mafia"
    },
    {
        "spanish": "extra",
        "english": "extra"
    },
    {
        "spanish": "funcional",
        "english": "functional"
    },
    {
        "spanish": "grave",
        "english": "grave"
    },
    {
        "spanish": "gamer",
        "english": "gamer"
    },
    {
        "spanish": "idea",
        "english": "idea"
    },
    {
        "spanish": "huaso",
        "english": "huaso"
    },
    {
        "spanish": "inoperante",
        "english": "inoperative"
    },
    {
        "spanish": "honor",
        "english": "honor"
    },
    {
        "spanish": "descuento",
        "english": "discount"
    },
    {
        "spanish": "triple",
        "english": "triple"
    },
    {
        "spanish": "calderero",
        "english": "boilermaker"
    },
    {
        "spanish": "agraviado",
        "english": "aggrieved person"
    },
    {
        "spanish": "aparición",
        "english": "appearance"
    },
    {
        "spanish": "apelación",
        "english": "appeal"
    },
    {
        "spanish": "adelantado",
        "english": "advanced"
    },
    {
        "spanish": "asequible",
        "english": "affordable"
    },
    {
        "spanish": "aplastado",
        "english": "flattened"
    },
    {
        "spanish": "aportación",
        "english": "contribution"
    },
    {
        "spanish": "autótrofo",
        "english": "autotrophic"
    },
    {
        "spanish": "asistencia",
        "english": "attendance"
    },
    {
        "spanish": "aprendido",
        "english": "learned"
    },
    {
        "spanish": "adiestrado",
        "english": "trained"
    },
    {
        "spanish": "amaestrado",
        "english": "trained"
    },
    {
        "spanish": "cacofónico",
        "english": "cacophonous"
    },
    {
        "spanish": "antecesor",
        "english": "predecessor"
    },
    {
        "spanish": "campesino",
        "english": "peasant"
    },
    {
        "spanish": "bullicioso",
        "english": "bustling"
    },
    {
        "spanish": "campeonato",
        "english": "championship"
    },
    {
        "spanish": "afectuoso",
        "english": "affectionate"
    },
    {
        "spanish": "banjoísta",
        "english": "banjo player"
    },
    {
        "spanish": "arreglista",
        "english": "arranger"
    },
    {
        "spanish": "ambiental",
        "english": "environmental"
    },
    {
        "spanish": "arqueólogo",
        "english": "archaeologist"
    },
    {
        "spanish": "anárquico",
        "english": "anarchic"
    },
    {
        "spanish": "alimentar",
        "english": "to feed"
    },
    {
        "spanish": "asar",
        "english": "to roast"
    },
    {
        "spanish": "arriesgar",
        "english": "to risk"
    },
    {
        "spanish": "acosar",
        "english": "to harass"
    },
    {
        "spanish": "alistar",
        "english": "to ready"
    },
    {
        "spanish": "asediar",
        "english": "to besiege"
    },
    {
        "spanish": "agradar",
        "english": "to please"
    },
    {
        "spanish": "acortar",
        "english": "to shorten"
    },
    {
        "spanish": "alegrar",
        "english": "to make happy"
    },
    {
        "spanish": "agradecer",
        "english": "to thank"
    },
    {
        "spanish": "aliviar",
        "english": "to relieve"
    },
    {
        "spanish": "amenazar",
        "english": "to threaten"
    },
    {
        "spanish": "alcanzar",
        "english": "to reach"
    },
    {
        "spanish": "agregar",
        "english": "to add"
    },
    {
        "spanish": "alabar",
        "english": "to praise"
    },
    {
        "spanish": "acabar",
        "english": "to finish"
    },
    {
        "spanish": "alargar",
        "english": "to lengthen"
    },
    {
        "spanish": "atracar",
        "english": "to rob"
    },
    {
        "spanish": "aguantar",
        "english": "to endure"
    },
    {
        "spanish": "acariciar",
        "english": "to caress"
    },
    {
        "spanish": "atesorar",
        "english": "to treasure"
    },
    {
        "spanish": "agriar",
        "english": "to sour"
    },
    {
        "spanish": "aterrizar",
        "english": "to land"
    },
    {
        "spanish": "asir",
        "english": "to seize"
    },
    {
        "spanish": "acceder",
        "english": "to agree"
    },
    {
        "spanish": "acechar",
        "english": "to stalk"
    },
    {
        "spanish": "atemorizar",
        "english": "to frighten"
    },
    {
        "spanish": "atar",
        "english": "to tie"
    },
    {
        "spanish": "asustar",
        "english": "to scare"
    },
    {
        "spanish": "acertar",
        "english": "to hit"
    },
    {
        "spanish": "asquear",
        "english": "to disgust"
    },
    {
        "spanish": "arriar",
        "english": "to lower (flag)"
    },
    {
        "spanish": "ahorrar",
        "english": "to save"
    },
    {
        "spanish": "almacenar",
        "english": "to store"
    },
    {
        "spanish": "arreglar",
        "english": "to fix"
    },
    {
        "spanish": "alzar",
        "english": "to lift"
    },
    {
        "spanish": "apartar",
        "english": "to set aside"
    },
    {
        "spanish": "apagar",
        "english": "to turn off"
    },
    {
        "spanish": "adjuntar",
        "english": "to attach"
    },
    {
        "spanish": "apaciguar",
        "english": "to appease"
    },
    {
        "spanish": "amar",
        "english": "to love"
    },
    {
        "spanish": "amargar",
        "english": "to embitter"
    },
    {
        "spanish": "amasar",
        "english": "to knead"
    },
    {
        "spanish": "anteponer",
        "english": "to put before"
    },
    {
        "spanish": "afinar",
        "english": "to tune"
    },
    {
        "spanish": "adobar",
        "english": "to marinate"
    },
    {
        "spanish": "andar",
        "english": "to walk"
    },
    {
        "spanish": "advertir",
        "english": "to warn"
    },
    {
        "spanish": "amedrentar",
        "english": "to intimidate"
    },
    {
        "spanish": "ampliar",
        "english": "to expand"
    },
    {
        "spanish": "aferrar",
        "english": "to grasp"
    },
    {
        "spanish": "amontonar",
        "english": "to pile up"
    },
    {
        "spanish": "amnistiar",
        "english": "to grant amnesty"
    },
    {
        "spanish": "adjudicar",
        "english": "to award"
    },
    {
        "spanish": "alunizar",
        "english": "to land on moon"
    },
    {
        "spanish": "actualizar",
        "english": "to update"
    },
    {
        "spanish": "aplazar",
        "english": "to postpone"
    },
    {
        "spanish": "arrancar",
        "english": "to start"
    },
    {
        "spanish": "aliñar",
        "english": "to dress (salad)"
    },
    {
        "spanish": "besar",
        "english": "to kiss"
    },
    {
        "spanish": "amerizar",
        "english": "to land on water"
    },
    {
        "spanish": "agitar",
        "english": "to shake"
    },
    {
        "spanish": "almorzar",
        "english": "to have lunch"
    },
    {
        "spanish": "apuntar",
        "english": "to aim"
    },
    {
        "spanish": "agendar",
        "english": "to schedule"
    },
    {
        "spanish": "aprovechar",
        "english": "to take advantage"
    },
    {
        "spanish": "adelgazar",
        "english": "to slim down"
    },
    {
        "spanish": "aderezar",
        "english": "to garnish"
    },
    {
        "spanish": "agachar",
        "english": "to bend down"
    },
    {
        "spanish": "apresurar",
        "english": "to hasten"
    },
    {
        "spanish": "aflorar",
        "english": "to surface"
    },
    {
        "spanish": "alumbrar",
        "english": "to light up"
    },
    {
        "spanish": "apoyar",
        "english": "to support"
    },
    {
        "spanish": "aplicar",
        "english": "to apply"
    },
    {
        "spanish": "apilar",
        "english": "to stack"
    },
    {
        "spanish": "asombrar",
        "english": "to amaze"
    },
    {
        "spanish": "ahondar",
        "english": "to delve"
    },
    {
        "spanish": "cambiar",
        "english": "to change"
    },
    {
        "spanish": "bostezar",
        "english": "to yawn"
    },
    {
        "spanish": "brillar",
        "english": "to shine"
    },
    {
        "spanish": "brincar",
        "english": "to hop"
    },
    {
        "spanish": "brindar",
        "english": "to toast"
    },
    {
        "spanish": "brotar",
        "english": "to sprout"
    },
    {
        "spanish": "auxiliar",
        "english": "to aid"
    },
    {
        "spanish": "avergonzar",
        "english": "to shame"
    },
    {
        "spanish": "bucear",
        "english": "to dive"
    },
    {
        "spanish": "averiguar",
        "english": "to find out"
    },
    {
        "spanish": "ayudar",
        "english": "to help"
    },
    {
        "spanish": "azucarar",
        "english": "to sugar"
    },
    {
        "spanish": "buscar",
        "english": "to look for"
    },
    {
        "spanish": "caducar",
        "english": "to expire"
    },
    {
        "spanish": "caer",
        "english": "to fall"
    },
    {
        "spanish": "abrazar",
        "english": "to hug"
    },
    {
        "spanish": "bajar",
        "english": "to go down"
    },
    {
        "spanish": "añadir",
        "english": "to add"
    },
    {
        "spanish": "añorar",
        "english": "to long for"
    },
    {
        "spanish": "calentar",
        "english": "to heat"
    },
    {
        "spanish": "abastecer",
        "english": "to supply"
    },
    {
        "spanish": "bailar",
        "english": "to dance"
    },
    {
        "spanish": "aburrir",
        "english": "to bore"
    },
    {
        "spanish": "canjear",
        "english": "to redeem"
    },
    {
        "spanish": "aumentar",
        "english": "to increase"
    },
    {
        "spanish": "caminar",
        "english": "to walk"
    },
    {
        "spanish": "bloquear",
        "english": "to block"
    },
    {
        "spanish": "blanquear",
        "english": "to whiten"
    },
    {
        "spanish": "abrir",
        "english": "to open"
    },
    {
        "spanish": "bendecir",
        "english": "to bless"
    },
    {
        "spanish": "avivar",
        "english": "to enliven"
    },
    {
        "spanish": "averiar",
        "english": "to break down"
    },
    {
        "spanish": "cantar",
        "english": "to sing"
    },
    {
        "spanish": "comunicar",
        "english": "to communicate"
    },
    {
        "spanish": "educar",
        "english": "to educate"
    },
    {
        "spanish": "integral",
        "english": "integral"
    },
    {
        "spanish": "eventual",
        "english": "eventual"
    },
    {
        "spanish": "hospital",
        "english": "hospital"
    },
    {
        "spanish": "gaucho",
        "english": "gaucho"
    },
    {
        "spanish": "hematoma",
        "english": "hematoma"
    },
    {
        "spanish": "horrible",
        "english": "horrible"
    },
    {
        "spanish": "informal",
        "english": "informal"
    },
    {
        "spanish": "glacial",
        "english": "glacial"
    },
    {
        "spanish": "frontal",
        "english": "frontal"
    },
    {
        "spanish": "internet",
        "english": "internet"
    },
    {
        "spanish": "insignia",
        "english": "insignia"
    },
    {
        "spanish": "frugal",
        "english": "frugal"
    },
    {
        "spanish": "general",
        "english": "general"
    },
    {
        "spanish": "global",
        "english": "global"
    },
    {
        "spanish": "germinal",
        "english": "germinal"
    },
    {
        "spanish": "interior",
        "english": "interior"
    },
    {
        "spanish": "insular",
        "english": "insular"
    },
    {
        "spanish": "taxi",
        "english": "taxi"
    },
    {
        "spanish": "lateral",
        "english": "lateral"
    },
    {
        "spanish": "factual",
        "english": "factual"
    },
    {
        "spanish": "flamenco",
        "english": "flamenco"
    },
    {
        "spanish": "formal",
        "english": "formal"
    },
    {
        "spanish": "liberal",
        "english": "liberal"
    },
    {
        "spanish": "habitual",
        "english": "habitual"
    },
    {
        "spanish": "festival",
        "english": "festival"
    },
    {
        "spanish": "laminar",
        "english": "laminar"
    },
    {
        "spanish": "fervor",
        "english": "fervor"
    },
    {
        "spanish": "federal",
        "english": "federal"
    },
    {
        "spanish": "gradual",
        "english": "gradual"
    },
    {
        "spanish": "flexible",
        "english": "flexible"
    },
    {
        "spanish": "floral",
        "english": "floral"
    },
    {
        "spanish": "familiar",
        "english": "familiar"
    },
    {
        "spanish": "karateka",
        "english": "karateka"
    },
    {
        "spanish": "inventor",
        "english": "inventor"
    },
    {
        "spanish": "impostor",
        "english": "impostor"
    },
    {
        "spanish": "factor",
        "english": "factor"
    },
    {
        "spanish": "judoka",
        "english": "judoka"
    },
    {
        "spanish": "foliar",
        "english": "foliar"
    },
    {
        "spanish": "jovial",
        "english": "jovial"
    },
    {
        "spanish": "inferior",
        "english": "inferior"
    },
    {
        "spanish": "hacker",
        "english": "hacker"
    },
    {
        "spanish": "literal",
        "english": "literal"
    },
    {
        "spanish": "campo",
        "english": "field"
    },
    {
        "spanish": "arma",
        "english": "weapon"
    },
    {
        "spanish": "ayuda",
        "english": "help"
    },
    {
        "spanish": "araña",
        "english": "spider"
    },
    {
        "spanish": "calor",
        "english": "heat"
    },
    {
        "spanish": "azar",
        "english": "chance"
    },
    {
        "spanish": "aéreo",
        "english": "aerial"
    },
    {
        "spanish": "amigo",
        "english": "friend"
    },
    {
        "spanish": "baile",
        "english": "dance"
    },
    {
        "spanish": "baja",
        "english": "drop"
    },
    {
        "spanish": "bis",
        "english": "encore"
    },
    {
        "spanish": "agudo",
        "english": "acute"
    },
    {
        "spanish": "agrio",
        "english": "sour"
    },
    {
        "spanish": "boca",
        "english": "mouth"
    },
    {
        "spanish": "aldea",
        "english": "village"
    },
    {
        "spanish": "boda",
        "english": "wedding"
    },
    {
        "spanish": "beato",
        "english": "blessed person"
    },
    {
        "spanish": "algún",
        "english": "some"
    },
    {
        "spanish": "bolso",
        "english": "bag"
    },
    {
        "spanish": "afán",
        "english": "eagerness"
    },
    {
        "spanish": "alta",
        "english": "discharge"
    },
    {
        "spanish": "bravo",
        "english": "wild"
    },
    {
        "spanish": "brazo",
        "english": "arm"
    },
    {
        "spanish": "alza",
        "english": "rise"
    },
    {
        "spanish": "basto",
        "english": "coarse"
    },
    {
        "spanish": "brujo",
        "english": "witch"
    },
    {
        "spanish": "bruto",
        "english": "raw"
    },
    {
        "spanish": "amor",
        "english": "love"
    },
    {
        "spanish": "burdo",
        "english": "coarse"
    },
    {
        "spanish": "burla",
        "english": "mockery"
    },
    {
        "spanish": "bando",
        "english": "proclamation"
    },
    {
        "spanish": "ancho",
        "english": "wide"
    },
    {
        "spanish": "buzo",
        "english": "diver"
    },
    {
        "spanish": "cabo",
        "english": "end"
    },
    {
        "spanish": "acoso",
        "english": "harassment"
    },
    {
        "spanish": "calle",
        "english": "street"
    },
    {
        "spanish": "avaro",
        "english": "greedy"
    },
    {
        "spanish": "auto",
        "english": "court order"
    },
    {
        "spanish": "acera",
        "english": "sidewalk"
    },
    {
        "spanish": "audaz",
        "english": "audacious person"
    },
    {
        "spanish": "clase",
        "english": "class"
    },
    {
        "spanish": "curso",
        "english": "course"
    },
    {
        "spanish": "industrial",
        "english": "industrial"
    },
    {
        "spanish": "individual",
        "english": "individual"
    },
    {
        "spanish": "formidable",
        "english": "formidable"
    },
    {
        "spanish": "irregular",
        "english": "irregular"
    },
    {
        "spanish": "inspector",
        "english": "inspector"
    },
    {
        "spanish": "impalpable",
        "english": "impalpable"
    },
    {
        "spanish": "invariable",
        "english": "invariable"
    },
    {
        "spanish": "impersonal",
        "english": "impersonal"
    },
    {
        "spanish": "improbable",
        "english": "improbable"
    },
    {
        "spanish": "glandular",
        "english": "glandular"
    },
    {
        "spanish": "intangible",
        "english": "intangible"
    },
    {
        "spanish": "invisible",
        "english": "invisible"
    },
    {
        "spanish": "inaudible",
        "english": "inaudible"
    },
    {
        "spanish": "horizontal",
        "english": "horizontal"
    },
    {
        "spanish": "influencer",
        "english": "influencer"
    },
    {
        "spanish": "hexagonal",
        "english": "hexagonal"
    },
    {
        "spanish": "excitable",
        "english": "excitable"
    },
    {
        "spanish": "headhunter",
        "english": "headhunter"
    },
    {
        "spanish": "fusionable",
        "english": "fusionable"
    },
    {
        "spanish": "inflexible",
        "english": "inflexible"
    },
    {
        "spanish": "viable",
        "english": "viable"
    },
    {
        "spanish": "amoroso",
        "english": "loving"
    },
    {
        "spanish": "austral",
        "english": "southern"
    },
    {
        "spanish": "afueras",
        "english": "outskirts"
    },
    {
        "spanish": "batería",
        "english": "drums"
    },
    {
        "spanish": "amparo",
        "english": "protection"
    },
    {
        "spanish": "altanero",
        "english": "haughty"
    },
    {
        "spanish": "afinado",
        "english": "tuned"
    },
    {
        "spanish": "altavoz",
        "english": "speaker"
    },
    {
        "spanish": "barriada",
        "english": "neighborhood"
    },
    {
        "spanish": "altivo",
        "english": "haughty"
    },
    {
        "spanish": "basurero",
        "english": "garbage collector"
    },
    {
        "spanish": "amargo",
        "english": "bitter"
    },
    {
        "spanish": "barrio",
        "english": "neighborhood"
    },
    {
        "spanish": "altura",
        "english": "height"
    },
    {
        "spanish": "amistoso",
        "english": "friendly"
    },
    {
        "spanish": "amistad",
        "english": "friendship"
    },
    {
        "spanish": "acequia",
        "english": "irrigation ditch"
    },
    {
        "spanish": "bufanda",
        "english": "scarf"
    },
    {
        "spanish": "amenaza",
        "english": "threat"
    },
    {
        "spanish": "brumoso",
        "english": "misty"
    },
    {
        "spanish": "amarrado",
        "english": "tied"
    },
    {
        "spanish": "amable",
        "english": "kind"
    },
    {
        "spanish": "alquiler",
        "english": "rent"
    },
    {
        "spanish": "amante",
        "english": "lover"
    },
    {
        "spanish": "bombero",
        "english": "firefighter"
    },
    {
        "spanish": "botiquín",
        "english": "first aid kit"
    },
    {
        "spanish": "bosque",
        "english": "forest"
    },
    {
        "spanish": "abarcado",
        "english": "encompassed"
    },
    {
        "spanish": "acabado",
        "english": "finished"
    },
    {
        "spanish": "alcance",
        "english": "reach"
    },
    {
        "spanish": "alcalde",
        "english": "mayor"
    },
    {
        "spanish": "blando",
        "english": "soft"
    },
    {
        "spanish": "albergue",
        "english": "shelter"
    },
    {
        "spanish": "albedrío",
        "english": "will"
    },
    {
        "spanish": "albañil",
        "english": "bricklayer"
    },
    {
        "spanish": "blanco",
        "english": "white"
    },
    {
        "spanish": "agudeza",
        "english": "sharpness"
    },
    {
        "spanish": "alargado",
        "english": "lengthened"
    },
    {
        "spanish": "bisoño",
        "english": "inexperienced"
    },
    {
        "spanish": "ajustado",
        "english": "tight"
    },
    {
        "spanish": "ahogarse",
        "english": "to drown"
    },
    {
        "spanish": "ahínco",
        "english": "eagerness"
    },
    {
        "spanish": "ahumado",
        "english": "smoked"
    },
    {
        "spanish": "ahorro",
        "english": "savings"
    },
    {
        "spanish": "agregado",
        "english": "attaché"
    },
    {
        "spanish": "atrevido",
        "english": "bold person"
    },
    {
        "spanish": "aldeano",
        "english": "villager"
    },
    {
        "spanish": "bañarse",
        "english": "to bathe"
    },
    {
        "spanish": "abierto",
        "english": "open"
    },
    {
        "spanish": "borrador",
        "english": "draft"
    },
    {
        "spanish": "almacén",
        "english": "warehouse"
    },
    {
        "spanish": "aumento",
        "english": "increase"
    },
    {
        "spanish": "atraco",
        "english": "holdup"
    },
    {
        "spanish": "bondad",
        "english": "kindness"
    },
    {
        "spanish": "barato",
        "english": "cheap"
    },
    {
        "spanish": "alisado",
        "english": "straightened"
    },
    {
        "spanish": "atrasado",
        "english": "backward"
    },
    {
        "spanish": "bolsillo",
        "english": "pocket"
    },
    {
        "spanish": "aliado",
        "english": "ally"
    },
    {
        "spanish": "algodón",
        "english": "cotton"
    },
    {
        "spanish": "alfarero",
        "english": "potter"
    },
    {
        "spanish": "bodegón",
        "english": "still life"
    },
    {
        "spanish": "alejado",
        "english": "distant"
    },
    {
        "spanish": "alegre",
        "english": "cheerful"
    },
    {
        "spanish": "avalista",
        "english": "guarantor"
    },
    {
        "spanish": "aseado",
        "english": "tidy"
    },
    {
        "spanish": "ampliado",
        "english": "enlarged"
    },
    {
        "spanish": "acogido",
        "english": "welcomed"
    },
    {
        "spanish": "asilado",
        "english": "asylum seeker"
    },
    {
        "spanish": "acápite",
        "english": "paragraph"
    },
    {
        "spanish": "arancel",
        "english": "tariff"
    },
    {
        "spanish": "averiado",
        "english": "broken down"
    },
    {
        "spanish": "absuelto",
        "english": "acquitted"
    },
    {
        "spanish": "apátrida",
        "english": "stateless person"
    },
    {
        "spanish": "apuesta",
        "english": "bet"
    },
    {
        "spanish": "apretado",
        "english": "tight"
    },
    {
        "spanish": "aplazado",
        "english": "postponed"
    },
    {
        "spanish": "caliente",
        "english": "hot"
    },
    {
        "spanish": "calidez",
        "english": "warmth"
    },
    {
        "spanish": "bailarín",
        "english": "dancer"
    },
    {
        "spanish": "apremio",
        "english": "urgency"
    },
    {
        "spanish": "cancha",
        "english": "court"
    },
    {
        "spanish": "adivino",
        "english": "fortune teller"
    },
    {
        "spanish": "acogedor",
        "english": "cozy"
    },
    {
        "spanish": "achaque",
        "english": "ailment"
    },
    {
        "spanish": "archivo",
        "english": "file"
    },
    {
        "spanish": "ardiente",
        "english": "burning"
    },
    {
        "spanish": "arista",
        "english": "edge"
    },
    {
        "spanish": "cantor",
        "english": "singer"
    },
    {
        "spanish": "acosado",
        "english": "harassed person"
    },
    {
        "spanish": "canción",
        "english": "song"
    },
    {
        "spanish": "avezado",
        "english": "experienced"
    },
    {
        "spanish": "candente",
        "english": "red-hot"
    },
    {
        "spanish": "arrugado",
        "english": "wrinkled"
    },
    {
        "spanish": "campos",
        "english": "fields"
    },
    {
        "spanish": "acorde",
        "english": "in tune"
    },
    {
        "spanish": "camisa",
        "english": "shirt"
    },
    {
        "spanish": "cansado",
        "english": "tired"
    },
    {
        "spanish": "camino",
        "english": "path"
    },
    {
        "spanish": "acotado",
        "english": "bounded"
    },
    {
        "spanish": "cantante",
        "english": "singer"
    },
    {
        "spanish": "acuerdo",
        "english": "agreement"
    },
    {
        "spanish": "arranque",
        "english": "start"
    },
    {
        "spanish": "cambio",
        "english": "change"
    },
    {
        "spanish": "arrabal",
        "english": "outskirts"
    },
    {
        "spanish": "bajada",
        "english": "descent"
    },
    {
        "spanish": "abrigo",
        "english": "coat"
    },
    {
        "spanish": "bajado",
        "english": "lowered"
    },
    {
        "spanish": "cabeza",
        "english": "head"
    },
    {
        "spanish": "anudado",
        "english": "knotted"
    },
    {
        "spanish": "caballo",
        "english": "horse"
    },
    {
        "spanish": "bandeja",
        "english": "tray"
    },
    {
        "spanish": "baldío",
        "english": "wasteland"
    },
    {
        "spanish": "bandera",
        "english": "flag"
    },
    {
        "spanish": "astuto",
        "english": "cunning"
    },
    {
        "spanish": "animoso",
        "english": "spirited"
    },
    {
        "spanish": "anillo",
        "english": "ring"
    },
    {
        "spanish": "anhelo",
        "english": "yearning"
    },
    {
        "spanish": "anhelado",
        "english": "yearned for person"
    },
    {
        "spanish": "angosto",
        "english": "narrow"
    },
    {
        "spanish": "butaca",
        "english": "seat"
    },
    {
        "spanish": "asunto",
        "english": "matter"
    },
    {
        "spanish": "andanza",
        "english": "adventure"
    },
    {
        "spanish": "adscrito",
        "english": "assigned"
    },
    {
        "spanish": "anciano",
        "english": "elderly"
    },
    {
        "spanish": "anchura",
        "english": "width"
    },
    {
        "spanish": "asustado",
        "english": "frightened person"
    },
    {
        "spanish": "buscado",
        "english": "sought person"
    },
    {
        "spanish": "anuncio",
        "english": "advertisement"
    },
    {
        "spanish": "augurio",
        "english": "omen"
    },
    {
        "spanish": "adjunto",
        "english": "attached"
    },
    {
        "spanish": "abombado",
        "english": "bulging"
    },
    {
        "spanish": "apertura",
        "english": "opening"
    },
    {
        "spanish": "acertado",
        "english": "correct"
    },
    {
        "spanish": "caduco",
        "english": "expired"
    },
    {
        "spanish": "apagado",
        "english": "dull person"
    },
    {
        "spanish": "caducado",
        "english": "expired"
    },
    {
        "spanish": "apartado",
        "english": "remote"
    },
    {
        "spanish": "abogado",
        "english": "lawyer"
    },
    {
        "spanish": "astucia",
        "english": "cunning"
    },
    {
        "spanish": "decano",
        "english": "dean"
    },
    {
        "spanish": "supervisor",
        "english": "supervisor"
    },
    {
        "spanish": "sommelier",
        "english": "sommelier"
    },
    {
        "spanish": "debido",
        "english": "due"
    },
    {
        "spanish": "acompasado",
        "english": "rhythmic"
    },
    {
        "spanish": "abrasador",
        "english": "scorching"
    },
    {
        "spanish": "aficionado",
        "english": "fan"
    },
    {
        "spanish": "agujereado",
        "english": "holed"
    },
    {
        "spanish": "absolución",
        "english": "acquittal"
    },
    {
        "spanish": "advenedizo",
        "english": "upstart"
    },
    {
        "spanish": "adjudicado",
        "english": "awarded"
    },
    {
        "spanish": "acostarse",
        "english": "to go to bed"
    },
    {
        "spanish": "agonizante",
        "english": "dying"
    },
    {
        "spanish": "aguardado",
        "english": "awaited person"
    },
    {
        "spanish": "abarrotado",
        "english": "crowded"
    },
    {
        "spanish": "acordarse",
        "english": "to remember"
    },
    {
        "spanish": "accionista",
        "english": "shareholder"
    },
    {
        "spanish": "agradable",
        "english": "pleasant"
    },
    {
        "spanish": "adinerado",
        "english": "wealthy"
    },
    {
        "spanish": "agrietado",
        "english": "cracked"
    },
    {
        "spanish": "ablandado",
        "english": "softened"
    },
    {
        "spanish": "agrandado",
        "english": "enlarged"
    },
    {
        "spanish": "agricultor",
        "english": "farmer"
    },
    {
        "spanish": "acaudalado",
        "english": "wealthy"
    },
    {
        "spanish": "bienestar",
        "english": "wellbeing"
    },
    {
        "spanish": "ahorrativo",
        "english": "thrifty"
    },
    {
        "spanish": "asqueroso",
        "english": "disgusting"
    },
    {
        "spanish": "aspiradora",
        "english": "vacuum cleaner"
    },
    {
        "spanish": "asombrado",
        "english": "amazed person"
    },
    {
        "spanish": "ascendido",
        "english": "promoted"
    },
    {
        "spanish": "artesanía",
        "english": "crafts"
    },
    {
        "spanish": "arreglado",
        "english": "neat"
    },
    {
        "spanish": "apropiado",
        "english": "suitable"
    },
    {
        "spanish": "apresurado",
        "english": "hurried"
    },
    {
        "spanish": "apostador",
        "english": "gambler"
    },
    {
        "spanish": "apoderado",
        "english": "attorney-in-fact"
    },
    {
        "spanish": "apicultor",
        "english": "beekeeper"
    },
    {
        "spanish": "anfitrión",
        "english": "host"
    },
    {
        "spanish": "astillado",
        "english": "splintered"
    },
    {
        "spanish": "aterrizaje",
        "english": "landing"
    },
    {
        "spanish": "ampliación",
        "english": "enlargement"
    },
    {
        "spanish": "bendecido",
        "english": "blessed"
    },
    {
        "spanish": "belicista",
        "english": "warmongering"
    },
    {
        "spanish": "bondadoso",
        "english": "kind person"
    },
    {
        "spanish": "borrascoso",
        "english": "stormy"
    },
    {
        "spanish": "baterista",
        "english": "drummer"
    },
    {
        "spanish": "bancarrota",
        "english": "bankruptcy"
    },
    {
        "spanish": "cadencioso",
        "english": "rhythmic"
    },
    {
        "spanish": "baloncesto",
        "english": "basketball"
    },
    {
        "spanish": "cambiante",
        "english": "changing"
    },
    {
        "spanish": "campestre",
        "english": "rural"
    },
    {
        "spanish": "avicultor",
        "english": "poultry farmer"
    },
    {
        "spanish": "aventajado",
        "english": "advanced"
    },
    {
        "spanish": "aumentado",
        "english": "increased"
    },
    {
        "spanish": "atrilista",
        "english": "music stand player"
    },
    {
        "spanish": "atracador",
        "english": "robber"
    },
    {
        "spanish": "analfabeto",
        "english": "illiterate"
    },
    {
        "spanish": "algodonoso",
        "english": "cottony"
    },
    {
        "spanish": "alpinista",
        "english": "mountaineer"
    },
    {
        "spanish": "aleatorio",
        "english": "random"
    },
    {
        "spanish": "alborotado",
        "english": "tousled"
    },
    {
        "spanish": "almidonado",
        "english": "starched"
    },
    {
        "spanish": "albergado",
        "english": "housed"
    },
    {
        "spanish": "ambulante",
        "english": "itinerant"
    },
    {
        "spanish": "alcanzado",
        "english": "reached"
    },
    {
        "spanish": "comentario",
        "english": "comment"
    },
    {
        "spanish": "expresión",
        "english": "expression"
    },
    {
        "spanish": "cautivado",
        "english": "captivated person"
    },
    {
        "spanish": "itinerante",
        "english": "itinerant"
    },
    {
        "spanish": "consejero",
        "english": "counselor"
    },
    {
        "spanish": "educación",
        "english": "education"
    },
    {
        "spanish": "itinerario",
        "english": "itinerary"
    },
    {
        "spanish": "celo",
        "english": "zeal"
    },
    {
        "spanish": "cojín",
        "english": "cushion"
    },
    {
        "spanish": "expirar",
        "english": "to expire"
    },
    {
        "spanish": "destinar",
        "english": "to destine"
    },
    {
        "spanish": "degradar",
        "english": "to degrade"
    },
    {
        "spanish": "disgustar",
        "english": "to disgust"
    },
    {
        "spanish": "hora",
        "english": "hour"
    },
    {
        "spanish": "desistir",
        "english": "to desist"
    },
    {
        "spanish": "demostrar",
        "english": "to demonstrate"
    },
    {
        "spanish": "desfigurar",
        "english": "to disfigure"
    },
    {
        "spanish": "deplorar",
        "english": "to deplore"
    },
    {
        "spanish": "deponer",
        "english": "to depose"
    },
    {
        "spanish": "descender",
        "english": "to descend"
    },
    {
        "spanish": "desactivar",
        "english": "to deactivate"
    },
    {
        "spanish": "deformar",
        "english": "to deform"
    },
    {
        "spanish": "decorar",
        "english": "to decorate"
    },
    {
        "spanish": "declarar",
        "english": "to declare"
    },
    {
        "spanish": "lapso",
        "english": "lapse"
    },
    {
        "spanish": "divulgar",
        "english": "to divulge"
    },
    {
        "spanish": "dividir",
        "english": "to divide"
    },
    {
        "spanish": "dilatar",
        "english": "to dilate"
    },
    {
        "spanish": "distraer",
        "english": "to distract"
    },
    {
        "spanish": "diseminar",
        "english": "to disseminate"
    },
    {
        "spanish": "decidir",
        "english": "to decide"
    },
    {
        "spanish": "economizar",
        "english": "to economize"
    },
    {
        "spanish": "decrecer",
        "english": "to decrease"
    },
    {
        "spanish": "editar",
        "english": "to edit"
    },
    {
        "spanish": "cultivar",
        "english": "to cultivate"
    },
    {
        "spanish": "elaborar",
        "english": "to elaborate"
    },
    {
        "spanish": "elevar",
        "english": "to elevate"
    },
    {
        "spanish": "dedicar",
        "english": "to dedicate"
    },
    {
        "spanish": "eliminar",
        "english": "to eliminate"
    },
    {
        "spanish": "cuestionar",
        "english": "to question"
    },
    {
        "spanish": "defender",
        "english": "to defend"
    },
    {
        "spanish": "detestar",
        "english": "to detest"
    },
    {
        "spanish": "emerger",
        "english": "to emerge"
    },
    {
        "spanish": "emitir",
        "english": "to emit"
    },
    {
        "spanish": "disimular",
        "english": "to dissimulate"
    },
    {
        "spanish": "mucho",
        "english": "much"
    },
    {
        "spanish": "corroer",
        "english": "to corrode"
    },
    {
        "spanish": "condenar",
        "english": "to condemn"
    },
    {
        "spanish": "celebrar",
        "english": "to celebrate"
    },
    {
        "spanish": "carbonizar",
        "english": "to carbonize"
    },
    {
        "spanish": "confirmar",
        "english": "to confirm"
    },
    {
        "spanish": "coincidir",
        "english": "to coincide"
    },
    {
        "spanish": "configurar",
        "english": "to configure"
    },
    {
        "spanish": "convencer",
        "english": "to convince"
    },
    {
        "spanish": "completar",
        "english": "to complete"
    },
    {
        "spanish": "complicar",
        "english": "to complicate"
    },
    {
        "spanish": "consentir",
        "english": "to consent"
    },
    {
        "spanish": "continuar",
        "english": "to continue"
    },
    {
        "spanish": "conectar",
        "english": "to connect"
    },
    {
        "spanish": "controlar",
        "english": "to control"
    },
    {
        "spanish": "conservar",
        "english": "to conserve"
    },
    {
        "spanish": "convertir",
        "english": "to convert"
    },
    {
        "spanish": "tutor",
        "english": "tutor"
    },
    {
        "spanish": "considerar",
        "english": "to consider"
    },
    {
        "spanish": "visa",
        "english": "visa"
    },
    {
        "spanish": "conspirar",
        "english": "to conspire"
    },
    {
        "spanish": "censurar",
        "english": "to censure"
    },
    {
        "spanish": "contraer",
        "english": "to contract"
    },
    {
        "spanish": "contaminar",
        "english": "to contaminate"
    },
    {
        "spanish": "componer",
        "english": "to compose"
    },
    {
        "spanish": "colaborar",
        "english": "to collaborate"
    },
    {
        "spanish": "conmemorar",
        "english": "to commemorate"
    },
    {
        "spanish": "cooperar",
        "english": "to cooperate"
    },
    {
        "spanish": "condensar",
        "english": "to condense"
    },
    {
        "spanish": "coordinar",
        "english": "to coordinate"
    },
    {
        "spanish": "combinar",
        "english": "to combine"
    },
    {
        "spanish": "vario",
        "english": "various"
    },
    {
        "spanish": "compensar",
        "english": "to compensate"
    },
    {
        "spanish": "concretar",
        "english": "to concretize"
    },
    {
        "spanish": "congregar",
        "english": "to congregate"
    },
    {
        "spanish": "competir",
        "english": "to compete"
    },
    {
        "spanish": "contemplar",
        "english": "to contemplate"
    },
    {
        "spanish": "cocinero",
        "english": "cook"
    },
    {
        "spanish": "casta",
        "english": "caste"
    },
    {
        "spanish": "curvo",
        "english": "curved"
    },
    {
        "spanish": "coro",
        "english": "choir"
    },
    {
        "spanish": "caso",
        "english": "case"
    },
    {
        "spanish": "cono",
        "english": "cone"
    },
    {
        "spanish": "cine",
        "english": "cinema"
    },
    {
        "spanish": "forma",
        "english": "form"
    },
    {
        "spanish": "circo",
        "english": "circus"
    },
    {
        "spanish": "causa",
        "english": "cause"
    },
    {
        "spanish": "claro",
        "english": "clear"
    },
    {
        "spanish": "capaz",
        "english": "capable"
    },
    {
        "spanish": "credo",
        "english": "creed"
    },
    {
        "spanish": "dato",
        "english": "data"
    },
    {
        "spanish": "conducir",
        "english": "to drive"
    },
    {
        "spanish": "puntual",
        "english": "punctual"
    },
    {
        "spanish": "macerar",
        "english": "to macerate"
    },
    {
        "spanish": "casado",
        "english": "married person"
    },
    {
        "spanish": "comprar",
        "english": "to buy"
    },
    {
        "spanish": "cocinar",
        "english": "to cook"
    },
    {
        "spanish": "familia",
        "english": "family"
    },
    {
        "spanish": "coetáneo",
        "english": "contemporary"
    },
    {
        "spanish": "rector",
        "english": "rector"
    },
    {
        "spanish": "comer",
        "english": "to eat"
    },
    {
        "spanish": "desfasado",
        "english": "outdated"
    },
    {
        "spanish": "inusual",
        "english": "unusual"
    },
    {
        "spanish": "cena",
        "english": "dinner"
    },
    {
        "spanish": "ducha",
        "english": "shower"
    },
    {
        "spanish": "coche",
        "english": "car"
    },
    {
        "spanish": "ecólogo",
        "english": "ecologist"
    },
    {
        "spanish": "citar",
        "english": "to cite"
    },
    {
        "spanish": "cinético",
        "english": "kinetic"
    },
    {
        "spanish": "discutir",
        "english": "to discuss"
    },
    {
        "spanish": "casa",
        "english": "house"
    },
    {
        "spanish": "hostil",
        "english": "hostile"
    },
    {
        "spanish": "carne",
        "english": "meat"
    },
    {
        "spanish": "carga",
        "english": "load"
    },
    {
        "spanish": "contestar",
        "english": "to answer"
    },
    {
        "spanish": "corista",
        "english": "chorister"
    },
    {
        "spanish": "copa",
        "english": "wine glass"
    },
    {
        "spanish": "carril",
        "english": "lane"
    },
    {
        "spanish": "piloto",
        "english": "pilot"
    },
    {
        "spanish": "cuarto",
        "english": "room"
    },
    {
        "spanish": "comida",
        "english": "food"
    },
    {
        "spanish": "estación",
        "english": "station"
    },
    {
        "spanish": "desagüe",
        "english": "drain"
    },
    {
        "spanish": "cocina",
        "english": "kitchen"
    },
    {
        "spanish": "chofer",
        "english": "driver"
    },
    {
        "spanish": "desayuno",
        "english": "breakfast"
    },
    {
        "spanish": "transporte",
        "english": "transport"
    },
    {
        "spanish": "carnicería",
        "english": "butcher shop"
    },
    {
        "spanish": "real",
        "english": "real"
    },
    {
        "spanish": "vagabundo",
        "english": "vagabond"
    },
    {
        "spanish": "colegio",
        "english": "school"
    },
    {
        "spanish": "carretera",
        "english": "road"
    },
    {
        "spanish": "comunicado",
        "english": "communiqué"
    },
    {
        "spanish": "expresar",
        "english": "to express"
    },
    {
        "spanish": "mapa",
        "english": "map"
    },
    {
        "spanish": "carta",
        "english": "letter"
    },
    {
        "spanish": "cita",
        "english": "quote"
    },
    {
        "spanish": "cautivar",
        "english": "to captivate"
    },
    {
        "spanish": "causar",
        "english": "to cause"
    },
    {
        "spanish": "despreciar",
        "english": "to despise"
    },
    {
        "spanish": "comprender",
        "english": "to understand"
    },
    {
        "spanish": "precursor",
        "english": "precursor"
    },
    {
        "spanish": "permeable",
        "english": "permeable"
    },
    {
        "spanish": "crear",
        "english": "to create"
    },
    {
        "spanish": "medicinal",
        "english": "medicinal"
    },
    {
        "spanish": "deshonrar",
        "english": "to dishonor"
    },
    {
        "spanish": "dañar",
        "english": "to damage"
    },
    {
        "spanish": "confundir",
        "english": "to confuse"
    },
    {
        "spanish": "ejercitar",
        "english": "to exercise"
    },
    {
        "spanish": "diferir",
        "english": "to defer"
    },
    {
        "spanish": "dinamizar",
        "english": "to dynamize"
    },
    {
        "spanish": "donar",
        "english": "to donate"
    },
    {
        "spanish": "desmontar",
        "english": "to dismantle"
    },
    {
        "spanish": "discrepar",
        "english": "to disagree"
    },
    {
        "spanish": "contener",
        "english": "to contain"
    },
    {
        "spanish": "rejoneador",
        "english": "rejoneador"
    },
    {
        "spanish": "desarmar",
        "english": "to disarm"
    },
    {
        "spanish": "drenar",
        "english": "to drain"
    },
    {
        "spanish": "desaprobar",
        "english": "to disapprove"
    },
    {
        "spanish": "triangular",
        "english": "triangular"
    },
    {
        "spanish": "curar",
        "english": "to cure"
    },
    {
        "spanish": "contar",
        "english": "to count"
    },
    {
        "spanish": "curvar",
        "english": "to curve"
    },
    {
        "spanish": "custodiar",
        "english": "to guard"
    },
    {
        "spanish": "desplazar",
        "english": "to displace"
    },
    {
        "spanish": "corregir",
        "english": "to correct"
    },
    {
        "spanish": "criticar",
        "english": "to criticize"
    },
    {
        "spanish": "vectorial",
        "english": "vectorial"
    },
    {
        "spanish": "dificultar",
        "english": "to make difficult"
    },
    {
        "spanish": "primordial",
        "english": "primordial"
    },
    {
        "spanish": "complacer",
        "english": "to please"
    },
    {
        "spanish": "clasificar",
        "english": "to classify"
    },
    {
        "spanish": "principal",
        "english": "principal"
    },
    {
        "spanish": "corromper",
        "english": "to corrupt"
    },
    {
        "spanish": "propaganda",
        "english": "propaganda"
    },
    {
        "spanish": "protector",
        "english": "protector"
    },
    {
        "spanish": "cesar",
        "english": "to cease"
    },
    {
        "spanish": "destilar",
        "english": "to distill"
    },
    {
        "spanish": "emplear",
        "english": "to employ"
    },
    {
        "spanish": "destruir",
        "english": "to destroy"
    },
    {
        "spanish": "particular",
        "english": "particular"
    },
    {
        "spanish": "consagrar",
        "english": "to consecrate"
    },
    {
        "spanish": "cosechar",
        "english": "to harvest"
    },
    {
        "spanish": "detraer",
        "english": "to detract"
    },
    {
        "spanish": "tensorial",
        "english": "tensorial"
    },
    {
        "spanish": "semestre",
        "english": "semester"
    },
    {
        "spanish": "esperado",
        "english": "expected person"
    },
    {
        "spanish": "maestro",
        "english": "master"
    },
    {
        "spanish": "deuda",
        "english": "debt"
    },
    {
        "spanish": "cauto",
        "english": "cautious person"
    },
    {
        "spanish": "huérfano",
        "english": "orphan"
    },
    {
        "spanish": "correo",
        "english": "mail"
    },
    {
        "spanish": "decir",
        "english": "to say"
    },
    {
        "spanish": "corto",
        "english": "short"
    },
    {
        "spanish": "turista",
        "english": "tourist"
    },
    {
        "spanish": "profesor",
        "english": "professor"
    },
    {
        "spanish": "examen",
        "english": "exam"
    },
    {
        "spanish": "duda",
        "english": "doubt"
    },
    {
        "spanish": "cinta",
        "english": "tape"
    },
    {
        "spanish": "hermano",
        "english": "brother"
    },
    {
        "spanish": "digno",
        "english": "dignified person"
    },
    {
        "spanish": "estancia",
        "english": "stay"
    },
    {
        "spanish": "cuaderno",
        "english": "notebook"
    },
    {
        "spanish": "evaluación",
        "english": "evaluation"
    },
    {
        "spanish": "formación",
        "english": "formation"
    },
    {
        "spanish": "jamón",
        "english": "ham"
    },
    {
        "spanish": "fascinado",
        "english": "fascinated person"
    },
    {
        "spanish": "graduación",
        "english": "graduation"
    },
    {
        "spanish": "empresas",
        "english": "companies"
    },
    {
        "spanish": "capítulo",
        "english": "chapter"
    },
    {
        "spanish": "deseado",
        "english": "desired person"
    },
    {
        "spanish": "dinámico",
        "english": "dynamic person"
    },
    {
        "spanish": "demorado",
        "english": "delayed"
    },
    {
        "spanish": "costero",
        "english": "coastal"
    },
    {
        "spanish": "efímero",
        "english": "ephemeral"
    },
    {
        "spanish": "desigual",
        "english": "unequal"
    },
    {
        "spanish": "empresa",
        "english": "company"
    },
    {
        "spanish": "cuadro",
        "english": "picture"
    },
    {
        "spanish": "cornista",
        "english": "horn player"
    },
    {
        "spanish": "consejo",
        "english": "council"
    },
    {
        "spanish": "cautela",
        "english": "caution"
    },
    {
        "spanish": "concejal",
        "english": "councilor"
    },
    {
        "spanish": "emisor",
        "english": "emitting"
    },
    {
        "spanish": "ejemplo",
        "english": "example"
    },
    {
        "spanish": "ciclismo",
        "english": "cycling"
    },
    {
        "spanish": "certero",
        "english": "accurate"
    },
    {
        "spanish": "collar",
        "english": "necklace"
    },
    {
        "spanish": "diputado",
        "english": "deputy"
    },
    {
        "spanish": "cumplido",
        "english": "fulfilled"
    },
    {
        "spanish": "cierre",
        "english": "closure"
    },
    {
        "spanish": "cicatriz",
        "english": "scar"
    },
    {
        "spanish": "cuadrado",
        "english": "square"
    },
    {
        "spanish": "costeño",
        "english": "coastal person"
    },
    {
        "spanish": "conexo",
        "english": "connected"
    },
    {
        "spanish": "diáfano",
        "english": "diaphanous"
    },
    {
        "spanish": "cláusula",
        "english": "clause"
    },
    {
        "spanish": "ecuánime",
        "english": "equanimous"
    },
    {
        "spanish": "céntrico",
        "english": "central"
    },
    {
        "spanish": "cruzado",
        "english": "crossed"
    },
    {
        "spanish": "cuantía",
        "english": "amount"
    },
    {
        "spanish": "decidido",
        "english": "determined"
    },
    {
        "spanish": "caridad",
        "english": "charity"
    },
    {
        "spanish": "cocido",
        "english": "cooked"
    },
    {
        "spanish": "citadino",
        "english": "city"
    },
    {
        "spanish": "donante",
        "english": "donor"
    },
    {
        "spanish": "chaqueta",
        "english": "jacket"
    },
    {
        "spanish": "dérmico",
        "english": "dermal"
    },
    {
        "spanish": "cascado",
        "english": "cracked"
    },
    {
        "spanish": "contador",
        "english": "accountant"
    },
    {
        "spanish": "cobrador",
        "english": "collector"
    },
    {
        "spanish": "dirigido",
        "english": "directed"
    },
    {
        "spanish": "cronista",
        "english": "chronicler"
    },
    {
        "spanish": "cheque",
        "english": "check"
    },
    {
        "spanish": "descuidar",
        "english": "to neglect"
    },
    {
        "spanish": "descansar",
        "english": "to rest"
    },
    {
        "spanish": "comenzar",
        "english": "to begin"
    },
    {
        "spanish": "instruir",
        "english": "to instruct"
    },
    {
        "spanish": "imaginar",
        "english": "to imagine"
    },
    {
        "spanish": "interesar",
        "english": "to interest"
    },
    {
        "spanish": "evaluar",
        "english": "to evaluate"
    },
    {
        "spanish": "desear",
        "english": "to wish"
    },
    {
        "spanish": "inspirar",
        "english": "to inspire"
    },
    {
        "spanish": "centellear",
        "english": "to sparkle"
    },
    {
        "spanish": "insistir",
        "english": "to insist"
    },
    {
        "spanish": "estimar",
        "english": "to estimate"
    },
    {
        "spanish": "está",
        "english": "is (temporary"
    },
    {
        "spanish": "cercar",
        "english": "to fence in"
    },
    {
        "spanish": "descubrir",
        "english": "to discover"
    },
    {
        "spanish": "iluminar",
        "english": "to illuminate"
    },
    {
        "spanish": "cercenar",
        "english": "to cut off"
    },
    {
        "spanish": "integrar",
        "english": "to integrate"
    },
    {
        "spanish": "descendido",
        "english": "demoted"
    },
    {
        "spanish": "evaporar",
        "english": "to evaporate"
    },
    {
        "spanish": "compartir",
        "english": "to share"
    },
    {
        "spanish": "ignorar",
        "english": "to ignore"
    },
    {
        "spanish": "disponer",
        "english": "to arrange"
    },
    {
        "spanish": "discutible",
        "english": "debatable"
    },
    {
        "spanish": "incorporar",
        "english": "to incorporate"
    },
    {
        "spanish": "decolorar",
        "english": "to bleach"
    },
    {
        "spanish": "conseguir",
        "english": "to get"
    },
    {
        "spanish": "indemnizar",
        "english": "to indemnify"
    },
    {
        "spanish": "germinar",
        "english": "to germinate"
    },
    {
        "spanish": "disminuir",
        "english": "to decrease"
    },
    {
        "spanish": "indicar",
        "english": "to indicate"
    },
    {
        "spanish": "disculpar",
        "english": "to excuse"
    },
    {
        "spanish": "comerciar",
        "english": "to trade"
    },
    {
        "spanish": "disparar",
        "english": "to shoot"
    },
    {
        "spanish": "degustar",
        "english": "to taste"
    },
    {
        "spanish": "dejar",
        "english": "to leave"
    },
    {
        "spanish": "conocer",
        "english": "to know (person)"
    },
    {
        "spanish": "indisponer",
        "english": "to indispose"
    },
    {
        "spanish": "facilitar",
        "english": "to facilitate"
    },
    {
        "spanish": "delatar",
        "english": "to inform on"
    },
    {
        "spanish": "conmover",
        "english": "to move emotionally"
    },
    {
        "spanish": "fascinar",
        "english": "to fascinate"
    },
    {
        "spanish": "conservado",
        "english": "preserved"
    },
    {
        "spanish": "cubrir",
        "english": "to cover"
    },
    {
        "spanish": "fecha",
        "english": "date"
    },
    {
        "spanish": "culpar",
        "english": "to blame"
    },
    {
        "spanish": "cuidar",
        "english": "to take care"
    },
    {
        "spanish": "imputar",
        "english": "to impute"
    },
    {
        "spanish": "cumplir",
        "english": "to fulfill"
    },
    {
        "spanish": "fin",
        "english": "end"
    },
    {
        "spanish": "filtrar",
        "english": "to filter"
    },
    {
        "spanish": "contagiar",
        "english": "to infect"
    },
    {
        "spanish": "incinerar",
        "english": "to incinerate"
    },
    {
        "spanish": "castigar",
        "english": "to punish"
    },
    {
        "spanish": "disfrutar",
        "english": "to enjoy"
    },
    {
        "spanish": "dar",
        "english": "to give"
    },
    {
        "spanish": "fermentar",
        "english": "to ferment"
    },
    {
        "spanish": "disgregado",
        "english": "scattered"
    },
    {
        "spanish": "imponer",
        "english": "to impose"
    },
    {
        "spanish": "deber",
        "english": "must"
    },
    {
        "spanish": "construir",
        "english": "to build"
    },
    {
        "spanish": "debilitar",
        "english": "to weaken"
    },
    {
        "spanish": "demorar",
        "english": "to delay"
    },
    {
        "spanish": "demógrafo",
        "english": "demographer"
    },
    {
        "spanish": "desayunar",
        "english": "to have breakfast"
    },
    {
        "spanish": "desagradar",
        "english": "to displease"
    },
    {
        "spanish": "existir",
        "english": "to exist"
    },
    {
        "spanish": "inhalar",
        "english": "to inhale"
    },
    {
        "spanish": "formar",
        "english": "to form"
    },
    {
        "spanish": "exhibir",
        "english": "to exhibit"
    },
    {
        "spanish": "desaparcar",
        "english": "to unpark"
    },
    {
        "spanish": "exhalar",
        "english": "to exhale"
    },
    {
        "spanish": "desapilar",
        "english": "to unstack"
    },
    {
        "spanish": "excusar",
        "english": "to excuse"
    },
    {
        "spanish": "exculpar",
        "english": "to exculpate"
    },
    {
        "spanish": "formular",
        "english": "to formulate"
    },
    {
        "spanish": "desarmado",
        "english": "unarmed"
    },
    {
        "spanish": "cenar",
        "english": "to have dinner"
    },
    {
        "spanish": "desatar",
        "english": "to untie"
    },
    {
        "spanish": "examinar",
        "english": "to examine"
    },
    {
        "spanish": "exaltar",
        "english": "to exalt"
    },
    {
        "spanish": "comodidad",
        "english": "comfort"
    },
    {
        "spanish": "exagerar",
        "english": "to exaggerate"
    },
    {
        "spanish": "exonerar",
        "english": "to exonerate"
    },
    {
        "spanish": "expandir",
        "english": "to expand"
    },
    {
        "spanish": "denunciar",
        "english": "to report"
    },
    {
        "spanish": "disponible",
        "english": "available"
    },
    {
        "spanish": "extender",
        "english": "to extend"
    },
    {
        "spanish": "deprimido",
        "english": "depressed"
    },
    {
        "spanish": "depurar",
        "english": "to purify"
    },
    {
        "spanish": "ceder",
        "english": "to yield"
    },
    {
        "spanish": "derechista",
        "english": "rightist"
    },
    {
        "spanish": "cegar",
        "english": "to blind"
    },
    {
        "spanish": "cuarteado",
        "english": "cracked"
    },
    {
        "spanish": "derogar",
        "english": "to repeal"
    },
    {
        "spanish": "exponer",
        "english": "to expose"
    },
    {
        "spanish": "derretir",
        "english": "to melt"
    },
    {
        "spanish": "derribar",
        "english": "to demolish"
    },
    {
        "spanish": "derrochar",
        "english": "to squander"
    },
    {
        "spanish": "derrotado",
        "english": "defeated"
    },
    {
        "spanish": "confiar",
        "english": "to trust"
    },
    {
        "spanish": "desafinar",
        "english": "to be out of tune"
    },
    {
        "spanish": "desempleo",
        "english": "unemployment"
    },
    {
        "spanish": "creer",
        "english": "to believe"
    },
    {
        "spanish": "despegado",
        "english": "detached"
    },
    {
        "spanish": "desordenar",
        "english": "to mess up"
    },
    {
        "spanish": "concordar",
        "english": "to agree"
    },
    {
        "spanish": "erradicar",
        "english": "to eradicate"
    },
    {
        "spanish": "despedir",
        "english": "to say goodbye"
    },
    {
        "spanish": "ejercicio",
        "english": "exercise"
    },
    {
        "spanish": "despegar",
        "english": "to take off"
    },
    {
        "spanish": "correr",
        "english": "to run"
    },
    {
        "spanish": "compuesto",
        "english": "compound"
    },
    {
        "spanish": "elegir",
        "english": "to choose"
    },
    {
        "spanish": "equipar",
        "english": "to equip"
    },
    {
        "spanish": "colocación",
        "english": "placement"
    },
    {
        "spanish": "liberar",
        "english": "to liberate"
    },
    {
        "spanish": "despejar",
        "english": "to clear up"
    },
    {
        "spanish": "escapar",
        "english": "to escape"
    },
    {
        "spanish": "desnutrir",
        "english": "to malnourish"
    },
    {
        "spanish": "dialogante",
        "english": "open to dialogue"
    },
    {
        "spanish": "capitalino",
        "english": "capital dweller"
    },
    {
        "spanish": "chupar",
        "english": "to suck"
    },
    {
        "spanish": "comprimido",
        "english": "compressed"
    },
    {
        "spanish": "escalera",
        "english": "stairs"
    },
    {
        "spanish": "comprobar",
        "english": "to check"
    },
    {
        "spanish": "hay",
        "english": "there is"
    },
    {
        "spanish": "devolver",
        "english": "to return"
    },
    {
        "spanish": "caritativo",
        "english": "charitable person"
    },
    {
        "spanish": "desocupado",
        "english": "unoccupied"
    },
    {
        "spanish": "conceder",
        "english": "to grant"
    },
    {
        "spanish": "costumbre",
        "english": "custom"
    },
    {
        "spanish": "gratinar",
        "english": "to gratin"
    },
    {
        "spanish": "crecer",
        "english": "to grow"
    },
    {
        "spanish": "embellecer",
        "english": "to beautify"
    },
    {
        "spanish": "divulgado",
        "english": "disclosed"
    },
    {
        "spanish": "captar",
        "english": "to grasp"
    },
    {
        "spanish": "colindante",
        "english": "adjoining"
    },
    {
        "spanish": "embrujar",
        "english": "to bewitch"
    },
    {
        "spanish": "doblar",
        "english": "to fold"
    },
    {
        "spanish": "emparchado",
        "english": "patched"
    },
    {
        "spanish": "empapar",
        "english": "to soak"
    },
    {
        "spanish": "hija",
        "english": "daughter"
    },
    {
        "spanish": "clarear",
        "english": "to brighten"
    },
    {
        "spanish": "frutería",
        "english": "fruit shop"
    },
    {
        "spanish": "despertar",
        "english": "to wake up"
    },
    {
        "spanish": "lámpara",
        "english": "lamp"
    },
    {
        "spanish": "desplazado",
        "english": "displaced person"
    },
    {
        "spanish": "colar",
        "english": "to strain"
    },
    {
        "spanish": "detener",
        "english": "to stop"
    },
    {
        "spanish": "elogiar",
        "english": "to praise"
    },
    {
        "spanish": "fue",
        "english": "was"
    },
    {
        "spanish": "desplegar",
        "english": "to unfold"
    },
    {
        "spanish": "despoblado",
        "english": "unpopulated"
    },
    {
        "spanish": "madre",
        "english": "mother"
    },
    {
        "spanish": "hijo",
        "english": "son"
    },
    {
        "spanish": "cobrar",
        "english": "to charge"
    },
    {
        "spanish": "destejer",
        "english": "to unravel"
    },
    {
        "spanish": "compasivo",
        "english": "compassionate person"
    },
    {
        "spanish": "invalidar",
        "english": "to invalidate"
    },
    {
        "spanish": "cerrar",
        "english": "to close"
    },
    {
        "spanish": "inventar",
        "english": "to invent"
    },
    {
        "spanish": "desfilar",
        "english": "to parade"
    },
    {
        "spanish": "coger",
        "english": "to take"
    },
    {
        "spanish": "investigar",
        "english": "to investigate"
    },
    {
        "spanish": "desgastar",
        "english": "to wear out"
    },
    {
        "spanish": "gerente",
        "english": "manager"
    },
    {
        "spanish": "dotar",
        "english": "to endow"
    },
    {
        "spanish": "otro",
        "english": "other"
    },
    {
        "spanish": "empuñar",
        "english": "to grip"
    },
    {
        "spanish": "deshelar",
        "english": "to thaw"
    },
    {
        "spanish": "interponer",
        "english": "to interpose"
    },
    {
        "spanish": "desenredar",
        "english": "to untangle"
    },
    {
        "spanish": "diluviar",
        "english": "to pour"
    },
    {
        "spanish": "intimidar",
        "english": "to intimidate"
    },
    {
        "spanish": "introducir",
        "english": "to introduce"
    },
    {
        "spanish": "desentonar",
        "english": "to be out of tune"
    },
    {
        "spanish": "intrigar",
        "english": "to intrigue"
    },
    {
        "spanish": "diseñador",
        "english": "designer"
    },
    {
        "spanish": "dormir",
        "english": "to sleep"
    },
    {
        "spanish": "destellar",
        "english": "to flash"
    },
    {
        "spanish": "deslizarse",
        "english": "to slide"
    },
    {
        "spanish": "energizar",
        "english": "to energize"
    },
    {
        "spanish": "destapar",
        "english": "to uncover"
    },
    {
        "spanish": "deslizar",
        "english": "to slide"
    },
    {
        "spanish": "capacitar",
        "english": "to train"
    },
    {
        "spanish": "echar",
        "english": "to throw"
    },
    {
        "spanish": "cribar",
        "english": "to sieve"
    },
    {
        "spanish": "dirigir",
        "english": "to direct"
    },
    {
        "spanish": "empatar",
        "english": "to tie"
    },
    {
        "spanish": "deslumbrar",
        "english": "to dazzle"
    },
    {
        "spanish": "generar",
        "english": "to generate"
    },
    {
        "spanish": "cocer",
        "english": "to cook"
    },
    {
        "spanish": "edificar",
        "english": "to build"
    },
    {
        "spanish": "han",
        "english": "have (they)"
    },
    {
        "spanish": "chantajear",
        "english": "to blackmail"
    },
    {
        "spanish": "empeorar",
        "english": "to worsen"
    },
    {
        "spanish": "dimitir",
        "english": "to resign"
    },
    {
        "spanish": "difundir",
        "english": "to spread"
    },
    {
        "spanish": "desteñir",
        "english": "to fade"
    },
    {
        "spanish": "irrigar",
        "english": "to irrigate"
    },
    {
        "spanish": "directivo",
        "english": "executive"
    },
    {
        "spanish": "irritar",
        "english": "to irritate"
    },
    {
        "spanish": "había",
        "english": "there was"
    },
    {
        "spanish": "dudar",
        "english": "to doubt"
    },
    {
        "spanish": "colocar",
        "english": "to place"
    },
    {
        "spanish": "empezar",
        "english": "to begin"
    },
    {
        "spanish": "funcionar",
        "english": "to function"
    },
    {
        "spanish": "fama",
        "english": "fame"
    },
    {
        "spanish": "parte",
        "english": "part"
    },
    {
        "spanish": "falso",
        "english": "false"
    },
    {
        "spanish": "pampa",
        "english": "pampas"
    },
    {
        "spanish": "pacto",
        "english": "pact"
    },
    {
        "spanish": "grupo",
        "english": "group"
    },
    {
        "spanish": "mayo",
        "english": "May"
    },
    {
        "spanish": "cima",
        "english": "top"
    },
    {
        "spanish": "dueño",
        "english": "owner"
    },
    {
        "spanish": "cojo",
        "english": "lame"
    },
    {
        "spanish": "don",
        "english": "gift"
    },
    {
        "spanish": "culto",
        "english": "worship"
    },
    {
        "spanish": "cola",
        "english": "tail"
    },
    {
        "spanish": "serio",
        "english": "serious"
    },
    {
        "spanish": "impío",
        "english": "impious"
    },
    {
        "spanish": "serie",
        "english": "series"
    },
    {
        "spanish": "fino",
        "english": "fine"
    },
    {
        "spanish": "senil",
        "english": "senile"
    },
    {
        "spanish": "genio",
        "english": "genius"
    },
    {
        "spanish": "ducho",
        "english": "skilled"
    },
    {
        "spanish": "dulce",
        "english": "sweet"
    },
    {
        "spanish": "docto",
        "english": "learned"
    },
    {
        "spanish": "signo",
        "english": "sign"
    },
    {
        "spanish": "duro",
        "english": "hard"
    },
    {
        "spanish": "débil",
        "english": "weak person"
    },
    {
        "spanish": "vasto",
        "english": "vast"
    },
    {
        "spanish": "fiero",
        "english": "fierce"
    },
    {
        "spanish": "edad",
        "english": "age"
    },
    {
        "spanish": "dolor",
        "english": "pain"
    },
    {
        "spanish": "cara",
        "english": "face"
    },
    {
        "spanish": "texto",
        "english": "text"
    },
    {
        "spanish": "dios",
        "english": "god"
    },
    {
        "spanish": "caza",
        "english": "hunting"
    },
    {
        "spanish": "tenis",
        "english": "tennis"
    },
    {
        "spanish": "casco",
        "english": "helmet"
    },
    {
        "spanish": "ruina",
        "english": "ruin"
    },
    {
        "spanish": "justo",
        "english": "just person"
    },
    {
        "spanish": "mate",
        "english": "matte"
    },
    {
        "spanish": "vacuo",
        "english": "vacuous"
    },
    {
        "spanish": "cielo",
        "english": "sky"
    },
    {
        "spanish": "entrevista",
        "english": "interview"
    },
    {
        "spanish": "frase",
        "english": "phrase"
    },
    {
        "spanish": "resto",
        "english": "rest"
    },
    {
        "spanish": "juez",
        "english": "judge"
    },
    {
        "spanish": "julio",
        "english": "July"
    },
    {
        "spanish": "línea",
        "english": "line"
    },
    {
        "spanish": "líder",
        "english": "leader"
    },
    {
        "spanish": "vil",
        "english": "vile"
    },
    {
        "spanish": "ciego",
        "english": "blind"
    },
    {
        "spanish": "foto",
        "english": "photo"
    },
    {
        "spanish": "caro",
        "english": "expensive"
    },
    {
        "spanish": "junio",
        "english": "June"
    },
    {
        "spanish": "carpa",
        "english": "tent"
    },
    {
        "spanish": "isla",
        "english": "island"
    },
    {
        "spanish": "culpa",
        "english": "fault"
    },
    {
        "spanish": "leal",
        "english": "loyal"
    },
    {
        "spanish": "chico",
        "english": "boy"
    },
    {
        "spanish": "valle",
        "english": "valley"
    },
    {
        "spanish": "cerro",
        "english": "hill"
    },
    {
        "spanish": "cerdo",
        "english": "pig"
    },
    {
        "spanish": "cosa",
        "english": "thing"
    },
    {
        "spanish": "fondo",
        "english": "fund"
    },
    {
        "spanish": "foco",
        "english": "focus"
    },
    {
        "spanish": "poeta",
        "english": "poet"
    },
    {
        "spanish": "norma",
        "english": "norm"
    },
    {
        "spanish": "obvio",
        "english": "obvious"
    },
    {
        "spanish": "neto",
        "english": "net"
    },
    {
        "spanish": "cosas",
        "english": "things"
    },
    {
        "spanish": "héroe",
        "english": "hero"
    },
    {
        "spanish": "cubo",
        "english": "bucket"
    },
    {
        "spanish": "molde",
        "english": "mold"
    },
    {
        "spanish": "disco",
        "english": "record"
    },
    {
        "spanish": "suma",
        "english": "sum"
    },
    {
        "spanish": "crudo",
        "english": "raw"
    },
    {
        "spanish": "enfadado",
        "english": "angry person"
    },
    {
        "spanish": "progenie",
        "english": "progeny"
    },
    {
        "spanish": "hermana",
        "english": "sister"
    },
    {
        "spanish": "ocasión",
        "english": "occasion"
    },
    {
        "spanish": "tiempos",
        "english": "times"
    },
    {
        "spanish": "estirpe",
        "english": "lineage"
    },
    {
        "spanish": "separado",
        "english": "separated person"
    },
    {
        "spanish": "número",
        "english": "number"
    },
    {
        "spanish": "tren",
        "english": "train"
    },
    {
        "spanish": "leche",
        "english": "milk"
    },
    {
        "spanish": "menú",
        "english": "menu"
    },
    {
        "spanish": "sopa",
        "english": "soup"
    },
    {
        "spanish": "ruta",
        "english": "route"
    },
    {
        "spanish": "plato",
        "english": "plate"
    },
    {
        "spanish": "sofá",
        "english": "sofa"
    },
    {
        "spanish": "grifo",
        "english": "faucet"
    },
    {
        "spanish": "jefe",
        "english": "boss"
    },
    {
        "spanish": "metro",
        "english": "meter"
    },
    {
        "spanish": "huevo",
        "english": "egg"
    },
    {
        "spanish": "solista",
        "english": "soloist"
    },
    {
        "spanish": "severo",
        "english": "severe"
    },
    {
        "spanish": "solvente",
        "english": "solvent"
    },
    {
        "spanish": "humilde",
        "english": "humble"
    },
    {
        "spanish": "ilusión",
        "english": "illusion"
    },
    {
        "spanish": "visión",
        "english": "vision"
    },
    {
        "spanish": "talento",
        "english": "talent"
    },
    {
        "spanish": "sonoro",
        "english": "sonorous"
    },
    {
        "spanish": "humildad",
        "english": "humility"
    },
    {
        "spanish": "ignorado",
        "english": "ignored"
    },
    {
        "spanish": "idéntico",
        "english": "identical"
    },
    {
        "spanish": "hábito",
        "english": "habit"
    },
    {
        "spanish": "tangente",
        "english": "tangent"
    },
    {
        "spanish": "sinuoso",
        "english": "sinuous"
    },
    {
        "spanish": "gloria",
        "english": "glory"
    },
    {
        "spanish": "gracia",
        "english": "grace"
    },
    {
        "spanish": "sinovial",
        "english": "synovial"
    },
    {
        "spanish": "gótico",
        "english": "gothic"
    },
    {
        "spanish": "grupal",
        "english": "group"
    },
    {
        "spanish": "habitado",
        "english": "inhabited"
    },
    {
        "spanish": "temporal",
        "english": "temporary"
    },
    {
        "spanish": "síntesis",
        "english": "synthesis"
    },
    {
        "spanish": "gregario",
        "english": "gregarious person"
    },
    {
        "spanish": "heroína",
        "english": "heroine"
    },
    {
        "spanish": "sucesor",
        "english": "successor"
    },
    {
        "spanish": "geólogo",
        "english": "geologist"
    },
    {
        "spanish": "suburbio",
        "english": "suburb"
    },
    {
        "spanish": "historia",
        "english": "history"
    },
    {
        "spanish": "solemne",
        "english": "solemn"
    },
    {
        "spanish": "honesto",
        "english": "honest person"
    },
    {
        "spanish": "graduado",
        "english": "graduate"
    },
    {
        "spanish": "supremo",
        "english": "supreme"
    },
    {
        "spanish": "sincero",
        "english": "sincere"
    },
    {
        "spanish": "imitado",
        "english": "imitated"
    },
    {
        "spanish": "volumen",
        "english": "volume"
    },
    {
        "spanish": "ilógico",
        "english": "illogical"
    },
    {
        "spanish": "ilíquido",
        "english": "illiquid"
    },
    {
        "spanish": "híbrido",
        "english": "hybrid"
    },
    {
        "spanish": "urbano",
        "english": "urban"
    },
    {
        "spanish": "servil",
        "english": "servile"
    },
    {
        "spanish": "minero",
        "english": "miner"
    },
    {
        "spanish": "modelo",
        "english": "model"
    },
    {
        "spanish": "moderno",
        "english": "modern"
    },
    {
        "spanish": "modesto",
        "english": "modest"
    },
    {
        "spanish": "proceso",
        "english": "process"
    },
    {
        "spanish": "motivo",
        "english": "motive"
    },
    {
        "spanish": "problema",
        "english": "problem"
    },
    {
        "spanish": "mucoso",
        "english": "mucous"
    },
    {
        "spanish": "mundano",
        "english": "mundane"
    },
    {
        "spanish": "mutilado",
        "english": "mutilated"
    },
    {
        "spanish": "mánager",
        "english": "manager"
    },
    {
        "spanish": "méxico",
        "english": "Mexico"
    },
    {
        "spanish": "múltiple",
        "english": "multiple"
    },
    {
        "spanish": "nacional",
        "english": "national"
    },
    {
        "spanish": "nativo",
        "english": "native"
    },
    {
        "spanish": "negativo",
        "english": "negative"
    },
    {
        "spanish": "nocturno",
        "english": "nocturnal"
    },
    {
        "spanish": "notorio",
        "english": "notorious"
    },
    {
        "spanish": "ministro",
        "english": "minister"
    },
    {
        "spanish": "militar",
        "english": "military"
    },
    {
        "spanish": "objetivo",
        "english": "objective"
    },
    {
        "spanish": "metros",
        "english": "meters"
    },
    {
        "spanish": "profundo",
        "english": "profound"
    },
    {
        "spanish": "lánguido",
        "english": "languid"
    },
    {
        "spanish": "lícito",
        "english": "licit"
    },
    {
        "spanish": "límite",
        "english": "limit"
    },
    {
        "spanish": "líquido",
        "english": "liquid"
    },
    {
        "spanish": "lógica",
        "english": "logic"
    },
    {
        "spanish": "lógico",
        "english": "logical"
    },
    {
        "spanish": "maduro",
        "english": "mature"
    },
    {
        "spanish": "maestría",
        "english": "mastery"
    },
    {
        "spanish": "profano",
        "english": "profane"
    },
    {
        "spanish": "producto",
        "english": "product"
    },
    {
        "spanish": "marinado",
        "english": "marinated"
    },
    {
        "spanish": "medalla",
        "english": "medal"
    },
    {
        "spanish": "mediador",
        "english": "mediator"
    },
    {
        "spanish": "mediato",
        "english": "mediate"
    },
    {
        "spanish": "medicina",
        "english": "medicine"
    },
    {
        "spanish": "medular",
        "english": "medullary"
    },
    {
        "spanish": "novela",
        "english": "novel"
    },
    {
        "spanish": "objeto",
        "english": "object"
    },
    {
        "spanish": "profuso",
        "english": "profuse"
    },
    {
        "spanish": "vegetal",
        "english": "vegetable"
    },
    {
        "spanish": "permiso",
        "english": "permission"
    },
    {
        "spanish": "perpetuo",
        "english": "perpetual"
    },
    {
        "spanish": "preciso",
        "english": "precise"
    },
    {
        "spanish": "persona",
        "english": "person"
    },
    {
        "spanish": "pianista",
        "english": "pianist"
    },
    {
        "spanish": "piloso",
        "english": "pilose"
    },
    {
        "spanish": "pionero",
        "english": "pioneer"
    },
    {
        "spanish": "precioso",
        "english": "precious"
    },
    {
        "spanish": "precepto",
        "english": "precept"
    },
    {
        "spanish": "potente",
        "english": "potent"
    },
    {
        "spanish": "usurero",
        "english": "usurer"
    },
    {
        "spanish": "planta",
        "english": "plant"
    },
    {
        "spanish": "pomposo",
        "english": "pompous"
    },
    {
        "spanish": "poroso",
        "english": "porous"
    },
    {
        "spanish": "posible",
        "english": "possible"
    },
    {
        "spanish": "positivo",
        "english": "positive"
    },
    {
        "spanish": "previo",
        "english": "previous"
    },
    {
        "spanish": "perfecto",
        "english": "perfect"
    },
    {
        "spanish": "obsoleto",
        "english": "obsolete"
    },
    {
        "spanish": "uniforme",
        "english": "uniform"
    },
    {
        "spanish": "obtuso",
        "english": "obtuse"
    },
    {
        "spanish": "ofensivo",
        "english": "offensive"
    },
    {
        "spanish": "oneroso",
        "english": "onerous"
    },
    {
        "spanish": "opcional",
        "english": "optional"
    },
    {
        "spanish": "opinión",
        "english": "opinion"
    },
    {
        "spanish": "oponente",
        "english": "opponent"
    },
    {
        "spanish": "opulento",
        "english": "opulent"
    },
    {
        "spanish": "origen",
        "english": "origin"
    },
    {
        "spanish": "paralelo",
        "english": "parallel"
    },
    {
        "spanish": "inoportuno",
        "english": "untimely"
    },
    {
        "spanish": "recesivo",
        "english": "recessive"
    },
    {
        "spanish": "efectivo",
        "english": "cash"
    },
    {
        "spanish": "dichoso",
        "english": "blissful"
    },
    {
        "spanish": "cercano",
        "english": "near"
    },
    {
        "spanish": "cerrado",
        "english": "closed person"
    },
    {
        "spanish": "cárcel",
        "english": "jail"
    },
    {
        "spanish": "estándar",
        "english": "standard"
    },
    {
        "spanish": "conejo",
        "english": "rabbit"
    },
    {
        "spanish": "código",
        "english": "code"
    },
    {
        "spanish": "contorno",
        "english": "outline"
    },
    {
        "spanish": "cómodo",
        "english": "comfortable"
    },
    {
        "spanish": "dibujo",
        "english": "drawing"
    },
    {
        "spanish": "esclavo",
        "english": "slave"
    },
    {
        "spanish": "estudio",
        "english": "study"
    },
    {
        "spanish": "estudiar",
        "english": "to study"
    },
    {
        "spanish": "famoso",
        "english": "famous person"
    },
    {
        "spanish": "ceñido",
        "english": "tight-fitting"
    },
    {
        "spanish": "fantasía",
        "english": "fantasy"
    },
    {
        "spanish": "chandal",
        "english": "tracksuit"
    },
    {
        "spanish": "conserje",
        "english": "janitor"
    },
    {
        "spanish": "comienzo",
        "english": "beginning"
    },
    {
        "spanish": "chantaje",
        "english": "blackmail"
    },
    {
        "spanish": "diario",
        "english": "daily"
    },
    {
        "spanish": "conforme",
        "english": "in agreement"
    },
    {
        "spanish": "comedido",
        "english": "restrained"
    },
    {
        "spanish": "fresco",
        "english": "fresh"
    },
    {
        "spanish": "fanático",
        "english": "fanatic"
    },
    {
        "spanish": "cálido",
        "english": "warm"
    },
    {
        "spanish": "fallido",
        "english": "failed"
    },
    {
        "spanish": "farmacia",
        "english": "pharmacy"
    },
    {
        "spanish": "frágil",
        "english": "fragile"
    },
    {
        "spanish": "condena",
        "english": "sentence"
    },
    {
        "spanish": "cartero",
        "english": "mailman"
    },
    {
        "spanish": "cuidado",
        "english": "care"
    },
    {
        "spanish": "casero",
        "english": "landlord"
    },
    {
        "spanish": "escala",
        "english": "scale"
    },
    {
        "spanish": "eufónico",
        "english": "euphonic"
    },
    {
        "spanish": "caserío",
        "english": "hamlet"
    },
    {
        "spanish": "etnólogo",
        "english": "ethnologist"
    },
    {
        "spanish": "culpable",
        "english": "guilty"
    },
    {
        "spanish": "eterno",
        "english": "eternal"
    },
    {
        "spanish": "caulinar",
        "english": "stem"
    },
    {
        "spanish": "factible",
        "english": "feasible"
    },
    {
        "spanish": "cultivo",
        "english": "crop"
    },
    {
        "spanish": "cumbre",
        "english": "summit"
    },
    {
        "spanish": "facultad",
        "english": "faculty"
    },
    {
        "spanish": "cuneta",
        "english": "gutter"
    },
    {
        "spanish": "cazador",
        "english": "hunter"
    },
    {
        "spanish": "cañería",
        "english": "plumbing"
    },
    {
        "spanish": "estúpido",
        "english": "stupid"
    },
    {
        "spanish": "curación",
        "english": "healing"
    },
    {
        "spanish": "estímulo",
        "english": "stimulus"
    },
    {
        "spanish": "estético",
        "english": "aesthetic"
    },
    {
        "spanish": "fisurado",
        "english": "fissured"
    },
    {
        "spanish": "curtido",
        "english": "weathered"
    },
    {
        "spanish": "cepillo",
        "english": "brush"
    },
    {
        "spanish": "frente",
        "english": "front"
    },
    {
        "spanish": "destreza",
        "english": "skill"
    },
    {
        "spanish": "función",
        "english": "function"
    },
    {
        "spanish": "espacial",
        "english": "spatial"
    },
    {
        "spanish": "conocido",
        "english": "acquaintance"
    },
    {
        "spanish": "denuncia",
        "english": "report"
    },
    {
        "spanish": "filtrado",
        "english": "filtered"
    },
    {
        "spanish": "coartada",
        "english": "alibi"
    },
    {
        "spanish": "forjado",
        "english": "forged"
    },
    {
        "spanish": "colado",
        "english": "strained"
    },
    {
        "spanish": "despegue",
        "english": "takeoff"
    },
    {
        "spanish": "comarca",
        "english": "region"
    },
    {
        "spanish": "colina",
        "english": "hill"
    },
    {
        "spanish": "flácido",
        "english": "flaccid"
    },
    {
        "spanish": "estadio",
        "english": "stadium"
    },
    {
        "spanish": "colono",
        "english": "settler"
    },
    {
        "spanish": "derecha",
        "english": "right (direction)"
    },
    {
        "spanish": "conjunto",
        "english": "set"
    },
    {
        "spanish": "derecho",
        "english": "right"
    },
    {
        "spanish": "derogado",
        "english": "repealed"
    },
    {
        "spanish": "espinoso",
        "english": "spiny"
    },
    {
        "spanish": "flauta",
        "english": "flute"
    },
    {
        "spanish": "firmeza",
        "english": "firmness"
    },
    {
        "spanish": "colocado",
        "english": "placed"
    },
    {
        "spanish": "deshecho",
        "english": "unmade"
    },
    {
        "spanish": "colmado",
        "english": "filled"
    },
    {
        "spanish": "derrumbe",
        "english": "collapse"
    },
    {
        "spanish": "espacio",
        "english": "space"
    },
    {
        "spanish": "forzado",
        "english": "forced"
    },
    {
        "spanish": "cinturón",
        "english": "belt"
    },
    {
        "spanish": "figurado",
        "english": "figurative"
    },
    {
        "spanish": "cúspide",
        "english": "peak"
    },
    {
        "spanish": "cirugía",
        "english": "surgery"
    },
    {
        "spanish": "franco",
        "english": "frank"
    },
    {
        "spanish": "dadivoso",
        "english": "giving person"
    },
    {
        "spanish": "dañino",
        "english": "harmful"
    },
    {
        "spanish": "comarcal",
        "english": "county"
    },
    {
        "spanish": "desdicha",
        "english": "misfortune"
    },
    {
        "spanish": "cirujano",
        "english": "surgeon"
    },
    {
        "spanish": "fracción",
        "english": "fraction"
    },
    {
        "spanish": "citación",
        "english": "summons"
    },
    {
        "spanish": "febrero",
        "english": "February"
    },
    {
        "spanish": "ciudad",
        "english": "city"
    },
    {
        "spanish": "estepa",
        "english": "steppe"
    },
    {
        "spanish": "estatuto",
        "english": "statute"
    },
    {
        "spanish": "estatal",
        "english": "state"
    },
    {
        "spanish": "enorme",
        "english": "enormous"
    },
    {
        "spanish": "clausura",
        "english": "closing"
    },
    {
        "spanish": "fiable",
        "english": "reliable"
    },
    {
        "spanish": "delator",
        "english": "informer"
    },
    {
        "spanish": "empírico",
        "english": "empiricist"
    },
    {
        "spanish": "delgado",
        "english": "thin"
    },
    {
        "spanish": "ficticio",
        "english": "fictitious"
    },
    {
        "spanish": "delito",
        "english": "crime"
    },
    {
        "spanish": "cartel",
        "english": "poster"
    },
    {
        "spanish": "estéril",
        "english": "sterile"
    },
    {
        "spanish": "exótico",
        "english": "exotic"
    },
    {
        "spanish": "energía",
        "english": "energy"
    },
    {
        "spanish": "elegido",
        "english": "chosen"
    },
    {
        "spanish": "doloroso",
        "english": "painful"
    },
    {
        "spanish": "excluido",
        "english": "excluded person"
    },
    {
        "spanish": "dolencia",
        "english": "ailment"
    },
    {
        "spanish": "embalaje",
        "english": "packaging"
    },
    {
        "spanish": "evacuado",
        "english": "evacuee"
    },
    {
        "spanish": "exaltado",
        "english": "exalted"
    },
    {
        "spanish": "extenso",
        "english": "extensive"
    },
    {
        "spanish": "galería",
        "english": "gallery"
    },
    {
        "spanish": "entrada",
        "english": "entrance"
    },
    {
        "spanish": "desatado",
        "english": "untied"
    },
    {
        "spanish": "domingo",
        "english": "Sunday"
    },
    {
        "spanish": "externo",
        "english": "external"
    },
    {
        "spanish": "creencia",
        "english": "belief"
    },
    {
        "spanish": "corbata",
        "english": "tie"
    },
    {
        "spanish": "corazón",
        "english": "heart"
    },
    {
        "spanish": "crespo",
        "english": "frizzy"
    },
    {
        "spanish": "creyente",
        "english": "believer"
    },
    {
        "spanish": "crispado",
        "english": "tense"
    },
    {
        "spanish": "empapado",
        "english": "soaked"
    },
    {
        "spanish": "crítica",
        "english": "review"
    },
    {
        "spanish": "empatado",
        "english": "tied"
    },
    {
        "spanish": "domador",
        "english": "tamer"
    },
    {
        "spanish": "dorador",
        "english": "gilder"
    },
    {
        "spanish": "enemigo",
        "english": "enemy"
    },
    {
        "spanish": "endémico",
        "english": "endemic"
    },
    {
        "spanish": "exiliado",
        "english": "exile"
    },
    {
        "spanish": "eficacia",
        "english": "effectiveness"
    },
    {
        "spanish": "corredor",
        "english": "broker"
    },
    {
        "spanish": "genérico",
        "english": "generic"
    },
    {
        "spanish": "cortado",
        "english": "cut"
    },
    {
        "spanish": "generoso",
        "english": "generous person"
    },
    {
        "spanish": "eficaz",
        "english": "effective"
    },
    {
        "spanish": "cortijo",
        "english": "farmhouse"
    },
    {
        "spanish": "enviado",
        "english": "envoy"
    },
    {
        "spanish": "ejemplar",
        "english": "copy"
    },
    {
        "spanish": "cordura",
        "english": "sanity"
    },
    {
        "spanish": "cosecha",
        "english": "harvest"
    },
    {
        "spanish": "enólogo",
        "english": "enologist"
    },
    {
        "spanish": "cosido",
        "english": "sewn"
    },
    {
        "spanish": "duradero",
        "english": "lasting"
    },
    {
        "spanish": "dulzón",
        "english": "sweetish"
    },
    {
        "spanish": "dudoso",
        "english": "doubtful"
    },
    {
        "spanish": "crecido",
        "english": "grown"
    },
    {
        "spanish": "epílogo",
        "english": "epilogue"
    },
    {
        "spanish": "explicar",
        "english": "to explain"
    },
    {
        "spanish": "ducharse",
        "english": "to shower"
    },
    {
        "spanish": "cariñoso",
        "english": "affectionate"
    },
    {
        "spanish": "espurio",
        "english": "spurious"
    },
    {
        "spanish": "dictamen",
        "english": "opinion"
    },
    {
        "spanish": "convenio",
        "english": "agreement"
    },
    {
        "spanish": "furioso",
        "english": "furious person"
    },
    {
        "spanish": "fundador",
        "english": "founder"
    },
    {
        "spanish": "cuerpo",
        "english": "body"
    },
    {
        "spanish": "dinero",
        "english": "money"
    },
    {
        "spanish": "evadirse",
        "english": "to evade"
    },
    {
        "spanish": "cuerdo",
        "english": "sane person"
    },
    {
        "spanish": "cuchillo",
        "english": "knife"
    },
    {
        "spanish": "errático",
        "english": "erratic"
    },
    {
        "spanish": "cuchara",
        "english": "spoon"
    },
    {
        "spanish": "compás",
        "english": "beat"
    },
    {
        "spanish": "cuento",
        "english": "story"
    },
    {
        "spanish": "entidad",
        "english": "entity"
    },
    {
        "spanish": "cubierto",
        "english": "overcast"
    },
    {
        "spanish": "carnoso",
        "english": "fleshy"
    },
    {
        "spanish": "empeño",
        "english": "determination"
    },
    {
        "spanish": "fétido",
        "english": "fetid"
    },
    {
        "spanish": "fundado",
        "english": "founded"
    },
    {
        "spanish": "erróneo",
        "english": "erroneous"
    },
    {
        "spanish": "extraído",
        "english": "extracted"
    },
    {
        "spanish": "cuerda",
        "english": "rope"
    },
    {
        "spanish": "diestro",
        "english": "skillful"
    },
    {
        "spanish": "fértil",
        "english": "fertile"
    },
    {
        "spanish": "ermitaño",
        "english": "hermit"
    },
    {
        "spanish": "diseño",
        "english": "design"
    },
    {
        "spanish": "descanso",
        "english": "rest"
    },
    {
        "spanish": "resonante",
        "english": "resonant"
    },
    {
        "spanish": "desafinado",
        "english": "out of tune"
    },
    {
        "spanish": "excéntrico",
        "english": "eccentric"
    },
    {
        "spanish": "insaturado",
        "english": "unsaturated"
    },
    {
        "spanish": "inmaculado",
        "english": "immaculate"
    },
    {
        "spanish": "exhibición",
        "english": "exhibition"
    },
    {
        "spanish": "inventario",
        "english": "inventory"
    },
    {
        "spanish": "existente",
        "english": "existing"
    },
    {
        "spanish": "concurrido",
        "english": "crowded"
    },
    {
        "spanish": "reverente",
        "english": "reverent"
    },
    {
        "spanish": "intrínseco",
        "english": "intrinsic"
    },
    {
        "spanish": "desaliñado",
        "english": "slovenly"
    },
    {
        "spanish": "estacional",
        "english": "seasonal"
    },
    {
        "spanish": "concedido",
        "english": "granted"
    },
    {
        "spanish": "intrincado",
        "english": "intricate"
    },
    {
        "spanish": "reportero",
        "english": "reporter"
    },
    {
        "spanish": "resistente",
        "english": "resistant"
    },
    {
        "spanish": "religioso",
        "english": "religious"
    },
    {
        "spanish": "mutualista",
        "english": "mutualistic"
    },
    {
        "spanish": "confiable",
        "english": "trustworthy"
    },
    {
        "spanish": "represivo",
        "english": "repressive"
    },
    {
        "spanish": "confección",
        "english": "making"
    },
    {
        "spanish": "desanimado",
        "english": "discouraged"
    },
    {
        "spanish": "evolución",
        "english": "evolution"
    },
    {
        "spanish": "estrategia",
        "english": "strategy"
    },
    {
        "spanish": "congelado",
        "english": "frozen"
    },
    {
        "spanish": "inmediato",
        "english": "immediate"
    },
    {
        "spanish": "reservado",
        "english": "reserved"
    },
    {
        "spanish": "contusión",
        "english": "bruise"
    },
    {
        "spanish": "librería",
        "english": "bookstore"
    },
    {
        "spanish": "libro",
        "english": "book"
    },
    {
        "spanish": "licenciado",
        "english": "licensed"
    },
    {
        "spanish": "televisor",
        "english": "television"
    },
    {
        "spanish": "lavabo",
        "english": "sink"
    },
    {
        "spanish": "cuentista",
        "english": "short story writer"
    },
    {
        "spanish": "curandero",
        "english": "healer"
    },
    {
        "spanish": "sensitivo",
        "english": "sensitive"
    },
    {
        "spanish": "cumpleaños",
        "english": "birthday"
    },
    {
        "spanish": "letárgico",
        "english": "lethargic person"
    },
    {
        "spanish": "cuidadoso",
        "english": "careful"
    },
    {
        "spanish": "tendinoso",
        "english": "tendinous"
    },
    {
        "spanish": "socialista",
        "english": "socialist"
    },
    {
        "spanish": "cualquier",
        "english": "any"
    },
    {
        "spanish": "creciente",
        "english": "growing"
    },
    {
        "spanish": "cotización",
        "english": "quote"
    },
    {
        "spanish": "epidérmico",
        "english": "epidermal"
    },
    {
        "spanish": "cristalero",
        "english": "glass worker"
    },
    {
        "spanish": "cooperante",
        "english": "aid worker"
    },
    {
        "spanish": "subcutáneo",
        "english": "subcutaneous"
    },
    {
        "spanish": "subjuntivo",
        "english": "subjunctive"
    },
    {
        "spanish": "cordillera",
        "english": "mountain range"
    },
    {
        "spanish": "taciturno",
        "english": "taciturn"
    },
    {
        "spanish": "manuscrito",
        "english": "manuscript"
    },
    {
        "spanish": "lavadora",
        "english": "washing machine"
    },
    {
        "spanish": "enojado",
        "english": "angry person"
    },
    {
        "spanish": "sacrificio",
        "english": "sacrifice"
    },
    {
        "spanish": "salario",
        "english": "salary"
    },
    {
        "spanish": "delantero",
        "english": "front"
    },
    {
        "spanish": "específico",
        "english": "specific"
    },
    {
        "spanish": "espejo",
        "english": "mirror"
    },
    {
        "spanish": "derribado",
        "english": "knocked down"
    },
    {
        "spanish": "espléndido",
        "english": "splendid"
    },
    {
        "spanish": "transeúnte",
        "english": "transient"
    },
    {
        "spanish": "construido",
        "english": "built"
    },
    {
        "spanish": "testimonio",
        "english": "testimony"
    },
    {
        "spanish": "joyería",
        "english": "jewelry store"
    },
    {
        "spanish": "escéptico",
        "english": "skeptic"
    },
    {
        "spanish": "debilidad",
        "english": "weakness"
    },
    {
        "spanish": "secretaría",
        "english": "secretariat"
    },
    {
        "spanish": "escultura",
        "english": "sculpture"
    },
    {
        "spanish": "sectorial",
        "english": "sectoral"
    },
    {
        "spanish": "desarrollo",
        "english": "development"
    },
    {
        "spanish": "reformista",
        "english": "reformist"
    },
    {
        "spanish": "desaseado",
        "english": "untidy"
    },
    {
        "spanish": "preventivo",
        "english": "preventive"
    },
    {
        "spanish": "empolvado",
        "english": "dusty"
    },
    {
        "spanish": "presidente",
        "english": "president"
    },
    {
        "spanish": "dibujante",
        "english": "draftsman"
    },
    {
        "spanish": "pacifista",
        "english": "pacifist"
    },
    {
        "spanish": "desvelarse",
        "english": "to stay awake"
    },
    {
        "spanish": "chapucero",
        "english": "shoddy"
    },
    {
        "spanish": "prisionero",
        "english": "prisoner"
    },
    {
        "spanish": "homólogo",
        "english": "counterpart"
    },
    {
        "spanish": "cerrajero",
        "english": "locksmith"
    },
    {
        "spanish": "homogéneo",
        "english": "homogeneous"
    },
    {
        "spanish": "presentado",
        "english": "presented"
    },
    {
        "spanish": "higiénico",
        "english": "hygienic"
    },
    {
        "spanish": "visionario",
        "english": "visionary"
    },
    {
        "spanish": "celeridad",
        "english": "swiftness"
    },
    {
        "spanish": "hipotético",
        "english": "hypothetical"
    },
    {
        "spanish": "cercanías",
        "english": "vicinity"
    },
    {
        "spanish": "cerradura",
        "english": "lock"
    },
    {
        "spanish": "violinista",
        "english": "violinist"
    },
    {
        "spanish": "empresario",
        "english": "business owner"
    },
    {
        "spanish": "productor",
        "english": "producer"
    },
    {
        "spanish": "desprecio",
        "english": "contempt"
    },
    {
        "spanish": "vehemente",
        "english": "vehement"
    },
    {
        "spanish": "desplegado",
        "english": "unfolded"
    },
    {
        "spanish": "organizado",
        "english": "organized"
    },
    {
        "spanish": "ciudadano",
        "english": "citizen"
    },
    {
        "spanish": "destacado",
        "english": "outstanding"
    },
    {
        "spanish": "imparcial",
        "english": "impartial person"
    },
    {
        "spanish": "dispuesto",
        "english": "willing"
    },
    {
        "spanish": "dramaturgo",
        "english": "playwright"
    },
    {
        "spanish": "piramidal",
        "english": "pyramidal"
    },
    {
        "spanish": "plagiario",
        "english": "plagiarist"
    },
    {
        "spanish": "distintivo",
        "english": "badge"
    },
    {
        "spanish": "distendido",
        "english": "relaxed"
    },
    {
        "spanish": "platónico",
        "english": "platonic"
    },
    {
        "spanish": "embaucado",
        "english": "duped person"
    },
    {
        "spanish": "embelesado",
        "english": "enthralled person"
    },
    {
        "spanish": "capacitado",
        "english": "trained"
    },
    {
        "spanish": "disparejo",
        "english": "uneven"
    },
    {
        "spanish": "disminuido",
        "english": "decreased"
    },
    {
        "spanish": "guía",
        "english": "guide"
    },
    {
        "spanish": "pesimista",
        "english": "pessimist"
    },
    {
        "spanish": "granívoro",
        "english": "granivorous"
    },
    {
        "spanish": "pertinente",
        "english": "pertinent"
    },
    {
        "spanish": "persuasivo",
        "english": "persuasive"
    },
    {
        "spanish": "perforado",
        "english": "perforated"
    },
    {
        "spanish": "editorial",
        "english": "publisher"
    },
    {
        "spanish": "periódico",
        "english": "periodic"
    },
    {
        "spanish": "edificado",
        "english": "built"
    },
    {
        "spanish": "permisivo",
        "english": "permissive"
    },
    {
        "spanish": "edafólogo",
        "english": "soil scientist"
    },
    {
        "spanish": "casualidad",
        "english": "coincidence"
    },
    {
        "spanish": "helado",
        "english": "ice cream"
    },
    {
        "spanish": "parlamento",
        "english": "parliament"
    },
    {
        "spanish": "posmoderno",
        "english": "postmodern"
    },
    {
        "spanish": "paramédico",
        "english": "paramedic"
    },
    {
        "spanish": "empeorado",
        "english": "worsened"
    },
    {
        "spanish": "potencial",
        "english": "potential"
    },
    {
        "spanish": "dirección",
        "english": "address"
    },
    {
        "spanish": "diplomado",
        "english": "certified"
    },
    {
        "spanish": "difundido",
        "english": "spread"
    },
    {
        "spanish": "heladero",
        "english": "ice cream maker"
    },
    {
        "spanish": "vegetativo",
        "english": "vegetative"
    },
    {
        "spanish": "organista",
        "english": "organist"
    },
    {
        "spanish": "indefinido",
        "english": "undefined"
    },
    {
        "spanish": "indicación",
        "english": "indication"
    },
    {
        "spanish": "razonable",
        "english": "reasonable"
    },
    {
        "spanish": "descomunal",
        "english": "huge"
    },
    {
        "spanish": "incógnito",
        "english": "incognito person"
    },
    {
        "spanish": "realizado",
        "english": "realized"
    },
    {
        "spanish": "fatalidad",
        "english": "fatality"
    },
    {
        "spanish": "descuidado",
        "english": "careless"
    },
    {
        "spanish": "incrédulo",
        "english": "incredulous"
    },
    {
        "spanish": "informe",
        "english": "report"
    },
    {
        "spanish": "receptivo",
        "english": "receptive"
    },
    {
        "spanish": "desbordado",
        "english": "overflowing"
    },
    {
        "spanish": "desgastado",
        "english": "worn"
    },
    {
        "spanish": "oferta",
        "english": "offer"
    },
    {
        "spanish": "prolífico",
        "english": "prolific"
    },
    {
        "spanish": "desgracia",
        "english": "misfortune"
    },
    {
        "spanish": "oficiante",
        "english": "officiant"
    },
    {
        "spanish": "deslucido",
        "english": "lackluster"
    },
    {
        "spanish": "obrero",
        "english": "worker"
    },
    {
        "spanish": "despejado",
        "english": "clear"
    },
    {
        "spanish": "despeinado",
        "english": "disheveled"
    },
    {
        "spanish": "codiciado",
        "english": "coveted person"
    },
    {
        "spanish": "desmedido",
        "english": "excessive"
    },
    {
        "spanish": "progresivo",
        "english": "progressive"
    },
    {
        "spanish": "prolongado",
        "english": "prolonged"
    },
    {
        "spanish": "prohibido",
        "english": "prohibited"
    },
    {
        "spanish": "desligado",
        "english": "unbound"
    },
    {
        "spanish": "flemático",
        "english": "phlegmatic"
    },
    {
        "spanish": "habitación",
        "english": "room"
    },
    {
        "spanish": "promoción",
        "english": "promotion"
    },
    {
        "spanish": "escritorio",
        "english": "desk"
    },
    {
        "spanish": "ocupación",
        "english": "occupation"
    },
    {
        "spanish": "operativo",
        "english": "operational"
    },
    {
        "spanish": "estantería",
        "english": "bookshelf"
    },
    {
        "spanish": "hostigado",
        "english": "harassed person"
    },
    {
        "spanish": "lavaplatos",
        "english": "dishwasher"
    },
    {
        "spanish": "lección",
        "english": "lesson"
    },
    {
        "spanish": "escuela",
        "english": "school"
    },
    {
        "spanish": "hablar",
        "english": "to speak"
    },
    {
        "spanish": "enseñar",
        "english": "to teach"
    },
    {
        "spanish": "gritar",
        "english": "to shout"
    },
    {
        "spanish": "enviar",
        "english": "to send"
    },
    {
        "spanish": "llamar",
        "english": "to call"
    },
    {
        "spanish": "evocar",
        "english": "to evoke"
    },
    {
        "spanish": "entrar",
        "english": "to enter"
    },
    {
        "spanish": "falsificar",
        "english": "to falsify"
    },
    {
        "spanish": "gratificar",
        "english": "to gratify"
    },
    {
        "spanish": "espirar",
        "english": "to expire"
    },
    {
        "spanish": "guiar",
        "english": "to guide"
    },
    {
        "spanish": "intentar",
        "english": "to try"
    },
    {
        "spanish": "influir",
        "english": "to influence"
    },
    {
        "spanish": "inmolar",
        "english": "to immolate"
    },
    {
        "spanish": "excluir",
        "english": "to exclude"
    },
    {
        "spanish": "mamá",
        "english": "mom"
    },
    {
        "spanish": "flamear",
        "english": "to flutter"
    },
    {
        "spanish": "lápiz",
        "english": "pencil"
    },
    {
        "spanish": "irradiar",
        "english": "to radiate"
    },
    {
        "spanish": "honrar",
        "english": "to honor"
    },
    {
        "spanish": "goma",
        "english": "eraser"
    },
    {
        "spanish": "gobernar",
        "english": "to govern"
    },
    {
        "spanish": "enmendar",
        "english": "to amend"
    },
    {
        "spanish": "flotar",
        "english": "to float"
    },
    {
        "spanish": "iniciar",
        "english": "to initiate"
    },
    {
        "spanish": "extraer",
        "english": "to extract"
    },
    {
        "spanish": "juzgar",
        "english": "to judge"
    },
    {
        "spanish": "nota",
        "english": "note"
    },
    {
        "spanish": "viudo",
        "english": "widower"
    },
    {
        "spanish": "humillar",
        "english": "to humiliate"
    },
    {
        "spanish": "estacionar",
        "english": "to park"
    },
    {
        "spanish": "esculpir",
        "english": "to sculpt"
    },
    {
        "spanish": "enrollar",
        "english": "to roll up"
    },
    {
        "spanish": "justificar",
        "english": "to justify"
    },
    {
        "spanish": "incluir",
        "english": "to include"
    },
    {
        "spanish": "errar",
        "english": "to err"
    },
    {
        "spanish": "fallar",
        "english": "to fail"
    },
    {
        "spanish": "forjar",
        "english": "to forge"
    },
    {
        "spanish": "entender",
        "english": "to understand"
    },
    {
        "spanish": "establecer",
        "english": "to establish"
    },
    {
        "spanish": "escupir",
        "english": "to spit"
    },
    {
        "spanish": "entonar",
        "english": "to intone"
    },
    {
        "spanish": "lago",
        "english": "lake"
    },
    {
        "spanish": "flojo",
        "english": "loose"
    },
    {
        "spanish": "falaz",
        "english": "false"
    },
    {
        "spanish": "letra",
        "english": "letter (alphabet)"
    },
    {
        "spanish": "feria",
        "english": "fair"
    },
    {
        "spanish": "gafas",
        "english": "glasses"
    },
    {
        "spanish": "frito",
        "english": "fried"
    },
    {
        "spanish": "gato",
        "english": "cat"
    },
    {
        "spanish": "león",
        "english": "lion"
    },
    {
        "spanish": "imán",
        "english": "imam"
    },
    {
        "spanish": "feroz",
        "english": "fierce"
    },
    {
        "spanish": "farsa",
        "english": "farce"
    },
    {
        "spanish": "igual",
        "english": "equal"
    },
    {
        "spanish": "lleno",
        "english": "full"
    },
    {
        "spanish": "largo",
        "english": "long"
    },
    {
        "spanish": "gris",
        "english": "gray"
    },
    {
        "spanish": "espía",
        "english": "spy"
    },
    {
        "spanish": "fijo",
        "english": "fixed"
    },
    {
        "spanish": "lento",
        "english": "slow"
    },
    {
        "spanish": "libre",
        "english": "free"
    },
    {
        "spanish": "mago",
        "english": "magician"
    },
    {
        "spanish": "fuego",
        "english": "fire"
    },
    {
        "spanish": "llano",
        "english": "flat"
    },
    {
        "spanish": "horno",
        "english": "oven"
    },
    {
        "spanish": "maleta",
        "english": "suitcase"
    },
    {
        "spanish": "puerto",
        "english": "port"
    },
    {
        "spanish": "lectura",
        "english": "reading"
    },
    {
        "spanish": "mensaje",
        "english": "message"
    },
    {
        "spanish": "equipaje",
        "english": "luggage"
    },
    {
        "spanish": "reserva",
        "english": "reservation"
    },
    {
        "spanish": "tiempo",
        "english": "time"
    },
    {
        "spanish": "pasado",
        "english": "past"
    },
    {
        "spanish": "moto",
        "english": "motorcycle"
    },
    {
        "spanish": "empático",
        "english": "empathetic person"
    },
    {
        "spanish": "enfoque",
        "english": "focus"
    },
    {
        "spanish": "entereza",
        "english": "integrity"
    },
    {
        "spanish": "enseñanza",
        "english": "teaching"
    },
    {
        "spanish": "manta",
        "english": "blanket"
    },
    {
        "spanish": "enfocado",
        "english": "focused"
    },
    {
        "spanish": "geógrafo",
        "english": "geographer"
    },
    {
        "spanish": "jurado",
        "english": "jury"
    },
    {
        "spanish": "estático",
        "english": "static person"
    },
    {
        "spanish": "impresor",
        "english": "printer"
    },
    {
        "spanish": "erigido",
        "english": "erected"
    },
    {
        "spanish": "estrella",
        "english": "star"
    },
    {
        "spanish": "importe",
        "english": "amount"
    },
    {
        "spanish": "florido",
        "english": "flowery"
    },
    {
        "spanish": "intento",
        "english": "attempt"
    },
    {
        "spanish": "estirado",
        "english": "stretched"
    },
    {
        "spanish": "estimado",
        "english": "esteemed person"
    },
    {
        "spanish": "foráneo",
        "english": "foreign"
    },
    {
        "spanish": "húmedo",
        "english": "humid"
    },
    {
        "spanish": "ilustre",
        "english": "illustrious person"
    },
    {
        "spanish": "esquema",
        "english": "scheme"
    },
    {
        "spanish": "ilegal",
        "english": "illegal person"
    },
    {
        "spanish": "longevo",
        "english": "long-lived"
    },
    {
        "spanish": "longitud",
        "english": "length"
    },
    {
        "spanish": "igualado",
        "english": "equaled"
    },
    {
        "spanish": "fotófilo",
        "english": "photophilic"
    },
    {
        "spanish": "fotófobo",
        "english": "photophobic"
    },
    {
        "spanish": "letrado",
        "english": "literate"
    },
    {
        "spanish": "etéreo",
        "english": "ethereal"
    },
    {
        "spanish": "filósofo",
        "english": "philosopher"
    },
    {
        "spanish": "incierto",
        "english": "uncertain"
    },
    {
        "spanish": "vacaciones",
        "english": "vacation"
    },
    {
        "spanish": "expuesto",
        "english": "exposed"
    },
    {
        "spanish": "infiel",
        "english": "unfaithful"
    },
    {
        "spanish": "exterior",
        "english": "outer"
    },
    {
        "spanish": "limosna",
        "english": "alms"
    },
    {
        "spanish": "ineficaz",
        "english": "ineffective"
    },
    {
        "spanish": "errado",
        "english": "erroneous"
    },
    {
        "spanish": "lipófilo",
        "english": "lipophilic"
    },
    {
        "spanish": "lipófobo",
        "english": "lipophobic"
    },
    {
        "spanish": "ligero",
        "english": "light"
    },
    {
        "spanish": "ingreso",
        "english": "income"
    },
    {
        "spanish": "inmóvil",
        "english": "immobile"
    },
    {
        "spanish": "litoral",
        "english": "coastal"
    },
    {
        "spanish": "inculto",
        "english": "uncultured"
    },
    {
        "spanish": "inodoro",
        "english": "odorless"
    },
    {
        "spanish": "escritor",
        "english": "writer"
    },
    {
        "spanish": "inconexo",
        "english": "unconnected"
    },
    {
        "spanish": "llanura",
        "english": "plain"
    },
    {
        "spanish": "vacacional",
        "english": "vacation"
    },
    {
        "spanish": "invernal",
        "english": "winter"
    },
    {
        "spanish": "iletrado",
        "english": "illiterate"
    },
    {
        "spanish": "esguince",
        "english": "sprain"
    },
    {
        "spanish": "esfera",
        "english": "sphere"
    },
    {
        "spanish": "granjero",
        "english": "farmer"
    },
    {
        "spanish": "heredero",
        "english": "heir"
    },
    {
        "spanish": "fundidor",
        "english": "foundryman"
    },
    {
        "spanish": "enérgico",
        "english": "energetic person"
    },
    {
        "spanish": "joyero",
        "english": "jeweler"
    },
    {
        "spanish": "escaso",
        "english": "scarce"
    },
    {
        "spanish": "ático",
        "english": "attic"
    },
    {
        "spanish": "luxación",
        "english": "dislocation"
    },
    {
        "spanish": "esférico",
        "english": "spherical"
    },
    {
        "spanish": "ganadero",
        "english": "rancher"
    },
    {
        "spanish": "lúcido",
        "english": "lucid person"
    },
    {
        "spanish": "guantes",
        "english": "gloves"
    },
    {
        "spanish": "maderero",
        "english": "timber"
    },
    {
        "spanish": "esfuerzo",
        "english": "effort"
    },
    {
        "spanish": "herencia",
        "english": "inheritance"
    },
    {
        "spanish": "jocoso",
        "english": "jocular"
    },
    {
        "spanish": "isleño",
        "english": "islander"
    },
    {
        "spanish": "honrado",
        "english": "honorable person"
    },
    {
        "spanish": "fraile",
        "english": "friar"
    },
    {
        "spanish": "escamoso",
        "english": "scaly"
    },
    {
        "spanish": "lujoso",
        "english": "luxurious"
    },
    {
        "spanish": "invierno",
        "english": "winter"
    },
    {
        "spanish": "gestor",
        "english": "manager"
    },
    {
        "spanish": "vino",
        "english": "wine"
    },
    {
        "spanish": "frontera",
        "english": "border"
    },
    {
        "spanish": "horadado",
        "english": "bored"
    },
    {
        "spanish": "gobierno",
        "english": "government"
    },
    {
        "spanish": "honradez",
        "english": "honesty"
    },
    {
        "spanish": "español",
        "english": "Spanish"
    },
    {
        "spanish": "frutal",
        "english": "fruit-bearing"
    },
    {
        "spanish": "escarnio",
        "english": "derision"
    },
    {
        "spanish": "todo",
        "english": "all"
    },
    {
        "spanish": "ingeniero",
        "english": "engineer"
    },
    {
        "spanish": "toda",
        "english": "all"
    },
    {
        "spanish": "excedente",
        "english": "excess"
    },
    {
        "spanish": "innombrado",
        "english": "unnamed"
    },
    {
        "spanish": "jerárquico",
        "english": "hierarchical"
    },
    {
        "spanish": "tío",
        "english": "uncle"
    },
    {
        "spanish": "estancado",
        "english": "stagnant"
    },
    {
        "spanish": "esmaltador",
        "english": "enameler"
    },
    {
        "spanish": "intachable",
        "english": "impeccable"
    },
    {
        "spanish": "etnógrafo",
        "english": "ethnographer"
    },
    {
        "spanish": "insensible",
        "english": "insensitive person"
    },
    {
        "spanish": "mismo",
        "english": "same"
    },
    {
        "spanish": "esponjoso",
        "english": "spongy"
    },
    {
        "spanish": "enfatizado",
        "english": "emphasized"
    },
    {
        "spanish": "jerarquía",
        "english": "hierarchy"
    },
    {
        "spanish": "entrenado",
        "english": "trained"
    },
    {
        "spanish": "forrajero",
        "english": "fodder"
    },
    {
        "spanish": "fotografía",
        "english": "photography"
    },
    {
        "spanish": "fotógrafo",
        "english": "photographer"
    },
    {
        "spanish": "idolatrado",
        "english": "idolized person"
    },
    {
        "spanish": "ictiólogo",
        "english": "ichthyologist"
    },
    {
        "spanish": "vez",
        "english": "time (occurrence)"
    },
    {
        "spanish": "primo",
        "english": "cousin"
    },
    {
        "spanish": "horroroso",
        "english": "horrific"
    },
    {
        "spanish": "vigía",
        "english": "lookout"
    },
    {
        "spanish": "fructífero",
        "english": "fruitful"
    },
    {
        "spanish": "hidrólogo",
        "english": "hydrologist"
    },
    {
        "spanish": "hidrófobo",
        "english": "hydrophobic"
    },
    {
        "spanish": "padre",
        "english": "father"
    },
    {
        "spanish": "hacendado",
        "english": "landowner"
    },
    {
        "spanish": "habilitado",
        "english": "enabled"
    },
    {
        "spanish": "galerista",
        "english": "gallery owner"
    },
    {
        "spanish": "plazo",
        "english": "term"
    },
    {
        "spanish": "época",
        "english": "era"
    },
    {
        "spanish": "grasiento",
        "english": "greasy"
    },
    {
        "spanish": "único",
        "english": "only"
    },
    {
        "spanish": "fortaleza",
        "english": "fortress"
    },
    {
        "spanish": "formulario",
        "english": "form"
    },
    {
        "spanish": "inesperado",
        "english": "unexpected"
    },
    {
        "spanish": "extranjero",
        "english": "foreigner"
    },
    {
        "spanish": "nieto",
        "english": "grandson"
    },
    {
        "spanish": "indudable",
        "english": "undoubted"
    },
    {
        "spanish": "fagotista",
        "english": "bassoonist"
    },
    {
        "spanish": "encubierto",
        "english": "covert"
    },
    {
        "spanish": "noche",
        "english": "night"
    },
    {
        "spanish": "rato",
        "english": "while"
    },
    {
        "spanish": "indefenso",
        "english": "defenseless person"
    },
    {
        "spanish": "filántropo",
        "english": "philanthropist"
    },
    {
        "spanish": "imprevisor",
        "english": "improvident"
    },
    {
        "spanish": "impresora",
        "english": "printer"
    },
    {
        "spanish": "prole",
        "english": "offspring"
    },
    {
        "spanish": "forastero",
        "english": "outsider"
    },
    {
        "spanish": "linfático",
        "english": "lymphatic"
    },
    {
        "spanish": "envidiado",
        "english": "envied person"
    },
    {
        "spanish": "entregado",
        "english": "delivered"
    },
    {
        "spanish": "tarde",
        "english": "afternoon"
    },
    {
        "spanish": "mes",
        "english": "month"
    },
    {
        "spanish": "lavandería",
        "english": "laundry"
    },
    {
        "spanish": "siglo",
        "english": "century"
    },
    {
        "spanish": "mayor",
        "english": "older"
    },
    {
        "spanish": "mejor",
        "english": "better"
    },
    {
        "spanish": "tal",
        "english": "such"
    },
    {
        "spanish": "entrenador",
        "english": "trainer"
    },
    {
        "spanish": "reducir",
        "english": "to reduce"
    },
    {
        "spanish": "venerar",
        "english": "to venerate"
    },
    {
        "spanish": "nebulizar",
        "english": "to nebulize"
    },
    {
        "spanish": "refinar",
        "english": "to refine"
    },
    {
        "spanish": "plantar",
        "english": "to plant"
    },
    {
        "spanish": "guardar",
        "english": "to keep"
    },
    {
        "spanish": "malcriar",
        "english": "to spoil"
    },
    {
        "spanish": "maldecir",
        "english": "to curse"
    },
    {
        "spanish": "producir",
        "english": "to produce"
    },
    {
        "spanish": "extirpar",
        "english": "to remove"
    },
    {
        "spanish": "recriminar",
        "english": "to recriminate"
    },
    {
        "spanish": "recomponer",
        "english": "to recompose"
    },
    {
        "spanish": "enterar",
        "english": "to inform"
    },
    {
        "spanish": "extrañar",
        "english": "to miss"
    },
    {
        "spanish": "lograr",
        "english": "to achieve"
    },
    {
        "spanish": "maximizar",
        "english": "to maximize"
    },
    {
        "spanish": "nevera",
        "english": "refrigerator"
    },
    {
        "spanish": "optimizar",
        "english": "to optimize"
    },
    {
        "spanish": "erosionar",
        "english": "to erode"
    },
    {
        "spanish": "madrugar",
        "english": "to get up early"
    },
    {
        "spanish": "peatón",
        "english": "pedestrian"
    },
    {
        "spanish": "reintegrar",
        "english": "to reintegrate"
    },
    {
        "spanish": "licuar",
        "english": "to liquefy"
    },
    {
        "spanish": "suspender",
        "english": "to suspend"
    },
    {
        "spanish": "luchar",
        "english": "to fight"
    },
    {
        "spanish": "simbolizar",
        "english": "to symbolize"
    },
    {
        "spanish": "meditar",
        "english": "to meditate"
    },
    {
        "spanish": "manipular",
        "english": "to manipulate"
    },
    {
        "spanish": "practicar",
        "english": "to practice"
    },
    {
        "spanish": "ensayar",
        "english": "to rehearse"
    },
    {
        "spanish": "fracasar",
        "english": "to fail"
    },
    {
        "spanish": "mutilar",
        "english": "to mutilate"
    },
    {
        "spanish": "enfadar",
        "english": "to anger"
    },
    {
        "spanish": "exigir",
        "english": "to demand"
    },
    {
        "spanish": "enderezar",
        "english": "to straighten"
    },
    {
        "spanish": "simular",
        "english": "to simulate"
    },
    {
        "spanish": "endulzar",
        "english": "to sweeten"
    },
    {
        "spanish": "refrescar",
        "english": "to refresh"
    },
    {
        "spanish": "panadero",
        "english": "baker"
    },
    {
        "spanish": "refutar",
        "english": "to refute"
    },
    {
        "spanish": "limpiar",
        "english": "to clean"
    },
    {
        "spanish": "regenerar",
        "english": "to regenerate"
    },
    {
        "spanish": "ensuciar",
        "english": "to dirty"
    },
    {
        "spanish": "proclamar",
        "english": "to proclaim"
    },
    {
        "spanish": "hallar",
        "english": "to find"
    },
    {
        "spanish": "liderar",
        "english": "to lead"
    },
    {
        "spanish": "sublimar",
        "english": "to sublimate"
    },
    {
        "spanish": "halagar",
        "english": "to flatter"
    },
    {
        "spanish": "impedir",
        "english": "to prevent"
    },
    {
        "spanish": "indultar",
        "english": "to pardon"
    },
    {
        "spanish": "proponer",
        "english": "to propose"
    },
    {
        "spanish": "numerar",
        "english": "to number"
    },
    {
        "spanish": "gustar",
        "english": "to like"
    },
    {
        "spanish": "pulverizar",
        "english": "to pulverize"
    },
    {
        "spanish": "vaporizar",
        "english": "to vaporize"
    },
    {
        "spanish": "propagar",
        "english": "to propagate"
    },
    {
        "spanish": "lamer",
        "english": "to lick"
    },
    {
        "spanish": "festejar",
        "english": "to celebrate"
    },
    {
        "spanish": "encoger",
        "english": "to shrink"
    },
    {
        "spanish": "martirizar",
        "english": "to martyrize"
    },
    {
        "spanish": "inclinar",
        "english": "to tilt"
    },
    {
        "spanish": "sustituir",
        "english": "to substitute"
    },
    {
        "spanish": "enchufar",
        "english": "to plug in"
    },
    {
        "spanish": "participar",
        "english": "to participate"
    },
    {
        "spanish": "haber",
        "english": "to have (auxiliary)"
    },
    {
        "spanish": "imprimir",
        "english": "to print"
    },
    {
        "spanish": "utilizar",
        "english": "to utilize"
    },
    {
        "spanish": "validar",
        "english": "to validate"
    },
    {
        "spanish": "llegar",
        "english": "to arrive"
    },
    {
        "spanish": "marinar",
        "english": "to marinate"
    },
    {
        "spanish": "observar",
        "english": "to observe"
    },
    {
        "spanish": "encender",
        "english": "to turn on"
    },
    {
        "spanish": "llenar",
        "english": "to fill"
    },
    {
        "spanish": "obstruir",
        "english": "to obstruct"
    },
    {
        "spanish": "habilitar",
        "english": "to enable"
    },
    {
        "spanish": "encantar",
        "english": "to love (things)"
    },
    {
        "spanish": "fingir",
        "english": "to pretend"
    },
    {
        "spanish": "ocasionar",
        "english": "to occasion"
    },
    {
        "spanish": "encandilar",
        "english": "to dazzle"
    },
    {
        "spanish": "promover",
        "english": "to promote"
    },
    {
        "spanish": "llover",
        "english": "to rain"
    },
    {
        "spanish": "fortalecer",
        "english": "to fortify"
    },
    {
        "spanish": "importar",
        "english": "to matter"
    },
    {
        "spanish": "postponer",
        "english": "to postpone"
    },
    {
        "spanish": "fabricar",
        "english": "to manufacture"
    },
    {
        "spanish": "uniformar",
        "english": "to uniform"
    },
    {
        "spanish": "encubrir",
        "english": "to cover up"
    },
    {
        "spanish": "lisonjear",
        "english": "to flatter"
    },
    {
        "spanish": "operar",
        "english": "to operate"
    },
    {
        "spanish": "posponer",
        "english": "to postpone"
    },
    {
        "spanish": "programar",
        "english": "to program"
    },
    {
        "spanish": "progresar",
        "english": "to progress"
    },
    {
        "spanish": "normalizar",
        "english": "to normalize"
    },
    {
        "spanish": "malnutrir",
        "english": "to malnourish"
    },
    {
        "spanish": "taxista",
        "english": "taxi driver"
    },
    {
        "spanish": "prolongar",
        "english": "to prolong"
    }
];
