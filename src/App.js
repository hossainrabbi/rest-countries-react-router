import React from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Countries />
                </Route>
                <Route path="/home">
                    <Countries />
                </Route>
                <Route exact path="/country/:countryName">
                    <CountryDetails />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
