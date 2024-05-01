import { utilService } from "../services/util.service.js"
import { WatcherModal } from "./WatcherModal.jsx"
import { WatchersList } from "./WatchersList.jsx"

const { useState, useEffect, useRef } = React

export function WatcherIndex() {
    const watchersList = [
        { id: 'w101', fullname: 'Puki Ba', movies: ['Rambo', 'Rocky'], imgUrl: 'w101' },
        { id: 'w102', fullname: 'Roy', movies: ['Snatch', 'Back to the future'], imgUrl: 'w102' },
        { id: 'w103', fullname: 'Dana', movies: ['Harry potter', 'Casino'], imgUrl: 'w103' },
    ]

    const [watchers, setWatchers] = useState(watchersList)
    const [selectedWatcher, setSelectedWatcher] = useState(null)

    function onSelectWatcher(id) {
        setSelectedWatcher(prevSelectedWatcher => prevSelectedWatcher = watchers.find(watcher => watcher.id === id))
    }

    function onRemoveWatcher(id) {
        if (selectedWatcher) return
        setWatchers(watchers.filter(watcher => watcher.id !== id))
    }

    function onAddWatcher() {
        
        const watcherId = watchers.length!==0 ? (`w${+watchers.findLast(watcher => watcher).id.substring(1) + 1}`) : 'w101'

        const newWatcher = {
            id: watcherId,
            fullname: utilService.firstLetterToUpperCase(utilService.makeLorem(1)),
            movies: [utilService.makeLorem(2), utilService.makeLorem(2)],
            imgUrl: 'w101',
        }

        setWatchers(prevWatchers => [...prevWatchers, newWatcher])
    }

    console.log(watchers)


    return <section className="watcher-index">
        <h2>Watcher App</h2>
        <div className="add-btn" onClick={onAddWatcher}><button>Add watcher</button></div>
        <WatchersList watchers={watchers} onSelect={(id) => onSelectWatcher(id)} onRemove={(id) => onRemoveWatcher(id)} />
        {selectedWatcher && <WatcherModal watcher={selectedWatcher} onClose={() => setSelectedWatcher(null)} />}
    </section>
}