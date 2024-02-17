import React from 'react';
import Nav from 'react-bootstrap/Nav'
import  image from'./image.jpg';
import  Dropdown  from "react-bootstrap/Dropdown";
import'./App.css';
function Layout(){
    return(
    <div class="container"  > 
<div class="grid-container">
<div>
    <div className="grid-item item1">
        <Nav className="bar">
            <Nav.Link className="a1">Overview</Nav.Link>
            <Nav.Link className="a1">Orders</Nav.Link>
            <Nav.Link className="a1">Payouts</Nav.Link>
            <Nav.Link className="a1">Banking</Nav.Link>
            <Nav.Link className="a1">Settings</Nav.Link>
        </Nav>
        </div>
        <div>
            
        <p><b className="w2">Revenue</b></p>
        <Dropdown className="d-inline mx-2 w2" style={{backgroundColor:"lightgray",marginTop:"10px"}}>
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Courses
        </Dropdown.Toggle>
        </Dropdown>
        <Dropdown className="d-inline mx-2" autoClose="inside"  variant="secondary">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          thisweek
        </Dropdown.Toggle>
        </Dropdown>
            
        </div>
    
    </div>
    
        <div className="grid-item item2">
        <div className="container">
        <div class="float-end">
            
            <h3>4%</h3>
            <p><b>Previous(week)</b></p>
        </div>
        </div>
        <div className="container">
         
            <h3>$32,000</h3>
            <p><b>Earnings(this week)</b></p>
            </div>
            <div className="container mt-3">
<p><b>Top selling courses</b></p>
<table class="table">
<tbody>
      <tr>
        <td className="f2">1</td>
        <td>Beginner PHP courses</td>
        <td>$14,000</td>
      </tr>
      <tr>
        <td className="f2">2</td>
        <td>PHP Workshop with Anna University</td>
        <td>$10,000</td>
      </tr>
      <tr>
        <td className="f2">3</td>
        <td>Advanced PHP courses</td>
        <td>$8,000</td>
      </tr>
      <tr>
        <td className="f2">4</td>
        <td>Advanced PHP courses</td>
        <td>$8,000</td>
      </tr>
      <tr>
        <td className="f2">5</td>
        <td>Advanced PHP courses</td>
        <td>$8,000</td>
      </tr>
      </tbody>
    </table>

            </div>
        </div>
    
    <div className="grid-item item3">
        <p><h4>Course sales for (this week)</h4></p>
       <div className="image">
        <img src={image}
        height="300px" width="95%"/>

       </div>
        </div>
        
    <div className="grid-item item4">
        <p ><h3>Recent Transactions</h3></p>
       <table className="k1">
            <thead >
                <tr className="n1">
                    <th></th>
                    <th>Received from</th>
                    <th>Paid for</th>
                    <th>Through</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    
                    <td><input type="checkbox"></input></td>
                    <td><b>Siddharth R</b><br/><p class="text-muted">Jun 10,2021 at 10:00 AM</p></td>
                    <td><b> Festival of UI/UX Design</b><br/><p class="text-muted">Term fees</p></td>
                    <td>Cash</td>
                    <td bg-color="green">$12,345.00+</td>
                    <td>...</td>
                    </tr>
                    <tr>
                    
                    <td><input type="checkbox"></input></td>
                    <td><b>Siddharth R</b><br/><p class="text-muted">Jun 10,2021 at 10:00 AM</p></td>
                    <td ><b> Festival of UI/UX Design</b><br/><p class="text-muted">Term fees</p></td>
                    <td>Cash</td>
                    <td>$12,345.00+</td>
                    <td>...</td>
                    </tr>
                    <tr>
                    
                    <td><input type="checkbox"></input></td>
                    <td><b>Siddharth R</b><br/><p class="text-muted">Jun 10,2021 at 10:00 AM</p></td>
                    <td><b> Festival of UI/UX Design</b><br/><p class="text-muted">Term fees</p></td>
                    <td>Online</td>
                    <td>$12,345.00-</td>
                    <td>...</td>
                    </tr>



            </tbody>
            </table>
            </div>
            <div class="sidebar">
            <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#Courses"><i class="fa fa-fw fa-wrench"></i> Courses</a>
  <a href="#Events"><i class="fa fa-fw fa-user"></i> Events</a>
  <a href="#Revenue"><i class="fa fa-fw fa-envelope"></i> Revenue</a>
  <a href="#Analaytics"><i class="fa fa-fw fa-envelope"></i> Analaytics</a>
            </div>
        </div>
</div> 
    )
}
export default Layout;