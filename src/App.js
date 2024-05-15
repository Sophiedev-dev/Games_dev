import './App.css'
import './LoginPage.css'
import LoginPage from "./LoginPage"
import { GuessMyNumberGame } from './GuessMyNumberGame';
import { useState } from 'react';

const App = () => {
    const [player, setPlayer] = useState({
        name :null,
        difficulti:null,
        //password: null,
        score :100000000000000000000000000,
    })

    const [pseudo, setPseudo] = useState('');
    const [niveau, setNiveau] = useState('facile');
    const [intervalle, setIntervalle] = useState({ min: 0, max: 100 });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (pseudo, niveau, intervalle) => {
        // Vérifier si le joueur existe déjà dans le localStorage
        const joueurExistant = localStorage.getItem(pseudo);
        if (joueurExistant) {
            setIsLoggedIn(true);
             setPlayer({
                ...player,
                name: pseudo,
                difficulti: niveau,
                score: JSON.parse(joueurExistant).score
            })
            return;
        }

        setPlayer({
            ...player,
            name: pseudo,
            difficulti: niveau
        })
        localStorage.setItem(pseudo, JSON.stringify({name: pseudo, difficulti: niveau, score: player.score}));
        setIsLoggedIn(true);
    };

    return (
        <div>
            {!isLoggedIn? (
                <LoginPage
                    pseudo={pseudo}
                    setPseudo={setPseudo}
                    niveau={niveau}
                    setNiveau={setNiveau}
                    intervalle={intervalle}
                    setIntervalle={setIntervalle}
                    onLogin={handleLogin}
                />
            ) : (
                <GuessMyNumberGame
                    player={player}
                    intervalle={intervalle}
                    niveau={niveau}
                    setPlayer={setPlayer}
                />
            )}
        </div>
    );
}

export default App;
