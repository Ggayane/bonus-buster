import React, {Component} from 'react';
import Login from './login.jsx';
import Game from './game.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      renderGame: false
    }
  }

  render() {
    const {renderGame} = this.state;
      if (!renderGame) {
        return <Login startGame={() => { this.setState({renderGame: true}) }} />;
      }
      return <Game />;
  }
}
export default App;
