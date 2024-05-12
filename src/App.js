import React, { useRef, useState } from 'react';
import './App.css'

const GuessMyNumberGame = () => {

  const VISIBLE ="";
  const NONVISIBLE ="none";

  const [infoMonitor, setInfoMonitor] = useState("Enter le  nombre  Mystere!....");
  const [vueNombreMytere, setVueNombreMystere] = useState("?");
  const [visibiliteForm, setVisibiliteForm] = useState(VISIBLE);
  const [nombreDeTentative, setNombreDeTentative] = useState(8 - 1);
  const [nombreMystere, setNombreMystere] = useState(Math.floor(Math.random() * (15) + 1))
  const [nombreDessai, setNombreDessai] = useState(0)
  
  

  // references
  const inputNbMysteRef = useRef()



  const handleValide = () =>{

    

    if(inputNbMysteRef.current.value === "")
    { 
      alert("Entrer un nombre valide!");
      return
    }

    setNombreDessai(nombreDessai + 1); // incrementation du nombre dessai du joueur
    
    // recuperation du nombre contenu dans le formulaaire
    let nb = parseInt(inputNbMysteRef.current.value);
    

    // controle du nombre entrer 
    if(nb >  nombreMystere)
    {
      setInfoMonitor("Le nombre Mystere est INFERIEUR a " +  nb + "!");
      
    }
    else if(nb < nombreMystere)
    {
      setInfoMonitor("Le nombre Mystere est SUPPERIEUR a " +  nb + "!");
      
    }
    else if(nb === nombreMystere)
    {
      setInfoMonitor("FELICITATION VOUS AVEZ TROUVE LE NOMBRE MYSTERE EN "+ nombreDessai +" tentative!!!");
      setVueNombreMystere(nombreMystere);
      setVisibiliteForm(NONVISIBLE);
      return;
    }
    
    setNombreDeTentative(nombreDeTentative - 1); // decrementation du nombre de tentative 
    console.log(nombreMystere);

    // verification si le nombre de tentative est nulle
    if(nombreDeTentative <= 0)
    {
      setInfoMonitor("DESOLEE VOUS N'AVEZ PAS TROUVE LE NOMBRE MYSTERE ATTEND!!!");
      setVueNombreMystere(nombreMystere);
      setVisibiliteForm(NONVISIBLE);
    }


    // alert(inputNbMysteRef.current.value);
    inputNbMysteRef.current.value = "";
    
  }



  function monitor()
  {
    return(
      <div className='monitor'>
        <h1>Guess My Number Game</h1>
        <div className='mystery-number'>{vueNombreMytere}</div>
        <div className='phrase'>{infoMonitor}</div>
      </div>
    )
  }

  function formulaire()
  {
    return (
      <div className='formulaire' style={{display: visibiliteForm}}>
        <div> 
          <input type ="number" ref={inputNbMysteRef}/>
          <span className='compteurNbEssaie'>{nombreDeTentative}</span>
        </div>
        <div><button onClick={handleValide}>Valider</button></div>
      </div>
    )
    
  }

  function score()
   {
    return (
      <div className='score'>
        <div>
          <span>Score:12</span>
          <span>High Score:1</span>
        </div>
      </div>
    );
   }
  
      
    return (
        <div className="game-container">
          {monitor()}
          {formulaire()}
          {score()}
          
        </div>
    );
};

export default GuessMyNumberGame;
