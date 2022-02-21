const users = require('../db/users');

class SignInController{
    renderSignInGet(req, res){
        res.render('signIn');
    }
    renderSignInPost(req, res){
        const filterEmail = users.filter(c => c.email === req.body.email);
        if (filterEmail.length !== 0){
            const password = filterEmail.map(c => c.password === req.body.password);
            if(password[0] !== false){
                res.render('signInUser', {filterEmail});
            }else {
                res.render('noAccount');
            }
        }else {
            res.render('noAccount');
        }
    }
}

module.exports = new SignInController();