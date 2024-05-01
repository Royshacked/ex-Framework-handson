const { useState, useEffect, useRef, useCallback } = React

export function MouseMonitor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isOn, setIsOn] = useState(true)

    function updatePos(ev) {
        if (!isOn) return
        setMousePos({ ...mousePos, x: ev.pageX, y: ev.pageY })
    }

    function toggleEventListener() {
        setIsOn(prevIsOn => !prevIsOn)
    }

    function addMouseListener() {
        document.addEventListener('mousemove', updatePos)
    }

    function removeMouseListener() {
        document.removeEventListener('mousemove', updatePos)
    }

    useEffect(() => {
        if (isOn)
        addMouseListener()

        return () => {
            removeMouseListener()
        }

    }, [isOn])

    const btnStat = isOn ? 'Pause' : 'Resume'

    return <section className="mouse-monitor">
        <h2>Mouse Position</h2>
        { isOn && (<span>X: {mousePos.x} | Y: {mousePos.y}</span>)}
        <button onClick={toggleEventListener}>{btnStat}</button>
    </section>
}