import LogoComp from "../../components/LogoComp";
import NavbarComp from "../../components/Navbar";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import FooterComp from "../../components/FooterComp";
import { Get, Post } from "../../components/http.service";




const FootballPage = ()=>{
  
    // Fetching data
    const[footballdata, setfootball]= useState([])

    useEffect(()=>{
        FetchData()
    }, [])

    const FetchData = ()=>{
        Get(`http://localhost:8888/footballProduct`)
        .then((res)=>{
            setfootball(res.data)
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
        <div>
            
            {/* Navigation var */}
            <LogoComp/>
            <NavbarComp/>
            <div className="p-4" style={{marginTop:'160px'}}>
            <h1 
            className="text text-center fw-bold m-2" 
            style={{color:'darkblue'}}
            >
                Football
            </h1>
            </div>
            
           <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {footballdata.map((footballitems, idx) => (
                    <Col key={idx}>
                    <Card 
                        className="h-100 d-flex flex-column shadow-sm"
                        style={{ height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', objectFit:'contain', margin:'auto', height:'200px'}} src={footballitems.image} />
                            <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
                                <Card.Title>{footballitems.title}</Card.Title>
                                <Card.Text>
                                    {footballitems.description}
                                </Card.Text>
                                <Card.Title>₹{footballitems.price}</Card.Title>
                                <Button variant="outline-dark" 
                               className="mt-1 w-100 border-2"
                                onClick={()=>addToCart(footballitems)} 
                                >Add to Cart</Button>
                                {/* Buy button */}
                                <Button variant="outline-danger" 
                                className="mt-1 w-100 border-2"
                                onClick={()=>buyNow(footballitems)} 
                                >Buy Now</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
           </div>
            <FooterComp/>
        </div>
    )
}
export default FootballPage;