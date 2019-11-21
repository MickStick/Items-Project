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

        this.resetItems.bind(this)
        this.resetInputs.bind(this)
    }

    resetItems(items){
        this.setState({
            items
        })
    }

    resetInputs(){
        document.querySelector('input[name="name"]').value = ''
        document.querySelector('input[name="color"]').value = ''
    }

    handleChange(event){
        let item = this.state.item
        item[event.target.name] = event.target.value
        this.setState({
            item
        })
    }

    async handleAdd(){
        if(this.state.item.name.length < 1 || this.state.item.color.length < 1 )
            return
        let item = this.state.item

        item['isFavorite'] = false
        await ItemController.newItem(item).then(results => {
            this.resetItems(results)
            this.resetInputs()
        })

    }

    async handleFave(event){
        // alert(JSON.stringify(data))
        let {_id, isFavorite} = JSON.parse(event.target.getAttribute('data'))
        console.log(_id, isFavorite)
        // let data = ''
        await ItemController.favoriteItem(_id, isFavorite).then( results => {
            this.resetItems(results)
        })

    }

    async handleDelete(event){
        // alert(data)
        let _id = event.target.getAttribute('data')
        console.log(_id)
        // let data = ''
        await ItemController.deleteItem(_id).then( results => {
            this.resetItems(results)
        }).catch(err => {
            console.log(err)
        })

    }

    render(){
        return(
            <div>
                <div style={{marginLeft: '20px'}}>
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
                <div style={{marginTop: '20px', marginLeft: '20px'}}>
                    {this.state.items.map(item => (
                        <Item
                        key={this.state.items.indexOf(item)}
                        _id={item._id}
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