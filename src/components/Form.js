// import React, {useEffect} from 'react'
// import { v4 as uuidv4 } from "uuid";

// let zinput="";

// const Forms = ({  setInput, todos, setTodos, editTodo, setEditTodo }) => {
//     const updateTodo = (title,id,completed)=>{
//         const newTodo = todos.map((todo)=>
//             todo.id === id ? {title,id,completed} : todo
//         )

//         setTodos(newTodo);
//         setEditTodo("");
//     };

//     const onInputChange = (event) => {
//         zinput = event.target.value;
//     };
   
//     useEffect(() =>{
//         if(editTodo){
//             setInput(editTodo.title)
//         }else{
//             setInput('')
//         }
//     })
//     const onFormSubmit = (event) => {
//         event.preventDefault();

//         if(!editTodo){
//             setTodos([...todos, { id: uuidv4(), title: zinput, completed: false }]);
//             console.log(zinput);
//         setInput('');
//         }else{import React, {useEffect} from 'react'
// 2
// import { v4 as uuidv4 } from "uuid";
// 3
// ​
// 4
// const Forms = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
// 5
//     const onInputChange = (event) => {
// 6
//         setInput(event.target.value);
// 7
//     };
// 8
//     const updateTodo = (title,id,completed)=>{
// 9
//         const newTodo = todos.map((todo)=>{
// 10
//             todo.id === id ? {title,id,completed} : todo
// 11
//         })
// 12
// ​
// 13
//         setTodos(newTodo);
// 14
//         setEditTodo("");
// 15
//     };
// 16
//     useEffect(() =>{
// 17
//         if(editTodo){
// 18
//             setInput(editTodo.title)
// 19
//         }else{
// 20import React, {useEffect} from 'react'
// 2
// import { v4 as uuidv4 } from "uuid";
// 3
// ​
// 4
// const Forms = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
// 5
//     const onInputChange = (event) => {
// 6
//         setInput(event.target.value);
// 7
//     };
// 8
//     const updateTodo = (title,id,completed)=>{
// 9
//         const newTodo = todos.map((todo)=>{import React, {useEffect} from 'react'
// 2
// import { v4 as uuidv4 } from "uuid";
// 3
// ​
// 4
// const Forms = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
// 5
//     const onInputChange = (event) => {
// 6
//         setInput(event.target.value);
// 7
//     };
// 8
//     const updateTodo = (title,id,completed)=>{
// 9
//         const newTodo = todos.map((todo)=>{
// 10
//             todo.id === id ? {title,id,completed} : todo
// 11
//         })
// 12
// ​
// 13
//         setTodos(newTodo);
// 14
//         setEditTodo("");
// 15
//     };
// 16
//     useEffect(() =>{
// 17
//         if(editTodo){
// 18
//             setInput(editTodo.title)
// 19
//         }else{
// 20
//             setInput('')
// 21
//         }
// 22
//     })
// 23
//     const onFormSubmit = (event) => {
// 24
//         event.preventDefault();
// 25
//         if(!editTodo){
// 26
//             setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
// 27
//         setInput('');
// 28
//         }else{
// 29
//             updateTodo(input,editTodo.id, editTodo.completed)
// 30
//         }
// 31
        
// 32
// ​
// 33
//     };
// 34
//     return (
// 35
//         <form onSubmit={onFormSubmit}>
// 36
//             <input type="text"
// 37
//                 placeholder='Enter a Todos.....'
// 38
//                 className='task-input'
// 39
//                 value={input}
// 40
//                 required
// 41
//                 onChange={onInputChange}
// 42
//             />
// 43
//             <button className='button-add' type='submit'>Add</button>
// 44
//         </form>
// 45
//     )
// 10
//             todo.id === id ? {title,id,completed} : todo
// 11
//         })
// 12
// ​
// 13
//         setTodos(newTodo);
// 14
//         setEditTodo("");
// 15
//     };
// 16
//     useEffect(() =>{
// 17
//         if(editTodo){
// 18
//             setInput(editTodo.title)
// 19
//         }else{
// 20
//             setInput('')
// 21
//         }
// 22
//     })
// 23
//     const onFormSubmit = (event) => {
// 24
//         event.preventDefault();
// 25
//         if(!editTodo){
// 26
//             setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
// 27
//         setInput('');
// 28
//         }else{
// 29
//             updateTodo(input,editTodo.id, editTodo.completed)
// 30
//         }
// 31
        
// 32
// ​
// 33
//     };
// 34
//     return (
// 35
//         <form onSubmit={onFormSubmit}>
// 36
//             <input type="text"
// 37
//                 placeholder='Enter a Todos.....'
// 38
//                 className='task-input'
// 39
//                 value={input}
// 40
//                 required
// 41
//                 onChange={onInputChange}
// 42
//             />
// 43
//             <button className='button-add' type='submit'>Add</button>
// 44
//         </form>
// 45
//     )
//             setInput('')
// 21
//         }
// 22
//     })
// 23
//     const onFormSubmit = (event) => {
// 24
//         event.preventDefault();
// 25
//         if(!editTodo){
// 26
//             setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
// 27
//         setInput('');
// 28
//         }else{
// 29
//             updateTodo(input,editTodo.id, editTodo.completed)
// 30
//         }
// 31
        
// 32
// ​
// 33
//     };
// 34
//     return (
// 35
//         <form onSubmit={onFormSubmit}>
// 36
//             <input type="text"
// 37
//                 placeholder='Enter a Todos.....'
// 38
//                 className='task-input'
// 39
//                 value={input}
// 40
//                 required
// 41
//                 onChange={onInputChange}
// 42
//             />
// 43
//             <button className='button-add' type='submit'>Add</button>
// 44
//         </form>
// 45
//     )
//             updateTodo(zinput,editTodo.id, editTodo.completed)
//         }
        

//     };
//     return (
//         <form onSubmit={onFormSubmit}>
//             <input type="text"
//                 placeholder='Enter a Todos.....'
//                 className='task-input'
//                 // value={zinput}
//                 required
//                 onChange={onInputChange}
//             />
//             <button className='button-add' type='submit'>Add</button>
//         </form>
//     )
// }

// export default Forms;

import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
const Forms = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const updateTodo = (title, id, completed) => {
        //console.log(todos);
        const newTodo = todos.map((todo) => {
                        todo.title = title;
                        todo.id = id;
                        todo.completed = completed;
         })
        setTodos([...todos],newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput('')
        }
    }, [setInput, editTodo]);
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='Enter a Todos.....'
                className='task-input'
                value={input}
                required
                onChange={onInputChange}
            />
            <button className='button-add' type='submit'>
                {editTodo ? "OK" : "ADD"}
            </button>
        </form>
        
    )
}
export default Forms;