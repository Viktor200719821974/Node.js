const fs = require('fs');
const path = require("path");
const helper = require('./changeUser');
// const fsPromises = require('fs/promises');
// const fsPromises2 = require('fs').promises;
// const util = require('util');

const onlineUsers = [
    {name: 'Andrii', age: 22, city: 'Lviv'},
    {name: 'Viktor', age: 25, city: 'Kiev'}
    ]
const inPersonUsers = [
    {name: 'Ivan', age: 18, city: 'Sumy'},
    {name: 'Pedro', age: 28, city: 'Lviv'}
]
fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true} ,(err) => {
    if (err){
        console.log(err);
        throw err;
    }
});
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true} ,(err) => {
    if (err){
        console.log(err);
        throw err;
    }
});

fs.writeFile(path.join(__dirname, 'main/online', 'online.txt'), onlineUsers.map(({name, age, city}) =>
    `\nName: ${name}\nAge: ${age}\nCity: ${city}`), (err)=> {
    if (err){
        console.log(err);
        throw err;
        }
});
fs.writeFile(path.join(__dirname, 'main/inPerson', 'inPerson.txt'), inPersonUsers.map(({name, age, city}) =>
   `\nName: ${name}\nAge: ${age}\nCity: ${city}`), (err)=> {
    if (err){
        console.log(err);
        throw err;
    }
});

// helper(onlineUsers, inPersonUsers);

// const mainPath = path.join(__dirname, 'main');
// const mkDir = util(fs.mkdir);
//
// async function createData() {
//     await fsPromises.mkdir(mainPath);
//     await Promise.all([
//         fsPromises.mkdir(mainPath, 'inPerson'),
//         fsPromises.mkdir(mainPath, 'onLine'),
//         writeAndAppendFile('inPerson', inPersonUsers),
//         writeAndAppendFile('online', onlineUsers)
//     ]);
// }
//
// async function writeAndAppendFile(pathFolder, users){
//     const data = users.map(({name, age, city})=> `NAME: ${name}\nAGE: ${age}\nCITY: ${city}\n\n`)
//     return fsPromises.writeFile(path.join(mainPath, pathFolder, 'user.txt'), data)
// }
// createData();
//
// async function swap(firstFolder, secondFolder) {
//     try{
//         const [dataFromFirstFile, dataFromSecondFile] = await Promise.all([
//             fsPromises.readFile(path.join(mainPath, firstFolder, 'user.txt'),"utf8"),
//             fsPromises.readFile(path.join(mainPath, secondFolder, 'user.txt'),"utf8")
//         ]);
//         await Promise.all([
//             fsPromises.appendFile(path.join(mainPath, firstFolder, 'user.txt'), dataFromSecondFile, {flag: 'w'}),
//             fsPromises.appendFile(path.join(mainPath, secondFolder, 'user.txt'), dataFromFirstFile, {flag: 'w'})
//         ]);
//     }catch (e) {
//         console.log(e);
//     }
// }
// swap('online', 'inPerson');
//
// fs.stat(path.join(mainPath, 'online', 'user.txt'), (err, data) =>{
//     console.log(data);
//     console.log(data.isFile());
//     console.log(data.isDirectory());
// });
//
// const p = path.basename(path.join(mainPath, 'online', 'user.txt'));
// console.log(p);
//
// fs.readdir(path.join(mainPath, 'online'), (err, data) => {
//     console.log(data);
// });
// console.log(path.parse(path.join(mainPath, 'online', 'user.txt')));