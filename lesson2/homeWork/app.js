const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');


const users = [
    {
        firstName: 'Ivan',
        lastName: 'Popov',
        age: 23,
        city: 'Lviv',
        email: 'sadmin@gmail.com',
        password: 'KJGHGKJHKJHN'
    },
    {
        firstName: 'Andrii',
        lastName: 'Kitchov',
        age: 34,
        city: 'Kiev',
        email: 'sadmin4@gmail.com',
        password: 'KJGHGKJHKJHNHDGjf'
    },
    {
        firstName: 'Viktor',
        lastName: 'Ivanov',
        age: 45,
        city: 'Sumy',
        email: 'sadmin3545@gmail.com',
        password: 'yriorrui'
    },
    {
        firstName: 'Anna',
        lastName: 'Kotova',
        age: 21,
        city: 'Kharkov',
        email: 'sadminbfdh@gmail.com',
        password: 'Kjertenbve56765'
    },
    {
        firstName: 'Ivan',
        lastName: 'Popov',
        age: 23,
        city: 'Lviv',
        email: 'sadminwwww565@gmail.com',
        password: 'tetbegfvv5567'
    }
]
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const user = [];
    user.push(users[id-1]);
    res.render('userId', {user});
});
app.get('/users', (req, res) => {
    console.log(req.query);
    const age = Number(req.query.age);
    const city = req.query.city;
    const filterUsers = [];
   if (age || city){
       const filterAge = users.filter(c => c.age === age);
       if (city){
           const filterCity = filterAge.filter(c => c.city === city);
           filterUsers.push(filterCity);
       }else {
           filterUsers.push(filterAge);
       }
   }
    if (Object.keys(req.query).length === 0){
        users.filter(c => c.age === req.query.age);
        res.render('users', {users});
    }else{
        res.render('filterUsers', {filterUsers});
    }
    console.log(filterUsers);
});

app.get('/error', (req, res) => {
    res.render('error');
});
app.get('/login', (req, res) => {
   res.render('login');
});
app.post('/login', (req, res) => {
    const filter = users.filter(c => c.email === req.body.email);
   if (filter.length !== 0){
       res.redirect('/error');
   }else {
       users.push(req.body);
       res.redirect('/users');
   }
});
app.use((req, res) => {
    res.render('notFound');
});
app.listen(5200, () => {
    console.log('Server has started on PORT 5200')
});
