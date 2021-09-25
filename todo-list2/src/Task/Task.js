import './Task.scss';

function Task({task, taskDone, taskDelete}) {

    


    return(
        <div className="task-container">
            <div className="en-cours">
                <h2>Taches en cours : </h2>
                {task}
            </div>
            <div className="done">
                <h2>Taches terminées : </h2>
                {taskDone}
            </div>
            <div className="delete">
                <h2>Taches supprimées : </h2>
                {taskDelete}
            </div>
        </div>
    )
}

export default Task;