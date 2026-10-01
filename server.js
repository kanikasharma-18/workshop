const express=require('express')
const app=express()
const port=3000
const productRoutes = require('./routes/productRoutes')

app.use(express.json())
app.use(productRoutes)

app.listen(port,()=>{
    console.log('server is running on port 3000')
})