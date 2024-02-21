import React, {useState} from 'react'
import styles from "./index.module.css"
import { useNavigate } from 'react-router-dom';
import { useAccount } from '../../context';

export default function Login() {
  
  const [login , setLogin ] = useState(true);
  const [username, setUsername] = useState("")
  const [password , setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorbox, setErrorBox] = useState(false)
  const {accountDetails, setAccountDetails} = useAccount()  

  const Navigate = useNavigate()

  const url = "http://127.0.0.1:8000/user/";

  const HandleAccount = async ()=>{
      localStorage.setItem("loggedin", "true" )
      setAccountDetails({"username" : username , "email" : email})
      Navigate("/")
  }

  const HandleSubmit = async (e)=>{
    e.preventDefault()

    const request = JSON.stringify({
      username : username,
      password : password,
      email : email
    })
    const options = {
      method : "POST",
      headers :{
        "Content-Type": "application/json"
        
      },
      body : request
    }

    try{
      const resp = await fetch (url + (login ? "login" : "new"), options)
      if (resp.ok){
        const data = await resp.json()
        login ? HandleAccount()  : setLogin(!login)
      } 
      else {
        setErrorBox(true)
      }
    }
    catch (e){

      console.log(e)

    }

  }
  return (
   <>
   <form className={styles["FormContainer"]} onSubmit={HandleSubmit}>
    
    <input className={styles["InputBox"]} type ="text" value = {username} onChange={(e) =>{setUsername(e.target.value)}} placeholder='Username123' />

    {login ? null : (<input className={styles["InputBox"]} type = "email" value = {email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email@email.com' />)}
    
    <input className={styles["InputBox"]} type = "password" value = {password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password123'/>

    <button className={styles["SubmitButton"]} type = "submit">{login ? "Login" : "Sign Up"}</button>

    {errorbox ? (<label className={styles["ErrorBox"]}> {login ? "No account found with those credentials" : "username or email not unique"} </label>) : null}

    <label onClick={(e)=>{setLogin(!login); setErrorBox(false);}}>{login ? "Sign Up" : "Login"}</label>
   </form>
   
   </>
  )
}
