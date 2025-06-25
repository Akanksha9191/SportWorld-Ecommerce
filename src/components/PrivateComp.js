import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateComp = ({children})=>{
    const Navigate = useNavigate();
    const isAuthentication = sessionStorage.getItem("isLogin") === "true"; //retrieves a value stored in the browsers session stoarage
    useEffect(()=>{
        //useeffect runs when the comp mountsor when isAuthenticated or navigate changes
        if(!isAuthentication){
            //if is Authenticated is false, the user  
            Navigate("/")//redirect login page
        }
    },[])
    return(
        <>{children}</>
    )
}
export default PrivateComp 