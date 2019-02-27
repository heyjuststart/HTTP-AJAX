import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

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
      .post('http://localhost:5000/friends', friend)
      .then(({ data }) => this.setState({ friends: data }))
      .catch(console.log);
  };

  editFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(({ data }) => this.setState({ friends: data }))
      .catch(console.log);
  };

  deleteFriend = friend => {
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(({ data }) => this.setState({ friends: data }))
      .catch(console.log);
  };

  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendList
          friends={friends}
          editFriend={this.editFriend}
          deleteFriend={this.deleteFriend}
        />
        <Route
          exact
          path="/"
          render={() => <Link to="/friends/new">Add Friend</Link>}
        />
        <Route
          path="/friends/new"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
      </div>
    );
  }
}

export default App;
