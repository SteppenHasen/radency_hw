import {createNoteDOM} from './render.js'

let notes = [
    {
        id: 10,
        name : 'Visit the mortician’s ghost',
        date: '09/01/2022',
        category: 'note',
        content: '12/01/2022 visit the mortician’s ghost to demand a purse of legitimate gold, because the stake in my coffin was never slaughtered.',
        dates: '12/01/2022',
        archived: false,
        active: true
    },
    {
        id: 11,
        name : 'About drinks',
        date: '09/01/2022',
        category: 'religion',
        content: 'have a drink with the local pop',
        dates: '',
        archived: false,
        active: true
    },
    {
        id: 12,
        name : 'Dance with fox',
        date: '09/01/2022',
        category: 'animals',
        content: 'On Wednesday 4 April 04/04/2022, dance with the bald fox and return her cigarette case',
        dates: '04/04/2022',
        archived: false,
        active: true
    },
    {
        id: 13,
        name : 'submarine "Alzheimer’s"',
        date: '09/01/2022',
        category: 'news',
        content: '12/12/2021, the submarine "Alzheimer’s" collided over Lenin’s monument with the submarine "Oppenheimer". The case gained a resonance',
        dates: '12/12/2021',
        archived: false,
        active: true
    },
    {
        id: 14,
        name : 'dwarf',
        date: '09/01/2022',
        category: 'note',
        content: '02/01/2022, dug a spoon with two ants into the hole of an old dwarf.',
        dates: '02/01/2022',
        archived: false,
        active: true
    }    
]

window.onload = function() {
    notes.forEach(note => createNoteDOM(note.id, note))
}