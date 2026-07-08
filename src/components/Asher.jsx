import React, { useState } from 'react'

const Asher = () => {
    const [data,setData]= useState(10);

 
    const decarease =()=>{
setData(data-1)
    }

    const increase =()=>{
        setData(data+1)

    }
    const multiply=()=>

        
    {
        let a=1
        let b=3
        setData(a*b)
    }
    const divide=()=>
    {
        let a=4
        let b=6
        setData(a/b)
    }








    let message = "it's not applicable for citizenship"

if (data>=17) {
message= "it's  applicable for citizenship"
    
} else {
    
    
}


  return (
    <div className='flex h-screen w-full flex-col'>


   <p>     {message}</p>
    <p>   {data}  </p>
<p></p>
<button onClick={decarease} className='bg-amber-950 h-15 w-14 hover:text-red-300 p9'>
    dec

</button>

<button onClick={increase} className='bg-amber-900 h-18 w-14 hover:text-red-200'>inc</button>
<button onClick={multiply}>
    multiply
</button>
<button onClick={divide}>
    divide

</button>

    </div>
    
  )
}

export default Asher
