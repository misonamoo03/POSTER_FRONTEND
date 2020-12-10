import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Health from './page/components/Health';
import Food from './page/components/Food';
import Beauty from './page/components/Beauty';
import CategoryList from './page/components/CategoryList';
import Bar from './page/components/Bar';
import Header from './page/components/Header';
import CommonHeader from './page/components/common/Header';
import WritePage from './page/components/WritePage';
import KakaoMap from './page/components/KakaoMap';

const App = () => {
  return (
    <Router>
      <CommonHeader />
      <Header />
      <Route exact path="/" component={CategoryList} />
      <Route exact path="/1" component={Health} />
      <Route exact path="/2" component={Food} />
      <Route exact path="/3" component={Beauty} />
      <Route exact path="/4" component={Bar} />
      <Route exact path="/write" component={WritePage} />
      <Route exact path="/map" component={KakaoMap} />
    </Router>
  );
};

export default App;
