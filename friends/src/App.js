import React, { Component } from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';
import './App.css';

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(({ data }) => this.setState({ friends: data }))
      .catch(console.log);
  }

  addFriend = friend => {
    axios
      .post('/friends', friend)
      .then(({ data }) =>
        this.setState({ friends: [...this.state.friends, data] })
      );
  };

  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendList friends={friends} />
      </div>
    );
  }
}

export default App;
