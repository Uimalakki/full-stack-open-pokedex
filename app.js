const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('status ok')
})

app.get('/version', (req, res) => {
  res.send('deployment v36') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line quotes
  console.log(`server started on port ${PORT}`)
})
