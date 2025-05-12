import { useEffect, useState, useCallback } from 'react';
import useAuth from './useAuth';
import useAxiosCart from './useAxiosCart';
import { useQuery } from '@tanstack/react-query'


const useFavLists = () => {
  // const [favLists, setFavLists] = useState([]);
  const {user, loading} = useAuth()
  const [axiosSecure] = useAxiosCart()
  const { refetch, data: favLists = []} = useQuery({
    queryKey: ['favLists', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const res  = await axiosSecure.get(`/favLists?email=${user?.email}`)
      console.log(res.data);
      return res.data 
      
    }
  })

  return [favLists, refetch];
};

export default useFavLists;
