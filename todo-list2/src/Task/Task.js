import './Task.scss';

function Task() {
    return(
        <div className="task-container">
            <div className="en-cours">
                <h2>Taches en cours : </h2>
            </div>
            <div className="done">
                <h2>Taches terminées : </h2>

            </div>
            <div className="delete">
                <h2>Taches supprimées : </h2>
            </div>
        </div>
    )
}

export default Task;