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

  startGame(gender) {
    this.setState({
      renderGame: true,
      gender
    })
  }

  render() {
    const {renderGame, gender} = this.state;
      if (!renderGame) {
        return <Login startGame={gender => this.startGame(gender)} />;
      }
      return <Game gender={gender} />;
  }
}
export default App;
