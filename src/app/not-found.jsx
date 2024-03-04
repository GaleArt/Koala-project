import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <section className='flex h-[calc(90vh)] justify-center items-center'>
            <div className='flex items-center flex-col gap-10'>
                <h1 className='text-center text-4xl'>Запрос не найден | <b>404</b></h1>
                <Link href='/' className='p-3 rounded-md bg-indigo-500 hover:bg-indigo-400 text-2xl'>
                    На домашнюю
                </Link>
            </div>
        </section>
    )
}

export default NotFound;
