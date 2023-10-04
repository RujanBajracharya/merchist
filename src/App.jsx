import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';

function App() {
  const Layout = () => {
    return(
      <div className="main">
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
