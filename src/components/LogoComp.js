import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from 'react-bootstrap';
import ImageComp from './ImageComp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const LogoComp = ()=>{
    return(
        <div>
            <div className='fixed-top'>
          {/* React fast Marquee  */}
        <Marquee 
        style={{color:'white', 
        backgroundColor:'black', 
        fontWeight:'bold',
        border:'1px solid white',
        cursor:'pointer'
        }}>
          <span style={{paddingRight:'400px'}}>Free shipping in India</span>
          <span>Trusted By 10,00,000+ Customers</span>
        </Marquee>

        {/* Logo, searchbar */}
        <Navbar expand="lg" 
        style={{background:"skyblue",
          paddingLeft:"5px 80px", 
          border:'2px solid, white'
          }} 
          >
          <Container fluid >
            <Navbar.Brand>
                              {/* Logo image */}
                              <Image
                               width={60}
                               height={70}
                               className='me-auto'
                               alt="Logo"
                               src={ImageComp.Logo}
                               rounded
                              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll"  />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              />
              <Form className="d-flex me-auto">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="dark">Search</Button>
              </Form>

                {/* Social media account */}
        <Nav className="me-auto">
            <Nav.Item as={Link} to="https://www.instagram.com/"  className='link-dark mx-3'><InstagramIcon className="fs-3"/></Nav.Item>
            <Nav.Item as={Link} to="https://www.facebook.com/"  className='link-dark mx-3'><FacebookIcon className="fs-3"/></Nav.Item>
            <Nav.Item as={Link} to="https://in.pinterest.com/"  className='link-dark mx-3'><PinterestIcon className="fs-3"/></Nav.Item>
          </Nav>
        {/* Account , add cart */}
          <Nav className="">
            <Nav.Item as={Link} to={"/"} className='link-dark'><AccountBoxIcon className="fs-1" />
            </Nav.Item>
            <Nav.Item as={Link} to={'/cart'} className='link-dark mx-2'><ShoppingCartIcon className="fs-1" /></Nav.Item>
          </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        </div>
    )
}
export default LogoComp;