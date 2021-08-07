const Bookmark = require('../models/bookmark')
const router = require('express').Router();



//Create
router.post('/api/bookmarks', (req, res)=> {
  try{
      const createdBookmark = await Bookmark.create(req.body)
      res.status(200).json(createdBookmark)
    }catch(error){
      console.error(error)
      res.status(400).json({ message: error.message })
    }
  })

// Read

router.get('/api/bookmarks', (req, res) => {
  res.json({ "route": 'index' })
})

app.get('/api/bookmarks/:id', (req, res) => {
  res.json({ "route": 'show' })
})


// Update

app.put('/api/bookmarks/:id', (req, res) => {
  res.json(req.body)
})


// Delete

app.delete('/api/bookmarks/:id', (req, res) => {
  res.json({ "route": 'delete' })
})
