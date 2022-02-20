const users = require("../db/users");

class LoginController {
    renderLoginGet(req, res){
        res.render('login');
    }
    renderLoginPost(req, res){
        const filter = users.filter(c => c.email === req.body.email);
        if (filter.length !== 0){
            res.redirect('/error');
        }else {
            users.push(req.body);
            res.redirect('/users');
        }
    }
}

module.exports = new LoginController();