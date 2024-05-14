import React, { useState } from 'react';
import { Niveau } from './Niveau';
import { calculerTentatives } from "./level";

export const GuessMyNumberGame = ({pseudo, intervalle, niveau}) => {

    const [low] = useState(intervalle.min);
    const [high] = useState(intervalle.max);
    const [guess, setGuess] = useState(numberToGuess());
    const [attempts, setAttempts] = useState(calculerTentatives(low, high, niveau));
    const [msg, setMsg] = useState("Guess the number ... ");
    const [show, setShow] = useState("?");
    const [bestScore, setBestScore] = useState(0);
    const [userName] = useState(pseudo);

    const handleResponse = () => {
        let userGuessedNumber = document.getElementById("guessedNumber").value;
        if (attempts === 0) {
            setMsg("No more attemps left");
            setShow(guess);
        } else {
            if (guess == userGuessedNumber) {
                setMsg("You guessed the number");
                setShow(guess);
                attempts === calculerTentatives(low, high, niveau) ?
                    setBestScore(calculerTentatives(low, high, niveau) - attempts + 1) :
                    setBestScore(calculerTentatives(low, high, niveau  ) - attempts);

            } else if (userGuessedNumber > guess) {
                setMsg(userGuessedNumber + " is Higher than the number to guess");
                setAttempts(attempts - 1);
            } else {
                setMsg(userGuessedNumber + " is Lower than the number to guess.");
                setAttempts(attempts - 1);
            }

        }
    };

    const reGame = () => {

        setGuess(numberToGuess);
        setShow("?");

        setAttempts(calculerTentatives(low, high, niveau));
    };

    function numberToGuess() {
        return Math.floor(Math.random() * (high - low) + 1);
    }
    return (
        <div className="game-container">
            <header>
                <button className="play-again-btn" onClick={reGame}>Play Again</button>
                <p>Level : {niveau}</p>
                <p>Player : {userName}</p>
                <p>Between {low} and {high}</p>
            </header>
            <h1>Guess My number Game</h1>
            <div className="mystery-number">
                <p>{show}</p>
            </div>
            <div className="guess-input">
                <p>{msg}</p>
                <div className='but'>
                    <input type="number" placeholder='Entrez un nombre' id='guessedNumber'></input>
                    <button onClick={handleResponse}>Guess</button>
                </div>
            </div>
            <footer>
                <p>Attemps: <span>{attempts}</span></p>
                <p>Best Score: <span>{bestScore}</span></p>
            </footer>
        </div>
    );
};
