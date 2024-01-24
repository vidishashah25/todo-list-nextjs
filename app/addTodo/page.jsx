"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!title || !description)
  {
    alert("Title & Description are Required")
    return 
  }
  try{
    const res = await fetch(
      "http://localhost:3000/api/todos/",
      {method: "POST",
      headers : {"Content-type":"application/json"},
      body : JSON.stringify({title, description})
  })
    if(res.ok)
    {
      router.push("/")
    }
    else{
      throw new Error("Failed to create Todo")
    }
  }
  catch(err)
  {
    console.log(err)
  }
  
}

  return (
    <form 
      onSubmit={(e)=>handleSubmit(e)}
      className='flex flex-col gap-3 max-w-3xl mx-auto p-4'>
        <input 
          type="text" 
          className='border border-slate-500 px-8 py-2' 
          placeholder='Todo Title'
          value = {title}
          onChange={(e)=>{setTitle(e.target.value)}}  
          />
        <input 
          type="text" 
          className='border border-slate-500 px-8 py-2' 
          placeholder='Todo Description'
          value = {description}
          onChange={(e)=>{setDescription(e.target.value)}}  
          />
        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit' type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo