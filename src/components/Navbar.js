
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';


const NavbarComp = ()=>{
    return (
      <div>
      <Navbar expand="lg" 
       style={{background:"darkblue",
       textAlign:"center", 
       marginTop:'120px',
       border:'1px solid, white'
      }}
      className='fixed-top' >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="mx-auto me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link as={Link} to={"/online-sports-store"} style={{color:'white', paddingLeft:'20px'}}>Home</Nav.Link>

        <Nav.Link as={Link} to={"/aboutus"} style={{color:'white', paddingLeft:'20px'}}>About us</Nav.Link>

        <NavDropdown id="navbarScrollingDropdown" title={<span style={{ color: 'white',paddingLeft:"20px" }}>All Sports</span>}  variant="light">
          <NavDropdown.Item as={Link} to={"/cricket"} >Cricket</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/football"}>Football</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Hoockey</NavDropdown.Item>
        </NavDropdown>

        
       
        {/* <NavDropdown id="navbarScrollingDropdown" title={<span style={{ color: 'white', paddingLeft:"20px" }} >Fitness & Accessories</span>}  variant="light">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}

        <NavDropdown id="navbarScrollingDropdown" title={<span style={{ color: 'white', paddingLeft:"20px" }}>Shoes</span>}  variant="light">
          <NavDropdown.Item href="#action3">Men/women</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Kids</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown id="navbarScrollingDropdown" title={<span style={{ color: 'white', paddingLeft:"20px" }}>Top Brand</span>}  variant="light">
          
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>

        {/* <Nav.Link href="#action2" style={{color:'white', paddingLeft:'20px'}}>Repairs</Nav.Link> */}

        <Nav.Link as={Link} to={"/contactus"} style={{color:'white', paddingLeft:'20px'}}>Contact us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    {/* <Outlet/> */}
     
      </div>
  );
}
export default NavbarComp;