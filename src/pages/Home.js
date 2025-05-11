import React from 'react';
import '../resources/css/custom.css'
import { Container, Col, Row, Navbar} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import Box from '../components/Box'

const LastPublished = ({ data, image, topic }) => {
    return (
        <div className='box h220'>
            <div className="card-container">
                <img src={image} alt={data} className="card-img" />
                <div className="card-topic">
                    <p>{topic}</p>
                </div>
            </div>
            <p>{data}</p>
        </div>
    )
};
const Home = () => {
    const data = [
        { image: 'https://via.placeholder.com/400', topic: 'Topic 1', content: 'Card1' },
        { image: 'https://via.placeholder.com/400', topic: 'Topic 2', content: 'Card2' },
        { image: 'https://via.placeholder.com/400', topic: 'Topic 3', content: 'Card3' },
        { image: 'https://via.placeholder.com/400', topic: 'Topic 4', content: 'Other card' },
        { image: 'https://via.placeholder.com/400', topic: 'Topic 5', content: 'Other card' },
        { image: 'https://via.placeholder.com/400', topic: 'Topic 6', content: 'Other card' },
    ];
    const MainSection = (props) => {
        return (
            <div>
                <Container>
                    <br/>
                <h4 className="custom-font">การเดินทางของพวกเรา</h4>
                <Row>
                    <Col sm={12} lg={8}>
                    <LastPublished 
                            data={data[0].content} 
                            image={data[0].image} 
                            topic={data[0].topic} 
                        />
                    </Col>
                    <Col sm={12} lg={4}>
                        <Col><Box data="Card2" /></Col>
                        <Col><Box data="Card3" /></Col>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Box data="Other card" />
                    </Col>
                    <Col lg={4}>
                        <Box data="Other card" />
                    </Col>
                    <Col lg={4}>
                        <Box data="Other card" />
                    </Col>
                    <Col lg={4}>
                        <Box data="Other card" />
                    </Col>
                </Row>
                </Container>
                
                    
                
            </div>
        )
    }
    return (
        <div>
            <NavBar/>
            <Container>
            
            <Row>
                <Col className='no-left-padding' lg={12} sm={9} ><MainSection /></Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default Home;