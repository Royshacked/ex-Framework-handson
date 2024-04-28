const { useState, useEffect, useRef } = React

export function CountDown({ startFrom, onDone ,toTime}) {
    const [count, setCount] = useState(toTime || startFrom)
    const intervalId = useRef()

    function startCount() {
        intervalId.current = setInterval(() => setCount(prevCount => prevCount - 1), 1000)
    }

    function stopCount() {
        clearInterval(intervalId.current)
    }

    useEffect(() => {
        startCount()

        return stopCount
    }, [])

    useEffect(() => {
        if(count === 0) {
            stopCount()
            onDone()
        }
    }, [count])

    const counterClass = count <= 6 ? 'red' : ''

    return <section className="count-down">
        <article>
            <span className={counterClass}>{count}</span>
        </article>
    </section>
}