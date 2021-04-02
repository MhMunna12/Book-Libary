import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddBooks.css';
const AddBooks = () => {
    
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data =>{
        console.log('data',data)
        const bookData = {
            name:data.name,
            price:data.price,
            quantity:data.quantity,
            imageURL: imageURL
        };
        const url = `https://stormy-brushlands-24684.herokuapp.com/addBooks`
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(bookData)
        })
        .then(res => console.log('server side response',res))
        console.log(bookData)
    };

    const handleImageUpload = event =>{
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', 'ea19e2658f41ecd5ad3befd299525445');
        imageData.append('image',event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
            imageData
        )
        .then(response =>{
            setImageURL(response.data.data.display_url);
        })
        .catch(error =>{
        console.log(error);
        })
    }
    return (
        <div className="add-book">
                <h4>Add Book</h4>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className='col-md-6'>
                            <label htmlFor="">Book Name</label>
                            <input name="name" className="form-control" defaultValue="" placeholder="Book Name" ref={register} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">quantity</label>
                            <input name="quantity" className="form-control" defaultValue="" placeholder="quantity" ref={register} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="">price</label>
                            <input name="price" className="form-control" defaultValue="" placeholder="price" ref={register} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">add image</label>
                            <br/>
                            <input name="image"  type="file" onChange={handleImageUpload} />
                        </div>
                    </div>
                    
                   
                    <br/>
                    <input type="submit" />
                </form>
            </div>
    );
};

export default AddBooks;