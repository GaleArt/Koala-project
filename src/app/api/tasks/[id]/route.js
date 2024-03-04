import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    try {
        if(params.id === 'undefined') return NextResponse.json({message: "Error params"})
        const task = await prisma().task.findFirst({
            where: {
                id: +params.id
            }
        })
        if(!task) return NextResponse.json({message: "Task not found"})
        return NextResponse.json(task)
    } catch (error) {
        return NextResponse.json(error.message)
    }
    
}

export async function PUT(request, {params}) {
    try {
        const body = request.json()
        const taskUpdated = await prisma().task.update({
            where: {
                id: +params.id
            },
            data: body
        })
        if(!taskUpdated) return NextResponse.json({message: "Task not found"})
        return NextResponse.json(taskUpdated)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export async function DELETE(request, {params}) {
    try {
        const task = await prisma().task.delete({
            where: {
                id: +params.id
            }
        })
        if(!task) return NextResponse.json({message: "Task not found"})
        return NextResponse.json(task)
    } catch (error) {
        return NextResponse.json(error.message)
    }
    
}