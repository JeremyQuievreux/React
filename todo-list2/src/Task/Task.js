import './Task.scss';

function Task({todosList}) {

    function getTaskInProgress(todosList) {
        return (todosList.map((todo, key) => {
            if (todo.etat === "en cours") {
                return (
                    <div className="item" key={key}>
                        <p>{todo.task}</p>
                        <button>Terminer</button>
                    </div>
                )
            } else {
                return(
                    <div key ={key}></div>
                )
            }
        }))
    }

    function getTaskDone(todosList) {
        return (todosList.map((todo, key) => {
            if (todo.etat === "done") {
                return(
                    <div className="item" key={key}>
                        <p>{todo.task}</p>
                        <button>Supprimer</button>
                    </div>
                )
            } else {
                return (
                    <div key={key}></div>
                )
            }
        }))
    }

    function getTaskDelete(todosList) {
        return (todosList.map((todo, key) => {
            if (todo.etat === "delete") {
                return (
                    <div className="item" key={key}>
                        <p>{todo.task}</p>
                    </div>
                )
            } else {
                return(
                    <div key={key}></div>
                )
            }
        }))
        
    }


    return(
        <div className="task-container">
            <div className="en-cours">
                <h2>Taches en cours : </h2>
                {getTaskInProgress(todosList)}
            </div>
            <div className="done">
                <h2>Taches terminées : </h2>
                {getTaskDone(todosList)}
            </div>
            <div className="delete">
                <h2>Taches supprimées : </h2>
                {getTaskDelete(todosList)}
            </div>
        </div>
    )
}

export default Task;