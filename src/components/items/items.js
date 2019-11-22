import React from 'react'

const item = props => {
    // props = props;
    let {_id, name, color, isFavorite, Fave, Delete} = props;
    return(
        <div className="item">
            <table style={{border: '2px solid black', marginBottom: '10px', width: '280px'}}>
                <tbody>
                    <tr><td>Item name: {name}</td>
                        <td> <button className="delete" onClick={Delete.bind(this)} data={_id}>&times;</button></td></tr>
                    <tr><td>Color: {color}</td>
                    <td></td></tr>
                    <tr><td>isFavorite: {`${isFavorite}`}</td>
                    <td>
                        <button 
                        className={isFavorite ? 'fave' : 'unfave'} 
                        onClick={Fave.bind(this)} 
                        data={JSON.stringify({_id, isFavorite})}>
                            {String.fromCharCode(0x2665)} 
                            </button>
                    </td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default item;