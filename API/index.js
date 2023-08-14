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

const {express, routes} = require('./controller')
const app = express() 
app.use(
    express.urlencoded({})
)


/**
 * 
 */
