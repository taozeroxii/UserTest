var express = require('express');
var router = express.Router();
var User = require('../models/usermodel');//อ้างอิงไฟล์โมเดลเพื่อดึงค่ามา
var _ = require('lodash');//เรียกใช้โมดูลจัดการ obj arr พวกช่องว่างต่างๆ
var koonpage = 0;


/* GET users listing. */
router.get('/',  (req, res, next) => {
    // แบบsort วันที่มากไปน้อย User.find().sort({created_date:-1}).exec((err, data) =>
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        var countpage=0;
        if(lengthofdata > 10){ 
            while(lengthofdata > 10){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.floor(countpage));
            User.find().limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})


router.get('/paginator1',  (req, res, next) => {
    //res.redirect('/index')
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        var countpage=0;
        koonpage = 0;
        if(lengthofdata > 10){ 
            while(lengthofdata > 10){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.floor(countpage));
            User.find().limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,koonpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})
router.get('/paginator2',  (req, res, next) => {
    //res.redirect('/index')
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        var countpage=0;
        koonpage = 10;
        if(lengthofdata > 10){ 
            while(lengthofdata > 10){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.ceil(countpage));
            User.find().skip(10).limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,koonpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})
router.get('/paginator3',  (req, res, next) => {
    //res.redirect('/index')
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        koonpage = 20;
        var countpage=0;
        if(lengthofdata > 10){ 
            while(lengthofdata > 20){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.floor(countpage));
            User.find().skip(20).limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,koonpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})
router.get('/paginator4',  (req, res, next) => {
    //res.redirect('/index')
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        var countpage=0;
        koonpage = 30;
        if(lengthofdata > 10){ 
            while(lengthofdata > 10){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.floor(countpage));
            User.find().skip(30).limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,koonpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})
router.get('/paginator5',  (req, res, next) => {
    //res.redirect('/index')
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        var countpage=0;
        koonpage = 40;
        if(lengthofdata > 10){ 
            while(lengthofdata > 10){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.floor(countpage));
            User.find().skip(40).limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,koonpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})
router.get('/paginator6',  (req, res, next) => {
    //res.redirect('/index')
    User.find().exec((err, data) => {
        //res.render('index', { users: data ,title:"HOME"})
        var lengthofdata = data.length;
        var countpage=0;
        koonpage = 50;
        if(lengthofdata > 10){ 
            while(lengthofdata > 10){lengthofdata/=10;countpage=lengthofdata}
            console.log(Math.floor(countpage));
            User.find().skip(50).limit(10).exec((err, data) => {
                res.render('index', { users: data,countpage,koonpage,title:"HOME"})//ส่งค่า dataเก็บใน users  มาที่ไฟล์index
            //console.log(data);
            })
        }else{  res.render('index', { users: data ,title:"HOME"})}
    })
})


//DELETE 
router.post('/delete:_id', (req, res,next) => {
   User.findByIdAndRemove(req.params._id, (err, data) => {
        if (err) console.log(err)
        res.redirect('/index')//หากไม่เจอerror ให้มันรีโหลดหน้าไปหน้าuserใหม่
    })
})



router.post('/search', (req, res,next) => {
   
    var search = _.omitBy(req.body, _.isEmpty);//เรียกใช้omitby จากlodashโมดูลเพื่อตัดค่าว่าง
   // console.log(search);
    User.find(search,(err,data)=>{
        res.render('index',{users:data})
    })
})

router.get('/edit:_id', (req, res,next) => {
    User.findById(req.params._id,(err,data)=>{
        //console.log(User)
        if (err) console.log(err)
        res.render('index',{useredit:data})
    })
})

router.post('/edit/:_id', (req, res,next) => {
    //หาIdที่ตรงกันและ Update req.param ให้มันไปหา._id ที่ต้องการ 
    //req.body เก็บข้อมูลล่าสุดทั้งหมดลงดาต้าเบส
    User.findByIdAndUpdate(req.params._id,req.body,(err,data)=>{
        if (err) console.log(err)
        //ทำงานถูกต้องให้กลับไปโหลดหน้า index
        res.redirect('/index')
    })
})

module.exports = router;
