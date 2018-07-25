const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Hello World! V2'))
app.get('/getenv', (req,res)=>{
    res.send(process.env.ENVVALUE)
})
var dogArray = [
    {
        name: "Bernard",
        age: "1",
        breed: "DSCH"
    },
    {
        name:"Bobby",
        age:"4",
        breed:"GoldenR"
    }
]
app.get('/api/dogs',(req,res)=>
{
    res.json(dogArray)
})
app.listen(PORT, () => 
console.log('Example app listening on port '+PORT)
)