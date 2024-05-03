import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Cart, Error, Home, Products, Wishlist} from './index.js'


import { store } from './redux/Store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        children:[
          // {
          //   path: "products",
          //   element: <Products/>
          // }
        ]
      },
      {
        path: "wishlist",
        element: <Wishlist/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "products",
        element: <Products/>
      }
    ],
    errorElement: <Error/> ,
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>  
  </Provider>,
  </React.StrictMode>,
)