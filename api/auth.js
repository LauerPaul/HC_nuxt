const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')

// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
  jwt({
    secret: 'dummy'
  }).unless({
    path: '/api/auth/login'
  })
)

// -- Routes --

// [POST] /login
app.post('/login', (req, res, next) => {
  const { username, password } = req.body
  const valid = username.length && password === '123'

  if (!valid) {
    throw new Error('Invalid username or password')
  }

  const accessToken = jsonwebtoken.sign(
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! Временно для demo версии !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {
      id: 4567,
      name: 'Stephen Kelbe',
      avatar: 'https://i.pinimg.com/736x/92/fa/07/92fa07f043204bfccfb38104fce557f7--make-an-avatar-create-your-own-avatar.jpg',
      status_text: 'I went through a hundred prvisited',
      balance: 928
    },
// -------------------------------------------------------------------------------------------
    'dummy'
  )

  res.json({
    token: {
      accessToken
    }
  })
})

// [GET] /user
app.get('/user', (req, res, next) => {
  res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (req, res, next) => {
  res.json({ status: 'OK' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})

// -- export app --
module.exports = {
  path: '/api/auth',
  handler: app
}
