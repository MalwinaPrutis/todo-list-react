import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideCompleted] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Masaż relaksacyjny ", completed: false },
    { id: 2, content: "Wycieczka rowerowa", completed: true },
  ]);

  const toggleHideCompleted = () => {
    setHideCompleted((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const setAllCompleted = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, completed: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, {content: newTaskContent, completed: false, id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, }])
  }

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideCompleted={toggleHideCompleted}
            setAllCompleted={setAllCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;