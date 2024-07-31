import React, {  useState } from 'react'
import Login from './Login'
import Registration from './Registration';
import './Login.css'

export default function HandleComponent() {
  const [btn,setBtn] = useState(null);
  
 
 
  

  return (
    <div>
        <h3>Model Login Form</h3><br />
        <button  onClick={()=>setBtn(btn=== 'login' ? null : 'login')}>Open Model</button><br /><br />
        <h3>Model Registration Form</h3><br />
        <button onClick={()=>setBtn(btn=== 'register' ? null : 'register')}>Open Model</button><br /><br />
        
        <span  className={btn=== 'login' ? 'popup-content': ""} >
        {btn==='login' && <Login dlt={()=>setBtn(null)}/> }
        
        </span>
        <br /><br />
        
        <span className={btn=== 'register' ? 'popup-content': ""}>
        {btn==='register' && <Registration dlt={()=>setBtn(null)}/>}
        </span>
    </div>
  )
}