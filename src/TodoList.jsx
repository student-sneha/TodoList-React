import { useState } from "react";
import { FaPlus, FaTrash, FaEdit ,FaCheck} from "react-icons/fa";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask ,isDone:false}]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, text) => {
    setEditingTask(id);
    setEditText(text);
  };

  const updateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask ? { ...task, text: editText } : task
      )
    );
    setEditingTask(null);
    setEditText("");
  };


  const markAsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}><FaPlus /></button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item" style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={updateTask}>✔</button>
              </>
            ) : (
              <>
              <button className="check-btn" onClick={() => markAsDone(task.id)}><FaCheck /></button>

                <span>{task.text}</span>
               <div className="btns">
                              <button className="edit-btn" onClick={() => editTask(task.id, task.text)}><FaEdit /></button>
                <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
             
               </div>
                </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}