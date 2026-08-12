const express = require('express');
require('./ai-agent-organization-memory/db/mongoose');
const User= require('./ai-agent-organization-memory/db/model/user');
const e = require('express');
const app= express();

//it's going to automatically parse incomming JSON to an object.
app.use(express.json())

app.post('/users', (req, res)=> {
   const user= new User(req.body)

   user.save().then(()=> {
    res.send(user)
   }).catch((e)=> {
    res.status(400).send(e)
   })
});

app.get('/users/:id', (req, res)=> {
    const _id = req.params.id
    User.findById(_id).then((user)=> {
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=> {
        res.status(500).send()
    })
})
app.post('/task', (req, res)=> {
    const task = new Task(req.body)

    task.save().then(()=> {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})
 

const PORT= process.env.PORT || 3000;

app.listen(PORT , ()=> {
    console.log('Server is running on port '+ PORT);
})