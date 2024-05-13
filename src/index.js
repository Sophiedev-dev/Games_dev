import { render } from '@testing-library/react';
import React from 'react';
import App from './App.js';


let player ={
    name :null,
    difficulti:null,
    password: null,
    bestScore :0,
}


function calculScore(tentative ){
        return tentative;
}


export default calculScore;
render(<App /> ,document.getElementById('root'))//ceci insere le rendu dans la balise div de id="root"