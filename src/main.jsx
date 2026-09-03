import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "shop",
        element: <Shop />
    },
    {
        path: "cart",
        element: <Cart />
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
