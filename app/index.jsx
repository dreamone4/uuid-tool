import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './views/Home.jsx';
import Page2 from './views/Page2.jsx';

const RouteConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page2">Page2</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/page2" component={Page2}/>
    </div>
  </Router>
);


ReactDOM.render(
  React.createElement(RouteConfig),
  document.getElementById('main')
);
