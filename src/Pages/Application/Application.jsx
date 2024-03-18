import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../Shared/LoadingPage/LoadingPage';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import DropDown from '../../Components/DropDown';
import CandidateList from './CandidateList';

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

    const { refetchCandidate, data: candidate = [], isLoadingCandidate, errorCandidate } = useQuery({
        queryKey: ['all-data-candidate'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-candidates?role=65f71f368d2df6628388f946&status=all`);
            console.log(res.data.result)
            return res.data.result;
        }
    })

    const [selectedOption, setSelectedOption] = useState(null);
  
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

    const [activeContent, setActiveContent] = useState('all');

  const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };


    if (isLoading) {
        return <LoadingPage />
    }
    if (error) {
        console.log(error)
        return <ErrorPage />
    }
    if (isLoadingCandidate) {
        return <LoadingPage />
    }
    if (errorCandidate) {
        console.log(error)
        return <ErrorPage />
    }
    return (
        <>
        <div className='bg-[#E0EDEA] p-6 py-10'>
          <div>
            <h3 className='text-lg font-semibold'>Application</h3>
            <p className=' font-medium text-sm pt-4 pb-2'>On Going Recruitment</p>
            <div>
              <DropDown options={data.allJobs} onSelect={handleSelect} />
              {/* {selectedOption && (
        <p className="mt-4">Selected Position: {selectedOption.position}</p>
      )} */}
            </div>
          </div>
        <div className="flex flex-col items-center mt-4">
          <div className='flex justify-between mb-2 bg-white rounded-md px-4 w-full'>
          <div className="flex gap-4">
          <button
            className={`p-2 md:px-4 md:py-4 md:text-sm font-semibold text-black ${activeContent === 'all' ? 'border-b-2 border-[#11998E]' : 'border-none'}`}
            onClick={() => handleContentSwitch('all')}
          >
            All
          </button>
          <button
            className={`p-2 md:px-4 md:py-4 md:text-sm font-semibold ${activeContent === 'shortlisted' ? 'border-b-2 border-[#11998E]' : 'border-none'}`}
            onClick={() => handleContentSwitch('shortlisted')}
          >
            Shortlisted
          </button>
          <button
            className={`p-2 md:px-4 md:py-4 md:text-sm font-semibold ${activeContent === 'inProcess' ? 'border-b-2 border-[#11998E]' : 'border-none'}`}
            onClick={() => handleContentSwitch('inProcess')}
          >
            In process
          </button>
          <button
            className={`p-2 md:px-4 md:py-4 md:text-sm font-semibold ${activeContent === 'onHold' ? 'border-b-2 border-[#11998E]' : 'border-none'}`}
            onClick={() => handleContentSwitch('onHold')}
          >
            On Hold
          </button>
          <button
            className={`p-2 md:px-4 md:py-4 md:text-sm font-semibold ${activeContent === 'rejected' ? 'border-b-2 border-[#11998E]' : 'border-none'}`}
            onClick={() => handleContentSwitch('rejected')}
          >
            rejected
          </button>
        </div>
            <div className='flex items-center gap-4 p-2 md:px-4 md:py-4 md:text-sm font-semibold text-black'>
              <div><button>Search</button></div>
              <div><button>Filter</button></div>
            </div>
          </div>
        

        <div className="py-2 w-full">
          {activeContent === 'all' && (
            <div className=''>
              {
                candidate?.map(candidate => <CandidateList key={candidate?._id} candidate={candidate} />
                )
              }
              
            </div>
          )}

          {activeContent === 'shortlisted' && (
            <div className=''>
            B
        </div>
          )}

          {activeContent === 'inProcess' && (
            <div className=''>
            C
        </div>
          )}

          {activeContent === 'onHold' && (
            <div className=''>
            D
        </div>
          )}

          {activeContent === 'rejected' && (
            <div className=''>
            E
        </div>
          )}
        </div>
      </div>
      </div>
        </>
    );
};

export default Application;