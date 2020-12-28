import React,{useEffect, useState, useContext} from 'react';
import {DataContext} from "../context/data-context";
import axios from "axios";

import "./Findip.css";

const Findip=(props)=>{
    const[rep,setRes]=useState("");
    const {data,setData}=useContext(DataContext);

  const API_KEY="at_TTqX8kpNQ4AX98gSnoAb7D3NxbwD4";
  const url=`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${props.inputIp}`; 

  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      setRes(response.data);
        setData(response.data);
    }).catch(err=>console.error(err))
     
  },[props.inputIp])

  const fetchedData=[];

  if(rep){
    for(let key in rep){
        fetchedData.push(rep[key]);
    }
  }



  return(<div  >
      {fetchedData.length>0 && (
      <div className="add_details" >

        <div className="box_content"><p>IP ADDRESS</p><h1>{fetchedData[0]}</h1></div>
        <div className="box_content last_two" style={{"width":"300px"}} ><p>LOCATION</p><h1 >{fetchedData[1].city+","+fetchedData[1].region+" "+fetchedData[1].postalCode}</h1></div>
        <div className="box_content "><p>TIMEZONE</p><h1>{"UTC "+fetchedData[1].timezone}</h1></div>
        <div className="box_content last_two"><p>ISP</p><h1>{fetchedData[3].name}</h1></div>

      </div>) }
      
  </div>
  )

}

export default Findip;