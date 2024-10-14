import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';

export default function User() {
    const userData = useLoaderData();

    return (
        <div>
            <p className='text-3xl text-yellow-300'>This is the user component</p>
            <h1>Total users: {userData?.length || 0}</h1>

            <div className='grid grid-cols-3'>
                {
                    userData.map((item,index)=>
                    <Details key={index} detail={item}></Details>
                    )
                }
            </div>
        </div>
    );
}
