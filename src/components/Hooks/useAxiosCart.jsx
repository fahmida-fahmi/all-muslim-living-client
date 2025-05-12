import axios from 'axios';
import  {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const useAxiosCart = () => {
    // const {logOut} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = axios.create({
        // baseURL: 'https://the-giving-plate.vercel.app/',
        baseURL: 'https://all-muslim-living-server.onrender.com/',
    })

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config) =>{
            const token = localStorage.getItem('access-token')
            if(token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) =>{
                if(error.response && (error.response.status === 401 ||error.response.status === 403)) {
                    // await logOut()
                    // navigate('/login')
                    console.log('hello');
                }
                return Promise.reject(error)
            }
        )
    // }, [logOut, navigate, axiosSecure])
}, [navigate, axiosSecure])
    
    return [axiosSecure]
};

export default useAxiosCart;