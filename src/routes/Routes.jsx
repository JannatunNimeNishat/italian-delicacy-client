import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import ChefsRecipe from "../pages/ChefsRecipe/ChefsRecipe";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyFavoriteRecipes from "../pages/MyFavoriteRecipes/MyFavoriteRecipes";

import getLikedRecipes from "../utilitie/helper"
import Userdetails from "../pages/Userdetails/Userdetails";

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
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/ChefsRecipe/:id',
                element:<PrivateRoute><ChefsRecipe></ChefsRecipe></PrivateRoute>
                
            },
            {
                path:'/my_favorite_recipes',
                element:<MyFavoriteRecipes></MyFavoriteRecipes>,
                loader: () => getLikedRecipes()
            },
            {
                path:'/userDetails',
                element:<Userdetails></Userdetails>
            }
        ]
    }
])

export default router;