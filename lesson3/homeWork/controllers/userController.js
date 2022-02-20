const users = require("../db/users");

class UserController {
    renderUsers(req, res) {
        const age = Number(req.query.age);
        const city = req.query.city;
        if (Object.keys(req.query).length !== 0) {
            if (age && city) {
                const array = users.filter(c => c.age === age).filter(c => c.city === city);
                res.render('filterUsers', {array});
            }
            if (city && !age) {
                const array = users.filter(c => c.city === city);
                res.render('filterUsers', {array});
            }
            if (age && !city) {
                const array = users.filter(c => c.age === age);
                res.render('filterUsers', {array});
            }
        }else{
            res.render('users', {users});
        }
    }
    renderUsersId(req, res) {
        const {id} = req.params;
        const user = [];
        user.push(users[id-1]);
        res.render('userId', {user});
    }
}

module.exports = new UserController();