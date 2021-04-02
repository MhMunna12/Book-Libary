import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTasks} from '@fortawesome/free-solid-svg-icons'
import AddBooks from '../AddBooks/AddBooks';
import { Button } from 'react-bootstrap';
import Manage from '../Manage/Manage';
import './Admin.css'

const Admin = () => {
    const [add,setAdd] = useState(true)
    return (

        <div className="row">
            <div className="col-md-2 side-bar">
                <h4>Book Library</h4>
                <Button onClick={() => setAdd(false)} block ><FontAwesomeIcon icon={faTasks} /> Manage Product</Button>
                <Button onClick={() => setAdd(true)}  block className="mt-2"><FontAwesomeIcon icon={faPlus}/> Add Product</Button>
            </div>
            <div className="col-md-9">
                {
                    add ? <AddBooks/> : <Manage/>

                }
            </div>
        </div>
    );
};

export default Admin;