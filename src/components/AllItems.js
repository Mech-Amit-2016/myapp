import { useEffect, useState } from "react";
import axios from "axios"; 
function AllItems(){
    const[data,setData]=useState([{name:"no_iteme_found",description:"nothing_to_show"}])

    const fetchData =()=>{
        
        axios.get("http://localhost:8080/allitem").then((response)=>{
            console.log(response.data==null)
            if(response.data.length === 0)
            setData(data)
            else
            setData(response.data)
            console.log("data="+data[0].name,"description="+data[0].description)
        })
    }
   
    
    useEffect(()=>{ fetchData()});
      
    const column = Object.keys(data[0]);
    // get table heading data
    const ThData =()=>{
       
        return column.map((data)=>{
            return <th key={data}>{data}</th>
        })
    }
   // get table row data
   const tdData =() =>{
      
        return data.map((itemdata)=>{
          return(
              <tr>
                   {
                      column.map((v)=>{
                          return <td>{itemdata[v]}</td>
                      })
                   }
              </tr>
          )
        })
   }
     return (
         <table className="table">
           <thead>
            <tr>{ThData()}</tr>
           </thead>
           <tbody>
           {tdData()}
           </tbody>
          </table>
     )
   
}

export default AllItems;