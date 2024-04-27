import { AnimalsIndex } from "./cmps/AnimalsIndex.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"

 
const { useState, useEffect, useRef } = React

export function RootCmp() {
    const [ route, setRoute ] = useState('season-clock')

    function onClickNav(val) {
        setRoute(prevRoute => prevRoute = val)
    }
    return (
        <main className="content-grid">
            <header className="root-cmp full">
                <h1>Hello React</h1>
                <nav>
                    <a href="#" onClick={() => onClickNav('animals')}>Animals</a>
                    <a href="#" onClick={() => onClickNav('season-clock')}>Seasons</a>
                </nav>
            </header>

            {route === 'animals' && <AnimalsIndex/>}
            {route === 'season-clock' && <SeasonClock/>}
        </main>
    )
}