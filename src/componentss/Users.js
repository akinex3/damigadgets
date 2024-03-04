import React, {useEffect, useState} from 'react';

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://6528337a931d71583df2069b.mockapi.io/todo")
            .then(response => response.json())
            // .then(json => console.log(json))
            .then((data)=>{
                setUsers(data)
            })
    }, [])
    return (
        <div>
            <h1>Users</h1>

           {
               users.map((user) => (
                   <div key={user.id}>
                       <h2><i>Text</i>: {user.nxme}</h2>
                       {/* <h2><i>Email Address</i>: {user.email}</h2>
                       <h2><i>Website</i>: {user.website}</h2>
                       <h2><i>Company</i>: {user.company.nxme}</h2> */}
                  </div>
               ))
           }
        </div>
    );
}

export default Users;

