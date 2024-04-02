import React, { useContext } from "react";
import { Context } from "../Component/Context";
const TodoList = () => {
  const { tasks, setTasks } = useContext(Context);
  const { newTask, setNewTask } = useContext(Context);
  const { editingIndex, setEditingIndex } = useContext(Context);
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };
  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };
  const handleUpdateTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask.trim();
      setTasks(updatedTasks);
      setNewTask("");
      setEditingIndex(-1);
    }
  };
  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h2> Upcoming Events</h2>
      <div>
        <input
          type="text"
          className="todo-input"
          value={newTask}
          placeholder="enter your task"
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="col">
        <ul>
          {tasks.map((task, index) => (
            <li className=" same-list" key={index}>
              <div className="row justify-content-evenly">
                {editingIndex === index ? (
                  <div className="text-direction col-lg-5 col-md-5 tex-center pt-2">
                    <input
                      className="input"
                      type="text"
                      value={newTask}
                      onChange={handleInputChange}
                    />
                  </div>
                ) : (
                  task
                )}
                {editingIndex === index ? (
                  <div className=" text-direction col-lg-3 col-md-3 text-end">
                    <button className="btn" onClick={handleUpdateTask}>
                      Update
                    </button>
                  </div>
                ) : (
                  <div className="text-direction col-lg-3 col-md-3 text-end ">
                    <button className="btn" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                  </div>
                )}
                <div className="text-direction col-lg-3 col-md-3 text-end">
                  <button className="btn" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
