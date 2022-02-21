function isSignInValid(req, res, next){
    try{
        const {email, password} = req.body;

        if (!email || !password){
            throw new Error('Login or password is not provided')
        }
        if (password.length < 6){
            throw new Error('Not valid password')
        }
        next()
    }catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }

}

module.exports = isSignInValid;