import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const tasks = await prisma().task.findMany()
        return NextResponse.json(tasks)
    } catch (error) {
        return NextResponse.json(error.message)
    }
    
}

export async function POST(request) {
    try {
        const { title, description } = await request.json()
        const task = await prisma().task.create({
            data: {
                title: title,
                description: description
            }
        })
        return new NextResponse.json({task})
    } catch (error) {
        return NextResponse.json(error.message)
    }
}