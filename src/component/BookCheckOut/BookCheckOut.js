import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './BookCheckOut.css';

const BookCheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {bookId} = useParams();
    const [book,setBook] = useState({});
    useEffect(()=>{
        fetch(`https://stormy-brushlands-24684.herokuapp.com/book/${bookId}`)
        .then(res => res.json())
        .then(data => setBook(data))
    },[bookId]);
    console.log(book)
    const {name,quantity,price} = book;

    const handleCheckOut = () =>{
        const orderDetails = {...loggedInUser, book, orderTime:new Date()};
        fetch('https://stormy-brushlands-24684.herokuapp.com/addOrder',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Your order Placed Successfully')
            }
        })
    }
    return (
        <div className="checkout-container container">
            <h2>Check Out</h2>
           <div className="checkout-area">
                <Table  striped  hover size="sm">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                        </tr>
                    </tbody>
                </Table>
           </div>
           <div className="checkout-button">
               <Button onClick={handleCheckOut}>Checkout</Button>
           </div>
        </div>
    );
};

export default BookCheckOut;