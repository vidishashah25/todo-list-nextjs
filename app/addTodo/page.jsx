import React from 'react'

function AddTodo() {
  return (
    <form className='flex flex-col gap-3 max-w-3xl mx-auto p-4'>
        <input type="text" className='border border-slate-500 px-8 py-2' placeholder='Todo Title'/>
        <input type="text" className='border border-slate-500 px-8 py-2' placeholder='Todo Description'/>
        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Todo</button>
    </form>
  )
}

export default AddTodo