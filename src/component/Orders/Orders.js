import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Orders.css';


const Orders = () => {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://stormy-brushlands-24684.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>setOrders(data))
    },[])
    return (
        <div className="order-container">
            <h3>Orders</h3>
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
        </div>
    );
};

export default Orders;