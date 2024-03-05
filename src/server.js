{
 id: 3,
 text: "Hear about the new restaurant called karma? There's no menu: You get what you deserve"
},
]
app.get('/api/jokes', (req, res) => {
    if (req.query.search) {
        const filteredJokes = jokes.filter((joke) => 
        joke.text.toLowerCase().includes(req.query.search.toLowerCase())
        )
        res.send(filteredJokes)
        return
    }
    setTimeout(() => {
    res.send([...jokes].reverse())
}, 2000)

})

app.get('/api/jokes/:id', (req, res) => {
const joke = jokes.find(j => j.id === Number(req.params.id))
if (joke) {
    res.send(joke)
} else {
    res.status(404).end()
}
})

app.post('/api/jokes', (req, res) => {
    const joke = req.body
    joke.id = jokes.length + 1
    jokes.push(joke)
    res.send(joke)
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})