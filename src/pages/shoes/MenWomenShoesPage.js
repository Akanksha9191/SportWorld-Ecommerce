import axios from "axios";
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

const MenWomenShoesPage=()=>{
    // Fetching data
    const[menshoesdata, setmenshoes]= useState([])

    useEffect(()=>{
        FetchData()
    }, [])

    const FetchData = ()=>{
        axios
        .get("http://localhost:8888/menwomenShoesProduct")
        .then((res)=>{
            setmenshoes(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const addToCart = (Cardproduct) => {
    console.log(Cardproduct)  // axios
    axios.post("http://localhost:8888/cardItems",Cardproduct)
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
            className="text text-center m-2" 
            style={{color:'darkblue', fontWeight:"bold"}}
            >
            Men/Women Sport Shoes
            </h1>
            </div>
           <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {menshoesdata.map((ms_items, idx) => (
                    <Col key={idx}>
                        <Card style={{ 
                            height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', margin:'auto', height:'200px'}} src={items.url} />
                            <Card.Body>
                                <Card.Title>{ms_items.title}</Card.Title>
                                <Card.Text>
                                    {ms_items.description}
                                </Card.Text>
                                <Card.Title>₹{ms_items.price}</Card.Title>
                                <Button 
                                variant="dark" 
                                className="mt-auto"
                                onClick={()=>addToCart(ms_items)} 
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