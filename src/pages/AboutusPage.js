import ImageComp from "../components/ImageComp";
import { Image } from "react-bootstrap";
import LogoComp from "../components/LogoComp";
import FooterComp from "../components/FooterComp";
import { Link } from "react-router-dom";
import NavbarComp from "../components/Navbar";

const AboutusPage = ()=>{
    return(
        <div>
            <LogoComp/>
            <NavbarComp/>
            <div className="p-4" style={{marginTop:'160px'}}>
            <h1 
            className="text text-center fw-bold m-2 mb-4" 
            style={{color:'darkblue'}}
            >
                Our Story
            </h1>
            <div className="text justify-content-center m-5">
            <p style={{border:'1px solid blacl'}}>Founded in 2025, SportWorld was born out of a passion for sports and a vision to make high-quality sporting goods accessible to everyone. We started with a simple goal—to provide athletes and sports enthusiasts with top-notch gear at affordable prices.
                <br/>
            From the very beginning, our commitment has been to quality, customer satisfaction, and innovation. Whether you're a professional athlete, a fitness enthusiast, or just starting your sports journey, SportWorld is here to support you with premium products and exceptional service.
            <br/>
            As we continue to grow, we remain dedicated to our mission: empowering every sports lover with the best equipment to achieve their goals.
            </p>
            <p>
            Join us on this journey and make every game count with SportWorld!
            </p>
            </div>

            <div className="d-flex p-4">
            <div className="m-auto text-center">
            <Image src={ImageComp.OnlineShop} rounded />
            <p className="">
            <b>SHOP ONLINE 24/7</b>
            <br/>
            Shop On The SportWorld App
            </p>
            </div >

            <div className="m-auto text-center">
            <Image src={ImageComp.Freeshipping} rounded />
            <p className="">
            <b>SHOP ONLINE 24/7</b>
            <br/>
            Shop On The SportWorld App
            </p>
            </div>
            
            <div className="m-auto text-center"> 
            <Image src={ImageComp.SecureShopping} rounded />
            <p className="">
            <b>SHOP ONLINE 24/7</b>
            <br/>
            Shop On The SportWorld App
            </p>
            </div>
            </div>

            <div className="text text-center">
            <Link 
            to={"/online-sports-store"}
            style={{padding:'5px', background:'darkblue', color:'white', borderRadius:'10px', margin:"40px"}}
            >
                Back to home
            </Link>
            </div>

        </div>
        <FooterComp/>
        </div>
    )
}
export default AboutusPage;