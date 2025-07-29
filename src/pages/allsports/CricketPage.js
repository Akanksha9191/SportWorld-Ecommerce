import LogoComp from "../../components/LogoComp";
import NavbarComp from "../../components/Navbar";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import FooterComp from "../../components/FooterComp";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Get, Post } from "../../components/http.service";


const CricketPage = ()=>{
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetching data
    const[cricketdata, setcricket]= useState([])

    useEffect(()=>{
        FetchData()
    }, [])

    const FetchData = ()=>{
        Get('http://localhost:8888/cricketProduct')
        .then((res)=>{
            setcricket(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const addToCart = (Cardproduct) => {
        console.log(Cardproduct)
        const isLogin = sessionStorage.getItem("isLogin");
        if(!isLogin){
            window.alert("Please Login Fisrt.")
            navigate("/login")  //Redirect to Login Page
            return
        }
        Post('http://localhost:8888/cardItems', Cardproduct)
        .then(()=>{
            window.alert("Product added into cart")
        }).catch((error)=>{
            console.log("Failed to add/update product in cart.", error);
        })
    };
    // for buy product directly
    const buyNow = (product)=>{
        const isLogin = sessionStorage.getItem("isLogin");       
        if(!isLogin){
            window.alert("Please Login Fisrt.")
            navigate("/login")  //Redirect to Login Page
            return
        }
        console.log("Buying Product", product)
        window.alert(`Proceeding to buy: ${product.title}`)

        Post('http://localhost:8888/cardItems', product)
        .then(()=>{
            window.alert("Product added into cart")
        }).catch((error)=>{
            console.log("Failed to add/update product in cart.", error);
        })
        navigate('/cart')


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
                Cricket
            </h1>
            </div>

           <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {cricketdata.map((items, idx) => (
                    <Col key={idx}>

                        <Card 
                        className="h-100 d-flex flex-column shadow-sm"
                        style={{ height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', objectFit:'contain', margin:'auto', height:'200px'}} src={items.image} />
                            <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
                                <Card.Title>{items.title}</Card.Title>
                                <Card.Text>
                                    {items.description}
                                </Card.Text>
                                <Card.Title>₹{items.price}</Card.Title>
                                <Button variant="outline-dark" 
                               className="mt-1 w-100 border-2"
                                onClick={()=>addToCart(items)} 
                                >Add to Cart</Button>
                                {/* Buy button */}
                                <Button variant="outline-danger" 
                                className="mt-1 w-100 border-2"
                                onClick={()=>buyNow(items)} 
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
export default CricketPage;