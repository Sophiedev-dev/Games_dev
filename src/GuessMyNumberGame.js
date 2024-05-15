/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { calculerTentatives } from "./level";
import { Modal } from './Modal';
import { recupererJoueur } from './storeScore';
import Classement from './Classement';

export const GuessMyNumberGame = ({player, intervalle, niveau, setPlayer}) => {
    const [low, setLow] = useState(intervalle.min);
    const [high, setHigh] = useState(intervalle.max);
    const [level, setLevel] = useState(niveau);
    const [guess, setGuess] = useState(numberToGuess(parseInt(low), parseInt(high)));
    const [attempts, setAttempts] = useState(calculerTentatives(low, high, level));
    const [msg, setMsg] = useState("Guess the number ... ");
    const [show, setShow] = useState("?");
    const [bestScore, setBestScore] = useState(0);
    const [openClassement, setOpenClassement] = useState(false);

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
                setMsg("🤯️🤯️🤯️ You guessed the number 🤯️🤯️🤯️");
                setShow(guess);
                attempts === calculerTentatives(low, high, niveau) ?
                    setBestScore(calculerTentatives(low, high, niveau) - attempts + 1) :
                    setBestScore(calculerTentatives(low, high, niveau  ) - attempts);

                document.getElementById("btn-guess").setAttribute('disabled', 'true');
                let score = bestScore < player.score ? bestScore:player.score
                setPlayer({
                    ...player,
                    difficulti: niveau,
                    score: score
                })
                localStorage.setItem(player.name, JSON.stringify({name: player.name, difficulti: level, score: score}));

            } else if (userGuessedNumber > guess) {
                setMsg(userGuessedNumber + " is Higher than the number to guess");
                setAttempts(attempts - 1);
            } else {
                setMsg(userGuessedNumber + " is Lower than the number to guess.");
                setAttempts(attempts - 1);
            }



        }
    };
    const handleBestScoreList = () => {
        setOpenClassement(!openClassement)
    }

    const reGame = () => {
        setIsOpen(true);
        setGuess(numberToGuess(parseInt(low), parseInt(high)));
        setShow("?");
        document.getElementById("btn-guess").removeAttribute('disabled');
        setMsg("Guess the number ...");
    };


    function numberToGuess(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }
    return (
        <div className="game-container">
            <header>
                <button className="play-again-btn" onClick={reGame}>Restart</button>
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
                    <button onClick={handleResponse} id='btn-guess'>Guess</button>
                </div>
            </div>
            <footer>
                <p>Attemps: <span>{attempts}</span></p>
                <p><button className="play-again-btn" onClick={handleBestScoreList}>Best Score: <span>{bestScore}</span></button></p>
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

            {openClassement && (
                <Classement/>
            )}
        </div>
    );
};
