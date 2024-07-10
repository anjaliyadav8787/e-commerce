let db = require('../databaseConfig.js')

exports.adminLogin2 = (req,res)=>{
let adminemail = req.body.adminemail
let adminpassword = req.body.adminpassword

 let sql  = "select * from admin where adminemail = ? and adminpassword  = ?"

db.query(sql, [adminemail, adminpassword], (err, result)=>{

    if(err)throw err;
    else{
        if(result.length > 0){
            res.send(true)

        }else{
                res.send(false)
            }
    }

})

}