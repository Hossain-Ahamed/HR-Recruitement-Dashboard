import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';
import ErrorPage from '../../Shared/ErrorPage/ErrorPage';
const ViewJobDetail = () => {

    const { job_id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { refetch, data, isLoading, error } = useQuery({
        queryKey: ['job-detail',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-job-detail?_id=${job_id}`);
            return res.data;
        }
    })

    if (isLoading) {
        return <LoadingPage />
    }

    if (error) {
        return <ErrorPage />
    }

    return (
        <>
            <div className="max-w-lg mx-auto p-6">
                <h2 className="text-xl font-semibold mb-4">{data.position}</h2>
                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Department:</span> {data.department}
                </p>
                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Location:</span> {data.location}
                </p>
                <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Salary:</span> {data.salary}
                </p>
                <p className="text-gray-700 mb-6">{data.jobDescription}</p>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
                    <ul className="list-disc pl-4">
                        {data.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        {data.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-gray-700">
                    <span className="font-semibold">Posted:</span>{' '}
                    {new Date(data.timestamp.posted).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })}
                </p>
            </div>
        </>
    );
};

export default ViewJobDetail;