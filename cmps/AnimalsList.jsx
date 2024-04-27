const { useState, useEffect, useRef } = React

export function AnimalsList({ animals }) {

    return <article className="animals-list">
        <table>
            <tbody>
                <tr>
                    <th>Animal Type</th>
                    <th>Number Survived</th>
                    <th>Link</th>
                </tr>
                {animals.map(animal => <tr key={animal.key}>
                    <td>{animal.type}</td>
                    <td>{animal.count}</td>
                    <td><a href={`https://www.google.com/search?q= ${animal.type}`} target="_blank">Search</a></td>
                </tr>)}
            </tbody>
        </table>
    </article>
}