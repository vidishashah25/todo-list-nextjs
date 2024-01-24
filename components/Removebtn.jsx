"use client"
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';


function Removebtn({ id }) {

    const router = useRouter()
    const removeTodo = async(e) =>{
        e.preventDefault()
        const confirmed = confirm("Are you sure?");
        if(confirmed)
        {
            const res = await fetch(`http://localhost:3000/api/todos?id=${id}`,{method: "DELETE"} )
            if(res.ok)
            {
                router.refresh()
            }
            
        }
    }

  return (
    <button className='text-red-400' onClick={(e)=>removeTodo(e)}>
      <HiOutlineTrash size={24}/>
    </button>

  )
}

export default Removebtn
