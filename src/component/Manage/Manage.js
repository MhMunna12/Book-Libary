import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './Manage.css';

const Manage = () => {
    const [books,setBooks] = useState([]);
    const handleDelete = (id) =>{
        fetch(`https://stormy-brushlands-24684.herokuapp.com/deleteBook/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>console.log(data))
    }


    useEffect(()=>{
        fetch('https://stormy-brushlands-24684.herokuapp.com/books')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[])
    return (
        <div className="manage-container">
            <h3>Manage Product</h3>
            <div className="manage-area">
                <Table  hover size="sm">
                    <thead>
                        <tr className="table-tr">
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book => <tr>
                                <td>{book.name}</td>
                                <td>{book.quantity}</td>
                                <td>{book.price}</td>
                                <td><FontAwesomeIcon className="ml-4 icon-color" onClick={() => handleDelete(book._id)} icon={faTrashAlt}/></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Manage;