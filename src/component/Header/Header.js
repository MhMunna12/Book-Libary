import React, { useContext } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
            <Navbar className="background"  variant="light">
            <Nav className="mr-auto">
                <h4>Book library</h4>
                </Nav>
                <Nav className="mr-sm-2 ">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                {
                    loggedInUser.email ? <Nav.Link as={Link} >{loggedInUser.name}</Nav.Link> : 
                    <Nav.Link style={{borderRadius:'10px',width:'70px'}} className="bg-danger text-white text-center"as={Link} to="/login">Login</Nav.Link> 
                }
                
                </Nav>
            </Navbar>

        </div>
    );
};

export default Header;