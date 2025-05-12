import { useQuery } from '@tanstack/react-query';
import useAxiosCart from './useAxiosCart';

const useBiodatas = () => {
    const [axiosSecure] = useAxiosCart();

    const { refetch, data: allBiodatas = [] } = useQuery({
        queryKey: ['biodatas'],
        queryFn: async () => {
            const res = await axiosSecure.get('/biodatas'); // no filtering by email
            // console.log(res.data);
            return res.data;
        }
    });

    return [allBiodatas, refetch];
};

export default useBiodatas;
