const { useState, useEffect, useRef } = React

export function Clock({colorClass}) {
    const [time,setTime] = useState(0)
    const intervalId = useRef()

    function startTime() {
        intervalId.current = setInterval(()=>setTime(prevTime=>prevTime+1),1000)
    }

    function stopTime() {
        clearInterval(intervalId.current)
    }

    useEffect(()=> {
        startTime()
        return stopTime
    },[])
    
    
    return <h2 className={`clock ${colorClass}`}>{time}</h2>
}