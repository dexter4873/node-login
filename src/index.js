const express = require('express')

const app = express()

//Settings
app.set('port', process.env.port || 3000)

app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

// Server Running
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'))
})