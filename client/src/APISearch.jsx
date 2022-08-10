import React from 'react'

const APISearch = ({ data }) => {
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

export default APISearch
