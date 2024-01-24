"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function EditTodoForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setnewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await fetch (`http://localhost:3000/api/todos/${id}`, 
      {method: "PUT",
      headers : {"Content-type":"application/json"},
      body : JSON.stringify({newTitle, newDescription})
  })
    if(!res.ok){
      throw new Error("Failed to update Todo")
    }
    router.push("/")
    router.refresh()
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 max-w-3xl mx-auto p-4'>
        <input 
          type="text" 
          className='border border-slate-500 px-8 py-2' 
          value = {newTitle}
          onChange={(e)=>{setNewTitle(e.target.value)}}
          placeholder='Todo Title'/>
        <input 
            type="text" 
            className='border border-slate-500 px-8 py-2' 
            value = {newDescription}
            onChange={(e)=>{setnewDescription(e.target.value)}}
            placeholder='Todo Description'/>
        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Edit Todo</button>
    </form>
  )
}

export default EditTodoForm