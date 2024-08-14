const bookModel = require('../models/BookModel')


async function handleGetBooks(req, res) {
    try {
        // if(!req.user) throw new Error('Login Required')

        const books = await bookModel.find({})

        // console.log(books)

        return res.status(200).json([
            ...books
        ]

        )
    }
    catch (err) {
        res.json([{
            'error': err.message || err
        }])
    }
}

module.exports = handleGetBooks