import React from 'react'
import { useState} from "react";
import axios from "axios";
 

function AddItem(){
    
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [dis,setDis]=useState([{item:"",item_description:""}])
     
    const clickHandler = (event) => {
        // console.log(`name=${name}`)
        document.getElementById("c").style.display="none"
        let baseurl=''
       if(event.target.value ==='a'){
       baseurl=`http://localhost:8080/additem?name=${name}&description=${description}`
       }
       else
       baseurl=`http://localhost:8080/finditem?name=${name}`
        axios.get(baseurl).then((response)=>{
            console.log(response.data)
            if(event.target.value === 'b'){
           setDis(response.data)
        // console.log(dis)
        // console.log(name)
        // console.log(dis)
        document.getElementById("c").style.display="block"
       document.getElementById("c").innerHTML=`<p>item:${response.data.name} description:${response.data.description}</p>`      
    document.getElementById("c").style.backgroundColor="blue"
    }
        })
    };

       

    const namelistner=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    const descriptionlistner=(event)=>{
console.log(event.target.value)
setDescription(event.target.value)
    }

    return(<div className='AddItem'>
       <div> name:<input type="text"  onChange={namelistner}/></div>
        <div>description:<input type="text"   onChange={descriptionlistner}/></div>
        <button onClick={clickHandler} value="a" style={{margin:5}}>adddata</button>
        <button onClick={clickHandler} value="b" style={{margin:5}}>findItemByName</button>
        <div id="c" style={{height:200,width:200}}></div>
    </div>)
}
    
export default AddItem;