import { useEffect, useState } from 'react';
import './App.scss';
import Task from './Task/Task';

function App() {

  const [task , setTask] = useState({task : "", type : "home", etat : "delete"});
  const [todosList, setTodosList] = useState([]);

  function handleInput(e) {
    setTask({...task, task : e.target.value});
  }

  function handleSelect(e){
    setTask({...task, type : e.target.value});
  }

  function handleClick() {
    setTodosList([...todosList, task]);
    document.getElementById("tache").value = "";
  }

  useEffect(() => {
  }, [todosList]);


  function getTaskInProgresse(){
    let result = todosList.map((todo, key) => {
      if (todo.etat === 'en cours') {
        return (
          <div key={key}>
            <p>{todo.task}</p>
            <button>
              {todo.etat}
            </button>
          </div>
        );
      } else {
        return <div key={key}></div>
      }
    });
    return result;
    
  };
  function getTaskDone(){
    let result = todosList.map((todo, key) => {
      if (todo.etat === 'done') {
        return (
          <div key={key}>
            <p>{todo.task}</p>
            <button>
              {todo.etat}
            </button>
          </div>
        );
      } else {
        return <div key={key}></div>
      }
    });
    return result;
    
  };
  function getTaskDelete(){
    let result = todosList.map((todo, key) => {
      if (todo.etat === 'delete') {
        return (
          <div key={key}>
            <p>{todo.task}</p>
            <button>
              {todo.etat}
            </button>
          </div>
        );
      } else {
        return <div key={key}></div>
      }
    });
    return result;
    
  };


  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <div className="container">
        <div className="formulaire">
          <input type="text" name="tache" id="tache" onChange={handleInput}/>
          <select name="type" id="type" onChange={handleSelect}>
            <option value="home">Ménage</option>
            <option value="hobbie">Loisir</option>
            <option value="admin">Administration</option>
          </select>
          <button onClick={handleClick}>Ajouter</button>
        </div>
      </div>
      <Task 
        task={getTaskInProgresse()}
        taskDone={getTaskDone()}
        taskDelete={getTaskDelete()}
      />
    </div>
  );
}

export default App;
