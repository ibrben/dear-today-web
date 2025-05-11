import React from 'react'
import { Container, Col, Row, Navbar} from 'react-bootstrap'

const Box = (props) => {
    return (
        <div className="box h100">
                <p>{props.data}</p>
        </div>
    )
}

export default Box;