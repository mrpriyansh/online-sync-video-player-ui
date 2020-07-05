import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Containers/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContactUs from './Containers/ContactUs/ContactUs';
import Sign from './Containers/Sign/Sign';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <div>{/* <Navbar /> */}</div>
        <div className={styles.main}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path={['/login', '/register']} component={Sign} />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
export default App;
