import React from 'react'

const item = props => {
    // props = props;
    let {_id, name, color, isFavorite, Fave, Delete} = props;
    return(
        <div>
            <table style={{border: '2px solid black', marginBottom: '10px', width: '280px'}}>
                <tbody>
                    <tr><td>Item name: {name}</td>
                    <td><button onClick={Fave.bind(this)} data={JSON.stringify({_id, isFavorite})}>{isFavorite ? 'UnFave' : 'Favorite'}</button></td></tr>
                    <tr><td>Color: {color}</td>
                    <td><button onClick={Delete.bind(this)} data={_id}>Delete</button></td></tr>
                    <tr><td>isFavorite: {`${isFavorite}`}</td><td></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default item;