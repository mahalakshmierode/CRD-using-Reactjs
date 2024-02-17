
import React from "react";
import "./App2.css";


import Revenue from "./Revenue";
import New from "./New";
import Recent from "./Recent";
function App2(){

return(
    <div>
    <div className="flex-container">
<div className="a1">Overview</div>
<div className="a1">Orders</div>
<div className="a1">Payouts</div>
<div className="a1">Banking</div>
<div className="a1">Settings</div>

</div>
<Revenue />
<New />
<Recent/>
</div>

        
    
)
}
export default App2;