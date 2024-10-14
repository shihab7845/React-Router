import React from 'react'
import { Link, Navigate } from 'react-router-dom'
export default function Details({ detail }) {
    const { name, email, contact, id } = detail

   

    return (
        <div className='space-y-4 m-6 border-red-500 p-8 bg-gray-800 rounded-lg border-4 shadow-lg'>
            <p className='text-2xl text-yellow-400 font-semibold'>Name: {detail.name}</p>
            <p className='text-2xl text-yellow-400 font-medium'>Email: {detail.email}</p>
            <p className='text-2xl text-yellow-400 font-medium'>Contact: {detail.contact}</p>
            <Link
                to={`/user/${id}`}
                className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
                Click here to see occupation
            </Link>
           

        </div>

    )
}
