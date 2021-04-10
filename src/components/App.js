import React, { Component } from 'react';
import Game from './Game.js';
import './App.css';

const Header = () => {
  return (
    <header className="title-wrap">
      <h1> <span className="title">VIDEOPOKER</span> <br /> <span className="title__fancy">Jacks or Better</span></h1>
    </header>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <small className="copy">Created by <a className="copy-link" href="https://github.com/brozinsky">brozinsky</a> &copy;
      2020</small>
    </footer>
  );
}

class App extends Component {

  render() {
    return (
      <>
        <div className="wrapper">
          <Header />
          <Game />
          <Footer />
        </div>
        {/* <img class="frame tl" src="./svg/decorations.svg" />
        <img class="frame tr" src="./svg/decorations.svg" />
        <img class="frame bl" src="./svg/decorations.svg" />
        <img class="frame br" src="./svg/decorations.svg" /> */}
      </>
    );
  }
}

export default App;
