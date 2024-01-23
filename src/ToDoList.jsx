import { useState } from "react"

const List = () => {
 const [todo_list,setList] = useState([])
 const [user_input,updateUserInput] = useState()
 const [store_prev,updatePrevUserInput] = useState()
 
 const handleOnClick = (key,val) => {
   console.log("list item added = "+ val)
   let new_to_do_item = {
     key: key?key:val,
     value: key
   };

   let updated_todo_list=[];
 // add the item to the list/clear input feild
 //check the key
 //if key exists in the list, replace its value with new value
  
  if(todo_list.length!==0){
      todo_list.forEach(item => {
        if(item.value ===store_prev) {
          item.value=val
          console.log(val)
        }
      })
      updated_todo_list =todo_list;
  }
 setList([...updated_todo_list, new_to_do_item]);
 updateUserInput("")

 }
const store_away_user_input = (val) =>{
//  console.log("user inpput is " + val)
 updateUserInput(val)
}

const delete_user_item = (key) => {
//  console.log("trying to delet a list item " + key)
//  console.log("todo_list " + JSON.stringify(todo_list))
 const newList = todo_list.filter(list_item => list_item.key !== key)
 setList([...newList])
}

const edit_user_item = (key , val) => {
 updateUserInput(val)
 updatePrevUserInput(val)
//  const newItem = todo_list.filter((newTodo) => newTodo.currentItem !== key)
//  setList(newItem)
}

 return (
    <div>
     <h1>To Do List</h1>
     <input type="text" onChange={(e) => store_away_user_input(e.target.value)}  value={user_input}/> 
     <button onClick={() => handleOnClick(user_input)}>Add</button>
     <ul id="list">
       {todo_list.map(item =>
         (
         <li key={item.key}>
         {item.value} 
         <button onClick={() => delete_user_item(item.key)}>Delete</button>
         <button onClick={() => edit_user_item(item.key, item.value)}><span>Edit</span></button>
         </li>
         )
       )}
     </ul>
     </div>
 )
 }
 export default List

