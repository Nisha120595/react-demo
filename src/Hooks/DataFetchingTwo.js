import React , { useState , useEffect } from 'react'
import axios from 'axios'

function DataFetchingTwo() {

   
    const [post , setPost] = useState({})
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(response => {
            console.log(response)
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
            setError(error.message)
            setPost({})
        })
    },[])

    return(
        <div>
           {loading ? 'Loading data...' : post.title}
           {error ? error : null}
        </div>
    )
}

export  default DataFetchingTwo