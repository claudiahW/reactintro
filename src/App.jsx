import './App.css'
import axios from 'axios'
import { useEffect, useState} from 'react'

function App() {

    return (
        <div className="App">

            <h1>Jokes App</h1>

            {loading && <p>Loading...</p>}

            {error ?
             <p>Something went wrong</p>
            : 

            jokes.map((joke) => (
            <div className="joke" key={joke.id}>  
          <h3>{joke.text}</h3>
          </div>
            ))
        }

        </div>
    )
}

export default App

function useFetch() {
    const [jokes, setJokes] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       ;(async () => {
        setError(false)
        setLoading(true)
        try {
        const result = await axios.get('/api/jokes')
        setJokes(result.data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)

    })()
    }, [])
}