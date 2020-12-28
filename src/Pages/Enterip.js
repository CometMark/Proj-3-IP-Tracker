import React,{useState,useContext} from 'react';
import Findip from "../Components/Findip";

import "./Enterip.css";

const Enterip=()=>{ 
const[customIp,setCustomIp]=useState("");  
const[dat,setDat]=useState("");

const inputIP=(event)=>{
    setCustomIp(event.target.value);
    setDat("");
}

const submitHandler=(event)=>{
event.preventDefault();
setDat(customIp);
}

return(<React.Fragment>
    <h1 className="head_1" >
        IP Address Tracker
    </h1>
    <form onSubmit={submitHandler} className="form_input" >
    <input placeholder="Search for any IP address" type="text" value={customIp}  onChange={inputIP} size="40" className="input_ip" />
    <button className="btn" type="submit" >></button>
    </form>
    <div className="details" >
    <Findip inputIp={dat} />
    </div>
    
    </React.Fragment>
);
}

export default Enterip;