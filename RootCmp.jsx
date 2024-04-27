import { AnimalsIndex } from "./cmps/AnimalsIndex.jsx"

 
const { useState, useEffect, useRef } = React

export function RootCmp() {
    const [ route, setRoute ] = useState('animals')

    function onClickNav(val) {
        setRoute(prevRoute => prevRoute = val)
    }
    return (
        <main className="content-grid">
            <header className="root-cmp full">
                <h1>Hello React</h1>
                <nav>
                    <a href="#" onClick={() => onClickNav('animals')}>Animals</a>
                </nav>
            </header>

            {route===  'animals' && <AnimalsIndex/>}
        </main>
    )
}