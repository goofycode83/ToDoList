// Create a To do list function
//Make a return
// return a heading, ul and li
//Give them Ids for styling

import { useState } from "react"


const ToDoList = () => {
  const [list, setList] = useState('')


return (
  <>
  <h1 id="heading">To Do List</h1>
  <form id=""> 
  <label htmlFor="add-item">Add Item</label>
  <input type="text" id="add"></input>
  <button type="submit" className="btn">
    Add
  </button>
  </form>
  <ul id="ul-list">
    {}
    <li id="li-list">Apple</li>
  </ul>
  </>
)
}
export default ToDoList