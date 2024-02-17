import axios from'axios';
import React ,{useState,useEffect} from "react";
import {Table,Button, TableRow} from 'semantic-ui-react'
import { API_URL } from "../Constands/URL";
function Read() {
  const[apiData,setAPIData]=useState([]);
  const deleteUser=async(id)=>{
    await axios.delete(API_URL+id)
    callGetAPI()
  }
  const callGetAPI =async()=>{
  const resp=await axios.get(API_URL);
setAPIData(resp, data);
  }
useEffect(()=>{
  callGetAPI();
},[]);

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name </Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          apiData.map(data=>(
            <TableRow key={data.id}>
            <Table.Cell>{data.FirstName}</Table.Cell>
            <Table.Cell>{data.Lastname}</Table.Cell>
            <Table.Cell>{data.checked?'checked':'Not Checked'}</Table.Cell>
            <Table.Cell>
              <Button onClick={()=>deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
          </TableRow>
          
          ))
        }
      
      </Table.Body>
    </Table>
  );
}

export default Read;
