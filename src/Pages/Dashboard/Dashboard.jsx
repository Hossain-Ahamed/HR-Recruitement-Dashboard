import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
const Dashboard = () => {

    const axiosSecure = useAxiosSecure();
    const { refetch, data: jobData, isLoading, error } = useQuery({
        queryKey: ['job-data'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard-data`);
            console.log(res.data);
            console.log(res.data.AllJobApplicantCount);
            return res.data;
        }
    })

    const jobApplicantCounts = jobData?.AllJobApplicantCount || []; 

    const applicantStatusData = jobData?.ApplicantByStatus || [];

    const totalApplicants = applicantStatusData.reduce((acc, status) => acc + status.sum, 0);

    const statusColors = {
        'Appliations': '#FF5733',
        'Onhold': '#3366FF',
        'Rejected': '#33FF77',
        'InProcess': '#FF33FF',
        'Finalised': '#FFFF33',
        'Shortlisted': '#33FFFF'
    };

    // Process status data to calculate percentages and assign colors
    const chartData = applicantStatusData.map(status => ({
        y: status._id,
        x: Math.round((status.sum / totalApplicants) * 100), // Calculate percentage
        color: statusColors[status._id] || '#000000'
    }));

    const optionsStatus = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
            stackType: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: chartData.map(data => data.x)
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        }
    };

    const [options,setOptions] = useState({})
    const data = {
          
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      
      
      };
    

    return (
        <>
        <div className='flex gap-20 justify-center'>
            <div className='grid grid-cols-2 gap-6 border-r-2 border-[#92C1BD]'> 
            <div>
              <ReactApexChart options={data.options} series={data.series} type="donut" width={500} height={320} />
        </div>
        <div>
        <ReactApexChart options={optionsStatus} series={[{ data: chartData }]} type="bar" height={350} />
        </div>
        <div>
              <ReactApexChart options={data.options} series={data.series} type="donut" width={500} height={320} />
        </div>
        <div>
              <ReactApexChart options={data.options} series={data.series} type="donut" width={500} height={320} />
        </div>
            </div>
        <div className='mt-12'>
            <div className='grid justify-items-center pl-20'>
            <h3 className='text-2xl font-semibold text-black'>Welcome back <span className=' uppercase'>xtz</span></h3>
            <Link to="/jobs/create" className='bg-[#11998E] font-medium text-xs text-white px-10 py-3 rounded-md mt-6'>+ Create New Job</Link>
            </div>
            <div className='pt-16 pl-6'>
            <p className='font-mediumm text-xs text-black'>Recent Added Jobs</p>
            <div>
            {jobApplicantCounts?.map(jobApplicantCount => (
                <Link to={`/jobs/details/${jobApplicantCount?.role}`} key={jobApplicantCount?.role}>
                    <div  jobApplicantCount={jobApplicantCount} className='flex bg-[#B9F2E5] gap-6 my-4 rounded-md px-2 items-center'>
                        <p className='bg-[#11998E] m-2 px-4 py-2 rounded-sm text-white'>{jobApplicantCount?.totalApplicants}</p>
                        <div>
                        <p className='text-sm font-medium text-black'>{jobApplicantCount?.position}</p>
                        <p className='text-xs font-light'>Total Applicantion</p>
                        </div>
                    </div>
                    </Link>
                ))}
                
            </div>
            
            </div>
        </div>
        </div>
        </>
    );
};

export default Dashboard;