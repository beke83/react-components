import React from 'react'
import { useState } from 'react'

const TableSearch = ({ data }) => {
    const [query, setQuery] = useState("");

    return (
        <div className="table-search">
            <table>
                <tbody>
                    <tr>
                        <th>Surname</th>
                        <th>Firstname</th>
                        <th>Email</th>
                    </tr>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.last_name}</td>
                            <td>{item.first_name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableSearch
