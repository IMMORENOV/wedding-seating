/* ============================================================
 *   PLAN DE TABLE — IGNACIO & ALICE
 *   6 Juin 2026 — Château de Santeny
 *
 *   POUR METTRE À JOUR :
 *   - Modifier les noms dans les tableaux "guests" ci-dessous.
 *   - La taille de chaque table s'adapte automatiquement
 *     au nombre de noms.
 *   - Pour déplacer une table sur le plan : ajuster x, y.
 *   - Pour renommer une table : ajouter "name": "Mon nom".
 * ============================================================ */

const WEDDING_DATA = {
  couple: "Ignacio & Alice",
  date: "6 Juin 2026",
  venue: "Château de Santeny",

  rooms: [
    /* ============================================================
     *  SALON VICTORIA — Tables 1 à 8
     *  (côté terrasse, partie nord du château)
     * ============================================================ */
    {
      id: "salon-victoria",
      name: "Salon Victoria",
      tables: [
        {
          id: 1,
          name: "Table d'honneur",
          x: 400, y: 90,
          guests: [
            "Alice Le Sciellour",
            "Ignacio Moreno",
            "Elias Selman",
            "Fernanda Moreno",
            "Angel Martin",
            "Louise Guerin",
            "Agathe Lionnet",
            "Corentin Theis",
            "Yacine Kretz",
            "Alexandra Hepner"
          ]
        },
        {
          id: 2,
          x: 640, y: 200,
          guests: [
            "Dominique Hamelet",
            "Francis Le Chat",
            "Isabelle Mathé",
            "Rozenn Hamelet",
            "Mathieu Guerin",
            "Betty Guerin",
            "Didier Guerin",
            "Pascal Madranges",
            "Catherine Madranges"
          ]
        },
        {
          id: 3,
          x: 160, y: 200,
          guests: [
            "Antoine Guillodo",
            "Laurence Lepoittevin",
            "Antoine Bohuon",
            "Marine Guillodo",
            "Marie-Paule Guillodo",
            "Yannick Guillodo",
            "Virginie Van Vooren",
            "Eric Le Sciellour",
            "Arthur Le Sciellour",
            "Manon Magnier-Stéphan"
          ]
        },
        {
          id: 4,
          x: 100, y: 360,
          guests: [
            "Susana Donald",
            "Rolando Nuñez",
            "Lorena Poblete",
            "Sergio Lobos",
            "Manuel Moreno",
            "Tere Vergara",
            "Cecilia Poblete",
            "Carlos Vargas S"
          ]
        },
        {
          id: 5,
          x: 400, y: 360,
          guests: [
            "Nico Moreno",
            "Paz Moreno",
            "Andrea Moreno",
            "Peter Caligari",
            "Constanza Caligari",
            "Theo Parada",
            "Coke Parada",
            "Carlos Vargas P",
            "Fernanda Labarca",
            "Sofia Blanco"
          ]
        },
        {
          id: 6,
          x: 700, y: 360,
          guests: [
            "Nicolas Khalife",
            "Sabrina Connan",
            "Olivier Connan",
            "Cédric Vern",
            "Raphaëlle Lomas",
            "Ronald Lomas",
            "Michel Pierlovisi",
            "Christiane Pierlovisi",
            "Julie Troja",
            "Stéphanie Hamet"
          ]
        },
        {
          id: 7,
          x: 290, y: 530,
          guests: [
            "Augustin Rozes",
            "Saliou Dalein",
            "Emma Gloaguen",
            "Amani Chaaibi",
            "Marie Guéveneux",
            "Candice Lalande",
            "Théo Carrasco",
            "Alexandrine Tafani"
          ]
        },
        {
          id: 8,
          x: 510, y: 530,
          guests: [
            "Pauline Espinoza",
            "Julie Serret",
            "Finn Weisinger",
            "Terence Mahier",
            "Kata Nyitrai",
            "Lucia Sirekanian",
            "Yus Onurlu",
            "Sebastian Rojas",
            "Maria Ignacia Orellana",
            "Hernan Lazcano"
          ]
        }
      ]
    },

    /* ============================================================
     *  SALON JOSÉPHINE — Tables 9 à 14
     *  (côté hall d'entrée, partie sud du château)
     * ============================================================ */
    {
      id: "salon-josephine",
      name: "Salon Joséphine",
      tables: [
        {
          id: 9,
          x: 290, y: 110,
          guests: [
            "Charles Hebert",
            "Mazen Hamdan",
            "Avantika Gupta",
            "Sarthak Raisurana",
            "Tiana Zivkovic",
            "Jonny Preuss",
            "Angelina Salfellner",
            "Tobias Salfellner",
            "Val Panadero"
          ]
        },
        {
          id: 10,
          x: 510, y: 110,
          guests: [
            "Jeanne Madranges",
            "Elie Madranges",
            "Clara Fort",
            "Quentin Le Chat",
            "Elise Guillodo",
            "Baptiste Hourmant",
            "Lucie Madranges",
            "Patxi Bridier",
            "Julia Madranges",
            "François Madranges"
          ]
        },
        {
          id: 11,
          x: 290, y: 290,
          guests: [
            "Pilar Urquiza",
            "Barbara Olave",
            "Ignacio Bruna",
            "Juan Andres Roa",
            "Francisco Sepulveda",
            "Carla Almeida",
            "Jose Tomas Perez",
            "Florencia Murillo",
            "Nicolas Valdés",
            "Rodrigo Irarrazaval"
          ]
        },
        {
          id: 12,
          x: 510, y: 290,
          guests: [
            "Olesia Khrapunova",
            "Emma Caffrey",
            "Bastien Chapuzet",
            "Felix Muth",
            "João Pedro Rocha",
            "Isabella Camargo",
            "Héloïse Labrousse",
            "Théo Viala",
            "Giancarlo Chapoutier"
          ]
        },
        {
          id: 13,
          x: 290, y: 470,
          guests: [
            "Francisco Garri",
            "Nicolas Ortega",
            "Enrique Quiroz",
            "Javier Diaz",
            "Mijal Ehrenfeld",
            "Valeria Vignati",
            "Rodrigo Troncoso",
            "Rafael Zamorano",
            "Antonella Innocenti"
          ]
        },
        {
          id: 14,
          x: 510, y: 470,
          guests: [
            "Francisca Troncoso",
            "Ilanit Hirnheimer",
            "Daniel Fuchs",
            "Gianfranco Grillo",
            "Daniel Rucik",
            "Aline Kiser",
            "Tomas Niedman",
            "Tomas Muñoz",
            "Jose Maria De La Torre"
          ]
        }
      ]
    }
  ]
};
