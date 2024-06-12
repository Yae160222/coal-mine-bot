import express, { urlencoded } from 'express'
import cors from 'cors'
//import { exec } from "child_process";
import { spawn } from 'child_process'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get('/:input', (req,res) => {
    const input = req.params.input
    const response = spawn('python', ['./scripts/script.py', input])
    response.stdout.on('data', (data) =>{
        const ans = JSON.parse(data)
        res.send(ans)
    })
})

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
})