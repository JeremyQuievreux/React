import { useState } from 'react';
import './Formulaire.scss';

function Formulaire({tasks, setTasks}) {

    const [task, setTask] = useState("");
    const [type, setType] = useState("home");
    const [taskId, setTaskId] = useState(0);

    function handleInput(e) {
        setTask(e.target.value);
    }
    function handleChange(e) {
        setType(e.target.value);
    }
    function handleClick() {
        setTaskId(taskId + 1);
        setTasks([...tasks,{
            id : taskId,
            task : task,
            type : type,
            inprogress : true
        }]);
        document.getElementById("task").value = "";
        document.getElementById("task-type").value ="home";
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