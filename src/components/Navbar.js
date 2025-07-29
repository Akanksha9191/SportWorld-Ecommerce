
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
       marginTop:'110px',
       border:'1px solid, white'
      }}
      className='fixed-top' >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            defaultActiveKey="/"
            className="mx-auto me-auto my-1 my-lg-0"
            
            navbarScroll
          >
        <Nav.Link as={Link} to={"/"} className='text align-content-center link-light text-decoration-none px-3'>Home</Nav.Link>

        <Nav.Link as={Link} to={"/aboutus"} className='text link-light text-decoration-none px-3'>About us</Nav.Link>

        <NavDropdown id="navbarScrollingDropdown" title={<Link className='text link-light text-decoration-none'>All Sports</Link>} className='px-3'>
          <NavDropdown.Item as={Link} to={"/cricket"}  className='text link-dark text-decoration-none'>Cricket</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/football"} className='text link-dark text-decoration-none'>Football</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/hockey"} className='text link-dark text-decoration-none'>Hoockey </NavDropdown.Item>
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

        <NavDropdown id="navbarScrollingDropdown" title={<Link className='text link-light text-decoration-none '>Shoes</Link>} className='px-3' >
          <NavDropdown.Item as={Link} to={"/men-women-shoes"} className='text link-dark text-decoration-none'>Men/women </NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/kids-shoes"}  className='text link-dark text-decoration-none'>Kids</NavDropdown.Item>
        </NavDropdown>

        {/* <NavDropdown id="navbarScrollingDropdown" title={<Link className='text link-light text-decoration-none'>Top Brand</Link>} className='px-3' >
          
          <NavDropdown.Item ><Link to='' className='text link-dark text-decoration-none'>Action </Link></NavDropdown.Item>
          <NavDropdown.Item><Link to='' className='text link-dark text-decoration-none'>Action </Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}

        {/* <Nav.Link href="#action2" style={{color:'white', paddingLeft:'20px'}}>Repairs</Nav.Link> */}

        <Nav.Link as={Link} to={"/contactus"} className='text link-light text-decoration-none'>Contact us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    {/* <Outlet/> */}
     
      </div>
  );
}
export default NavbarComp;