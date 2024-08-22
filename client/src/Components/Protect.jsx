import { Outlet } from "react-router-dom";
import Registration from "../Pages/userRegistration";

const authUser=()=>{
    const User ={Registration : true}
    return User.Registration
}
const Protect = ()=>{
    const isAuthUser = authUser();
    return isAuthUser ? <Outlet/> : <Registration/>
}

export default Protect;