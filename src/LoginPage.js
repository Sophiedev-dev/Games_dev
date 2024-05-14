import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ pseudo, setPseudo, niveau, setNiveau, intervalle, setIntervalle, onLogin }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Vérification du pseudo
    if (!pseudo || pseudo.trim() === '') {
      formIsValid = false;
      errors['pseudo'] = 'Veuillez entrer un pseudo.';
    }

    // Vérification de l'intervalle
    if (isNaN(intervalle.min) || isNaN(intervalle.max) || parseInt(intervalle.min) >= parseInt(intervalle.max)) {
      formIsValid = false;
      errors['intervalle'] = 'Veuillez entrer un intervalle valide.';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onLogin(pseudo, niveau, intervalle);
    }
  };

  return (
    <div className="login-page">
      <h2>Connexion au jeu Guess the Number</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pseudo:</label>
          <input
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          {errors.pseudo && <div className="error">{errors.pseudo}</div>}
        </div>
        <div>
          <label>Niveau:</label>
          <select value={niveau} onChange={(e) => setNiveau(e.target.value)}>
            <option value="facile">Facile</option>
            <option value="difficile">Difficile</option>
            <option value="tres_difficile">Très difficile</option>
          </select>
        </div>
        <div>
          <label>Intervalle de jeu:</label>
          <input
            type="number"
            value={intervalle.min}
            onChange={(e) => setIntervalle({ ...intervalle, min: e.target.value })}
          />
          <input
            type="number"
            value={intervalle.max}
            onChange={(e) => setIntervalle({ ...intervalle, max: e.target.value })}
          />
          {errors.intervalle && <div className="error">{errors.intervalle}</div>}
        </div>
        <button type="submit">Commencer le jeu</button>
      </form>
    </div>
  );
};

export default LoginPage;
