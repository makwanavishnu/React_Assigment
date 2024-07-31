import React, { useState } from 'react'

export default function CounterComponent() {

    const [count,setCount] = useState(0);
  return (
<div>
    
    <div style={{textAlign:"center"}}>
    <h3>Counter App</h3>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"green",color:"white",cursor:"pointer"}}>Increament</button>
        &nbsp;
        <button onClick={()=>{setCount(count-1)}} style={{backgroundColor:"red",color:"white",cursor:"pointer"}}>Decreament</button>
        </div>

    </div>
  )

}
