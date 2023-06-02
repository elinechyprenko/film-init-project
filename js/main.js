var database = firebase.database();
var ref = database.ref('films');

// Добавление первого фильма
var firstFilmRef = ref.push();
firstFilmRef.set({
  title: "To musi być miłość",
  description: "Gdy matka postanawia uciec z miasta i w samotności przemyśleć jeszcze raz decyzję o ślubie, niespodziewanie dołączają do niej córki.",
  rezyseria: "Michał Rogalski",
  scenariusz: "Agnieszka Pilaszewska",
  gatunek: "Komedia",
  produkcja: "Polska",
  premiere: "5 listopada 2021 (Światowa i polska premiera kinowa)",
  price: {
    original: "100,00 zł",
    discounted: "80,00 zł"
  },
  sku: "AZ456",
  category: "komedie",
  tags: ["milość", "filmy", "new"]
});

// Добавление второго фильма
var secondFilmRef = ref.push();
secondFilmRef.set({
  title: "Forrest Gump",
  description: "Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.",
  rezyseria: "Robert Zemeckis",
  scenariusz: "Eric Roth",
  gatunek: "Komedia",
  produkcja: "USA",
  premiere: "23 czerwca 1994 (Światowa) 4 listopada 1994 (Polska premiera kinowa)",
  price: {
    original: "70,00 zł"
  },
  sku: "AS674",
  category: "komedie",
  tags: ["forest", "filmy", "onlyhere"]
});
var thirdFilmRef = ref.push();
thirdFilmRef.set({
  title: "Joe Black",
  description: "Śmierć pod pseudonimem Joe Black zjawia się po Williama. Nieoczekiwanie zakochuje się w jego córce.",
  rezyseria: "Martin Brest",
  scenariusz: "Ron Osborn, Jeff Reno",
  gatunek: "Fantasy",
  produkcja: "USA",
  price: {
    original: "70,00 zł",
    discounted: "65,00 zł"
  },
  sku: "AA673",
  category: "fantasy",
  tags: ["fantasy", "filmy", "smok"]
});
var thirdFilmRef = ref.push();
thirdFilmRef.set({
  title: "Jak wytresować smoka 2",
  description: "Pięć lat po zjednoczeniu rasy smoków oraz ludzi Czkawka i Szczerbatek stają do obrony wyspy Berk przed niebezpiecznymi dzikimi bestiami, a także tajemniczym Smoczym Jeźdźcem.",
  rezyseria: "Dean DeBlois",
  scenariusz: "Dean DeBlois",
  gatunek: "Fantasy",
  produkcja: "USA",
  price: {
    original: "50,00 zł"
  },
  sku: "AK124",
  category: "fantasy",
  tags: ["fantasy", "miłość", "joe"]
});
var fifthFilmRef = ref.push();
thirdFilmRef.set({
  title: "Avatar",
  description: "Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc.",
  rezyseria: "James Cameron",
  scenariusz: "James Cameron",
  gatunek: "Przygoda",
  produkcja: "USA, Wielka Brytania",
  price: {
    original: "130,00 zł",
    discounted: "120,00 zł"
  },
  sku: "AN651",
  category: "przygoda",
  tags: ["avatar", "miłość", "new"]
});
var sixthFilmRef = ref.push();
thirdFilmRef.set({
  title: "Forsage",
  description: "Dziesiąty film sagi „Szybcy i wściekli” rozpoczyna ostatni rozdział jednej z najbardziej popularnych globalnych franczyz, która trwa już trzecią dekadę i ma niesłabnącą popularność. W ciągu wielu misji i wbrew przeciwnościom losu Dom Toretto (Vin Diesel) i jego rodzina przechytrzyli i prześcignęli każdego wroga na swojej drodze. Teraz muszą zmierzyć się z najgroźniejszym przeciwnikiem, z jakim kiedykolwiek mieli do czynienia.",
  rezyseria: "Louis Leterrier",
  scenariusz: "Dan Mazeau, Justin Lin",
  gatunek: "Przygoda",
  produkcja: "USA",
  price: {
    original: "150,00 zł",
    discounted: "135,00 zł"
  },
  sku: "AN343",
  category: "przygoda",
  tags: ["przygoda", "rodzina", "forsage"]
});