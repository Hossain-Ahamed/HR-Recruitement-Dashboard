import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Shared/LoadingPage/LoadingPage';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';

const Application = () => {
    
    const axiosSecure = useAxiosSecure();
    const { refetch, data, isLoading, error } = useQuery({
        queryKey: ['all-data'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-counted-applicant-by-stauts-and-all-jobs`);
            console.log(res.data)
            return res.data;
        }
    })


    if (isLoading) {
        return <LoadingPage />
    }
    if (error) {
        console.log(error)
        return <ErrorPage />
    }
    return (
        <div>
            s
        </div>
    );
};

export default Application;