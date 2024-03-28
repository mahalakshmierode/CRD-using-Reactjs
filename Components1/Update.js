

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { API_URL } from "../Constands/URL";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);
  const { id } = useParams(); // Get the ID from URL params
  const history = useNavigate(); // For programmatic navigation

  useEffect(() => {
    // Fetch data to populate the form
    const fetchData = async () => {
      const response = await axios.get(`${API_URL}/${id}`);
      const { firstName, lastName, checked } = response.data;
      setFirstName(firstName);
      setLastName(lastName);
      setChecked(checked);
    };
    fetchData();
  }, [id]);

  const updateData = async () => {
    await axios.put(`${API_URL}/${id}`, {
      firstName,
      lastName,
      checked
    });
    history("/read"); // Redirect to Read component after update
  };

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter First Name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Last Name</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Enter Last Name"
        />
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="Agree to the Terms & Conditions"
        />
      </Form.Field>
      <br />
      <Button onClick={updateData}>Update</Button>
    </Form>
  );
}

export default Update;

