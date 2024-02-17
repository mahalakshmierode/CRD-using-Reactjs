import axios from 'axios';
import React,{usestate} from "react";
import { Form,Button,Checkbox } from 'semantic-ui-react'
import { API_URL } from '../Constands/URL';
import { useNavigate } from 'react-router-dom'

function create() {
  const [firstName,setFirstName]=usestate('');
  const [lastName,setLastName]=usestate('');
  const [checked,setChecked]=usestate('false');
const navigate=useNavigate();
  const postData=async()=> {
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
        <lable>First Name</lable>
        <input value={firstName} onChange={event=> setFirstName(event.target.value)} placeholder="Enter First Name"/>
        </Form.Field><br/>
        <Form.Field>
        <lable>Last Name</lable>
        <input  value={lastName}  onChange={event=> setLastName(event.target.value)}placeholder="Enter Last Name"/>
        </Form.Field><br/>
        <Form.Field>
          <Checkbox  checked={checked} onChange={()=> setChecked(!checked)}lable="Agree the Terms & conditions" />
        </Form.Field><br/>
        <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default create;
