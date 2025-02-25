import React , { useState , useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    // const [posts , setPosts] = useState([])
    const [post , setPost] = useState({})
    const [id , setId] = useState(10)
    const [idFromButtonClick , setIdFromButtonClick] = useState(10)
    const [errorMsg , setErrorMsg] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
            console.log(response)
            // setPosts(response.data)
            setPost(response.data)
            setErrorMsg('')
        })
        .catch(error => {
            console.log(error)
            setErrorMsg(error.message)
            setPost(0)
            setId(0)
        })
    },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return(
        <div>
            {/* <ul>
                {
                   posts.map(post => (<li key={post.id}>{post.title}</li>))
                }
            </ul> */}
            <div>
                <input value={id} onChange={e => setId(e.target.value)}></input>
                <button type="button" onClick={handleClick}>Fetch Post</button>
            </div>
            <div>{post.title}</div>
            {
                (errorMsg !== '') ? <div>{errorMsg}</div> : ""
            }
        </div>
    )
}

export  default DataFetching