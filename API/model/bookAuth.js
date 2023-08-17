class BookAuthors{
    fetchBookAuthors(req, res){
        const query = ` 
        SELECT id, authorName,authorSurname, bookID 
        FROM bookAuthor
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
    fetchBookAuthor(req, res){
        const query = `
        SELECT id, authorName,authorSurname, bookID 
        FROM bookAuthor
        WHERE id = ?
        `
        db.query(query, (err, results)=>{
            if(err) throw err 
            res.json({
                status:res.statusCode,
                results:results
            })
        })

    }
    updateBookAuthors(req, res){
        const query = `
        SELECT id, authorName,authorSurname, bookID 
        FROM bookAuthor
        SET ? ? ? ?
        WHERE id = ?
        `
        db.query(query,
            [req.body, res.params.id],
            (err) => {
                if(err) throw err
                res.json({
                status: res.statusCode,
                msg: "THE ORDER WAS UPDATED"
               })
            }
        )
    }
    deleteBookAuthors(req, res){
        const query = `
        DELETE FROM bookAuthor
        WHERE id = ${req.params.id}
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.status,
                msg: `ORDER ID: ${orderID} WAS DELETED `
            })
        })
        
        
    }



}
module.exports = BookAuthors