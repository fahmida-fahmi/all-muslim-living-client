import { useQuery } from '@tanstack/react-query';
import useAxiosCart from './useAxiosCart';
import useAuth from './useAuth';

const useUsers = () => {
  const [axiosSecure] = useAxiosCart();
  const { user = null, loading } = useAuth();

  const userEmail = user?.email;

  const { refetch, data: userData } = useQuery({
    queryKey: ['users', userEmail],
    enabled: !loading && !!userEmail,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${userEmail}`);
      return res.data?.user || {};
    },
  });

  return [userData, refetch];
};
export default useUsers;
