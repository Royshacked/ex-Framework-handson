const { useState, useEffect, useRef } = React

export function WatchersList({ watchers, onSelect , onRemove}) {
    
    return <article className="watchers-list">
        {watchers.map(watcher => <div key={watcher.id}>
            <img src={`watchers-imgs/${watcher.imgUrl}.png`} alt="" className="src" />
            <h3>{watcher.fullname}</h3>
            <div className="watchers-list-btns">
                <button onClick={() => onRemove(watcher.id)}>X</button>
                <button onClick={() => onSelect(watcher.id)}>Select</button>
            </div>
        </div>)}
    </article>
}