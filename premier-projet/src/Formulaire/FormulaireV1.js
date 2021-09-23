import { useState } from 'react';
import './Formulaire.scss';

function Formulaire() {

    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [age, setAge] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Je m'appelle " + lastname + " " + firstname + " et j'ai " + age + " ans");
        document.getElementById("lastname").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("age").value = "";
    }

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