import { AnimalsList } from "./AnimalsList.jsx"

const { useState, useEffect, useRef } = React

export function AnimalsIndex() {
    const animalInfos = [
        { type: 'Malayan Tiger', count: 787, key: 101 },
        { type: 'Mountain Gorilla', count: 212, key: 102 },
        { type: 'Fin Whale', count: 28, key: 103 },
    ]

    return <section className="animals-index">
        <h2>Rare Animals</h2>
        <AnimalsList animals={animalInfos} />
    </section>
}
