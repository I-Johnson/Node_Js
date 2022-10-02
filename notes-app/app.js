const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('./notes')


// Customize Yargs version
yargs.version('1.1.0')
 
// Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'Note Body', 
            demandOption: true,
            type: 'string'
        }, 
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove the existing note', 
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list Command
yargs.command({
    command: 'list',
    describe: 'listing out the notes',
    handler(){
        notes.listNotes()
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler(){
        console.log('Read the notes')
    }
})
yargs.parse()
// console.log(yargs.argv)
