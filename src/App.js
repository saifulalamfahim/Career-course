import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import AdminControl from './Components/Dashboard/AdminControl/AdminControl';
import Login from './Components/Login/Login';
import AdminAddService from './Components/Dashboard/AdminAddService/AdminAddService';
import AdminMaker from './Components/Dashboard/AdminMaker/AdminMaker';
import OrderService from './Components/Dashboard/OrderService/OrderService';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Dashboard/Review/Review';

export const UserContext = createContext();

function App() {
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4200/findAdmin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data);
        })
}, [loggedInUser.email]);

  
  console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" >
                <Home></Home>
              </Route>
              <Route path="/home" >
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/admin_user" >
                {admin ? <AdminControl></AdminControl> : <ServiceList></ServiceList>}
              </PrivateRoute>
              
              {admin ? <div> 
              <PrivateRoute path="/dashboard/:serviceLink">
                <AdminControl></AdminControl>
              </PrivateRoute>
              <PrivateRoute path="/adminControl" >
                <AdminControl></AdminControl>
              </PrivateRoute>
              <PrivateRoute path="/adminAddService">
                <AdminAddService></AdminAddService>
              </PrivateRoute>
              <PrivateRoute path="/adminMaker">
                <AdminMaker></AdminMaker>
              </PrivateRoute> </div> :

              <div>
              <PrivateRoute path="/dashboard/:serviceLink">
                <OrderService></OrderService>
              </PrivateRoute>
              <PrivateRoute path="/orderService" >
                <OrderService></OrderService>
              </PrivateRoute>
              <PrivateRoute path="/userService" >
                <ServiceList></ServiceList>
              </PrivateRoute>
              <PrivateRoute path="/userReview" >
                <Review></Review>
              </PrivateRoute>
              </div>}

            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
