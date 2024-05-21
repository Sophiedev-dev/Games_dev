import React from 'react';
import './Modal.css'; // Assurez-vous d'ajouter des styles pour le modal
import { calculerTentatives } from './level';
export const Modal = ({toggleModal, niveau, onNiveauChange, min, max, setMin, setmax, setAttempts})=> {
    const startAGame = () => {
        var low = document.getElementById("min").value;
        var high = document.getElementById("max").value;
        var level = document.getElementById("niveau").value
        setMin(low);
        setmax(high);
        onNiveauChange(niveau);
        setAttempts(calculerTentatives(low, high, level));
        toggleModal();
    }
    return (
        <div className="modal">
          <div className="overlay" onClick={toggleModal} />
          <div className="modal-content">
            <h2>Play Again</h2>
            <p>Configuration de la partie</p>
            <div className='RowContent'>
                <label>Niveau:</label>
                <select defaultValue={niveau} id='niveau'>
                    <option value="facile">Facile</option>
                    <option value="difficile">Difficile</option>
                    <option value="tres_difficile">Très difficile</option>
                </select>
            </div>
             <div className='RowContent'>
                <label>Intervalle :</label>
                <div>
                    <input type="number" defaultValue={min} id='min'/>
                    <input type="number" defaultValue={max}  id='max' />
                </div>

            </div>
            <button onClick={startAGame} className='play-button'>
              Play now
            </button>
          </div>
        </div>
    )
}
