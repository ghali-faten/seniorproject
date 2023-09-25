import React from "react";
import Product from "./Product.jsx";

const Home = ()=>{
    return (
        <div className = "home">
         <div className = "home__container"/>
        <img className = "home__image"
          src="https://2.bp.blogspot.com/-iPBYxKrTao8/Ue6YOzVKddI/AAAAAAAAANM/ytv0xgaRZ-o/s400/Forever+Living+Products+website.jpg" 
             alt="Banner img"/>
         <div className = "home__row">
                <Product
                name= "Aloevera gel"
                price = {86}
                image = "https://forever-fit.hu/img/32314/71612_altpic_1/585x585,r/71612.jpg?time=1573071612"
                   />
                   <Product 
                name= "Aloe berry nectar"
                price = {86}
                image = "https://www.foreverliving.fr/media/image/product/details/73512.png"
                />
                   <Product
                name= "Freedom Aloe gel"
                price = {100}
                image = "https://th.bing.com/th/id/OIP.EtpGE4_7iHfBy54HS_ncMAHaJj?pid=ImgDet&rs=1"
                 />
                </div>
                 <div className = "home__row">
                   <Product
                name= "Aloe Peaches"
                price = {90}
                image = "https://i1.wp.com/aloe-serenite.fr/wp-content/uploads/2020/02/777-2.png?fit=496%2C604&ssl=1"
               />
                   <Product 
                name= "Aloe Mango"
                price = {90}
                image = "https://th.bing.com/th/id/OIP.K_s7K24T39bROuUw_r9EHQHaI4?pid=ImgDet&rs=1"
             />
            </div>
            <div className = "home__row">
                 <Product
                name= "Active Pro B"
                price = {108}
                image = "https://forever.com.ro/wp-content/uploads/2012/05/forever_active_pro_b-147x300.jpg"
                  /> 
                  </div>
                  
         
        </div>
    
)
}


        
             
export default Home;