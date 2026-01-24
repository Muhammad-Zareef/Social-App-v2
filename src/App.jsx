import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar />
      <Login />
    </div>,
  },
  {
    path: "/signup",
    element: 
    <div>
      <Navbar />
      <Signup />
    </div>,
  },
  {
    path: "/home",
    element: 
    <div>
      <Home />
    </div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
