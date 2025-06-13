import { Margin } from "@mui/icons-material";
import LogoComp from "../components/LogoComp"
import NavbarComp from "../components/Navbar"

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const EnquiryFormComp =()=>{
    return(
        <div>
            <div>
            <LogoComp/>
            <NavbarComp/>
            </div>

            {/* <div className="p-4" style={{marginTop:'180px'}}>
            <h1 
            className="text text-center m-2" 
            style={{color:'darkblue', fontWeight:"bold"}}
            >
                Enquiry Form
            </h1>
            </div> */}
            <div>
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Contact Number
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="number" placeholder="Enter Your Contact Number" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Enquiry
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control as="textarea" placeholder="" rows={3}/>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2}}>
                    <Button type="submit"
                    style={{color:'white', fontWeight:"bold", background:'darkblue'}}
                    >Sign in</Button>
                    </Col>
                </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default EnquiryFormComp;