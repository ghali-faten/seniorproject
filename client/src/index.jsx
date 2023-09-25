import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import List from './components/List.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentsClient/Header.jsx';
import Login from './componentsClient/Login.jsx';
import Home from './componentsClient/Home.jsx';
import Checkout from './componentsClient/Checkout.jsx';




const App = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [refresh, setRefresh] = useState(false);


     useEffect(() => {
   axios.get('/api/item/') 
    .then(result=> {
      setItems(result.data)
     })
     .catch(err=>{
      console.error(err)
      
    })
  }, [refresh])

  


   const addItem = (req, res)=>{
    axios.post('/api/item/add', {name, category, price, image, quantity})
    .then((res)=>
       setRefresh(!refresh))

  .catch((err)=>console.log(err))
  }

 const search = (name)=>{
  (!name) ? setRefresh(!refresh) :
      axios.get(`/api/item/${name}`)
        .then((res) => {
          setItems(res.data)
        })
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
        return(
         <>
         <Router>
       <div className='ap'>
         <Routes>
         <Route path ="/checkout" element= {<><Header/><Checkout/></>}/>
         <Route path="/login" element={<><Login /></>} />
         <Route path ="/" element= {<><Header/><Home/></>}/>
           </Routes>
       </div>

           <div>
         <h1>Food Supplements Shop</h1>
        <div className = "addcontainer">
      <input placeholder='Search a product' onChange={(e) => search(e.target.value)}></input>
       </div>

       <div className = "App">
       <input type = "file" onChange = {(e)=> {console.log(e.target.files), setImage(e.target.files[0]) 
              }}/> 
            <br/>
       <button className = 'btn-upload' onClick = {uploadImage}>upload !</button>
          
        </div>
     

      <div className = "adcontainer">
      <button className = 'btn-addItem' onClick={()=>addItem()}>Add Item</button> <br/>  <br/>
      <input placeholder='Name' onChange={(e)=>setName(e.target.value)} /> <br/> <br/>
      <input placeholder='Category' onChange={(e)=>setCategory(e.target.value)} /> <br/> <br/>
      <input placeholder='Price' onChange={(e)=>setPrice(e.target.value)} /> <br/> <br/>
      <input placeholder='Image' value = {image} onChange={(e)=>setImage(e.target.value)} /> <br/> <br/>  
      <input placeholder='Quantity' onChange={(e)=>setQuantity(e.target.value)} />
      </div>
      <List items={items} setRefresh={setRefresh} refresh={refresh}/> <br/>
      
      </div>
       
      </Router>
      </>
)
  }

ReactDOM.render(<App />, document.getElementById('app'));



