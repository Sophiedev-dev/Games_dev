import './App.css'
import './LoginPage.css'
import LoginPage from "./LoginPage"
import { GuessMyNumberGame } from './GuessMyNumberGame';
import { useState } from 'react';

const App = () => {
    const [pseudo, setPseudo] = useState('');
    const [niveau, setNiveau] = useState('facile');
    const [intervalle, setIntervalle] = useState({ min: 0, max: 100 });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (pseudo, niveau, intervalle) => {
        console.log(pseudo, niveau, intervalle);
        console.log("Login; "+isLoggedIn)
        // Logique de connexion
        console.log(""+niveau)
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
                    pseudo={pseudo}
                    intervalle={intervalle}
                    niveau={niveau}
                />
            )}
        </div>
    );

}

export default App;
