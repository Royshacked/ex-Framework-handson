const { useState, useEffect, useRef } = React

export function CountDown({ startFrom, onDone ,toTime}) {
    const [count, setCount] = useState(toTime||startFrom)
    const intervalId = useRef()

    const isCountDone = toTime? (count===toTime-startFrom*1000) : (count===0)
    const timer = toTime? new Date(count).toLocaleTimeString() : count
    const isTimerRed = toTime? (count <=toTime -0.5*startFrom*1000) : (count <= 0.5*startFrom)

    function startCount() {
        const diff = toTime ? 1000 : 1
        intervalId.current = setInterval(() => setCount(prevCount => prevCount - diff), 1000)   
    }

    function stopCount() {
        clearInterval(intervalId.current)
    }

    useEffect(() => {
        startCount()

        return stopCount
    }, [])

    useEffect(() => {
        if(isCountDone) {
            stopCount()
            onDone()
        }
    }, [count])

    const counterClass = isTimerRed ? 'red' : ''

    return <section className="count-down">
        <article>
            <span className={counterClass}>{timer}</span>
        </article>
    </section>
}