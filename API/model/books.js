class Books {
    fetchBooks(req, res){
        const query = ` 
        SELECT bookID, bookTitle,category, bookUrl 
        FROM books
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
    fetchBook(req, res){
        const query = `
        SELECT SELECT bookID, bookTitle,category, bookUrl 
        FROM books
        WHERE bookId = ?
        `
        db.query(query, (err, results)=>{
            if(err) throw err 
            res.json({
                status:res.statusCode,
                results:results
            })
        })

    }
    updateBook(req, res){
        const query = `
        SELECT SELECT bookID, bookTitle,category, bookUrl 
        FROM books
        SET ? ? ? ?
        WHERE bookId = ?
        `
        db.query(query,
            [req.body, res.params.id],
            (err) => {
                if(err) throw err
                res.json({
                status: res.statusCode,
                msg: "THE BOOK WAS UPDATED"
               })
            }
        )
    }
    deleteBook(req, res){
        const query = `
        DELETE FROM books
        WHERE bookid = ${req.params.id}
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status:res.status,
                msg: `BOOK WITH THE ID OF: ${bookid} WAS DELETED `
            })
        })
        
        
    }

}

module.exports = Books




