import React, { Component } from 'react';
import './App.css';
import Article from './components/Article';
import Masonry from './components/Masonry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
         <Article />
         {/* <Article /> */}
          <Masonry />
        </main>
      </div>
    );
  }
}

export default App;
