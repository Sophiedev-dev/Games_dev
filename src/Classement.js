import React, { useState, useEffect } from 'react';

const Classement = () => {
  const [joueurs, setJoueurs] = useState([]);

  useEffect(() => {
    let joueursArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      joueursArray.push(value);
    }
    // Trier les joueurs par score en ordre décroissant
    joueursArray.sort((a, b) => b.score - a.score);
    setJoueurs(joueursArray);
  }, []);

  return (
    <div>
      <h1>Classement des joueurs</h1>
      <table>
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Difficulté</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {joueurs.map((joueur, index) => (
            <tr key={index}>
              <td>{joueur.name}</td>
              <td>{joueur.difficulti}</td>
              <td>{joueur.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classement;
