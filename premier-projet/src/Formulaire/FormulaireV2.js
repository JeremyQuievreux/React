import { useState } from 'react';
import './Formulaire.scss';

function Formulaire() {

    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [age, setAge] = useState("");    

    function handleClick() {
        console.log("Je m'appelle " + lastname + " " + firstname + " j'ai " + age);
    }
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