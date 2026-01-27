import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from "./components/NotFound";
import './App.css';

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
    path: "/navbar",
    element: <Navbar />
  },
  {
    path: "/home",
    element: 
    <div>
      <Home />
    </div>,
    // children: [
    //   path: 'about',
    //   element: 
    // ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
