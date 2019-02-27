import React, { useState } from 'react';


const FriendForm = ({ friend, addFriend }) => {
  const initialState = friend || { name: '', age: '', email: '' };
  const [values, setValues] = useState(initialState);

  const updateField = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addFriend(values);
        setValues(initialState);
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
      <button type="submit">submit</button>
    </form>
  );
};

export default FriendForm;
