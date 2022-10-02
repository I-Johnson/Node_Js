const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes are added below'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        }) 
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"))
    } else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }
} 

const removeNote = function(title) {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)

    if (notes.length > keepNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(keepNotes)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}