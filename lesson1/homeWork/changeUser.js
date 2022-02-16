const fs = require('fs');
const path = require("path");

function changeUser(array1, array2) {
    fs.truncate(path.join(__dirname, 'main/online', 'online.txt'),(err)=> {
        if (err){
            console.log(err);
            throw err;
        }})
    fs.writeFile(path.join(__dirname, 'main/online', 'online.txt'), array2.map(c =>
        `\nName: ${c.name}\nAge: ${c.age}\nCity: ${c.city} `), (err)=> {
        if (err){
            console.log(err);
            throw err;
        }
    })
    fs.truncate(path.join(__dirname, 'main/online/inPerson', 'inPerson.txt'),(err)=> {
        if (err){
            console.log(err);
            throw err;
        }})
    fs.writeFile(path.join(__dirname, 'main/online/inPerson', 'inPerson.txt'), array1.map(c =>
        `\nName: ${c.name}\nAge: ${c.age}\nCity: ${c.city} `), (err)=> {
        if (err){
            console.log(err);
            throw err;
        }
    })
}
module.exports = changeUser;