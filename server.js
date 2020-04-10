const express = require('express')

const app = express()

const contacts =[
    {   
        id : 1 , 
        name : 'Selima',
        tel : 25364527 ,
        genre : 'Feminin'
    }, 
    {   
        id : 2 ,
        name : 'Lara',
        tel : 25364235 ,
        genre : 'Feminin'
    }, 
    {   
        id: 3 ,
        name : 'Slim',
        tel : 27352927 ,
        genre : 'Masculin'
    }, 
]

requesttime = (req, res, next)=> {
    let date=new Date()
    let hour=date.getHours()
    console.log('Time:'+ hour + 'h  Web site closed at 17h')
    if (hour<17 && hour>7)next()
} 

app.get('/home', requesttime, (req , res) =>{
    res.sendFile(__dirname + '/home.html')

})

app.get('/services',requesttime, (req, res) => {
    res.sendFile(__dirname + '/ourservice.html')
})

app.get('/contact',requesttime, (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

app.listen(5000, (err) => {
    if (err) throw (err)
    else console.log("server running on port 5000")
})