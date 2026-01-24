import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
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
