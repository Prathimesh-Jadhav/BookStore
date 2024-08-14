const bookModel = require('../models/BookModel')


async function handleAddbook(req, res) {
    try {
        // if(!req.user) throw new Error('Login Required')

        const {id,name,price,category} = req.body

        const books = await bookModel.create({
            id:id,
            name:name,
            price:price,
            category:category
        })

        if(!books) throw new Error('Books are not added to DB')

        console.log(books)

        return res.status(200).json(
            
        {
            status:'successfull',
            error:false
        }

        )
    }
    catch (err) {
        res.json({
            'error': err.message || err
        })
    }
}

module.exports = handleAddbook