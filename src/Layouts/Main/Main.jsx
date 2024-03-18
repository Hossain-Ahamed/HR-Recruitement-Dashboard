import React, { useState } from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query'
import LoadingPage from '../../Pages/Shared/LoadingPage/LoadingPage';
import ErrorPage from '../../Pages/Shared/ErrorPage/ErrorPage';
const Main = () => {
    const [isChecked, setChecked] = useState(false);


    return (
        <main>


            {/* Button that acts as a checkbox -- for mobile */}
            <nav className=" sm:hidden max-w-full" >
                <ul className="sm:hidden" >
                    <label htmlFor="sidebarToggle">
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            ></path>
                        </svg>
                    </label>
                </ul>

                <span className="flex sm:hidden gap-4">
                    <Link className="font-bold text-inherit text-red-500 cursor-pointer" href="/">Home</Link>
                </span>
            </nav>


            <input
                type="checkbox"
                id="sidebarToggle"
                className="hidden"
                checked={isChecked}
                onChange={() => setChecked(!isChecked)}
            />

            {/* Sidebar  for moobile -- and desktopp*/}
            <SideNav isChecked={isChecked} setChecked={setChecked} />

            {/* main page content */}
            <div className="p-4 sm:ml-64 max-w-[2560px] mx-auto p">
                <Outlet />
            </div>


        </main>
    );
};

export default Main;