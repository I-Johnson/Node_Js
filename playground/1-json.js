const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy', 
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// // console.log(dataBuffer.toString())
// console.log(data.title)

//Load and Parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

// Change name and property using your info
user.name = 'Johnson'
user.age = '19'

// Stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)