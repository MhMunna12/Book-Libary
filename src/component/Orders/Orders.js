import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Orders.css';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders,setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://stormy-brushlands-24684.herokuapp.com/orders?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            setLoading(false);
        })
    },[])
    return (
        <div className="order-container">
            <div className="d-flex justify-content-between mb-2">
                <div>
                    <h3>Orders</h3>
                </div>
                <div>
                    <h6>{loggedInUser.name}</h6>
                    <h6>{loggedInUser.email}</h6>
                </div>
            </div>
            {
                loading ?  <Spinner className="loading-spinner" animation="border" variant="dark" /> : 
                <div className="order-area">
                <Table striped hover size="sm">
                    <thead>
                        <tr className="table-tr">
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <td>{order.book.name}</td>
                                <td>{order.book.quantity}</td>
                                <td>{order.book.price}</td>
                                <td>{order.orderTime}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
            }
        </div>
    );
};

export default Orders;