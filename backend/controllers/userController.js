const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

async function handleLogin(req,res) {
    const secret_key = '12bdhfshfiu7358392&&%%'

    try {
        const { email, password } = req.body
        console.log(email)

        if (!email || !password) {
            throw new Error('Provide all details')
        }

        const user = await userModel.find({ email: email, password: password })

        if (!user.length) throw new Error('Invalid Email or Password')

            const payload = {
                ...user
            }

        const token =  jwt.sign(payload,secret_key)
        
        if(!token) throw new Error('Problem in generating token')  

        return res.status(200).cookie('token',token).json({
            "status": 'successfull',
            'error': false,
            'user':payload
        })

    }
    catch (err) {
        return res.json(
            {
                'error': err.message || err,
                'status': 'unsuccesfull'
            }
        )
    }
}

async function handleSignup(req, res) {

    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            throw new Error('Provide All details')
        }

        const user = await userModel.create({
            username: username,
            email: email,
            password: password
        })

        if (!user) {
            throw new Error('Error in storing in db')
        }

        res.status(200).json({
            "status": 'successfull',
            'error': false
        })
    }
    catch (err) {
        return res.json(
            {
                'error': err.message || err,
                'status': 'unsuccesfull'
            }
        )
    }

}

module.exports = {
    handleLogin: handleLogin, handleSignup: handleSignup
}