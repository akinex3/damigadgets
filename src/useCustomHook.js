import {useState, useEffect} from 'react';

const UseCustomHook = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    let URL = "http://localhost:8000/blogs"
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false)
                setData(data)
            })
            .catch((error) => {
                setIsLoading(false)
                setIsError(true)
                console.log(error.message);
            })
    })
    return { data, isLoading, isError }
}

export default UseCustomHook;
