import React, {useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

 
const Login = ({loginClient})=>{

  const [email, setEmail]= useState("");
  const [password , setPassword] =useState("");
  const [message, setMessage] = useState('');


const handleSubmit = () => {
  axios.get('/api/client/login', {
      email: email,
      password: password
    })
    .then((response) => {
      if (response && response.data){
        const idClient = response.data.idClient
       loginClient(idClient)
    }
  })
    .catch((error) => {
      console.log(error);
      setMessage(error.response.data);
    })
}


const register = ()=>{
    axios.post('/api/client/add', {email, password})
    .then((response)=>
        // setRefresh(!refresh)
{console.log(response)})
.catch((err)=>console.log(err))
}
 
return (

    <div className ="login__container">
    <Link to="/home">
    <img className = "login__logo" 
    src ="http://healthy.a4m.eu/healthy_coffee/img/aloe144x36.png" alt = ""/>
    </Link>
    <h5>Sign In</h5>
    <form onSubmit={ handleSubmit}>
     <div>
   <label htmlFor="email">Email :</label><br></br>
   <input type="email" placeholder='Enter email' className="email-input" value={email}
    onChange={(e) => setEmail(e.target.value)} required />
        </div>
        
  <div>
   <label htmlFor="password">Password :</label>
    <input type="password" placholder = 'Enter password' className="password-input" value={password}
     onChange={(e) => setPassword(e.target.value)} required/>
  </div>
     <button className = "login__button" onClick={()=>handleSubmit()} >Login</button>
     <button type ="submit" className = "login__signInButton" onClick ={()=>register()}>Sign Up</button>
    </form>
    {message && <p className="login__message">{message}</p>}
    <p>By signing-in, you agree to Forever's Terms and Conditions </p>
    
  </div>
  )}    
   
 
export default Login;








