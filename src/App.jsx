import axios from "axios";
import React, { useRef } from "react";

const App = () => {
  const todo = useRef();

  axios
    .get("http://localhost:3000/api/v1/users")
    .then((res) => {
      console.log(res.data);

    })
    .catch((err) => {
      console.log(err);
    });

    
    function addTodo(e) {
      e.preventDefault()
      console.log(todo.current.value);
      axios.post("http://localhost:3000/api/v1/users")
      .then((res)=>{
          res.data =
      }).catch((err)=>{
        console.log(err);
      })
    }
  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Enter Todo" ref={todo} />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default App;
