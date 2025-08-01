import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Get, Post } from '../components/http.service';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import TopNavbar from '../components/navbar/TopNavbar';
import BottomNavbar from '../components/navbar/BottomNavbar';
import FooterComp from '../components/FooterComp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from route parameters
  const navigate = useNavigate(); // Hook for navigation

  const [product, setProduct] = useState(null); // Holds the fetched product data
  const [isInCart, setIsInCart] = useState(false); // Tracks whether the item is already in the cart

  // Go back to previous page
  const handleGoBack = () => {
    navigate(-1);
  };

  // Fetch product details and check if it exists in cart
  useEffect(() => {
    // Fetch the product detail using the product ID
    // For mostpopular product
    Get(`http://localhost:8888/mostpopularProduct/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log('Product not found:', error));
    
    // For cricket product  
    Get(`http://localhost:8888/cricketProduct/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log('Product not found:', error));

    // For football product
    Get(`http://localhost:8888/footballProduct/${id}`)
    .then((res)=>setProduct(res.data))
    .catch((error)=>console.log('Product not found:', error))

    // for hockey product
    Get(`http://localhost:8888/hockeyProduct/${id}`)
    .then((res)=>setProduct(res.data))
    .catch((error)=>console.log('Product not found:', error))

    // For Gym Product
    Get(`http://localhost:8888/gymAccessoriesProduct/${id}`)
    .then((res)=>setProduct(res.data))
    .catch((error)=>console.log('Product not found:', error))

    // for Kidshoes Product
    Get(`http://localhost:8888/kidsShoesProduct/${id}`)
    .then((res)=>setProduct(res.data))
    .catch((error)=>console.log('Product not found:', error))

    // For Men/Women Shoes Product
    Get(`http://localhost:8888/menwomenShoesProduct/${id}`)
    .then((res)=>setProduct(res.data))
    .catch((error)=>console.log('Product not found:', error))
    
      
    // Fetch cart items and check if this product is already added
    Get('http://localhost:8888/cardItems')
      .then((res) => {
        const exists = res.data.find((item) =>
           item.id === parseInt(id));
        if (exists) setIsInCart(true);
      })
      .catch((error) => console.log('Error fetching cart items:', error));
  }, [id]);

  // Add product to cart and update cart state
  const addToCart = (item) => {
    Post('http://localhost:8888/cardItems', item)
      .then(() => {
        setIsInCart(true); // Update cart status
        alert('Product added to cart');
      })
      .catch((error) => console.log('Error adding to cart:', error));
  };

  // Redirect user to cart page
  const goToCart = () => {
    navigate('/cart');
  };

  // Show loading state while fetching product
  if (!product) return <p style={{ padding: '20px' }}>Loading product details...</p>;

  // Destructure product properties for easy use
  const { image, title, description, originalPrice, stock, price, specs, about } = product;

  return (
    <>
      {/* Navigation and layout components */}
      <TopNavbar />
      <BottomNavbar />

      {/* Product container */}
      <Container style={{ marginTop: '200px', marginBottom: '50px' }}>
        {/* Back button */}
        <Button variant="light" onClick={handleGoBack} className="mb-3">
          <ArrowBackIcon style={{ marginRight: '5px' }} /> Back
        </Button>

        <Row>
          {/* Left column: Product image */}
          <Col xs={12} md={6}>
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 0 8px rgba(0,0,0,0.1)',
              }}
            />
          </Col>

          {/* Right column: Product info */}
          <Col xs={12} md={6}>
            <h4 style={{ color: 'darkblue' }}>{title}</h4>
            <p>{description}</p>

            {/* Price section */}
            <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
              {originalPrice && (
                <span style={{ textDecoration: 'line-through', color: 'gray', marginRight: '10px' }}>
                  ₹{originalPrice}
                </span>
              )}
              <span style={{ color: 'green', fontWeight: 'bold' }}>₹{price}</span>
            </div>

            {/* In stock badge */}
            <Badge bg="success" className="mb-3">{stock}</Badge>

            {/* Specifications list */}
            
            <h6>Product Details:</h6>
            <ul>
              {specs &&
                Object.entries(specs).map(([key, value], index) => (
                  <li key={index}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
            </ul>

            {/* About product points */}
            {about ? (
              <>
                <h6 className="mt-3">About this Item:</h6>
                <p className="text-muted">{about}</p>
              </>
            ) : (
              <p className="text-muted mt-3">No additional information available for this item.</p>
            )}

            {/* Conditional Cart Button */}
            {isInCart ? (
              <Button
                style={{background:'white', color:'black', border:'1px solid black'}}
                className="mt-3 w-100"
                onClick={goToCart}
              >
                Go to Cart →
              </Button>
            ) : (
              <Button
                style={{background:'darkblue'}}
                className="mt-3 w-100"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            )}
          </Col>
        </Row>
      </Container>

      {/* Footer component */}
      <FooterComp />
    </>
  );
};

export default ProductDetail;
