import React from 'react'
import Removebtn from './Removebtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getTodo = async () => {
  try{
    const res = await fetch("http://localhost:3000/api/todos",{cache:"no-store"});
    if(!res.ok){
      throw new Error("Failed to fetch the Todos");
    }
    
    return res.json();
  }
  catch(err){
    console.log(err)
  }
} 

const TodoList = async () => {

  const { todos } = await getTodo();

  return (
    <>
    {todos.map((t)=>(
      <div className='p-4 border border-slate-300 flex justify-between'>
            <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <p>{t.description}</p>
            </div>
        
            <div className='flex gap-2 items-start'>
                <Removebtn id = {t._id}/>
                <Link href = {`/editTodo/${t._id}`} ><HiPencilAlt size={24}/></Link>
            </div>
        </div>
    ))}
        
    </>
  )
}

export default TodoList
