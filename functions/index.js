const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const fs = require('fs')
const app = express()

app.use(basicAuth('username', 'password'))

app.get('/articles/:id(\\d+)', (req, res) => {
  try {
    res.status(200).send(fs.readFileSync('views/page' + req.params.id + '.html').toString())
  } catch (err) {
   res.status(404).send('NotFound')
  }
})

exports.app = functions.https.onRequest(app)