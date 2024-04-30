const { useState, useEffect, useRef } = React

export function Clock({colorClass}) {
    const beginTime = Date.now()

    const [time,setTime] = useState(beginTime)
    const intervalId = useRef()

    function startTime() {
        intervalId.current = setInterval(()=>setTime(prevTime=>prevTime+1000),1000)
    }

    function stopTime() {
        clearInterval(intervalId.current)
    }

    useEffect(()=> {
        startTime()
        return stopTime
    },[])

   const clock = new Date(time).toLocaleTimeString('en-US',{ hour12: false })
    
    
    return <h2 className={`clock ${colorClass}`}>{clock}</h2>
}