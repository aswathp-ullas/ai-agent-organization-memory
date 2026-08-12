require('../ai-agent-organization-memory/db/mongoose');
const Task = require('../ai-agent-organization-memory/db/model/task');

Task.findByIdAndDelete('').then((task)=> {
    console.log(task);
    return Task.countDocument({completed : false})
}).then((result)=> {
    console.log(result);
}).catch((e)=> {
    console.log(e);
})

