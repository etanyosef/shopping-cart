import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart";
import Product from "./components/Shop/Product";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "product/:productId",
        element: <Product />,
    },
];
export default routes;