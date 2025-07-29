import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const AdminPage=()=>{

    return(
        <div>
            <h1 className="text text-center fw-bold m-2 mb-4">SPORT-WORLD ADMIN</h1>
            <div className='text text-center'>
                                  <Link to="/" >
                    <Button variant="danger" >SportWorld Site</Button>
                  </Link>
            </div>

            {/* For All Sport  */}
            <div>
                <h4>Cricket Items</h4>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Add Cricket Item</Accordion.Header>
                            <Accordion.Body>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Edit Cricket Items</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Delete Cricket Item</Accordion.Header>
                            <Accordion.Body>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
  
            </div>
        </div>
    )
}
export default AdminPage