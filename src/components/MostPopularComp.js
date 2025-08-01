import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import { Get, Post } from './http.service';
import { useNavigate } from 'react-router-dom';

const MostPopularComp = () => {
    const [populartdata, setpopular] = useState([]);
    const [addedToCart, setAddedToCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        FetchData();
    }, []);

    const FetchData = () => {
        Get(`http://localhost:8888/mostpopularProduct`)
            .then((res) => {
                setpopular(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const addToCart = (product) => {
        Post('http://localhost:8888/cardItems', product)
            .then(() => {
                setAddedToCart(prev => [...prev, product.id]);
                window.alert("Product added into cart");
            })
            .catch((error) => {
                console.log("Failed to add/update product in cart.", error);
            });
    };

    const goToCart = () => {
        navigate('/cart');
    };

    return (
        <div style={{ marginTop: 'auto' }}>
            <h5 style={{ color: 'darkblue', margin: '20px' }}>Most Popular</h5>

            <div className="p-3">
                <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-4">
                    {populartdata.map((item, idx) => {
                        const discountPercent = item.originalPrice
                            ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
                            : 0;
                        const isInCart = addedToCart.includes(item.id);

                        return (
                            <Col key={idx}>
                                <Card className="h-100 d-flex flex-column shadow-sm text-center p-2">
                                <div
                                onClick={() => navigate(`/product/${item.id}`)}
                                style={{ cursor: 'pointer' }}
                                >
                                    <Card.Img
                                        variant="top"
                                        style={{
                                            padding: "10px",
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            maxHeight: '200px'
                                        }}
                                        src={item.image}
                                    />
                                </div>
                                    <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
                                        <Card.Title style={{ fontSize: '1rem' }}>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>

                                        <div style={{ marginTop: '10px' }}>
                                            {item.originalPrice && (
                                                <span style={{ textDecoration: 'line-through', color: 'gray', marginRight: '10px' }}>
                                                    ₹{item.originalPrice}
                                                </span>
                                            )}
                                            <span style={{ color: 'darkblue', fontWeight: 'bold' }}>₹{item.price}</span>
                                            {item.originalPrice && (
                                                <div style={{ color: 'green', fontSize: '0.9rem', marginTop: '4px' }}>
                                                    SAVE {discountPercent}%
                                                </div>
                                            )}
                                        </div>

                                        {isInCart ? (
                                            <Button
                                                style={{background:'darkblue'}}
                                                className="mt-3 w-100"
                                                onClick={goToCart}
                                            >
                                                Go to Cart →
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="dark"
                                                className="mt-3 w-100"
                                                onClick={() => addToCart(item)}
                                            >
                                                Add to Cart
                                            </Button>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default MostPopularComp;
