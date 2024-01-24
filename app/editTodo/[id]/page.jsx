import EditTodoForm from '@/components/EditTodoForm'
import React from 'react'

const editTodo = async(id) => {
    try {
      const res = await fetch (`http://localhost:3000/api/todos/${id}`, {cache:"no-store"})
      if(!res.ok)
      {
        throw new Error ("Failed to Update Todo")
      }
      return res.json();
    }
    catch(err)
    {
      console.log(err)
    }
}

const EditTodo = async({params}) => {
  const { id } = params;
  const {todo} = await editTodo(id);
  const { title, description } = todo;
  return (
    <EditTodoForm id= {id} title={title} description={description}/>
  )
}

export default EditTodo