import React from 'react'
import { useState } from 'react';
function Zezengeee() {
    const[count,setcount]=useState(0);
    const handleincrease = (()=>setcount (count + 1))
    const handledecrease = ( ()=>setcount (count - 1))
    const handlereset = ( ()=>setcount (0))
  return (
    <div>
    <p>COUNT:{count}</p> 
    <button onClick={handleincrease}>Increase</button> 
    <button onClick={handledecrease}>Decrease</button>
    <button onClick={handlereset}>Reset</button>
    </div>
  )
  
}

export default Zezengeee

