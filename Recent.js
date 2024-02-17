import React from "react";
import './App3.css'
function Recent(){
    return(
        <div>
        <div>
        <p><b>Recent Transactions</b></p>
               </div>
               <div className="m1">
                <p><b>show all transactions</b></p></div>
                      <div className="k1">
                      <div class="container mt-3">
                      <table class="table table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Received from</th>
        <th>paid for</th>
        <th>Throught</th>
        <th>Amount</th>
        <th></th>
      </tr>
    </thead>
  
    
    <tbody>
      <tr>
        <td>
          <input type="checkbox"></input></td>
        
        
        
          
        <td>Siddharth R <br/> Jun 10,2021 at 10.00 AM</td>
        
        
        <td>Festival of UI/UX Design<br/>Terms fees</td>
        <td>cash</td>
        <td ><span id="s1">$12,345.00+</span></td>
        <td>...</td>

      </tr>
      <tr>
      <td>
          <input type="checkbox"></input></td> 
      <td>Siddharth R <br/>Jun 10,2021 at 10.00 AM</td>
        <td>Festival of UI/UX Design<br/>Terms fees</td>
        <td>online</td>
        <td ><span id="s1">$12,345.00+</span></td>
        <td>...</td>
      </tr>
      <tr>
      <td>
          <input type="checkbox"></input></td>
      <td>Siddharth R <mark class="q1">Refund</mark><br/>Jun 10,2021 at 10.00 AM </td>
        <td>Festival of UI/UX Design<br/>Terms fees</td>
        <td>online</td>
        <td><span id="s2">$12,345.00-</span></td>
        <td>...</td>
        
      </tr>
    </tbody>
  </table>
</div>
                      </div>
                      </div>
                         
)
}
export default Recent;
