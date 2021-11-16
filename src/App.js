import React from 'react';
import './css/font-awesome.min.css';
import './fonts/bonvivant/bovinant.css';
import './fonts/proxima/proximanova.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router,} from "react-router-dom";
import {topbar, Switch, Route} from "react-router-loading";
function App() {
    topbar.config({
        autoRun: false,
        barThickness: 2,
        barColors: {
            0: '#E96969',
            .3: '#E96969',
            1.0: '#E96969'
        },
        shadowBlur: 5,
        shadowColor: 'red',
        className: 'topbar'
    });
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch maxLoadingTime={500}>
                    <Route path="/shop" loading>
                        <Shop/>
                    </Route>
                    <Route path="/" loading>
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
