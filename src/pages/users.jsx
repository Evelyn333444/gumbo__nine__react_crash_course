import {useParams} from 'react-router-dom'
import React, {useEffect} from 'react';
import axios from "axios";

// function Users() {
   // const {username} = useParams ()

   // useEffect(() => {
   //     fetch('https://chocolatelabs.com/${username}')
   // }, [])
        
   // return <h1>Users</h1>
//}

//export default Users



function Users() {
    const { id } = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
        const { data } =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }

    useEffect(() => {
        fetchUser()
    }, [])
    
    return (
        <div>
            <Link to="/">Go back</Link>
            <h1>{ user.id }</h1>
            <h1>{ user.name }</h1>
             <h1>{ user.email }</h1>
              <h1>{ user.username }</h1>
        </div>
    ) 
}

export default Users