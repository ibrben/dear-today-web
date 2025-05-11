import React from 'react';
import { Container, Col, Row, Navbar} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';

const ViewAllEvents = () => {
    const MainSection = () => {
        return (
            <div>
                <Container className="mt-4">
            <h4 className="custom-font mb-4">กิจกกรมต่อไป</h4>
                </Container>
                
            </div>
        )
    }    
    return (
        <div>
            <NavBar/>
                <Row>
                    <Col className='no-left-padding' lg={12} sm={9} ><MainSection /></Col>
                </Row>
        </div>
    );
};

export default ViewAllEvents;