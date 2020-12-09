import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Health from './page/component/Health';
import Restaurant from './page/component/Restaurant';
import Beauty from './page/component/Beauty';
import CategoryList from './page/component/CategoryList';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={CategoryList} />
      <Route path="/1" component={Health} />
      <Route path="/2" component={Restaurant} />
      <Route path="/3" component={Beauty} />
    </Router>
  );
};

export default App;
