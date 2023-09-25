import React from 'react'


const Checkout = () => {

 const handleCheckout = ()=>{
  window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_buttonid=3826407',
  '_blank')
  }
  
 
  return (
    <div className = "checkout">
        <div className='checkout__left'>
            <img className='checkout__ad' src ="https://i.pinimg.com/originals/71/10/8d/71108ded1e17057bc8d0dc5044ace178.jpg"/>
           <div>
            
            
              <h3>Hello Guest</h3>
            <h3 className='checkout__title'>Your Shopping Basket</h3>
            <hr/>
            <ul id="basket" >
            <li><p>Aloevera Gel</p></li>
             <li><img src='https://forever-fit.hu/img/32314/71612_altpic_1/585x585,r/71612.jpg?time=1573071612' alt=""/></li>
                <li ><p style={{color:'#111'}}>86 Dt</p></li>
              <br />
              <li onClick={()=>handleCheckout()}className='btn btn--primary checkout__cta'><i className="fa fa-shopping-cart">
                </i> </li>
              <hr/>
              <li><p>Aloe Berry Nectar</p></li>
              <li><img src="https://www.foreverliving.fr/media/image/product/details/73512.png"
                alt="" /></li>
              <li ><p style={{color:'#111'}}>86 Dt</p></li>
              <br />
              <hr/>
              <li><p>Freedom Aloe gel </p></li>
              <li><img src='https://th.bing.com/th/id/OIP.EtpGE4_7iHfBy54HS_ncMAHaJj?pid=ImgDet&rs=1' alt="" /></li>
              <li ><p style={{color:'#111'}}>100 Dt</p></li>
              <br />
              <hr/>
              <li><span className = "checkout__total">Total:</span>
              &nbsp;&nbsp;<b className='total'>272 Dt</b></li>
            </ul>
            <table className="table table-striped checkout__table" >
              <thead><tr ><th scope="col"></th></tr></thead>
              <tbody id ="basket"></tbody>
              </table>
              </div>
              </div>
              <hr/>
              <br/><br/>
              <div  style={{textAlign:'center'}}className ='checkout__right'>
                <form action="/placeholder/" method= "POST"><input type="hidden" name="_csrf" value={window.csrf}/>
                <input type="text" name="email" placeholder="<EMAIL>" />
                  <br /><br />
                  <button className = "payment" type="submit"
                   onClick={() => handleCheckout()} >Proceed to Payment</button>
                  </form>
                  </div>
                  </div>
                  )
                  }
                  

                  
                  
 export default Checkout;
               

