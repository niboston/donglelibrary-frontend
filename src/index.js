import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cart from './Cart';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

ReactDOM.render(<Router>
    <div>
        <div className="main">
            <Route exact path="/" component={App}/>
            <Route exact path="/cart" component={Cart}/>
        </div>
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
