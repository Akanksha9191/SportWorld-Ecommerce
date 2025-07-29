import NavbarComp from "../components/Navbar"
import MostPopularComp from '../components/MostPopularComp';
import HomeCarouselsComp from '../components/HomeCarouselsComp';
import FooterComp from '../components/FooterComp';
import LogoComp from '../components/LogoComp';
import BackToAdminButton from '../components/sportworld_admin/BackToAdminButton'




const HomePage = ()=>{
    return (
        <>
      <LogoComp/>

      {/* navbar */}
      <NavbarComp/>
      
      <HomeCarouselsComp/>
      <MostPopularComp/>

      {/* Footer */}
      <FooterComp/>

      {/* if role is admin (applicable) */}
      <BackToAdminButton/>
        </>
      );
}
export default HomePage;