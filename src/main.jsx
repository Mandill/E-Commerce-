import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx"
import NoPage from "../src/pages/NoPage.jsx"
import ProductDetail from './pages/ProductDetail.jsx';
import CartPage from './pages/CartPage.jsx';
import AllProduct from "./pages/AllProduct.jsx"
import Signup from './pages/Signup.jsx';
import Login from './pages/Signin.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import { Provider } from 'react-redux'
import store from './store/store.js';
import { Toaster } from 'react-hot-toast';
import ProtectedforUser from './components/ProtectedRoute/ProtectedforUser.jsx';
import ProtectedforAdmin from './components/ProtectedRoute/ProtectedforAdim.jsx';
import AddProductForm from './components/ProtectedRoute/AddProductForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path: "/",
      element:<HomePage/>,
      },
      {
      path: "/*",
      element:<NoPage/>,
      },
      {
      path: "/productdetail/:id",
      element:<ProductDetail/>,
      },
      {
      path: "/cart",
      element:<CartPage/>,
      },
      {
      path: "/allproduct/",
      element:<AllProduct/>,
      },
      {
      path: "/signup",
      element:<Signup/>,
      },
      {
      path: "/login",
      element:<Login/>,
      },
      {
      
      path: "/user-dashboard",
      element:<ProtectedforUser>
                  <UserDashboard/>
              </ProtectedforUser>
      },
      {
      path: "/admin-dashboard",
      element:<ProtectedforAdmin>
                 <AdminDashboard/>
            </ProtectedforAdmin>
      },
      {
      path: "/addproductform",
      element:<ProtectedforAdmin>
                 <AddProductForm/>
            </ProtectedforAdmin>
      },
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>
    <Provider store={store}>
       <RouterProvider router={router} />
       <Toaster/>
    </Provider>
  </ThemeProvider>   
  </React.StrictMode>,
)
