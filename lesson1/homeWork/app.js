const fs = require('fs');
const path = require("path");
const helper = require('./changeUser');
const onlineUsers = [
    {name: 'Andrii', age: 22, city: 'Lviv'},
    {name: 'Viktor', age: 25, city: 'Kiev'}
    ]
const inPersonUsers = [
    {name: 'Ivan', age: 18, city: 'Sumy'},
    {name: 'Pedro', age: 28, city: 'Lviv'}
]
fs.mkdir(path.join(__dirname, 'main', 'online', 'inPerson'), {recursive: true} ,(err) => {
    if (err){
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname, 'main/online', 'online.txt'), onlineUsers.map(c =>
    `\nName: ${c.name}\nAge: ${c.age}\nCity: ${c.city} `), (err)=> {
    if (err){
        console.log(err);
        throw err;
        }
})
fs.writeFile(path.join(__dirname, 'main/online/inPerson', 'inPerson.txt'), inPersonUsers.map(c =>
    `\nName: ${c.name}\nAge: ${c.age}\nCity: ${c.city}`), (err)=> {
    if (err){
        console.log(err);
        throw err;
    }
})

helper(onlineUsers, inPersonUsers);



