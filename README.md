# Plan de Table — Ignacio & Alice

## Mise à jour des invités (la seule chose à éditer : `data.js`)

Ouvrir `data.js`. Tout le reste de l'application est piloté par ce fichier.

### Ajouter / modifier un invité

Dans le tableau `guests` d'une table, remplacer une chaîne vide `""` par un nom :

```js
{
  id: 5,
  x: 400, y: 360,
  guests: [
    "Nicolas Moreno",   // place 1 (haut)
    "Marie Dupont",     // place 2 (sens horaire)
    "",                 // place 3 (vide)
    ...
  ]
}
```

L'ordre dans le tableau correspond à l'ordre des places autour de la table, en sens horaire à partir du haut.

### Changer la taille d'une table

La taille s'adapte automatiquement au nombre d'éléments dans `guests`. Pour une table de 8 personnes, mettre 8 entrées. Pour une table de 12, mettre 12 entrées.

### Déplacer une table sur le plan

Modifier `x` et `y`. Les coordonnées sont relatives ; l'app recadre automatiquement le plan pour englober toutes les tables de la salle.

### Renommer une table

Ajouter (ou modifier) la clé `name` :

```js
{
  id: 1,
  name: "Table d'honneur",
  ...
}
```

Sans `name`, la table affichera "1", "2", etc.

---

## Déploiement

Le dossier complet doit être placé à la racine du repo `wedding-seating` (créer le repo s'il n'existe pas) :

```
wedding-seating/
├── index.html
├── data.js
└── README.md
```

Activer GitHub Pages depuis les paramètres du repo (branch `main`, dossier `/`).

L'URL finale : `https://immorenov.github.io/wedding-seating/`

Le QR code généré pointe déjà vers cette URL.

---

## Mise à jour en production

Modifier `data.js` localement (ou directement sur GitHub.com), commit, push. Le site est mis à jour en quelques secondes. Les invités voient la dernière version au prochain rechargement.

**Astuce dernière minute :** GitHub permet d'éditer `data.js` directement depuis le navigateur (icône crayon sur la page du fichier). Pratique le jour même si un changement est nécessaire.
