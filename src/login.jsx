import React, {Component} from 'react';
import Input from './components/input.jsx';
import {users} from '../users.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      error: false
    }
  }

  checkPlayer() {
    const {playerName} = this.state;
    const gender = playerName && users[playerName.toUpperCase()];
    if (gender) {
      return this.props.startGame(gender);
    }
    return this.setState({error: true});
  }

  showErrorMsg() {
    if (this.state.error) {
      return <div>waaat?</div>;
    }
    return null;
  }

  onKeyPress(e) {
    if (e.which === 13) {
      this.checkPlayer();
    }
  }

  onNameChange(playerName) {
    this.setState({playerName, error: false});
  }

  render() {
    return (
      <div className="login-page full-container">
        <div className="cover" />
        <div className="form-container">
            <div className="user-img" />
            <h1 className="hading">Who's there?</h1>
            <Input onChange={playerName => this.onNameChange(playerName)} onKeyPress={e => this.onKeyPress(e)} />
            {this.showErrorMsg()}
            <button className="input-field btn" onClick={() => this.checkPlayer()} >
                Enter
            </button>
        </div>
      </div>
    );
  }
}
export default Login;
