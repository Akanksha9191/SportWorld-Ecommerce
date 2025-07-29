import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { Get, Post } from './http.service';


const MostPopularComp = ()=>{
    const[populartdata, setpopular]= useState([])
    
        useEffect(()=>{
            FetchData()
        }, [])
    
        const FetchData = ()=>{
            Get(`http://localhost:8888/mostpopularProduct`)
            .then((res)=>{
                setpopular(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        const addToCart = (Cardproduct) => {
        console.log(Cardproduct)
        Post('http://localhost:8888/cardItems', Cardproduct)
        .then(()=>{
            window.alert("Product added into cart")
        }).catch((error)=>{
            console.log("Failed to add/update product in cart.", error);
        })
    }

        const buyNow = (product)=>{
            console.log("Buying Product", product)
            window.alert(`Proceeding to buy: ${product.title}`)

        }


    return(
        <div style={{marginTop:'auto'}}>
{/* most popular product */}
            <h5 style={{color:'darkblue', margin:'20px'}}>Most Popular</h5>

          <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {populartdata.map((popular_items, idx) => (
                    <Col key={idx}>
                        <Card 
                        className="h-100 d-flex flex-column shadow-sm"
                        style={{ height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', objectFit:'contain', margin:'auto', height:'200px'}} src={popular_items.image} />
                            <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
                                <Card.Title>{popular_items.title}</Card.Title>
                                <Card.Text>
                                    {popular_items.description}
                                </Card.Text>
                                <Card.Title>₹{popular_items.price}</Card.Title>
                                <Button variant="dark" 
                                className="mt-1 w-100 border-2"
                                onClick={()=>addToCart(popular_items)} 
                                >Add to Cart</Button>
                                {/* Buy button */}
                                <Button variant="outline-danger" 
                                className="mt-1 w-100 border-2"
                                onClick={()=>buyNow(popular_items)} 
                                >Buy Now</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
           </div>
      
        </div>
    )
}
export default MostPopularComp