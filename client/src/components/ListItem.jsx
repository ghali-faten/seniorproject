import React, { useState } from 'react';
import axios from "axios"


const ListItem = ({ item,refresh,setRefresh })=> {

 const[name, setName]= useState("")
 const[category, setCategory]= useState("")
 const[price, setPrice]= useState(0)
 const[image, setImage]= useState("")
 const[quantity, setQuantity]= useState(0)
 const[view, setView] = useState(false)


 
const update = (id)=>{
   axios.put('/api/item/update/' + id, {name, category, price, image, quantity}) 
  .then((res)=>{console.log(res),
  setRefresh(!refresh)})
  .catch((err)=>console.log(err))
}

const remove = (id)=>{
  axios.delete('/api/item/delete/' + id)
  .then((res)=>console.log(res))
    setRefresh(!refresh)
  .catch((err)=>console.log(err))
}

const uploadImage = () => {
    
  const data = new FormData()
  data.append('file', image)
  data.append('upload_preset', 'fatengh')
  data.append("cloud_name", "danknc4xt")

  fetch("https://api.cloudinary.com/v1_1/danknc4xt/image/upload", {
    method: "post",
    body: data
  })
    .then((res) => res.json())
    .then((data) => {
      setImage(data.secure_url);
    }).catch((err) => {
      console.log(err)
    })
  }




    return (
     
        <div className = "Container">
        <div className = "Item">
        <p> Name :  {item.name}  ## 
         Category :  {item.category} </p> 
        <p> Price :  {item.price} DT  ##  
         Quantity :  {item.quantity}</p>
        <img src={item.image} style={{ height: "300px" }} /> 
      
        </div> 
      <button className ='btn-delete' onClick= {()=>{remove(item.iditem)}}>Delete</button>
      <br />
      <button className = 'btn-update' onClick={()=>setView(!view)}>Update</button>
     {view &&
      <div>
        <input className = 'choisir' type = "file" onChange = {(e)=> {console.log(e.target.file), setImage(e.target.files[0]) 
              }}/> 
        <button className = 'btn-upload' onClick = {uploadImage}>upload !</button>  
        <input placeholder='New name' onChange = {(e)=>setName(e.target.value)}/>
        <input placeholder = 'New category' onChange = {(e)=>setCategory(e.target.value)}/>
        <input placeholder = 'New price' onChange = {(e)=>setPrice(e.target.value)}/>
        <input placeholder = 'New image' value = {image} onChange = {(e)=>setImage(e.target.value)}/>
        <input placeholder = 'New quantity' onChange = {(e)=>setQuantity(e.target.value)}/>
           
        <button className = 'btn-ok' onClick={()=>{setView(!view), 
          update(item.iditem)}}>OK</button>
         </div>
        }
        <br/>

       </div>
       
    )
  }
    

     


export default ListItem;