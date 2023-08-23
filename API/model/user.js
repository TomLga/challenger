// users from the table?
// maye from the datebase
// need to import our db config
const db = require("../config") //this imprt the db con from config
const{hash, compare, hashSync} = require('bcrypt') //hash meth
const {createToken} = require('../middleware/authication') //importing function


class User{
    fetchUsers(req, res){ //to fetch all users
        const query = ` 
        SELECT userID, firstName,lastName, gender, userDOB,emailAdd, profileUrl
        FROM users
        ` //doing the query  above
        db.query(query, (err, results) =>{
            // to run the query 
            if(err) throw err
            res.json( { //sendig a res back to user  
            status:res.statusCode,
            results:results
            })         
        })
    }
    fetchUser(req, res){
        const query =  ` 
        SELECT userID, firstName,lastName, gender, userDOB,emailAdd, profileUrl
        FROM users
        WHERE userID =?;
        `
        db.query(query, (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    login(req, res){
      const {emailAdd, userPass} = req.body
      // query
      const query = `
      SELECT firstName, lastName,
      gender, userDOB, emailAdd, userPass,
      profileUrl
      FROM Users
      WHERE emailAdd = ${emailAdd};
      `
    }
    async register(req, res) {
        const data = req.body;
        // Encrypt password
        data.userPass = await hash(data.userPass, 15); // 15 is the value for salt
      
        // Payload = data coming from the user
        const user = {
          emailAdd: data.emailAdd,
          userPass: data.userPass
        };
        // Query to insert data
        const query = `
          INSERT INTO users 
          SET ?; 
        `;      
        // Inserting a new 
        
        
        db.query(query, [data], (err) => {
          if (err) throw err;      
          // Creating a token with the variables we created
          // const token = createToken(user);      
          // res.cookie("LegitUser", token, { //name of cookie, varName, length of time 
          //   maxAge: 3600000, //3 days until token expires 
          //   httpOnly: true, // Only accessible by the browser
          // });      

          res.json({
            status: res.statusCode,
            msg: "You are now registered"
          })
        })
      }
      
      updateUser(req, res){
        const data = req.body
        if(data.userPass){
          data.userPass =
          hashSync(data.userPass) //encrp when user changes password
        }
        db.query(query,
          [req.body, req.params.id],
          (err) => {
              if(err) throw err
              res.json({
              status: res.statusCode,
              msg: "THE USER RECORD WAS UPDATED"
             })
          }
      )
      }
   
    deleteUser(req, res){
        const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id}
        `
        db.query(query, (err) =>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user record was deleted."
            })
        })
    }
}

module.exports = User
/**
 * result can just be result since it has the same name 
 * but if it had a dif name its be somehting like data: results
 * 
 * WHERE userID =?; also can be where userID = ${req.params.id};
 * 
 * if you exporting a lot of stuff we use module.exports = {User} 
 * single = user
 * 
 * const{hash, compare, hashSync} = require('bcrypt~~') //hash meth
// use the hash fun to encrypt the pswd
*

 updateUser(req, res){
        const query = `
        UPDATE FROM users
        SET ? 
        WHERE userID = ?
        `
        db.query(query,
            [req.body, res.params.id],
            (err) => {
                if(err) throw err
                res.json({
                status: res.statusCode,
                msg: "THE USER RECORD WAS UPDATED"
               })
            }
        )
             
    }
*
*
*
 */

