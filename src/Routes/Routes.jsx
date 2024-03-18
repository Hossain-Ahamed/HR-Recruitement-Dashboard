import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Application from "../Pages/Application/Application";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <>fkadjs</>
            },
            {
                path: '/application',
                element: <Application/>
            },
           
        ]
    }


])
