import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Health from './page/component/Health';
import Food from './page/component/Food';
import Beauty from './page/component/Beauty';
import CategoryList from './page/component/CategoryList';
import Bar from './page/component/Bar';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={CategoryList} />
      <Route path="/1" component={Health} />
      <Route path="/2" component={Food} />
      <Route path="/3" component={Beauty} />
      <Route path="/4" component={Bar} />
    </Router>
  );
};

export default App;
