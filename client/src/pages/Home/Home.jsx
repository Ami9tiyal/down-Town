import React from 'react'
import Navbar from '../../component/Navbar'
import Locationbar from '../../component/Locationbar'
import { Card, Col, Row } from 'react-bootstrap'
import './Home.css'

const Home = () => {


    const Cuisines = [
        {
            title: "Indian",
            desc: "Indian cuisine can not be said a cuisine due to multiple diversity",
            image: ""
        },
        {
            title: "Chinese",
            desc: "Chinese cuisine is related to chinese dishes and platters",
            image: ""
        },
        {
            title: "Italian",
            desc: "Italian cuisine is related to chinese dishes and platters",
            image: ""
        },
        {
            title: "French",
            desc: "French cuisine is related to chinese dishes and platters",
            image: ""
        },
    ]

    return (
        <>
            <div className="main_sec">

                <Locationbar />
                <div className="cuisine_container">
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {Cuisines.map((item, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

            </div>
            <Navbar />
        </>
    )
}

export default Home