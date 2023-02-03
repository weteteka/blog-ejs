import express from 'express'
import blogRouter from './src/routes/blog.routes'
import cors from 'cors'
import { config } from 'dotenv'
import { DB } from './src/services/databases'
import methodOverride from 'method-override'
config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
DB()
app.use(express.static('./public'))
app.use('css',express.static(__dirname + 'public/css'))
app.use('js',express.static(__dirname + 'public/js'))
app.use('imgs',express.static(__dirname + 'public/imgs'))
app.use('upload',express.static(__dirname + 'public/upload'))

app.set('views','./src/views')
app.set('view engine','ejs')

app.use('/',blogRouter)
app.listen(port,()=>console.log(`rodando na porta http://localhost:${port}`))