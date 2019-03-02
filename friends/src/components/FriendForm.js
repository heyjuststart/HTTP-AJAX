import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Common';

const FriendForm = styled.form`
  background-color: lightblue;
  padding: 30px 60px;
  margin: 10px;
`;

export default ({ history, friend, addFriend, cancel }) => {
  const initialState = friend || { name: '', age: '', email: '' };
  const [values, setValues] = useState(initialState);

  const updateField = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <FriendForm
      className="friend"
      onSubmit={e => {
        e.preventDefault();
        addFriend(values);
        setValues(initialState);
        history && history.push('/');
      }}
    >
      <input
        value={values.name}
        name="name"
        onChange={updateField}
        autoComplete="off"
        placeholder="name..."
      />
      <input
        value={values.age}
        name="age"
        onChange={updateField}
        autoComplete="off"
        placeholder="age..."
      />
      <input
        value={values.email}
        name="email"
        onChange={updateField}
        autoComplete="off"
        placeholder="email..."
      />
      <Button type="submit">submit</Button>
      <Button default onClick={e => {
        e.preventDefault();
        cancel && cancel();
        setValues(initialState);
      }}>cancel</Button>
    </FriendForm>
  );
};
