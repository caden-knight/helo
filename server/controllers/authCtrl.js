const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        //check user
        const existingUser = await db.check_user(username)
        if(existingUser[0]) {
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.create_user([username, hash])

        req.session.user = {
            id: newUser[0].id,
            username: newUser[0].username
        }

        res.status(200).send(req.session.user)


    }
}