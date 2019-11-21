import React from 'react'
import ItemController from '../items/ItemsController'
import Item from '../items/items'

class HomeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            item : {
                name: '',
                color: ''
            },
            items : ItemController.getItems()
        }
        console.log(this.state.items)
    }

    handleChange(event){
        let item = this.state.item
        item[event.target.name] = event.target.value
        this.setState({
            item
        })
    }

    async handleAdd(){
        if(this.state.item.name.length < 0 || this.state.item.color.length < 0 )
            return
        let item = this.state.item

        item['isFavorite'] = false
        let data = ''
        await ItemController.newItem(item).then(result => {
            data = result
        })
        this.setState({
            items : data
        })
    }

    async handleFave(event){
        alert(event.target.data)
        let data = ''
        await ItemController.favoriteItem(event.target.name, event.target.data).then( results => {
            data = results
        })

        this.setState({
            items : data
        })
    }

    async handleDelete(event){
        alert(event.target.data)
        let data = ''
        await ItemController.deleteItem(event.target.data).then( results => {
            data = results
        })

        this.setState({
            items : data
        })
    }

    render(){
        return(
            <div>
                <div>
                    <label>Name: </label>
                    <input
                    type="text" 
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange.bind(this)}/>
                    <label>Color: </label>
                    <input
                    type="text" 
                    value={this.state.color}
                    name="color"
                    onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleAdd.bind(this)}> Add Items </button>
                </div>
                <div>
                    {this.state.items.forEach(item => (
                        <Item
                        name={item.name}
                        color={item.color}
                        isFavorite={item.isFavorite}
                        Fave={this.handleFave.bind(this)}
                        Delete={this.handleDelete.bind(this)}/>
                    ))}
                </div>

            </div>
        )
    }
}

export default HomeComponent