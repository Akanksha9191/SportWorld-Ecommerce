import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage"
import HomePage from "../pages/HomePage";
import RegisterComp from "../components/RegisterComp";
import AboutusPage from "../pages/AboutusPage";
import CartComp from "../pages/CartPage";
import EnquiryFormComp from "../pages/EnquiryForm";
import ContactusPage from "../pages/ContactusPage"
import FootballPage from "../pages/allsports/FootballPage";
import CartPage from "../pages/CartPage";
import CricketPage from "../pages/allsports/CricketPage";


 const Rounting = createBrowserRouter([
    {path:"", element:<LoginPage/>},
    {path:"register", element:<RegisterComp/>},
    {path:"online-sports-store", element:<HomePage/>},
    {path:"/aboutus", element:<AboutusPage/>},
    {path:"/cricket", element:<CricketPage/>},
    {path:"/cart", element:<CartComp/>},
    {path:'/enquiryform', element:<EnquiryFormComp/>},
    {path:'/addtocart/:title', element:<CartPage/>},
    {path:'/contactus', element:<ContactusPage/>},
    {path:'/football', element:<FootballPage/>}
    
    
    

 ])
 
 export default Rounting;