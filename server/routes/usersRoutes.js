var express = require('express');
var router = express.Router();
var User = require('../models/usermodel');//อ้างอิงไฟล์โมเดลเพื่อดึงค่ามา

/* GET users listing. */
router.get('/', (req, res, next) => {
    User.find().exec((err, data) => {
        res.render('users',{users:data,title:"INSERT"})//ส่งค่ามาที่ไฟล์user
        //res.send('USER : ' + data);
        //console.log(data);
    })
});


//Insert 
router.post('/add',(req,res,next)=>{//เมื่อกดinsert จะส่งค่าในformมาlonkนี้
    console.log(req.body);//ให้แสดงค่าที่กรอกใน form ออกในconsole
    var doc = new User(req.body);//เอา doc มาเก็่บค่าทั้งหมดที่กรอกในฟอร์ม
    doc.save((err,data,next)=>{//บันทึกลงDB
        if(err) console.log(err)
        
        res.redirect('/users')//หากไม่เจอerror ให้รีโหลดหน้าไปหน้าuserใหม่
        //res.send("<h1>Add Success</h1><a href='../users', class='btn btn-warning'> back</a>")
    })
 
});


module.exports = router;
