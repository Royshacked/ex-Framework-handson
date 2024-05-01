const { useState, useEffect, useRef, useCallback } = React

export function MouseMonitor() {
    const mouseMonitor = {
        isOn: true,
        pos: { x: 0, y: 0 }
    }

    const [mousePos, setMousePos] = useState(mouseMonitor.pos)
    const [mouse, setMouse] = useState(mouseMonitor)

    function updatePos(ev) {
        setMousePos({ ...mousePos, x: ev.pageX, y: ev.pageY })
    }

    function toggleEventListener(isOn) {
       setMouse({ ...mouse, isOn: !isOn })
       document.removeEventListener('mousemove', updatePos)
    }

    useEffect(() => {
        document.addEventListener('mousemove', updatePos)
 
    },[])

    const btnStat = mouse.isOn ? 'Pause' : 'Resume'

    return <section className="mouse-monitor">
        <h2>Mouse Position</h2>
        <span>X: {mousePos.x} | Y: {mousePos.y}</span>
        <button onClick={() => toggleEventListener(mouse.isOn)}>{btnStat}</button>
    </section>
}