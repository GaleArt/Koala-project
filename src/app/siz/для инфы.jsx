'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const NewPage = ({params}) => {
    const router = useRouter();
    const [values, setValues] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        if(params.id) {
            fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setValues({
                    title: data.title,
                    description: data.description
                })
            })
        }
    }, [params.id])
    

    const onSubmit = async (e) => {
        e.preventDefault()
        if(values.title  === '') return

        if(params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({title: values.title, description: values.description}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = res.json()
            console.log(data)
        } else {
            await fetch('/api/tasks', {
                method: "POST",
                body: JSON.stringify({title: values.title, description: values.description}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        router.refresh()
        router.push('/')
    }

    const deleteTask = async () => {
        await fetch(`/api/tasks/${params.id}`, {
            method: "DELETE",
        })
        router.refresh()
        router.push('/')
    }

    return (
        <div className='h-[calc(80vh)] flex justify-center items-center text-black'>
            <form className='bg-slate-800 p-10 flex flex-col items-center justify-items-center gap-5 colums text-xl lg:w-1/2 md:1/2 sm:w-full' onSubmit={onSubmit}>
                <h2 className='text-4xl text-white font-bold'>{params.id ? 'Edit Task' : 'Create new task'}</h2>
                <input type="text" name='title' onChange={(e) => setValues({...values, title: e.target.value})} value={values.title} placeholder='Title' className='border border-gray-400 w-full p-4 outline-none' autoFocus/>
                <textarea name="description" placeholder='Description' onChange={(e) => setValues({...values, description: e.target.value})} value={values.description} rows={5} className='border border-gray-400 w-full p-4 resize-none outline-none'></textarea>
                <div className="flex items-center justify-between gap-5 w-full">
                    <button type="submit" className='bg-indigo-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-indigo-600 transition-colors w-28 text-2xl font-bold'>{params.id ? 'Edit' : 'Create'}</button>
                    {params.id ? <button type="button" onClick={() => deleteTask()} className='bg-red-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-red-600 transition-colors w-28 text-2xl font-bold'>Delete</button> : null}
                </div>
                
            </form>
        </div>
    )
}

export default NewPage