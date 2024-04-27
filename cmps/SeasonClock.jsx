import { Clock } from "./Clock.jsx"

const { useState, useEffect, useRef } = React

export function SeasonClock() {
    const [isDark,setIsDark] = useState(true)

    const date = new Date()
    const monthNum = date.getMonth()
    const monthAndDayNames = date.toLocaleString('default', {weekday:'long',month:'long'}).split(' ')
    const season = getSeason()

    function onSetColor() {
        setIsDark(!isDark)
    }

    function getSeason() {
        let season=''

        if(monthNum>=9) season = 'Autumn'
        else if(monthNum>=6) season = 'Summer'
        else if(monthNum>=3) season = 'Spring'
        else season = 'Winter'

        return season
    }

    const colorClass = isDark? 'dark' : ''

    return <section className={`season-clock ${colorClass}`} onClick={onSetColor}>
        <h2>{monthAndDayNames[0]} ( {season} )</h2>
        <img src={`season-imgs/${season.toLowerCase()}.png`} alt="" />
        <h3>{monthAndDayNames[1]}</h3>

        <Clock colorClass={colorClass}/>
    </section>
}