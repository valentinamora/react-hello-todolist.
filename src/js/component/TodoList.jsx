import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [writeTask, setWriteTask] = useState("");

  function addTask(event) {
    // setTasks([...tasks, ]);
    if (event.key === "Enter") {
      console.log(event.target.value)
      setTasks([...tasks, writeTask])
      //mandar y limpiar el texto 
      setWriteTask("")
    }
  }

  const deleteItem = (posicionIndex) => {
    let newArray = tasks.filter((element, i) => (i != posicionIndex))
    setTasks(newArray)
  }

  return (
    <>
      <div className="text-center" >
        <h4 >todos</h4>
      </div>
      <div className="container d-flex align-items-center">

        <div className="card">
          <input type="text" placeholder="What's needs to be done?" value={writeTask} onKeyDown={(event) => addTask(event)} onChange={(event) => setWriteTask(event.target.value)} />
          <ul className="list-group list-group-flush">
            {tasks.map((element, i) => {
              return (
                <li className="list-group-item d-flex justify-content-between">{element}
                  <button className="btn btn-secondary btn-lg" onClick={() => deleteItem(i)}><i class="fas fa-backspace"></i></button>
                </li>
              )
            })}

          </ul>
        </div>

      </div>
      <div>
        <button className="" onClick={() => setTasks([])}><i class="far fa-trash-alt text-white"></i></button>
      </div>
    </>
  );
};

export default TodoList 