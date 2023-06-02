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