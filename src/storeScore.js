export function stockerJoueurs(name , difficulti,password){

    localStorage.setItem('player', JSON.stringify({speudo: name, level: difficulti, mdp: password, score: null}));
}


export function lireJoueurs() {
  // Récupérer la chaîne de caractères JSON du localStorage
  const joueursJSON = localStorage.getItem('joueurs');

  // Convertir la chaîne de caractères JSON en tableau d'objets JavaScript
  const joueurs = JSON.parse(joueursJSON);

  return joueurs;
}

export function trouverJoueur(pseudo) {
  // Récupérer la chaîne de caractères JSON du localStorage
  const joueursJSON = localStorage.getItem('player');

  // Convertir la chaîne de caractères JSON en tableau d'objets JavaScript
  const joueurs = JSON.parse(joueursJSON);

  // Trouver le joueur avec le pseudo spécifique
  const joueur = joueurs.find(joueur => joueur.pseudo === pseudo);

  return joueur;
}


export function deletePlayer(name){
    localStorage.removeItem(name);
}

export function recupererJoueur(pseudo) {
  // Récupérer la chaîne de caractères JSON du localStorage
  const joueurJSON = localStorage.getItem(pseudo);

  // Convertir la chaîne de caractères JSON en objet JavaScript
  const joueur = JSON.parse(joueurJSON);

  return joueur;
}
