const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({}).populate('user', { userName: 1, name: 1 })
  res.json(blogs)
})

blogsRouter.post('/', async (req, res) => {
  const { title, author, url, likes } = req.body

  const token = req.token
  const decodedToken = jwt.verify(token, config.SECRETE)
  if (!decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = req.user
  const blog = new Blog({
    title,
    author,
    url,
    likes,
    user: user._id,
  })
  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  res.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (req, res) => {
  const id = req.params.id
  const blog = await Blog.findById(id)
  const user = req.user

  if (blog.user.toString() === user.id.toString()) {
    await blog.remove()
    res.status(204).end()
  } else {
    return res.status(401).json({ error: 'unauthorised user' })
  }
})

blogsRouter.put('/:id', async (req, res) => {
  const { title, author, url, likes } = req.body
  const id = req.params.id
  const newBlog = {
    title,
    author,
    url,
    likes,
  }
  const updatedBlog = await Blog.findByIdAndUpdate(id, newBlog, {
    new: true,
  })
  res.status(200).json(updatedBlog)
})

module.exports = blogsRouter
