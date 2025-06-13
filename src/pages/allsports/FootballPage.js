import axios from "axios";
import LogoComp from "../../components/LogoComp";
import NavbarComp from "../../components/Navbar";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import FooterComp from "../../components/FooterComp";



const FootballPage = ()=>{
  
    // Fetching data
    const[footballdata, setfootball]= useState([])

    useEffect(()=>{
        FetchData()
    }, [])

    const FetchData = ()=>{
        axios
        .get(" http://localhost:8888/footballProduct")
        .then((res)=>{
            setfootball(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <div>
            
            {/* Navigation var */}
            <LogoComp/>
            <NavbarComp/>
            <div className="p-4" style={{marginTop:'160px'}}>
            <h1 
            className="text text-center m-2" 
            style={{color:'darkblue', fontWeight:"bold"}}
            >
                Football
            </h1>
            </div>

           <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {footballdata.map((f_items, idx) => (
                    <Col key={idx}>
                        <Card style={{ height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', margin:'auto', height:'200px'}} src={f_items.url} />
                            <Card.Body>
                                <Card.Title>{f_items.title}</Card.Title>
                                <Card.Text>
                                    {f_items.description}
                                </Card.Text>
                                <Card.Title>₹{f_items.price}</Card.Title>
                                <Button variant="dark" 
                                className="mt-auto"
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