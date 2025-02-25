import {useEffect} from 'react'

function useDocumentTitle(count){
    useEffect(() => {
        console.log('UseEffect Triggered')
        document.title = `You clicked ${count} times`
    },[count])
}

export default useDocumentTitle