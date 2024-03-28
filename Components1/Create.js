import axios from 'axios';
import React, { useState } from "react";
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { API_URL } from '../Constands/URL';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate(); // Ensure this is inside a React function component

  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked
    })
    navigate('/read');
  }

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="Enter First Name"/>
      </Form.Field><br/>
      <Form.Field>
        <label>Last Name</label>
        <input value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Enter Last Name"/>
      </Form.Field><br/>
      <Form.Field>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} label="Agree to the Terms & Conditions" />
      </Form.Field><br/>
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default Create;
