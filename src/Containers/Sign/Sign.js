import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import styles from './Sign.module.css';
import { useAuth } from '../../services/hooks/Auth';

const Sign = () => {
  const { authToken } = useAuth();
  if (authToken) {
    return <Redirect to="/" />;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgcontainer}>
        <img
          className={styles.img}
          alt="login"
          width="16"
          height="9"
          src="https://c4.wallpaperflare.com/wallpaper/221/116/854/joaquin-phoenix-joker-batman-fire-car-hd-wallpaper-thumb.jpg"
        />
        <p className={styles.p}>
          Join with your friends and use dev-project-frontend to host movie nights and TV parties.
          Always stay in sync and enjoy everything together.
        </p>
      </div>
      <div className={styles.formcontainer}>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default Sign;
