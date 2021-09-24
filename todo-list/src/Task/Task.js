import './Task.scss';

function Task({task, setTasks, tasks}) {
    

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
        console.log("je check" + task.task);
    }

    function isInProgress(value){
        if (value) {
            return (<input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheck}/>);
        } else {
            return (<input type="checkbox" name="checkbox" id="checkbox" checked onChange={handleCheck}/>);
        }
    }

        
    return(
        <div className={"task " + setClass(task.type)}>
            <p>{task.task}</p>
            <button className="close-btn" onClick={handleRemove}>X</button>
            {isInProgress(task.inprogress)}
        </div>
    )
}

export default Task;