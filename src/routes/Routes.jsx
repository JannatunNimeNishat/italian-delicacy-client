import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import ChefsRecipe from "../pages/ChefsRecipe/ChefsRecipe";
import getChefsRecipe from "../utilitie/helper";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/chefs')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/ChefsRecipe/:id',
                element:<ChefsRecipe></ChefsRecipe>
                // loader: ({params}) => getChefsRecipe(params.id)
            }
        ]
    }
])

export default router;