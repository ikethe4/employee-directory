import React from "react";

function Row(props){
    return <>
    {props.users.map(user =>(
        <tr>
            <th scope= "row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.occupation}</td>
            <td>{user.email}</td>

        </tr>
    ))
    }
    </>
}

export default Row;