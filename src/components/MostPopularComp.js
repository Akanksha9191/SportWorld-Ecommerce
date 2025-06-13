import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';


const MostPopularComp = ()=>{
    const[populartdata, setpopular]= useState([])
    
        useEffect(()=>{
            FetchData()
        }, [])
    
        const FetchData = ()=>{
            axios
            .get("http://localhost:8888/mostpopularProduct")
            .then((res)=>{
                setpopular(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    return(
        <div style={{marginTop:'auto'}}>

            <h5 style={{color:'darkblue', margin:'20px'}}>Most Popular</h5>

          <div className="p-3">
             <Row xs={1} md={4} className="g-4 mb-4">
                {populartdata.map((p_items, idx) => (
                    <Col key={idx}>
                        <Card style={{ height:'100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            textAlign:'center'}}>
                            <Card.Img variant="top" style={{padding:"10px", width:'70%', margin:'auto', height:'200px'}} src={p_items.url} />
                            <Card.Body>
                                <Card.Title>{p_items.title}</Card.Title>
                                <Card.Text>
                                    {p_items.description}
                                </Card.Text>
                                <Card.Title>₹{p_items.price}</Card.Title>
                                <Button variant="dark" 
                                className="mt-auto"
                                // onClick={()=>Adddata(items)} 
                                >Add to Cart</Button>
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