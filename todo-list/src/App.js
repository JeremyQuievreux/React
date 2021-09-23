import { useState , useEffect } from 'react';
import './App.css';
import Formulaire from './Formulaire/Formulaire';
import Header from './Header/Header';



function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App">
      <Header/>
      <Formulaire setTasks={setTasks} tasks={tasks}/>
    </div>
  );
}

export default App;
