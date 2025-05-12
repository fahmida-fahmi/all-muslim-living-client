import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosCart from './useAxiosCart';
import useUsers from './useUsers';

const useBiodatasInfo = () => {
    // const [biodatasInfo, setBiodatasInfo] = useState([])
    const [axiosSecure] = useAxiosCart()
    const { loading} = useAuth()
    const [userData] = useUsers()
    // console.log(userData?.email)
    // console.log(user?.email)

    const {refetch, data: biodatas } = useQuery({
        queryKey: ['biodatas', userData?.email],
        enabled: !loading && !!userData?.email,
        queryFn: async () =>{
            const res = await axiosSecure.get(`/biodatas?email=${userData?.email}`)
            // console.log(res.data)
            return res.data
        }
    })
    // console.log(biodatas)
    return[biodatas, refetch]
};

export default useBiodatasInfo;
