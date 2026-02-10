import './App.css'
import Footer from './components/common/Footer'
import Navbaar from './components/common/Navbaar'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home';

const MainLayout = () => {
  return (
    <>
      <Navbaar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
