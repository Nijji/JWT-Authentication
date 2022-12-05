const express = require('express')
const jwt=require('jsonwebtoken')
const app = express()


//app.use('/api',require('./routes/api'))
app.post('/api/post',(req,res) =>
{
    res.json({ message: 'my json api' })
    
})
app.post("/api/login", (req, res) => {
    const user = {
        id: 1,
        name: 'nijji',
        email:'nijji@gmail.com'
    }
    jwt.sign({ user }, 'secret key', (err,token) =>
    {
      res.json({token})  
    })
});

app.listen(5000)