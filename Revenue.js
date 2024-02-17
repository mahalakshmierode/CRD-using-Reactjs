import React from "react";
import  Dropdown  from "react-bootstrap/Dropdown";
import './App3.css'
function Revenue(){

    return(
        <div>
        <div className="Revenue">
            <h1>Revenue</h1><br/><br/>
            </div>
            <div>
            <Dropdown className="drop">
                <Dropdown.Toggle className="drop1">courses</Dropdown.Toggle>
            </Dropdown>
            </div>
            <div>
            <Dropdown className="drop">
                <Dropdown.Toggle className="drop1">thisweek</Dropdown.Toggle>
            </Dropdown>
            
  
    </div>
</div>
            
        
      
    )
}
export default Revenue;