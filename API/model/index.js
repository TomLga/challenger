const User = require('./user')
const orders = require('./order')
const books = require('./books')
const BookAuthors = require('./bookAuth')

module.exports = {
    user: new User() //only importing the instants of the class from index
}



/**
 * importing all the files from the 
 */

