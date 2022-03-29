import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
  // Create state variables to hold team members
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '' });
  // Create update and submit functions

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name: '', email: '', role: '' });
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  }

  return (
    <div className="App">
      <h1>React Team Builder</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
