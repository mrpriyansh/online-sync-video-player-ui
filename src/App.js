import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Landing from './Containers/Landing/Landing';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import ContactUs from './Containers/ContactUs/ContactUs';
// import Sign from './Containers/Sign/Sign';
// import Join from './Containers/Join/Join';
// import Chat from './Containers/Chat/Chat';
import styles from './App.module.css';
import { AuthContext } from './services/hooks/Auth';
import { apiUrl } from './services/config';
import handleError from './services/handleError';

const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Sign = lazy(() => import('./Containers/Sign/Sign'));
const Join = lazy(() => import('./Containers/Join/Join'));
const Chat = lazy(() => import('./Containers/Chat/Chat'));
const ContactUs = lazy(() => import('./Containers/ContactUs/ContactUs'));
const Landing = lazy(() => import('./Containers/Landing/Landing'));

function App() {
  const [authToken, setAuthToken] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // token from localstorage
    const token = window.localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  window.onstorage = () => {
    const token = window.localStorage.getItem('token');
    setAuthToken(token);
  };

  useEffect(() => {
    if (authToken) {
      fetch(`${apiUrl}/userdetails`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
      })
        .then(response => response.json().then(body => ({ status: response.status, body })))
        .then(res => {
          if (res.status === 200) {
            window.localStorage.setItem('user', JSON.stringify(res.body));
            setCurrentUser(res.body);
          } else throw res;
        })
        .catch(err => handleError(err, setAuthToken));
    }
  }, [authToken]);

  return (
    <Router>
      <Suspense fallback={<div> Loading...</div>}>
        <AuthContext.Provider value={{ authToken, setAuthToken, currentUser, setCurrentUser }}>
          <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.main}>
              <Switch>
                <Route exact path="/" component={authToken ? Join : Landing} />
                <Route path="/watch">{authToken ? <Chat /> : <Landing />}</Route>
                {/* <Route path="/watch" component={authToken ? Chat : Landing} /> */}
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path={['/login', '/register']} component={Sign} />
              </Switch>
            </div>
            <Footer />
          </div>
        </AuthContext.Provider>
      </Suspense>
    </Router>
  );
}
export default App;
