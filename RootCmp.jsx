import { AnimalsIndex } from "./cmps/AnimalsIndex.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import { SeasonClock } from "./cmps/SeasonClockIndex.jsx"
import { WatcherIndex } from "./cmps/WatcherIndex.jsx"

const { useState, useEffect, useRef } = React

export function RootCmp() {
    const [ route, setRoute ] = useState('watcher-app')

    function onClickNav(val) {
        setRoute(prevRoute => prevRoute = val)
    }

    function onDoneCountDown() {
        console.log('Done!!!')
    }

    return (
        <main className="content-grid">
            <header className="root-cmp full">
                <h1>Hello React</h1>
                <nav>
                    <a href="#" onClick={() => onClickNav('animals')}>Animals</a>
                    <a href="#" onClick={() => onClickNav('season-clock')}>Seasons</a>
                    <a href="#" onClick={() => onClickNav('count-down')}>Countdown</a>
                    <a href="#" onClick={() => onClickNav('watcher-app')}>Watcher App</a>
                </nav>
            </header>

            {route === 'animals' && <AnimalsIndex/>}
            {route === 'season-clock' && <SeasonClock/>}
            {route === 'count-down' && <CountDown startFrom={10} onDone={()=> onDoneCountDown()} toTime={Date.now() + 1000*10}/>}
            {route === 'watcher-app' && <WatcherIndex/>}
        </main>
    )
}