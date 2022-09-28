const validator = require('validator')
const yargs = require(yargs)
const chalk = require('chalk')
const yargs = require('yargs')


// const getNotes  = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// const msg2 = chalk.red.inverse.bold('Error!')
// console.log(msg2)

// console.log(process.argv[2])

const command = process.argv[2]
console.log(process.argv)

if (command === 'add') {
    console.log("Adding Notes")
} else if (command === 'remove') {
    console.log('Removing Note!')
}