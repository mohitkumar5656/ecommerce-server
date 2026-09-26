const { error } = require("node:console")

require("mongoose")

.connect(process.env.DB_KEY)
.then(()=>{
    console.log("Data Base is Connected")
})
.catch((error)=>{
    console.log(error)
})