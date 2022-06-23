const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passwordHash = require('password-hash')
const cors = require('cors')
const port = 3001
const { getUser, verifyPasswordUser } = require('./users')

app.use(cors({ credentials: true, origin: true }))
// ?show req.body
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ title: 'json api' })
})

app.post('/auth', (req, res) => {
    const { user, pwd } = req.body
    const response = getUser(user);

    if( response ) {
        if( verifyPasswordUser(pwd, response.password) ) {
            return res.json({
                user: response,
                msg: 'success fetch user data',
                success: true
            })
        }
    }  

    return res.json({ msg: 'error fetch user data', success: false })
})

app.listen(port, () => console.log(`Listening on port ${port}`))