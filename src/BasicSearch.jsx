import React from 'react';
import { useState } from 'react';;

const BasicSearch = ({data}) => {
    const [query, setQuery] = useState("");

    return (
        <div>
            <input type="text"
                placeholder='search'
                className='search'
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="list">
                {data.filter((user) => user.first_name.toLowerCase().includes(query)
                ).map((user) => (
                    <li key={user.id} className="listItem">{user.first_name}</li>
                ))
                }
                {data.filter((user) => user.first_name.toLowerCase().includes(query)).length === 0 && (
                    <li className="listItem">No user found</li>
                )}
            </ul>
        </div>
    )
}

export default BasicSearch
