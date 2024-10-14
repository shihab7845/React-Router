import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function Occupation() {
    const OccupationX = useLoaderData();
    const { occupation } = OccupationX;
    const naviage = useNavigate()

    const goToprofile = () =>{
        
        naviage(-1)
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-700">Occupation is: <span className="font-bold text-blue-600">{occupation}</span></p>

            <button  className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-200" onClick={goToprofile}>Back</button>
        </div>

    );
}
