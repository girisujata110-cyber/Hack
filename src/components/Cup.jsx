import React, { useState } from 'react'

const Cup = () => {
    const [message,setMessage] = useState("")


    const yes = async()=>{
        setMessage(

            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMlHCfuuazExJyXfITYz5bu9Lxfqj8X0f8IsJH6y_dw&s=10'

      )}
            

    
    const no= ()=>{
        setMessage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qX9-X3_fkX2D-lppWSC3Iu9dtmIfJ1wnZG2uXAI1qQ&s=10')
    }
    const yess = ()=>{
        try{
             
        } catch{error}{
            
        }

    }

    



  return (
    <div className='h-screen justify-center items-center flex flex-col'>
        <h1>
            do you Love ronaldo
        </h1>
        <img src={message}
         alt="" />
        <h1>{message}</h1>
        <button onClick={yes}>yes</button>
        <button onClick={no}>no</button>
    </div>
  )
}

export default Cup
