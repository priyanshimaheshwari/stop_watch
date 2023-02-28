import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
  const [hour,setHour]=useState(0);
  const [min,setMin]=useState(0);
  const [second,setSecond]=useState(0);
  const [mSecond,setMsecond]=useState(0);
  const [stop,setStop]=useState(true);

  const onStart =()=>{
    setStop(false);
  }
  const onStop=()=>{
    setStop(true);
}
  const onReset=()=>{
    setHour(0);
    setMin(0);
    setSecond(0);
    setMsecond(0);
}

  useEffect(()=>{
    let interval=null;
    if(!stop){
      interval=setInterval(()=>{
        if(min>59){
          setHour(hour+1);
          setMin(0);
          clearInterval(interval);
        }
        if(second>59){
          setMin(min+1);
          setSecond(0);
          clearInterval(interval);
        }
        if(mSecond>999){
          setSecond(second+1);
          setMsecond(0);
          clearInterval(interval);
        }
        if(mSecond<=999){
          setMsecond(mSecond+1);
        }
      },10)
    }
    else{
      clearInterval(interval);
    }
    return()=>{
      clearInterval(interval)
    }
  })

  return (
    
    <div style={({textAlign:'center',marginTop:'100px' })}>
      <h1>{hour} : {min} : {second} : {mSecond}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button  onClick={onReset}>Reset</button>
    </div>
    
  )
}

export default Stopwatch