const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')


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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove the existing note', 
    handler: function () {
        console.log('Removing the existing note')
    }
})

// Create list Command
yargs.command({
    command: 'list',
    describe: 'listing out the notes',
    handler: function() {
        console.log('Listing the notes')
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler: function() {
        console.log('Read the notes')
    }
})
yargs.parse()
// console.log(yargs.argv)
