import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Article from './components/Article';
import Masonry from './components/Masonry';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/article" component={Article} />
            <Route exact path="/" component={Masonry} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
