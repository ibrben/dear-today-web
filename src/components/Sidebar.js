import React from 'react'
import { Container, Col, Row, Navbar} from 'react-bootstrap'

const Sidebar = () => {
    return (
        <div>
            <div className='side-bar'>
                <Col>
                    <Row className='side-bar-menu'>
                        <a href="/">การเดินทาง</a>
                    </Row>
                    <Row className='side-bar-menu'>
                        <a href="/event">กิจกรรมต่อไป</a>
                    </Row>
                    <Row className='side-bar-menu'>
                        <a href="/about">รู้จักพวกเรา</a>
                    </Row>
                </Col>
            </div>
        </div>
        
    )
};

export default Sidebar;