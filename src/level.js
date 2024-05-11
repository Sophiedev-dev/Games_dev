import React from 'react';
import { Niveau } from './Niveau';
//Calculer les tentatives en fonction du niveau
export function calculerTentatives(debut, fin, niveau) {
    let intervalle = fin - debut + 1;
    let tentatives = Math.log2(intervalle);

    switch(niveau) {
        case Niveau.EASY:
            tentatives = Math.ceil(tentatives) + 1;
            break;
        case Niveau.VERY_HARD:
            tentatives = Math.round(tentatives / 2);
            break;
        case Niveau.HARD:
            let tentativesFacile = Math.ceil(tentatives) + 1;
            let tentativesTresDifficile = Math.round(tentatives / 2);
            tentatives = Math.round((tentativesFacile + tentativesTresDifficile) / 2);
            break;
        default:
            tentatives = Math.ceil(tentatives);
    }

    return tentatives;
}
//Composant pour afficher le composant du nombre d'essait
class GuessTheNumber extends React.Component {
    render() {
        let debut = 1;
        let fin = 100;
        let niveau = Niveau.HARD; // Changez le niveau ici

        let tentatives = calculerTentatives(debut, fin, niveau);

        return (
            <div>
                <h1>Guess The Number</h1>
                <p>Nombre de tentatives pour le niveau {niveau}: {tentatives}</p>
            </div>
        );
    }
}

export default GuessTheNumber;