import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import User from './Components/User.jsx';
import About from './Components/About.jsx';
import Occupation from './Components/Occupation.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
   
    children:[
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path: "/user",
        loader: () => fetch('/data.json').then(res => res.json()),
        element: <User></User>
      },
      {
        path: "/user/:userId",
        loader: ({ params }) => {
          return fetch('/data.json')
            .then(res => res.json())
            .then(data => {
              // Find the specific user by userId
              const user = data.find(user => user.id === parseInt(params.userId));
              
              // Handle the case where the user is not found
              if (!user) {
                throw new Error('User not found');
              }
              
              // Return the user data
              return user;
            });
        },
        element: <Occupation></Occupation>
      }
      
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
