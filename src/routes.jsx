import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <Shop />
    },
    {
        path: "cart",
        element: <Cart />
    }
];
export default routes;