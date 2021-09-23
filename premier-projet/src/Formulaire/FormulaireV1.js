// La V1 est composée de plusieurs fonctions callback
// une par inputs

//Import de base de fonction de react
import { useState } from 'react';
// Import du style
import './Formulaire.scss';
//Creation du composant en fonction
function Formulaire() {
    //Creation des states
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [age, setAge] = useState("");    
    //Fonction a la soumission du formulaire
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Je m'appelle " + lastname + " " + firstname + " et j'ai " + age + " ans");
        document.getElementById("lastname").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("age").value = "";
    }
    //Fonction callback des events on change sur les inputs
    function handleInputLastname(e) {
        setLastname(e.target.value);
    }
    function handleInputFirstname(e) {
        setFirstname(e.target.value);
    }
    function handleInputAge(e) {
        setAge(e.target.value);
    }
    
    return(
        <form action="#" onSubmit={handleSubmit} id="formulaire">
            <input name="lastname" id="lastname" type="text" placeholder="Votre Prénom" onChange={handleInputLastname}/>
            <input name="firstname" id="firstname" type="text" placeholder="Votre Nom" onChange={handleInputFirstname}/>
            <input type="number" name="age" id="age" onChange={handleInputAge}/>
            <button type="submit" >Envoyer dans la console</button>
        </form>
    )
}

export default Formulaire;