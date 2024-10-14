import React from 'react'
import Navigation from './Navigation'
import { Outlet, useNavigation } from 'react-router-dom'
import Contact from './Contact'
import User from './User'
import About from './About'

export default function Home() {

  const navigation = useNavigation()

  return (
    <div>
        <Navigation></Navigation>

      < h1 className='text-5xl font-semibold text-red-600'>This is Home Component</h1>

      
      {
        navigation.state === "loading" ?  <p className="text-center text-blue-500 font-bold text-lg animate-pulse">
        Loading...
      </p> : <Outlet />
      }
      
      
     

      
      
        


    </div>
  )
}
