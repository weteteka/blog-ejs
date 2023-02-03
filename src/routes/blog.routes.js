import { Router } from "express";
import { Post } from "../Models/PostModel";
import multer from "multer";
import { now } from "mongoose";

const blogRouter = Router()
const Storage = multer.diskStorage({
    destination: 'public/upload/',
    filename: (req, file, callback) => {
        callback(null, req.body.titulo + '.' + file.originalname.split('.')[1])
    }
})
const upload = multer({ storage: Storage }).single('image')
blogRouter.get('/', async (req, res) => {
    const post = await Post.find()
    res.status(200).render('blog/blog', { post });
})
blogRouter.get('/new', (req, res) => {
    res.status(200).render('blog/new', { post: new Post() });
})
blogRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    const post = await Post.findById({ _id: id })
    if (post) {
        res.status(200).render('blog/edit', { post });
    }
})
blogRouter.post('/', upload, (req, res) => {
    const { titulo, categoria, descricao } = req.body
    Post.create({
        titulo,
        categoria,
        descricao,
        image: req.file.filename
    })
    res.status(201).redirect('/')
})
blogRouter.put('/:id', upload, async (req, res) => {
    const {titulo}= req.body
    await Post.findByIdAndUpdate(req.params.id, {
        $set: req.file.filename,
        $set: req.body
    }) 
    res.status(201).redirect('/')
})
blogRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndDelete(req.params.id)
    res.status(201).redirect('/')
})
export default blogRouter
