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
                        <Card style={{ height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', margin:'auto', height:'200px'}} src={footballitems.url} />
                            <Card.Body>
                                <Card.Title>{footballitems.title}</Card.Title>
                                <Card.Text>
                                    {footballitems.description}
                                </Card.Text>
                                <Card.Title>₹{footballitems.price}</Card.Title>
                                <Button variant="dark" 
                                className="mt-auto"
                                onClick={()=>addToCart(footballitems)} 
                                >Add to Cart</Button>
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