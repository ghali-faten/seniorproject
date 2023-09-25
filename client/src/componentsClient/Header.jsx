import React, {useState, useEffect} from "react";
import SearchIcon from "@material-ui/icons/search"
import {Link} from "react-router-dom"
import  {ShoppingBasket} from "@material-ui/icons";
import axios from "axios";

const Header = () => {
  
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false)
  

    useEffect(() => {
      axios.get('/api/product/') 
       .then(result=> {
         setProducts(result.data)
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

 const search = (name)=>{
  (!name) ? setRefresh(!refresh) :
      axios.get(`/api/product/${name}`)
        .then((res) => {
          setProducts(res.data)
        })
 }

  return (
      <nav className= "header">
        <Link to ="https://www.foreverliving.be/fr">
          <img className = "header__logo" alt = "logo" src = "http://healthy.a4m.eu/healthy_coffee/img/aloe144x36.png"/> 
          </Link>
          <div className = "header__search">
              <input type ="text" className = "header__searchInput" 
              placeholder='Search a product' onChange={(e) => search(e.target.value)}/>
              <SearchIcon className ="header__searchIcon" 
              onClick ={()=>addToBasket()}/>
          </div>
          <div className = "header__nav">
            {/* 1st Link */}
            <Link to = "/login">
          <div className = "header__option">
            <span className = "header__optionLineOne">hello Guest//</span><br/>
            <span className = "header__optionLineTwo">Sign In/ </span>
          </div>
          </Link>
            {/* 2nd link*/ }
          <Link to = "/home" className = "header__Link">
          <div className = "header__option">
            <span className = "header__optionLineOne">//Returns</span><br/>
            <span className = "header__optionLineTwo"> /& orders</span>
          </div>
          </Link>
          </div>
          {/* basket icon with number */}
          <Link to = "/checkout" className = "header__Link" >
            <div className = "header__optionBasket"> 
             <ShoppingBasket/>
             {/* number of items in the basket */}
             <span className = "header__optionLineTwo header__basketCount">0</span>
             </div>
          </Link> 
          </nav>  

)
}

export default Header

