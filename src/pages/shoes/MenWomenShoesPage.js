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

const MenWomenShoesPage=()=>{
    // Fetching data
    const[menshoesdata, setmenshoes]= useState([])

    useEffect(()=>{
        FetchData()
    }, [])

    const FetchData = ()=>{
        Get(`http://localhost:8888/menwomenShoesProduct`)
        .then((res)=>{
            setmenshoes(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const addToCart = (Cardproduct) => {
    console.log(Cardproduct)
    Post(`http://localhost:8888/cardItems/${Cardproduct}`)
    .then(()=>{
        window.alert("product added into cart")
    })
    .catch((error)=>{
        console.log("Failed to add/update product in cart.", error);
    })
};
    return(
        <div>
            <LogoComp/>
            <NavbarComp/>
            <div className="p-4" style={{marginTop:'160px'}}>
            <h1 
            className="text text-center m-2 fw-bold" 
            style={{color:'darkblue'}}
            >
            Men/Women Sport Shoes
            </h1>
            </div>
           <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {menshoesdata.map((menshoes_items, idx) => (
                    <Col key={idx}>
                        <Card style={{ 
                            height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', margin:'auto', height:'200px'}} src={menshoes_items.image} />
                            <Card.Body>
                                <Card.Title>{menshoes_items.title}</Card.Title>
                                <Card.Text>
                                    {menshoes_items.description}
                                </Card.Text>
                                <Card.Title>₹{menshoes_items.price}</Card.Title>
                                <Button 
                                variant="dark" 
                                className="mt-auto"
                                onClick={()=>addToCart(menshoes_items)} 
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
export default MenWomenShoesPage