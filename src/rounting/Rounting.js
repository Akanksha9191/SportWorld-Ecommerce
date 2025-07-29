import { createBrowserRouter} from "react-router-dom";
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
import MenWomenShoesPage from "../pages/shoes/MenWomenShoesPage";
import KidsShooesPage from "../pages/shoes/KidsShoesPage";
import PageNotFound from "../pages/PageNotFound";
import PrivateComp from "../components/PrivateComp";
import HockeyPage from "../pages/allsports/HockeyPage";
import AdminPage from "../pages/AdminPage";

 const Rounting = createBrowserRouter([

    {path:"", element:<PrivateComp>
      <HomePage/>
    </PrivateComp>},   // Redirect root to online-sports-store
    {path:"login", element:<LoginPage/>},
    {path:"register", element:<RegisterComp/>},
    // {path:"online-sports-store", element:<PrivateComp>
    //   <HomePage/>
    // </PrivateComp>
    // },
    
    {path:"aboutus", element:<AboutusPage/>},
    {path:"cricket", element:<CricketPage/>},
    {path:"cart", element:<CartComp/>},
    {path:'/enquiryform', element:<EnquiryFormComp/>},
    {path:'/addtocart/:title', element:<CartPage/>},
    {path:'contactus', element:<ContactusPage/>},
    {path:'football', element:<FootballPage/>},
    {path:'men-women-shoes', element:<MenWomenShoesPage/>},
    {path:'kids-shoes', element:<KidsShooesPage/>},
    {path:'hockey', element:<HockeyPage/>},
    {path:'sportworld-admin', element:<AdminPage/>},

    {path:'*', element:<PageNotFound/> }
    
    
    

 ])
 
 export default Rounting;