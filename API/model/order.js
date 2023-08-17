class Orders {
    fetchOrders(req, res){
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
    fetchOrder(req, res){
        const query = `
        SELECT SELECT OrderID, userID,bookID, orderDate 
        FROM orders
        WHERE orderId = ?
        `
        db.query(query, (err, results)=>{
            if(err) throw err 
            res.json({
                status:res.statusCode,
                results:results
            })
        })

    }
    updateOrder(req, res){
        const query = `
        SELECT SELECT OrderID, userID,bookID, orderDate 
        FROM orders
        SET ? ? ? ?
        WHERE bookId = ?
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
    deleteOrder(req, res){
        const query = `
        DELETE FROM orders
        WHERE orderID = ${req.params.id}
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

module.exports =  Orders
