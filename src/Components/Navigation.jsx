import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {

    const [active,setActive]=useState(false)
    
    const handleClick = () => {
        setActive(!active)
    };

    return (
        <div>
            <p className=' text-3xl font-extrabold text-green-400'>Navigation Bar</p>

            <ul className='space-x-7 p-3'>
                < Link className='border border-red-400 p-1 rounded-lg' to='/about'>About</ Link >

                
                < NavLink className={({isActive })=>` border border-red-400 p-1 rounded-lg  ${isActive? 'underline':" "}`}   to='/contact'>Contact</ NavLink >




                < NavLink  className={`border border-red-400 p-1 rounded-lg ${active? 'underline':" "}`} to='/user' onClick={handleClick}>User</ NavLink  >
            </ul>
        </div>
    )
}
