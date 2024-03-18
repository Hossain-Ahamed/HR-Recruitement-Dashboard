import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";



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
           
        ]
    }


])
