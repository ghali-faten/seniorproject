import React, {useState, useEffect} from 'react';
import axios from "axios";


const Product = ({name, price, image}) => {

  const [items, setItems] = useState([])
 const [refresh, setRefresh] = useState(false) 


 useEffect(() => {
  axios.get('/api/product/') 
   .then(result=> {
     setItems(result.data)
    })
    .catch(err=>{
     console.error(err)
     
   })
 }, [refresh])

    const addToBasket = (req, res)=>{
      axios.post('/api/product/add', {name, price, image})
      .then((res)=>{
                 setRefresh(!refresh)
               console.log("response", res);
                if(!res){
                    alert('Error');
                   return;
                      }else{
                          alert(`Added ${name} to basket`);
                           dispatch({type: ADD_TO_BASKET , product:{id : id}});
                            window.location='/checkout'
                              }
           
                })
         .catch((err)=>console.log(err))
    }

    const removeFromBasket = (id)=>{
       axios.delete('/api/product/delete/' + id)
      .then((res)=>{
        setRefresh(!refresh)
        console.log(res)
     })
     .catch((err)=>console.log(err))
}
    
     return (

      <div className = "product">
        <div className = "product__info">
            <p>{name}</p>
            <p className = "product__price">
                <strong>{price}</strong>
                <small>Dt</small>
            </p>
            <img src={image} alt="Product Image" />
            </div>
           <button className = 'btn-addtobasket' onClick = {addToBasket}>Add to Basket</button>
           <br/>
           <button className = 'btn-rFB' onClick = {removeFromBasket}>Remove from Basket</button><br/><br/>
            
           </div>
    
         )
    }
                                        
               
           
export default Product;