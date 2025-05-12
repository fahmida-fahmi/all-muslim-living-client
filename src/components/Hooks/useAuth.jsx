import { useContext } from "react";
import { AuthContext } from "../../Shared/Context/Context";


const useAuth = () => {
    const auth = useContext(AuthContext)

    return auth
};

export default useAuth;