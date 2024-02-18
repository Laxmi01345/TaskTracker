import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";



const Todo = () => {
  const [selectedButton, setSelectedButton] = useState('Todo');
  const [Alltodos, setAlltodos] = useState([]);
  const [newtitle, settitle] = useState("");
  const [newdescription, setdescription] = useState("");
  const [newform,setform]=useState(false);
  const [Completed,setCompleted]=useState([]);
  

  function handleButtonClick(button) {
    setSelectedButton(button);

    if (button==='Create'){
      setform(true);

    }
    else{
      setform(false);
    }
  }
  
  const handler=()=>{
    if (!newtitle.trim() || !newdescription.trim()) {
      
      alert('Title and description cannot be empty!');
      return;
    }
    else{
    let newTodo={
      title:newtitle,
      description:newdescription
    }



    let updatedTodoArr = [...Alltodos];
    updatedTodoArr.push(newTodo);
    setAlltodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  }
  }

  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'));
    let savedCompleted=JSON.parse(localStorage.getItem('completedtodos'));
    if (savedTodo){
      setAlltodos(savedTodo);
    }
    if (savedCompleted){
      setCompleted(savedCompleted);
    }


  },[])

  const handledelete=index=>{
    let reducetodo=[...Alltodos];
    reducetodo.splice(index,1);

    localStorage.setItem('todolist',JSON.stringify(reducetodo));
    setAlltodos(reducetodo)
  }
   
   const Completehandler=(index)=>{
    let now = new Date();
    let dd=now.getDate();
    let mm=now.getMonth()+1;
    let yyyy=now.getFullYear();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();

    let completedon=dd+'-'+mm+'-'+yyyy+' at '+h+':'+m+':'+s;

    let filteredItem={
      ...Alltodos[index],
      completedon:completedon
    }

    let updatedCompletedArr=[...Completed];
    updatedCompletedArr.push(filteredItem);
    setCompleted(updatedCompletedArr)
    handledelete(index)
    localStorage.setItem('completedtodos',JSON.stringify(updatedCompletedArr))
    setAlltodos(updatedCompletedArr)
   }

   const handlecompleteddelete=(index)=>{
    let Completedtodo=[...Completed];
    Completedtodo.splice(index,1);

    localStorage.setItem('completedtodos',JSON.stringify(Completedtodo));
    setCompleted(Completedtodo)
   }

  return (
    <>
      <div className="p-3 m-2">
        <h1 className="font-serif">To-Do List</h1>
      </div>

      <div>
        <button
          className={`m-2 mt-0 ${selectedButton === 'Todo' ? 'bg-lime-600' : ''}`}
          onClick={() => handleButtonClick('Todo')}
        >

          Your To-Do List
        </button>
        <button
          className={`m-2 mt-0 ${selectedButton === 'Complete' ? 'bg-lime-600' : ''}`}
          onClick={
            () => {
              handleButtonClick('Complete');
              
            }}
        >
          Completed
        </button>
        <button className={`m-2 mt-0 ${selectedButton === 'Create' ? 'bg-lime-600' : ''}`}
          onClick={() => handleButtonClick('Create')} >Create New</button>

      </div>
      {newform && (
      <div className="bg-orange-400 m-10 overflow-hidden ">
        <div>
          <input type="text" value={newtitle} className="p-3 m-3 w-96" placeholder="Title" onChange={(e)=>settitle(e.target.value)} />
        </div>
        <div>
          <textarea cols="51" rows="5" className="p-3 m-3" value={newdescription} onChange={(e)=>setdescription(e.target.value)} placeholder="Description"></textarea>
          <br />
          <button className="bg-red-950 m-2" onClick={handler}>Add</button>
        </div>
      </div>
)}

      

      <div className=" flex-wrap text-left  w-[32rem] ">
        
        {selectedButton === 'Todo'&& Alltodos.map((item,index)=>{
          return (
            <div className="flex justify-between m-2 bg-gray-700 p-2" key={index}>
          <div>
            <h2 className="text-3xl text-orange-500">{item.title}</h2>
            <p >{item.description}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineDelete className="mr-2 text-2xl hover:fill-red-400 	" onClick={()=>{handledelete(index)}} />
            

            <TiTick className="fill-green-400 text-2xl" onClick={()=>{Completehandler(index)}}/>
          </div>
        </div>
          )
        })}

{selectedButton === 'Complete'&& Completed.map((item,index)=>{
          return (
            <div className="flex justify-between m-2 bg-gray-700 p-2" key={index}>
          <div>
            <h2 className="text-3xl text-orange-500">{item.title}</h2>
            <p>{item.description}</p>
            <p><small>Completed On :{item.completedon}</small></p>
          </div>
          <div className="flex items-center">
            <AiOutlineDelete className="mr-2 text-2xl hover:fill-red-400 	" onClick={()=>{handlecompleteddelete(index)}} />
            
          </div>
        </div>
          )
        })}
        
      </div>

      

    </>
  );
};


export default Todo;
