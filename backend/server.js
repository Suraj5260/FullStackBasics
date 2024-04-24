import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "The first joke",
            content: "This is the first joke"
        },
        {
            id: 2,
            title: "The second joke",
            content: "This is the second joke"
        },
        {
            id: 3,
            title: "The third joke",
            content: "This is the third joke"
        },
        {
            id: 4,
            title: "The forth joke",
            content: "This is the forth joke"
        },
        {
            id: 5,
            title: "The fifth joke",
            content: "This is the fifth joke"
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})