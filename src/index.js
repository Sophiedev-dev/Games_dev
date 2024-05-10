import { render } from '@testing-library/react';
import React from 'react';
import App from './App.js';


let player ={
    name :null,
    difficulti:null,
    password: null,
    bestScore :0,
}


function playerConstructor (name , difficulti,password){
    this.name = name;
    this.difficulti = difficulti;
    this.password = password;
    localStorage.setItem(name, JSON.stringify(this));
}

function deletePlayer(name){
    localStorage.removeItem(name);
}
function calculScore(tentative , tentatives){

    if(tentative <= (tentatives *25)/100)
        return 5;

    else if(tentative > (tentatives *25)/100    &&  tentative <= (tentatives *50)/100)
        return 4;

    else if(tentative > (tentatives *50)/100    &&  tentative <= (tentatives *75)/100)
        return 2;

    else if(tentative > (tentatives *75)/100    &&  tentative <= tentatives )
        return 1;
}


render(<App /> ,document.getElementById('root'))//ceci insere le rendu dans la balise div de id="root"