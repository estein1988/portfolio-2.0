import React, { Component } from 'react';
// import NavBar from './components/NavBar';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer'
import resumeInfo from './resumeInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <NavBar resumeInfo={resumeInfo}/> */}
        <Header resumeInfo={resumeInfo}/>
        <PortfolioContainer resumeInfo={resumeInfo}/>
      </div>
    );
  }
}

export default App;
