import React, {useEffect, useState} from 'react';
import './users.css'

export const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/api/users')
            .then(res =>
                res.json()
            )
            .then(users =>
                setUsers(users))
    }, [])
    return (
        <div className="App">
            <h1>Users</h1>
            <ul>
                {users.map(user=>{
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    );
}


