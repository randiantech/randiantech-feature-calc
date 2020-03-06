import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import CalculatorPage from './pages/CalculatorPage';

const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/packages" component={PackagesPage} />
            <Route exact path="/calculator" component={CalculatorPage} />
        </Switch>
    </App> )

export default Routes
