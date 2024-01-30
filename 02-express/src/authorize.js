const authroize = (req,res,next) => {
    const {user} = req.query
    console.log('authroize = ')
    if (user === 'jhon') {
        req.user = {name:"john",id:3}
        next()
    } else {
        res.status(401).send('unauthorized')
    }
}

module.exports = authroize