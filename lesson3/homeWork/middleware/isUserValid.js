function isUserValid(req, res, next){
    try{
        const {email, password, firstName, lastName, age, city} = req.body;

        if (!email || !password){
            throw new Error('Login or password is not provided')
        }
        if (!firstName || !lastName || !age || !city){
            throw new Error('FirstName, lastName, age or city is not provided')
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

module.exports = isUserValid;
