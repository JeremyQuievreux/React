import { useState } from 'react';
import './Formulaire.scss';

function Formulaire(props) {

    const setTasks = props.setTasks;
    const tasks = props.tasks;

    const [task, setTask] = useState("");
    const [type, setType] = useState("home");

    function handleInput(e) {
        setTask(e.target.value);
    }
    function handleChange(e) {
        setType(e.target.value);
    }
    function handleClick() {
        console.log(task + " " + type);
        setTasks([...tasks,{
            task : task,
            type : type
        }]);
        document.getElementById("task").value = "";
    }


    return(
        <div className="form-container">
            <div className="form">
                <input onChange={handleInput} type="text" name="task" id="task" placeholder="What do you want to remember ?" />
                <select onChange={handleChange} name="task-type" id="task-type">
                    <option value="home">Ménage</option>
                    <option value="hobbie">Loisir</option>
                    <option value="admin">Administratif</option>
                    <option value="shopping">Course</option>
                </select>
                <button onClick={handleClick} >Remember that !</button>
            </div>
        </div>
    )
}

export default Formulaire;