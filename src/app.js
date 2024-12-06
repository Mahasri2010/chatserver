import express, { json, urlencoded } from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

const app = express()
config()
app.use(cors())
app.use(json({ limit: "50mb" }))
app.use(urlencoded({ limit: '50mb', extended: true }))


const port = process.env.port
const mongodb = process.env.mongodb

const start = async () => {

    await connect(mongodb)
    app.listen(port, console.log(`Serving on the post ${port}`))
}

start()