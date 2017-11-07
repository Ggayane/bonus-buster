import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login-page full-container">
        <div className="cover" />
        <div className="form-container">
            <div className="user-img" />
            <h1 className="hading">Who's there?</h1>
            <input className="input-field" type="text" placeholder="Gevorg" autoFocus="true" />
            <button className="input-field btn" onClick={() => this.props.startGame()} >
                Enter
            </button>
        </div>
      </div>
    );
  }
}
export default Login;
