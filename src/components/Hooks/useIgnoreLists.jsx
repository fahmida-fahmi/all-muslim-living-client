import { useEffect, useState, useCallback } from 'react';
import useAuth from './useAuth';
import useAxiosCart from './useAxiosCart';
import { useQuery } from '@tanstack/react-query';

const useIgnoreLists = () => {

  const {user, loading} = useAuth()
  // const [ignoreLists, setIgnoreLists] = useState([]);
  const [axiosSecure] = useAxiosCart()
  const {refetch, data: ignoreLists = []} = useQuery({
    queryKey : ['ignoreLists', user?.email],
    enabled: !loading,
    queryFn : async () =>{
      const res = await axiosSecure.get(`/ignoreLists?email=${user?.email}`)
      console.log(res.data)
      return res.data
    }
  })

  // const fetchIgnoreLists = useCallback(() => {
  //   fetch('https://all-muslim-living-server.onrender.com/ignoreLists')
  //     .then(res => res.json())
  //     .then(data => setIgnoreLists(data));
  // }, []);

  // useEffect(() => {
  //   fetchIgnoreLists();
  // }, [fetchIgnoreLists]);

  return [ignoreLists, refetch];
};

export default useIgnoreLists;
