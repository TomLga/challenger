/** // question 1 
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

 * dancing is a method 
 * a clss = constructo function
 * but we want to creat muliply method >= class 
 * a method belongs to a class
 *  #  is making it private > wont be accessable outside of the class
 * when using construtor we creating a default vaule>
 */

const {express, routes} = require('./controller')
const path = require('path')
const app = express() 
const cors = require ('cors')
const cookieParser = require('cookie-parser');
const errorHandling = require('./middleware/ErrorHandling')
const port = +process.env.PORT || 3000  



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  });
// static 
app.use(express.static('./static'), 
express.urlencoded({
    extended: false
}),
cookieParser(),
cors(),
routes
)
// for the index file to load 
routes.get('^/$|/challenger', (req, res)=>{  
    res.sendFile(path.resolve(__dirname,
        "./static/HTML/index.html"))
})

// Importing error handling middleware
// Middleware - APplication level

// cookieParser & Router
// cookieParser should be set before router

// Handling all errors
app.use(errorHandling);
// Server

// to get the port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

/**
 * express.use is how we register the middleware 
 * body-parse converts whatevr you have to json formate 
 * middlewaer is just a fucntion and you need to call it at the end 
 * function name (req, res, Next){} next()
 *  function name (err,req, res, Next){} EROOR HANDLING TYPE MIDDLEWARE 
 * built in MW .static 
 * 3rd Party 
 * 
 * withoyut the next key the browser will fressze so you have to call it next()
 * exapme of middlewear 
 * routes.get('^/$|/challenger', 
 * (req, res/, next)=>{
 * console.log("wellcome basck ")
 * next()
 * }
 * 
 * ,(req, res)=>{  
    res.sendFile(path.resolve(__dirname,
        "./static/HTML/index.html"))
})

 *
 * 
 */




