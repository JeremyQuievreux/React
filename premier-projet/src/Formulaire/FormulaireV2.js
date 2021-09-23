//La V2 est composée d'une seul fonction callback
// pour tous les events sur les inputs

//Import de base des fonctions React
import { useState } from 'react';
//Import du style
import './Formulaire.scss';
//Creation du composant en fonction
function Formulaire() {
    //Creation des states
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [age, setAge] = useState("");    
    //Fonction callback sur l'event a la soumission du formulaire
    function handleClick() {
        console.log("Je m'appelle " + lastname + " " + firstname + " j'ai " + age);
    }
    //Fonction callback générique sur les events onChange des inputs
    function handleInput(e, setter) {
        setter(e.target.value);
    }       
    return(
        <div id="formulaire">
            <input name="lastname" id="lastname" type="text" placeholder="Votre Prénom" onChange={(e) => handleInput(e, setLastname)}/>
            <input name="firstname" id="firstname" type="text" placeholder="Votre Nom" onChange={(e) => handleInput(e,setFirstname)}/>
            <input type="number" name="age" id="age" onChange={(e) => handleInput(e, setAge)}/>
            <button type="submit" props="nom button" onClick={() => handleClick()}>Envoyer dans la console</button>
        </div>
    )
}

export default Formulaire;