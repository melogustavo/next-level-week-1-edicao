import express from 'express'

const app = express();

app.get('/users', (req, res) => {
    return res.json('ola')
})

app.listen(3333, () => {
    console.log('Server listening on port 3333')
})