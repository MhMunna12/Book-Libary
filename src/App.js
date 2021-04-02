import React , {createContext, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
// import BookDetails from './component/BookDetails/BookDetailsNotFound';
import Admin from './component/Admin/Admin';
import BookCheckOut from './component/BookCheckOut/BookCheckOut';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Orders from './component/Orders/Orders';


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header/>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path="/book/:bookId">
              <BookCheckOut/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route path="/orders">
              <Orders/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            {/* <Route path="*">
              <BookDetails/>
            </Route> */}
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
