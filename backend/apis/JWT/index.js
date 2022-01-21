const express       = require('express')
const connectDB     = require('./db/db')
const cors          = require('cors')
const bodyParser    = require('body-parser')
//const cookieParser  = require('cookie-parser')

require('dotenv').config()

const app   = express()
const PORT  = process.env.PORT

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

//app.use(cookieParser)

connectDB()

app.use(cors())

// Import routes
const apiRoutes = require("./user-login-routes")
app.use('/user', apiRoutes);

//Routes
app.get('/', (req, res) => {
    res.send('You can find all resources under /user');
});

app.listen(
    PORT, 
    console.log(`Sever is running on http://localhost:${PORT}`)
)