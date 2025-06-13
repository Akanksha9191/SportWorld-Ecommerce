import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';// Icons for social media
import LocationOnIcon from '@mui/icons-material/LocationOn';// Icon for location
import PhoneIcon from '@mui/icons-material/Phone'; //Icon for phone
import EmailIcon from '@mui/icons-material/Email'; // Icon for email

const FooterComp = () => {
  return (
    <footer className="bg-dark text-light pt-3">
      <Container>
        <Row className="justify-content-between">
          {/* Company Info */}
          <Col md={5} className="mb-1 text">
            <h5>SPORTWORLD</h5>
            <p style={{textAlign:'justify'}}>
              Founded in <strong>2025</strong>, we are committed to providing the best sporting goods and services at an affordable cost.  
              <strong> CUSTOMER SATISFACTION</strong> and unmatched quality at reasonable prices have been our core principles since the beginning.
            </p>
          </Col>

       
          {/* Quick Links & Social Media */}
          <Col md={2}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-decoration-none"><FacebookIcon size={20} /></a>
              <a href="#" className="text-light text-decoration-none"><InstagramIcon size={20} /></a>
              <a href="#" className="text-light text-decoration-none"><PinterestIcon size={20} /></a>
            </div>
          </Col>

          {/* Quik links */}
          <Col md={2}>
            <h5 className="">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-light text-decoration-none">Discover Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">My Account</a></li>
            </ul>
          </Col>

                          {/* Help Section */}
          <Col md={2}>
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Frequently Asked Questions</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns & Exchanges</a></li>
            </ul>
          </Col>
           <hr style={{ backgroundColor: "white" }} />
        </Row>

        {/* <hr style={{ backgroundColor: "white" }} /> */}

        <Row className="mt-1 justify-content-between ">
               {/* Contact Details */}
          {/* <p md={3} className="mb-2" style={{textAlign:'center'}}>
            <h5>Contact Details</h5>
          </p> */}
            <Col md={3}>
              <p> <span><LocationOnIcon/></span> 34 A /6/19, Diagonally Opp. Phoenix Market City, Next to Barclays, Nagar Road, Pune 411 014</p>
            </Col>
            <Col md={3}>
            <p><strong><PhoneIcon/> </strong> 99952 23123</p>
            <p><strong><EmailIcon/> </strong> <a href="mailto:bakanksha346@gmail.com" className="text-light">info@sportworldpune.com</a></p> 
            </Col>
            <Col md={3}>
            <p><strong>Order Queries:</strong> <a href="mailto:bakanksha346@gmail.com" className="text-light">orders@sportworldpune.com</a></p>
            </Col>
            
        </Row>

        <hr style={{ backgroundColor: "white" }} />

        {/* Copyright and Developer Credit */}
        <Row className="text-center">
          <Col>
            <p>&copy; {new Date().getFullYear()} SportWorld. All Rights Reserved.
            <br/>Designed by <strong>Akanksha Bhalsing</strong> using <strong>React.js</strong>.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComp;
