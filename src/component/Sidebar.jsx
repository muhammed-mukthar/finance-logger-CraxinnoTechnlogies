import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Sidebar() {
 const {balance,history} = useSelector(state=>state)
  const dispatch = useDispatch()

const [isSubmitted, setIsSubmitted] = useState("");
  const handleSubmit = (event) => {

    // Prevent page reload
    event.preventDefault();

    if(isSubmitted <0){
        alert('value cannot be negative')
    }else{
        dispatch({type:'ADD',payload:Number(isSubmitted)})
    
        setIsSubmitted("");
    }
  
  };
  return (
      <div className="main">
      <h2>Account</h2>
      <p>count:{history.length}</p>
      <h5>Balance {balance}</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="number"
          name="balance"
          onChange={(e) => setIsSubmitted(e.target.value)}
          value={isSubmitted}
        />
        <button type="submit">Submit</button>
      </form>

      <p>Balance History</p>
        {history.map((v, i) => {
     return <div key={i} className="second">
          <h4>Balance :{v}</h4>
      </div>
        })}
    </div>
  )
}

export default Sidebar