import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos]=useState([
    // {
    //   id:1,
    //   title:"play",
    //   isCompleted:'false'
    // }, 
    // {
    //   id:2,
    //   title:"play cricket",
    //   isCompleted:'true'
    // } 
   ])

  
const checkTodo=(id)=>{
  console.log(id)
  setTodos(todos.map((todo)=>{
   if (todo.id===id)
   todo.isCompleted=!todo.isCompleted;
  return todo
  }))
}

//delete todo

const deleteTodo=(id)=>{
  setTodos(todos.filter(todo=>todo.id!=id))
}
 
  //ADD a todo
  const addTodo=(text)=>{
    const  newTodo={
      id:5,
      title:text,
      isCompleted:false,
    };
    setTodos([...todos,newTodo])
  }
  return (
    <>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
