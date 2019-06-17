import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import Home from './Home';
import Menu from './Menu';
import Franchise from './Franchise';

export default (
  <Route path="/" component={index}>
    <IndexRoute component={Home} />
    <Route path="/public/Menu" component={Menu} />
    <Route path="/public/Franchise" component={Franchise} />
  </Route>
);

