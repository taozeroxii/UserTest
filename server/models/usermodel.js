var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type:String,required: true},
    gender: {type: String,required: true},
    email: {type: String, require: true, lowercase: true, trim: true}, 
    created_date: {type:Date, default: Date.now}

});

var User = mongoose.model('Users', userSchema);
module.exports = User;

/*var person = new User({firstname:'asdas',Lastname:'Rachasdasawit',gender:'Male',email:'durango@gg.com'});
person.save((err,data)=>{
    if(err)console.log(err);
    console.log('save Complete :',data);
});*/