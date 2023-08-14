// question 1 
// class Person{
//     #firstName = "";
//     constructor(firstName) {
//         this.#firstName = firstName
//     }
//     walk(){
//         console.log(`${this.#firstName} is walking`);
//     }
//     dance() {
//         console.log(`${this.#firstName} is dancing`);
//     }
// }
// const person1 = new Person("Joel")
// const person2 = new Person("Ryan")
// person1.walk()
// person2.dance()
/**
 * dancing is a method 
 * a clss = constructo function
 * but we want to creat muliply method >= class 
 * a method belongs to a class
 *  #  is making it private > wont be accessable outside of the class
 * 
 * when using construtor we creating a default vaule>
 * 
 */
const { Router } = require('express')
const {express, routes} = require('./controller')
const path = require('path')
const app = express() 
const port = +process.env.PORT || 3000
// static 
app.use(express.static('./static'))

app.use(
    express.urlencoded({
        extended: false
    }),
    routers
)
routes.get('^/$|/challenger',
(req, res)=>{
    res.sendFile(path.resolve(__dirname, './static/HTML/index.html'))
})
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`)
})
/**
 * express.use is how we register the middleware 
 * body-parse converts whatevr you have to json formate 
 * middlewaer is just a fucntion and you need to call it at the end 
 * function name (req, res, Next){} next()
 *  function name (err,req, res, Next){} EROOR HANDLING TYPE MIDDLEWARE 
 * built in MW .static 
 * 3rd Party 
 * 
 * 
 * 
 */
