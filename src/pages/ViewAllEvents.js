import React, {useEffect} from 'react';
import { Card, Container, Col, Row, Navbar} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import {fetchEvents} from './../actions/actions.js'

const ViewAllEvents = () => {
    const mockedData = [
        {
            id: 1,
            title: 'Natural painting pallete',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: require('../resources/img/plcHolder.png'),
        },
        {
            id: 2,
            title: 'Fabric dyeing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: require('../resources/img/plcHolder.png'),
        },
        {
            id: 3,
            title: 'Fabric dyeing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://www.lovepik.com/images/2020-12/01/lovepik-beautiful-girl-image_20211201160051.jpg',
        },
        {
            id: 4,
            title: 'Natural painting pallete',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://www.lovepik.com/images/2020-12/01/lovepik-beautiful-girl-image_20211201160051.jpg',
        },
        {
            id: 1,
            title: 'Natural painting pallete',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://www.lovepik.com/images/2020-12/01/lovepik-beautiful-girl-image_20211201160051.jpg',
        },
        {
            id: 2,
            title: 'Fabric dyeing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://www.lovepik.com/images/2020-12/01/lovepik-beautiful-girl-image_20211201160051.jpg',
        },
        {
            id: 3,
            title: 'Fabric dyeing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://www.lovepik.com/images/2020-12/01/lovepik-beautiful-girl-image_20211201160051.jpg',
        },
        {
            id: 4,
            title: 'Natural painting pallete',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://www.lovepik.com/images/2020-12/01/lovepik-beautiful-girl-image_20211201160051.jpg',
        }
    ];
    const data = mockedData
    const MainSection = () => {
        return (
            <div>
                    <Container className='custom-font pt-4 pr-5'>
                    <h4 className="mt-4 mb-4">Activities / Workshops</h4>
                    </Container>
                    <Row>
                        <Col md={1}/>
                        <Col md={10}>
                        <Row className='custom-font'>
                        {data.map(event => (
                            <Col key={event.id} md={4} className="mb-3 pr-0">
                                <Card className="h-100 shadow-sm border-0">
                                    <Card.Img variant="top" src={event.image} />
                                    <Card.Body>
                                        <Card.Title>{event.title}</Card.Title>
                                        <Card.Text>
                                            {event.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                        </Col>
                        <Col md={1}/>
                    </Row>
                    
                    
            </div>
        )
    }    
    return (
        <div>
            <NavBar/>
                <MainSection />
                
        </div>
    );
};

export default ViewAllEvents;