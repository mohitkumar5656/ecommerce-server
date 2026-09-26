const express = require("express")
require("dotenv").config()
const app = express()

let port = process.env.PORT || 8000
app.listen(port, console.log(`Server is Runing  ${process.env.PORT}`))