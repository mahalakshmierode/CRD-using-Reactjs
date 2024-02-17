import React from 'react';

import image from './image.jpg';
import maha from './maha.jpg';
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
function Layout() {
  return (
    <div class="container-fluid"  >
      <div className="row">

        <div className="col-sm-1 bg-dark text-white" style={{ height: "1000px", padding: 0, margin: 0 }} >
          <div class="sidebar">
            <p className="p"><i class="bi bi-house" style={{fontSize:"30px"}}><br /></i> Home</p><br />

            <div><p className="p"><i class="bi bi-shield-check" style={{fontSize:"30px"}}><br /></i> Courses</p></div><br />
            <p className="p"><i class="bi bi-stars"style={{fontSize:"30px"}} ><br /></i> Events</p><br />
            <p className="p"><i class="bi bi-building" style={{fontSize:"30px"}}><br /></i>Institutions</p><br />
            <p className="p"><i class="bi bi-currency-rupee" style={{fontSize:"30px"}} ><br /></i> Revenue</p><br />
            <p className="p"><i class="bi bi-graph-up" style={{fontSize:"30px"}} ><br /></i> Analytics</p>

          </div>
        </div>

        <div className="col-sm-11 divcolor" style={{ padding: 0, margin: 0, backgroundColor: "rgb(240, 223, 240" }}>
          <div className="row"  >
          
            
            
              <div className="col-md-3" style={{marginTop:"13px"}} >
              <i className="bi bi-chevron-left arrow2" style={{ marginLeft: "40px" }}></i>
              <i className="bi bi-chevron-right arrow3" style={{ marginLeft: "20px" }}></i>
              </div>
             
              <div className="col-md-6" style={{marginTop:"13px"}}>
              <i className="bi bi-search"style={{ marginRight: "20px" }}></i>
              <input type="search" className="f5" style={{backgroundColor: "rgb(240, 223, 240"}} placeholder="search for courses,skill, certification and peers"></input>
            </div>
            <div className="col-md-2" style={{marginTop:"13px"}}>
           <div className='grid-container'>
             
              
                <i className="bi bi-envelope env" style={{ marginLeft: "120px" }}></i>
                <i className="bi bi-bell bell" style={{ marginLeft: "20px" }}></i>
                <img src={maha}
                  height="25px"
                  width="25px"
                  style={{ borderRadius: "50px", marginLeft: "40px" }} />
             </div> 
             </div>
             
            </div>
          
          <div className=" bar">
            <Navbar bg="white">
              <Nav >
                <Nav.Link className="a1">Overview</Nav.Link>
                <Nav.Link className="a1">Orders</Nav.Link>
                <Nav.Link className="a1">Payouts</Nav.Link>
                <Nav.Link className="a1">Banking</Nav.Link>
                <Nav.Link className="a1">Settings</Nav.Link>
              </Nav>
            </Navbar>

          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <p className="a2"><b>Revenue</b></p>
              </div>
              <div className="col-md-2">
                <Dropdown  >
                  <Dropdown.Toggle className="q2" style={{ backgroundColor: "rgb(199, 196, 196)", border: "none", marginLeft: "70px", borderRadius: "20px", color: "black",marginLeft:"140px" }} >
                    Courses
                  </Dropdown.Toggle>
                </Dropdown>
              </div>
              <div className="col-md-1">

                <Dropdown >
                  <Dropdown.Toggle className="q1" style={{ backgroundColor: "rgb(199, 196, 196)", border: "none", borderRadius: "20px", color: "black",marginLeft:"55px" }}>
                    thisweek
                  </Dropdown.Toggle>
                </Dropdown>
              </div>
            </div>
            <div className="row" style={{
              backgroundColor: "white",
              marginRight: "30px",
              marginLeft: "30px", borderRadius: "15px"
            }}>
              <div class="col-md-3">
                <p className="t1"><i class="bi bi-currency-rupee"></i><b>32,000</b></p>
                <p className="y1" s>Earnings(this week)</p>
              </div>
              <div class="col-md-3">
                <p className="t1"><b><i className="bi bi-arrow-up short arrow"></i>4%</b></p>
                <p className="y1">Previous(week)</p>
              </div>
              <div class="col-md-5">
                <p className="g1"><b>Courses offer this week</b></p>
              </div>

              <div className="row">
                <div class="col-md-6">
                  <div className="table-responsive">
                    <p><b>Top selling courses</b></p>
                    <table className="table table-border">
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
                <div className="col-md-5">
                  <img src={image}
                    height="300px" width="95%" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                
                <p style={{marginLeft:"25px",marginTop:"20px"}}><h3>Recent Transactions</h3></p>
              </div>
              <div className='col-md-4' style={{}}>
                <p className='s1' style={{marginLeft:"155px", marginTop:"30px",paddingLeft:"25px"}}><b>show all transactions</b></p>
              </div>
              <div style={{marginRight: "30px",
              marginLeft: "30px", width:"95%"}}>
              <div className="table-responsive" >



                <table className="table table-striped">
                  <thead >
                    <tr className="n1">
                      <th style={{ backgroundColor: " rgb(243, 181, 243)" }}></th>
                      <th style={{ backgroundColor: " rgb(243, 181, 243)" }}>Received from</th>
                      <th style={{ backgroundColor: " rgb(243, 181, 243)" }}>Paid for</th>
                      <th style={{ backgroundColor: " rgb(243, 181, 243)" }}>Through</th>
                      <th style={{ backgroundColor: " rgb(243, 181, 243)" }}>Amount</th>
                      <th style={{ backgroundColor: " rgb(243, 181, 243)" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >

                      <td><input type="checkbox"></input></td>
                      <td><b><i class="bi bi-shield-check" style={{paddingRight:"8px"}} ></i>Siddharth R</b><br /><p class="text-muted">Jun 10,2021 at 10:00 AM</p></td>
                      <td><b> Festival of UI/UX Design</b><br /><p class="text-muted">Term fees</p></td>
                      <td>Cash</td>
                      <td><span className='green'><b>$12,345.00+</b></span></td>
                      <td ><i className='bi bi-three-dots'></i></td>
                    </tr>
                    <tr>

                      <td><input type="checkbox"></input></td>
                      <td><b><i class="bi bi-stars" style={{paddingRight:"8px"}}></i>Siddharth R</b><br /><p class="text-muted">Jun 10,2021 at 10:00 AM</p></td>
                      <td ><b> Festival of UI/UX Design</b><br /><p class="text-muted">Term fees</p></td>
                      <td>Cash</td>
                      <td><span className='green'><b>$12,345.00+</b></span></td>
                      <td><i className='bi bi-three-dots'></i></td>
                    </tr>
                    <tr>

                      <td><input type="checkbox"></input></td>
                      <td><b><i class="bi bi-currency-rupee" style={{paddingRight:"8px"}}></i>Siddharth R</b><mark style={{ backgroundColor: "orange", color: "white", borderRadius: "15px", paddingRight: "10px", paddingLeft: "10px", marginLeft: "10px" }}>Refund</mark><br /><p class="text-muted">Jun 10,2021 at 10:00 AM</p></td>
                      <td><b> Festival of UI/UX Design</b><br /><p class="text-muted">Term fees</p></td>
                      <td>Online</td>
                      <td><span className='Red'><b>$12,345.00-</b></span></td>
                      <td><i className='bi bi-three-dots'></i></td>
                    </tr>



                  </tbody>
                </table>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>


  )
}
export default Layout;
