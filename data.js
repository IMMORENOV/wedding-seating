/* ============================================================
 *   PLAN DE TABLE — DONNÉES DE TEST
 *   Noms générés pour tester la plateforme.
 *   À remplacer par les vrais noms le moment venu.
 *
 *   STRUCTURE :
 *
 *   rooms : tableau de salles
 *     - id    : identifiant unique
 *     - name  : nom affiché de la salle
 *     - tables : tableau de tables
 *         - id      : numéro de la table
 *         - name    : (optionnel) nom personnalisé, sinon "Table N"
 *         - x, y    : position sur le plan (chiffres relatifs)
 *         - guests  : tableau de noms (l'ordre = sens horaire à partir
 *                     du haut). Pour une chaise vide, mettez "".
 *
 *   La taille de la table s'adapte automatiquement au nombre d'invités.
 * ============================================================ */

const WEDDING_DATA = {
  couple: "Ignacio & Alice",
  date: "6 Juin 2026",
  venue: "Château de Santeny",

  rooms: [
    /* ============================================================
     *  SALLE 1 — Tables 1 à 8
     * ============================================================ */
    {
      id: "salle-1",
      name: "Salle 1",
      tables: [
        {
          id: 1,
          name: "Table d'honneur",
          x: 400, y: 90,
          guests: [
            "Ignacio Moreno",
            "Alice Le Sciellour",
            "Carmen Moreno",
            "Patricio Moreno",
            "Sylvie Le Sciellour",
            "Bernard Le Sciellour",
            "Camille Le Sciellour",
            "Sofía Moreno",
            "Diego Moreno",
            "Hélène Le Sciellour"
          ]
        },
        {
          id: 2,
          x: 640, y: 200,
          guests: [
            "Lucia Sirekanian",
            "Tomás Vargas",
            "Isabella Rojas",
            "Felipe Castro",
            "Antonia Silva",
            "Matías Pérez",
            "Valentina Ruiz",
            "Sebastián Núñez",
            "Fernanda López",
            "Joaquín Herrera"
          ]
        },
        {
          id: 3,
          x: 160, y: 200,
          guests: [
            "Emmanuel Dubois",
            "Camille Bernard",
            "Pierre Lefèvre",
            "Sophie Mercier",
            "Antoine Roux",
            "Julie Garnier",
            "Maxime Faure",
            "Laura Caron"
          ]
        },
        {
          id: 4,
          x: 100, y: 360,
          guests: [
            "Nicolas Moreno",
            "Marie-Claire Dupont",
            "Hugo Lambert",
            "Élise Marchand",
            "Romain Bertrand",
            "Charlotte Vidal",
            "Vincent Aubry",
            "Léa Renaud",
            "Adrien Morel",
            "Anaïs Girard"
          ]
        },
        {
          id: 5,
          x: 400, y: 360,
          guests: [
            "Nicolas Moreno",
            "Catalina Fuentes",
            "Renato Salinas",
            "Florencia Tapia",
            "Cristóbal Reyes",
            "Javiera Olivares",
            "Benjamín Soto",
            "Camila Espinoza",
            "Maximiliano Bravo",
            "Constanza Muñoz",
            "Vicente Carrasco",
            "Macarena Rivera"
          ]
        },
        {
          id: 6,
          x: 700, y: 360,
          guests: [
            "Damien Chevalier",
            "Aurélie Petit",
            "Thibault Gauthier",
            "Marine Leclerc",
            "Olivier Robin",
            "Caroline Brun",
            "Julien Picard",
            "Mathilde Henry",
            "Sébastien Marty",
            "Élodie Vincent"
          ]
        },
        {
          id: 7,
          x: 290, y: 530,
          guests: [
            "Lucas Fontaine",
            "Manon Rivière",
            "Hugo Berger",
            "Inès Charpentier",
            "Théo Boucher",
            "Emma Lacroix",
            "Nathan Rousseau",
            "Chloé Arnaud",
            "Arthur Mathieu",
            "Léna Paris"
          ]
        },
        {
          id: 8,
          x: 510, y: 530,
          guests: [
            "Diego Fernández",
            "Sara Castillo",
            "Andrés Bravo",
            "Paula Mendoza",
            "Rodrigo Sandoval",
            "Camila Vergara",
            "Alejandro Toro",
            "Florencia Pino"
          ]
        }
      ]
    },

    /* ============================================================
     *  SALLE 2 — Tables 9 à 14
     * ============================================================ */
    {
      id: "salle-2",
      name: "Salle 2",
      tables: [
        {
          id: 9,
          x: 290, y: 110,
          guests: [
            "Cécile Moreau",
            "Romain Lemoine",
            "Aurore Blanchard",
            "Florent Daudet",
            "Pauline Gendre",
            "Mathieu Roussel",
            "Clémence Tessier",
            "Vincent Maurel",
            "Alice Bouvier",
            "Lucas Verdier"
          ]
        },
        {
          id: 10,
          x: 510, y: 110,
          guests: [
            "Ignacio Vásquez",
            "Daniela Aguilar",
            "Cristián Toro",
            "Macarena Lagos",
            "Pablo Cortés",
            "Trinidad Mora",
            "Esteban Pizarro",
            "Constanza Vidal",
            "Felipe Salgado",
            "Almendra Reyes"
          ]
        },
        {
          id: 11,
          x: 290, y: 290,
          guests: [
            "Esteban Moreno",
            "Luis Vásquez",
            "Pedro Sirekanian",
            "Sandra Le Sciellour",
            "Carla Moreno-Silva",
            "Diego Sirekanian",
            "Lucía Vásquez",
            "Camilo Moreno",
            "Carolina Sirekanian",
            "Andrés Le Sciellour",
            "Lila Le Sciellour",
            "Marc Le Sciellour"
          ]
        },
        {
          id: 12,
          x: 510, y: 290,
          guests: [
            "Florence Larue",
            "Sébastien Pierre",
            "Aurore Lefebvre",
            "Damien Olivier",
            "Mélanie Carron",
            "Quentin Dumas",
            "Sarah Lecomte",
            "Antoine Royer",
            "Émilie Marchand",
            "Benoît Lefranc"
          ]
        },
        {
          id: 13,
          x: 290, y: 470,
          guests: [
            "Yann Couture",
            "Béatrice Sauvage",
            "Thomas Lebrun",
            "Gabrielle Devaux",
            "Adrien Pelletier",
            "Sophie Béranger",
            "Maxence Coulon",
            "Lina Beaumont"
          ]
        },
        {
          id: 14,
          x: 510, y: 470,
          guests: [
            "Alexandre Roy",
            "Coralie Vasseur",
            "Damien Joly",
            "Eva Cousin",
            "François Massé",
            "Gaëlle Bouquet",
            "Henri Dauphin",
            "Isabelle Lapierre",
            "Jérôme Antoine",
            "Karine Renaud"
          ]
        }
      ]
    }
  ]
};
