import NavbarComp from "../components/Navbar"
import MostPopularComp from '../components/MostPopularComp';
import HomeCarouselsComp from '../components/HomeCarouselsComp';
import FooterComp from '../components/FooterComp';
import LogoComp from '../components/LogoComp';




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
        </>
      );
}
export default HomePage;