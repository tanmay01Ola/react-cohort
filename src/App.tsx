<<<<<<< HEAD

import "./index.css";
export function App() {
  return (
    <div>
          <CardWrapper />
          hi there
    <CardWrapper/>
              <CardWrapper />
          hello there
    <CardWrapper/>
              <CardWrapper />
          hi there, ye shi h yrr
    <CardWrapper/>
    </div>

  );
}
// function TextComponent(){
//   return(
//     <div> hi there</div>
//   )
// }
interface ICard {
  children ?: any
}
function CardWrapper(props : ICard){
   return(
    <div style={{border : "2px solid black"}}>
      {props.children}
    </div>
   )
}

export default App;
=======
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { response } from "express";


export function App(){
  return(
    <div>
     <Todo/>
    </div>
  )
}
interface ITodo{
  title : string,
  completed : boolean
}

function Todo(){
  const[todo , setTodo] = useState<ITodo>();
  const[selectedId , setSelectedId] = useState(0);

 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos?id=" + selectedId)
  .then(response=>{
    setTodo(response.data[0])
  })
 },[selectedId])
  return(
    <div>
    <div style={{display : "flex", gap : 20}}>
      <button onClick={function main(){
        setSelectedId(1)
      }}>1</button>

    <button onClick={function(){
        setSelectedId(2)
   }}>2</button>
  
    <button onClick={function(){
        setSelectedId(3)
  }}>3</button>
     

 </div>
     <h1>{todo?.title}</h1>
    </div>
  )
}
export default App
>>>>>>> 69fa0e6 (created todo app)
