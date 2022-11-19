const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
//const session = require("express-session")
const PORT = process.env.PORT || 3001;
// const CLIENT_PORT = process.env.CLIENT_PORT
// const SECRET = process.env.SECRET



app.use(express.json())
app.use(cors());
app.use(cookieParser())


app.use(bodyParser.urlencoded({ extended: true}))


const uploadRoute = require('./routes/Upload');
app.use('/upload', uploadRoute);


app.listen(PORT, (req, res) => {
   console.log(`Server running on ${PORT}..`)
});