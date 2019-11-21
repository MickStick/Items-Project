import React from 'react'

const item = props => {
    this.props = props;
    return(
        <div>
            <table style={{border: '2px solid black', marginBottom: '10px'}}>
                <tr><td>Item name: {this.props.name}</td>
                <td><button onClick={this.props.Fave()} data={this.props.isFavorite} name={this.props.name}>{this.props.isFavorite ? 'UnFave' : 'Favorite'}</button></td></tr>
                <tr><td>Color: {this.props.color}</td>
                <td><button onClick={this.props.Delete()} data={this.props.name}>Delete</button></td></tr>
                <tr><td>isFavorite: {this.props.isFavorite}</td><td></td></tr>
            </table>
        </div>
    )
}

export default item;