const contacts = require('./data.json');


// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console


//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
var InsectusWorkers = contacts.filter((contact) => contact.company === "INSECTUS")

//2. an array all of the contacts, with only the name property
var nameList = contacts.map((contact) => contact.name)

//3. an array of all of the contacts over the age of 50
var overFifty = contacts.filter((contact) => contact.age >= 50)

//4. the first ten contacts when alphabetically ordered by name
var firstTenSorted = contacts.slice(0,9).sort((contact) => contact.name)

//5. the oldest person's name
var oldestContactName = contacts.filter((contact) => contact.age)[0]

//6. the contact id with the name Isabella Burke
var IsabellaBurkeId = contacts.find((contact) => contact.name == "Isabella Burke").id ?? 0;

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
var formattedContacts = contacts.map((contact) => {
    contact.firstName = contact.name.split(" ")[0] ?? ""; 
    contact.lastName = contact.name.split(" ")[1] ?? ""; 
    contact.name = undefined;
    return contact;
})

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
var contactsWithFriends = contacts.map((contact) => {
    return contact.friends = contact.friends.map((friendId) => {
        return contacts.find((cntct) => cntct.id === friendId)
    })
})

//9. the average age of the contacts
var averageAge = contacts.reduce((partialSum, contact) => partialSum + contact.age, 0) / contacts.length;

//10. the median age of the contacts
var medianAge = contacts.sort((contact) => contact.age)[Math.floor(contacts.length / 2)].age
console.log(medianAge)