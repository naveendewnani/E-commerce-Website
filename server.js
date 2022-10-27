



const express = require("express");
const bodParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/register",{useNewUrlParser:true})
.then(()=>console.log("conection successfull..."))
.catch((err)=>console.log(err));
const app = express();
app.use(bodParser.urlencoded({extended:  true}));

// app.get("/", function (req,res){
//     res.sendFile(__dirname+"/register.html");
// })



// app.post("/",function (req,res) {
//     var i1=req.body.password;
//     var i2=req.body.confirmpassword;
    
//     if (i1===i2) {res.send("Registeration successfull");
        
//     } else {res.send("invalid");
        
//     }
    
// })



app.get("/", function( req ,res){
    res.sendFile(__dirname+"/index.html");

})
app.use(express.static(__dirname));

const playlistSchema =new mongoose.Schema({
    name:{type:String,
    required:true},
    email:{type:String
    ,required:true},
     password:{type:String
        ,required:true},
    ConfirmPassword:{type:String
        ,required:true, },
    Date:{
        type:Date,
        default:Date.now
    }
})


const Playlist= new mongoose.model("Playlist",playlistSchema);

const reactPlaylist= new Playlist(
    { name:"rahul",
        email:"rahul@gmail.com",
         password:"confirm",
        ConfirmPassword:"confirm",
        }
)



app.post("/",function (req,res) {
    var i1=req.body.password;
    var i2=req.body.confirmpassword;
    
    if (i1===i2) {res.send("Registeration successfull");
        
    } else {res.send("invalid");
        
    }
    
})


app.listen(3000, function()
{console.log("Server has started on port 3000")})











// app.post("/", function(req, res){
//     var n1 = Number(req.body.num1);
//     var n2 = Number(req.body.num2)
//     var result = n1+n2


//     res.send("The answer is" + result);
// })
