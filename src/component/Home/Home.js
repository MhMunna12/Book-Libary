import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Book from '../Book/Book';
import './Home.css'


const Home = () => { 
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://stormy-brushlands-24684.herokuapp.com/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
            setLoading(false)
        })
    },[])
    return (
        <div className="row">
            {
                loading ?   <Spinner className="loading-spinner" animation="border" variant="dark" /> : books.map(book => <Book book = {book}></Book>)
            }
        </div>
    );
};

export default Home;