import { useState } from 'react';
import './Task.scss';

function Task({task, setTasks, tasks}) {
    
    const [checked , setChecked] = useState (task.done);

    function handleRemove() {
        const result = tasks.filter(currenttask => currenttask.id !== task.id);
        setTasks(result);
    }

    function setClass(valeurType){
        switch (valeurType) {
            case "home":
                return "home";
            case "hobbie":
                return "hobbie";
            case "admin":
                return "admin";
            case "shopping":
                return "shopping";
            default :
            break
        }
    }    

    function handleCheck(e){
        if (checked) {
            setChecked(false)
            task.done = false;
        } else {
            setChecked(true)
            task.done = true;
        }
    }

    function isDone(value) {
        if (value) {
            return "done"
        } else {
            return "pas done"
        }
    }
        
    return(
        <div className={"task " + setClass(task.type)}>
            <p>{task.task}</p>
            {isDone(task.done)}
            <button className="close-btn" onClick={handleRemove}>X</button>
            <input type="checkbox" name="checkbox" id="checkbox" checked={checked} onChange={handleCheck}/>
        </div>
    )
}

export default Task;