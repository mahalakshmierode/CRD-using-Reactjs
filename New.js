import React from "react";
import {Table, TableRow} from 'semantic-ui-react'
import img from'./img2.png';

function New(){
    return(
       
        <table>

        <div className="container">
        <div class="float-end">
            
            <h3>4%</h3>
            <p>Previous(week)</p>
        </div>
        </div>
        <div className="container">
         
            <h3>$32,000</h3>
            <p>Earnings(this week)</p>
        </div>
        <div class="float-end">
          
           <p> <b>Course sales for (this week)</b></p>
           
        </div>
        
        <div className="n4">
            <p><b>Top selling courses</b></p>

        </div>
        <div>

      
    
     
      <Table className="p1">
      <Table.Body>
        {
              <TableRow >
              <Table.Cell className="d1"><b>{1}</b></Table.Cell>
              <Table.Cell>{<b>Beginner PHP courses</b>}</Table.Cell>
              <Table.Cell>{<b>$14,000</b>}</Table.Cell>
              <Table.Cell rowspan="5"><img  id="w1"src={img}/></Table.Cell>
              </TableRow>
}
{
            <TableRow >
            <Table.Cell className="d1"><b>{2}</b></Table.Cell>
            <Table.Cell>{<b>PHP Workshop with Anna University</b>}</Table.Cell>
            <Table.Cell>{<b>$10,000</b>}</Table.Cell>
            
          </TableRow>
  }  
  {
            <TableRow >
            <Table.Cell  className="d1"><b>{3}</b></Table.Cell>
            <Table.Cell>{<b>Advanced PHP courses</b>}</Table.Cell>
            <Table.Cell>{<b>$8,000</b>}</Table.Cell>
            
          </TableRow>
  }       
   {
            <TableRow >
            <Table.Cell className="d1"><b>{4}</b></Table.Cell>
            <Table.Cell>{<b>Advanced PHP courses</b>}</Table.Cell>
            <Table.Cell>{<b>$8,000</b>}</Table.Cell>
            
          </TableRow>
  }  
  {
            <TableRow id="td6" >
            <Table.Cell  className="d1"><b>{5}</b></Table.Cell>
            <Table.Cell>{<b>Advanced PHP courses</b>}</Table.Cell>
            <Table.Cell>{<b>$8,000</b>}</Table.Cell>
            
          </TableRow>
  }         
        
      
      </Table.Body>
      </Table>
</div>
      
</table>    
     

    )
}
export default New;
