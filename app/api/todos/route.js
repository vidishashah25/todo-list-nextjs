import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server"; 

export async function POST (req){
    const { title, description } = await req.json();
    await connectMongoDB()
    await Todo.create({title, description})

    return NextResponse.json({message: 'Todo created'}, {status: 201})
}