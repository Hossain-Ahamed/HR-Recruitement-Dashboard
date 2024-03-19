import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Application from "../Pages/Application/Application";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CreateJob from "../Pages/Jobs/CreateJob/CreateJob";
import ViewJobDetail from "../Pages/Jobs/ViewJobDetail/ViewJobDetail";
import Jobs from "../Pages/Jobs/Jobs";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/application',
                element: <Application/>
            },
            {
                path: '/jobs',
                element: <Jobs/>
            },
            {
                path: '/jobs/create',
                element: <CreateJob/>
            },
            {
                path: '/jobs/details/:job_id',
                element: <ViewJobDetail/>
            },
          
           
        ]
    }


])
