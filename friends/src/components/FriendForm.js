import React, { useState } from 'react';

const FriendForm = props => {
  const [values, setValues] = useState({ name: '', age: '', email: '' });

  const updateField = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <form>
      <input
        value={values.name}
        name="name"
        onChange={updateField}
        autoComplete="off"
      />
      <input
        value={values.age}
        name="age"
        onChange={updateField}
        autoComplete="off"
      />
      <input
        value={values.email}
        name="email"
        onChange={updateField}
        autoComplete="off"
      />
    </form>
  );
};

export default FriendForm;
