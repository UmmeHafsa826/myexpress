const express = require('express')
const app = express();
const Path = require('path')
const Port = 4000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.listen(Port,(req,res)=>{
    console.log('localH',Port)
    })
    let users = [
        {name:'faiza', email:'faiza@com', password:'1111'},
        {name:'aiza', email:'aiza@com', password:'2222'}
    ]
// app.get('/',(req,res)=>{
//     res.sendFile(Path.join(__dirname,'Public','Home.html'))
// })
// app.get('/About',(req,res)=>{
//     res.sendFile(Path.join(__dirname,'Public','About.html'))
// })
// app.get('/Contact',(req,res)=>{
//     res.sendFile(Path.join(__dirname,'Public','Contact.html'))
// })
 app.use(express.static(Path.join(__dirname,'Public')))

app.get('/login',(req,res)=>{
     res.sendFile(Path.join(__dirname,'registration','login.html'))
    })
    app.post('/login',(req,res)=>{
     let {email ,password} = req.body
     let found = users.some((item)=>item.email == email && item.password==password)
     if(found){
         res.send('<h1>welcome</h1>')
     } else {
     res.send('<h1>user doesnot exsists</h1>')
    }
        })
   

app.get('/signup',(req,res)=>{
        res.sendFile(Path.join(__dirname,'registration','signup.html'))
       })
app.post('/signup',(req,res)=>{
        //    res.send(req.body)
        let {name ,email ,password} = req.body
        let found = users.some((item)=>item.email == email && item.password==password)
        if(found){
            res.send('<h1>user exists</h1>')
        }
        else{
            
                users.push({name,email,password,id:users.length+1})
               // res.send('user added')
            //    res.sendFile(Path.join(__dirname, 'registration','login.html'))
            res.redirect('/login')
            
        }
     })