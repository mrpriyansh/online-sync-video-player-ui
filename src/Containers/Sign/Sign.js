import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import styles from './Sign.module.css';

const Sign = props => {
  return (
    <Router>
      <div className={styles.wrapper}>
        <div className={styles.imgcontainer}>
          <img
            className={styles.img}
            src="https://starecat.com/content/wp-content/uploads/titanic-float-none-css-programming.jpg"
            alt="meme"
          />
        </div>
        <div className={styles.formcontainer}>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Sign;
