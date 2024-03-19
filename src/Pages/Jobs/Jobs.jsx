import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/',{replace:'true'})
    },[navigate])
    return (
        <>
            
        </>
    );
};

export default Jobs;