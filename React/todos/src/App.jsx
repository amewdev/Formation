import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
import { initialTodos } from './initialTodos'

function App() {
  //input variables
  const [isTitle, setIsTitle] = useState(false);
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');
  //classification variables
  const [nextId, setNextId] = useState(4);
  const [todos, setTodos] = useState(initialTodos);
  const [currentProject, setCurrentProject] = useState("Show all projects");

  function titleChange(e) {
    setTitle(e.target.value);
    if (e.target.value !== '') {setIsTitle(true)} else {setIsTitle(false)};
  }

  function addTask() {
    setTodos([
      ...todos,
      {
        id: nextId,
        title: title,
        project: project,
        description: description
      }
    ]);
    setNextId(n => n+1); setIsTitle(false);
    setTitle(''); setDescription(''); setProject('');
  }

  function deleteTask(id) {
    const updatedTodos = [...todos.slice(0,id), ...todos.slice(id+1)];
    for (let i = id; i < updatedTodos.length; i++) {updatedTodos[i].id--};

    setTodos(updatedTodos); setNextId(n => n-1);
  }
  
  function setPriorities(secondId) { //secondId: the id of the prioritized card

    let selectedTodos;
    if (currentProject === "Show all projects") {selectedTodos = todos}
    else
      if (currentProject === "No project") {selectedTodos = todos.filter(item => item.project === "")}
      else {selectedTodos = todos.filter(item => item.project === currentProject)}; 

    let secondIndexInSelected = selectedTodos.findIndex(item => item.id === secondId);

    if (secondIndexInSelected > 0) {
      let firstId = selectedTodos[secondIndexInSelected-1].id;
      let aux = todos[firstId];  //^^^the id "to the left"

      const updatedTodos = todos.map((item,i) => {
        if (i === firstId) {return {...todos[secondId], id:i}}
        else
          if (i === secondId) {return {...aux, id:i}} else {return item}
      });
      setTodos(updatedTodos);
    };
  };

  function makeCards(id, t, d, p, ts, ps) {
    return(
      <Card
        key={id}
        id={id}
        title={t}
        description={d}
        project={p}
        tasksSelector={ts}
        prioritySetter={ps}
      />
    )
  }

  const uniqueProjects = [...new Set(todos.map(item => item.project))];
  const projectOptions = uniqueProjects.filter(project => project !== "").map((project, index) => (<option key={index}>{project}</option>));

  return (
    <>
      <nav>
        <div>
            <input
              value={title}
              type="text"
              placeholder="Write to-do"
              onChange={(e) => {titleChange(e)}}
            />
            <label>To-do</label>
        </div>
        <div>
            <input
              value={description}
              type="text"
              placeholder="Write details if you please"
              onChange={(e) => {setDescription(e.target.value)}}
            />
            <label>Description</label>
        </div>
        <div>
            <input
              value={project}
              type="text"
              placeholder="Write project"
              onChange={(e) => {setProject(e.target.value)}}
            />
            <label>The project the task belong to</label>
        </div>
        <input
          value={isTitle ? 'Add task' : ''}
          type="submit"
          disabled={!isTitle}
          onClick={addTask}
        />
    </nav>
    <section>
        <p>Show project:</p>
        <select onChange={(e) => {setCurrentProject(e.target.value)}}>
            <option>Show all projects</option>
            <option>No project</option>
            {projectOptions}
        </select>
    </section>
    <main style={{ display: "grid" }}>
      {(() => {
        switch (currentProject) {
          case "Show all projects": return todos.map(item => (makeCards(item.id, item.title, item.description, item.project,deleteTask,setPriorities)));
          case "No project": return todos.filter(x => x.project === '').map(item => (makeCards(item.id, item.title, item.description, '',deleteTask,setPriorities)));
          default: return todos.filter(x => x.project === currentProject).map(item => (makeCards(item.id, item.title, item.description, item.project,deleteTask,setPriorities)));
        }
      })()}
    </main>
    </>
  )
}

export default App
