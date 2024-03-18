import { useEffect } from 'react';
import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_serverAddress}`, 
    withCredentials: true,
});
const useAxiosSecure = () => {
  
    useEffect(() => {
     
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log(error)
            
                }
                return Promise.reject(error);
            }
        );
    }, []);

    return axiosSecure;
};

export default useAxiosSecure;