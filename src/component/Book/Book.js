import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Book.css';
import './Book.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBookReader } from "@fortawesome/free-solid-svg-icons";

const Book = (props) => {
    console.log(props);
    const {_id,imageURL,price,name} = props.book;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-4  text-center book">
            <div className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imageURL}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <h4> <Button className="mr-5" as={Link} to={`/book/${_id}`}  variant="primary">Add Now <FontAwesomeIcon icon={faBookReader} /> </Button> ${price}</h4>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Book;