import { useState, useEffect } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import { IconButton } from '@mui/material';
import {
  Search,
  Instagram,
  Facebook,
  Pinterest,
  Person,
  ShoppingCart
} from '@mui/icons-material';
import Marquee from 'react-fast-marquee';
import { useNavigate, Link } from 'react-router-dom';
import ImageComp from './ImageComp'; // Your logo image

const TopNavbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus =
      sessionStorage.getItem('isLogin') === 'true' || localStorage.getItem('isLogin') === 'true';
    const uname = sessionStorage.getItem('username') || localStorage.getItem('username');

    setIsLogin(loginStatus);
    setUsername(uname || '');
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setIsLogin(false);
    alert('Logged out successfully.');
    navigate('/');
  };

  return (
    <div className='fixed-top'>
      {/* Marquee Banner */}
      <div style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: 14 }}>
        <Marquee
          speed={50}
          style={{
            color: 'white',
            backgroundColor: 'black',
            fontWeight: 'bold',
            border: '1px solid white',
            cursor: 'pointer',
          }}
        >
          <span style={{ paddingRight:'400px' }}>Free shipping in India</span>
          <span style={{ paddingRight:'400px' }}>Trusted By 10,00,000+ Customers</span>
        </Marquee>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="py-0" style={{ minHeight: '75px', background:'skyblue' }}>
        <Container fluid className="px-4">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={ImageComp.Logo} alt="Logo" width={60} height={70} style={{ marginRight: '10px' }} />
          </Navbar.Brand>

          {/* Toggle Button for mobile */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          {/* Collapsible Offcanvas Menu */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between w-100">

              {/* Search Bar */}
              <Form className="d-flex flex-grow-1 mx-lg-4 mb-3 mb-lg-0" style={{ maxWidth: '500px' }}>
                <div className="d-flex w-100 align-items-center bg-white px-2 rounded">
                  <Search style={{ color: 'darkblue', marginRight: '5px' }} />
                  <FormControl
                    type="search"
                    placeholder="Search for products, brands and more"
                    className="border-0"
                    style={{ boxShadow: 'none' }}
                  />
                </div>
              </Form>

              {/* Icons and Actions */}
              <Nav className="d-flex align-items-center gap-3">
                <IconButton href="https://www.instagram.com" target="_blank">
                  <Instagram sx={{ color: 'black' }} />
                </IconButton>
                <IconButton href="https://www.facebook.com" target="_blank">
                  <Facebook sx={{ color: 'black' }} />
                </IconButton>
                <IconButton href="https://www.pinterest.com" target="_blank">
                  <Pinterest sx={{ color: 'black' }} />
                </IconButton>

                {isLogin ? (
                  <>
                    <span className="fw-bold text-dark me-2">Hi, {username}</span>
                    <Button variant="outline-dark" size="sm" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button variant="light" as={Link} to="/login" size="sm" className="d-flex align-items-center">
                    <Person style={{ marginRight: '4px' }} /> Login
                  </Button>
                )}

                {/* Add Returns and Orders */}
                <Button
                  variant="light"
                  as={Link}
                  to="/orders"
                  size="sm"
                  className="px-2"
                  style={{ fontSize: '13px' }}
                >
                  Orders & 
                  Returns
                </Button>
                <Button
                  variant="light"
                  as={Link}
                  to="/cart"
                  size="sm"
                  className="d-flex align-items-center position-relative"
                >
                  <ShoppingCart />
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
