import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RateReviewIcon from '@material-ui/icons/RateReview';
import './Dashboard.css';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://warm-citadel-70689.herokuapp.com/findAdmin/${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data);
      })
  }, [loggedInUser.email]);

  return (

    <div>
      <div className="d-flex justify-content-center"> <Link to="/">
        <h1><b>HOME</b></h1></Link>
      </div>
      <div className="text-center">
        <small>Click and go Home</small>
      </div>

      { admin ? <admin className="d-flex justify-content-center">
        <div className=" bg-warning mt-3 p-2">
          <List className={`${classes.root}`}>
            <Link style={{ textDecoration: "none" }} to="/adminControl">
              <div className="btn d-flex justify-content-start btnDashboard">
                <RoomServiceIcon></RoomServiceIcon>
                <p className="ml-2">Service List</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminAddService">
              <div className="btn d-flex justify-content-start btnDashboard">
                <AddIcon></AddIcon>
                <p className="ml-2">Add Service</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/adminMaker">
              <div className="btn d-flex justify-content-start btnDashboard">
                <PersonAddIcon></PersonAddIcon>
                <p className="ml-2">Make Admin</p>
              </div>
            </Link>
          </List>
        </div>
      </admin> :


        <user className="d-flex justify-content-center">
          <div  className="bg-warning mt-3 p-2">
            <List className={classes.root}>
              <Link style={{ textDecoration: "none" }} to="/orderService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <ShoppingCartIcon></ShoppingCartIcon>
                  <p className="ml-2">Order</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userService">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <RoomServiceIcon></RoomServiceIcon>
                  <p className="ml-2">Service List</p>
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/userReview">
                <div className="btn d-flex justify-content-start btnDashboard">
                  <RateReviewIcon></RateReviewIcon>
                  <p className="ml-2">Review</p>
                </div>
              </Link>
            </List>
          </div>
        </user>}

    </div>
  );
};

export default Dashboard;