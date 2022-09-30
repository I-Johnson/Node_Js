// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x 
// console.log(square(9)) 

// const event = {
//     name:'Thanksgiving dinner', 
//     printGuestList: function () {
//         console.log('Guest list for' + this.name)
//     }
// }

const event = {
    name:'Thanksgiving dinner', 
    guestList: ['Johnson', 'Andrew', 'Mike'],
    printGuestList()  {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()