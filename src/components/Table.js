import axios from "axios";
import { useEffect, useState } from "react";

function AllItems(){
   const [data,setData]=useState([]);
    const baseurl="http://localhost:8080/allitem"
    const allitems=()=>{
        axios.get(baseurl).then((response)=>{
            // console.log(response.data)
                 return response.data;
                 
        })
    }

    useEffect(()=>{
        setData(allitems)
    },[])
    // console.log(allitems)
    // setInterval(() => {
    //   setData(allitems)  
    // }, 100);
    // allitems();
      console.log(data)
    }

    export default AllItems;
