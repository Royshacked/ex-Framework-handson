const { useState, useEffect, useRef } = React

export function WatcherModal({watcher,onClose}) {
    
    return <article className="watcher-modal">
        <h2>{watcher.fullname}</h2>
        <ul>{watcher.movies.map((movie,idx)=> <li key={idx}>{movie}</li>)}</ul>
        <button onClick={onClose}>Close</button>
    </article>
}