import axios from "axios";
import React, { useEffect, useState } from "react";

function FindItem(){
    const [name,setName]=useState("");

    const namelistner=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    const namehandler=(event)=>{
setName(event.target.value)
    }
    const seacrhitem =()=>{
       
        axios.get("http://localhost:8080/finditem?name="+name).then((response)=>{
            console.log(response.data)
        })
    }

    useEffect(()=>{seacrhitem()},[]);
    return(<></>)
}

export default FindItem;