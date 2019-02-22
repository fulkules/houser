import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>
          { routes }
        </HashRouter>
        
      </div>
    );
  }
}

export default App;
