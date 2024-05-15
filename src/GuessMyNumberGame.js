/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { calculerTentatives } from "./level";
import { Modal } from './Modal';
import { recupererJoueur } from './storeScore';

export const GuessMyNumberGame = ({player, intervalle, niveau}) => {
    const [low, setLow] = useState(intervalle.min);
    const [high, setHigh] = useState(intervalle.max);
    const [level, setLevel] = useState(niveau);
    const [guess, setGuess] = useState(numberToGuess(parseInt(low), parseInt(high)));
    const [attempts, setAttempts] = useState(calculerTentatives(low, high, level));
    const [msg, setMsg] = useState("Guess the number ... ");
    const [show, setShow] = useState("?");
    const [bestScore, setBestScore] = useState(0);
    console.log(player.name);

    const [isOpen, setIsOpen] = useState(false);
    const handleResponse = () => {
        let userGuessedNumber = document.getElementById("guessedNumber").value;
        document.getElementById("guessedNumber").value = '';
        if (attempts === 0) {
            setMsg("No more attemps left");
            setShow(guess);
        } else {
            // eslint-disable-next-line eqeqeq
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
        setIsOpen(true);
        setGuess(numberToGuess(parseInt(low), parseInt(high)));
        setShow("?");

    };



    function numberToGuess(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
    return (
        <div className="game-container">
            <header>
                <button className="play-again-btn" onClick={reGame}>Play Again</button>
                <p>Level : {level}</p>
                <p>Player : {player.name}</p>
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
                <p>Best Score: <span>{player.score}</span></p>
            </footer>
             {isOpen && (
                <Modal
                    toggleModal={() => {setIsOpen(false)}}
                    niveau={level}
                    onNiveauChange={setLevel}
                    setAttempts={setAttempts}
                    min={low}
                    max={high}
                    setMin={setLow}
                    setmax={setHigh}
                    />
            )}
        </div>
    );
};
