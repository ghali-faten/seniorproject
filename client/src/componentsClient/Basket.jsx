import React, {useState, useEffect} from 'react';


const Basket = ({basket, setBasket}) => {
const [price, setPrice] = useState(0);

const handlePrice = ()=>{
    let count = 0;
    basket.map((product)=>{
        count += product.amount * product.price
    })
    setPrice(count);
}
const handleRemove = (id)=>{
    const arr = basket.filter((product)=>product.id !== id);
    setBasket(arr);
}
useEffect(()=>{
handlePrice()},
[])


return (
    <article>
        {
            basket.map((product) => {
             <div className = "basket_box" key = {product.id}>
              <div className = "basket_img">
                <img src={product.img}/>
                 <p>{product.name}</p>
              </div>
              <div>
                <button onClick = {()=>handleChange(product, +1)}> + </button>
                <button >{product.amount}</button>
                <button onClick = {()=>handleChange(product, -1)}> - </button>
              </div>
              <div>
               <span>{product.price}</span>
               <button onClick = {()=>handleRemove(product.id)}> Remove</button>
              </div>
             </div>
            }
                )
        }

         <div>
            <span>Total price of your basket</span>
            <span>Rs - {price}</span>
         </div>
    </article>
   
  )
}

export default Basket





