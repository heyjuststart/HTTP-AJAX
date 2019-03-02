import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Reset from './components/Reset';
import { Button } from './components/Common';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.8rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppTitle = styled.h1`
  font-size: 8.5rem;
`;

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
      <AppWrapper>
        <Reset />
        <GlobalStyle />
        <AppTitle>Friends</AppTitle>
        <FriendList
          friends={friends}
          editFriend={this.editFriend}
          deleteFriend={this.deleteFriend}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Button primary onClick={() => props.history.push('/friends/new')}>
              Add Friend
            </Button>
          )}
        />
        <Route
          path="/friends/new"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              cancel={() => props.history.push('/')}
            />
          )}
        />
      </AppWrapper>
    );
  }
}

export default App;
