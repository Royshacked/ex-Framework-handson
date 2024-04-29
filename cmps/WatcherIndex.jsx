import { WatcherModal } from "./WatcherModal.jsx"
import { WatchersList } from "./WatchersList.jsx"

const { useState, useEffect, useRef } = React

export function WatcherIndex() {
    const watchersList = [
        { id: 'w101', fullname : 'Puki Ba', movies: ['Rambo', 'Rocky'], isSelected:false },
        { id: 'w102', fullname : 'Roy', movies: ['Snatch', 'Back to the future'], isSelected:false },
        { id: 'w103', fullname : 'Dana', movies: ['Harry potter', 'Casino'], isSelected:false },
    ]

    const [watchers, setWatchers] = useState(watchersList)
    const [selectedWatcher,setSelectedWatcher] = useState(null)

    function onSelectWatcher(id) {
        setSelectedWatcher(prevSelectedWatcher => prevSelectedWatcher = watchersList.find(watcher=>watcher.id===id))
    }

    function onRemoveWatcher(id) {
        if(selectedWatcher) return
        setWatchers(watchers.filter(watcher => watcher.id !== id))
        console
    }

    const backDropClass = selectedWatcher ? 'back-drop' : ''

    return <section className="watcher-index">
        <div className={backDropClass}></div>
        <h2>Watcher App</h2>
        <div className="add-btn"><button>Add watcher</button></div>
        <WatchersList watchers = {watchers} onSelect={(id)=> onSelectWatcher(id)} onRemove={(id)=>onRemoveWatcher(id)}/>
        {selectedWatcher && <WatcherModal watcher = {selectedWatcher} onClose={() => onSelectWatcher(0)}/>}
    </section>
}