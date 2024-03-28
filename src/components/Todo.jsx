import { useEffect } from "react"
import {useState} from "react"
import TodoItem from "./TodoItem";

export default function Todo () {
  useEffect(()=>{
    const textInput = document.getElementById('input');
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // console.log('Enter key pressed!');
      }
    })
  })
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos,todo])
    setTodo("")
    // console.log('Todos : ', todos)
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input id="input" onChange={(e)=>setTodo(e.target.value)} value={todo} type="text" />
      <button type="submit">Add</button>
    </form>
    {todos.map((item)=>(
      <TodoItem key={item} item={item}/>
    ))}
    
  </div>
}