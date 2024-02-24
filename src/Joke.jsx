import { useState } from "react"

export default function Joke({id, text}) {

const [likes, setLike] = useState(0)

    const handleLike = () => {
        setLike(likes + 1)
        console.log(`like id: ${id}, totalLikes ${likes}`)
    }

    const handleDislike = () => {
        setLike(likes - 1)
        console.log(`dislike id; ${id}, totalLikes ${likes}`)
    }

    return (
        <div>
            <p>{text}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>👍 </button>
            <button onClick={handleDislike}>👎 </button>
        </div>
    )
}