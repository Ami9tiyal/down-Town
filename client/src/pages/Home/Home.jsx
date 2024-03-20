import React from 'react'
import Navbar from '../../component/Navbar'
import Locationbar from '../../component/Locationbar'
import { Card, Col, Row } from 'react-bootstrap'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {


    const Cuisines = [
        {
            title: "Indian",
            desc: "Indian cuisine can not be said a cuisine due to multiple diversity",
            image: "https://wallpapers.com/images/featured/indian-food-x2tv62mgy6kq4or3.jpg"
        },
        {
            title: "Chinese",
            desc: "Chinese cuisine is related to chinese dishes and platters",
            image: "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60="
        },
        {
            title: "Italian",
            desc: "Italian cuisine is related to chinese dishes and platters",
            image: "https://media.istockphoto.com/id/1227415751/photo/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-caprese-salad-and-tomato.jpg?s=612x612&w=0&k=20&c=0qCRhYGQw0w6ahhVX-4ezayA9r81A81cwbPDbgRlC5s="
        },
        {
            title: "French",
            desc: "French cuisine is related to chinese dishes and platters",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40TC9L95BWJ79G7EORUltuplSsSrM9Y4SIQ&usqp=CAU"
        },
    ]

    return (
        <>
            <Locationbar />
            <main className="main_sec">



                <div className="cuisine_container">
                    <Row xs={1} md={2} className="g-5">
                        {Cuisines.map((item, idx) => (
                            <Col key={idx}>
                                <Link to={"/menu"} className="navbar_item">

                                    <Card>
                                        <Card.Img className="card-img" variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.desc}s
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>


            </main>

            <Navbar />
        </>
    )
}

export default Home