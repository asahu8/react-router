
import React from "react";
import ReactDOM from "react-dom";
import Layout from './pages/Layout';
// import { Router, Route, IndexRoute, hashHistory, BrowserRouter } from 'react-router';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import { IndexRoute } from 'react-router';

import { Angular } from './pages/Angular';
import { Reactjs } from './pages/Reactjs';
import { Ror } from './pages/Ror';


const app = document.getElementById('app');
// ReactDOM.render(<Layout/>, app);
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Layout}>
      <IndexRoute component={Angular}>  </IndexRoute>
      <Route path="reactjs" component={Reactjs}> </Route>
      <Route path="ror" component={Ror}> </Route>
    </Route>

  </BrowserRouter>,
  app);
