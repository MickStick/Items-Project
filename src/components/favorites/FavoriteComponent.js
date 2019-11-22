import React from 'react'
import ItemController from '../items/ItemsController'
import Item from '../items/items'

class FavoriteComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items : ItemController.getItems()
        }
    }

     /**
     * 
     * @param {Object} items 
     * Updates the items state with given items Object
     */
    resetItems(items){
        this.setState({
            items
        })
    }

    /**
     * 
     * @param {Object} event 
     * Calls favorite item method in item controller
     */
    async handleFave(event){
        // alert(JSON.stringify(data))
        let {_id, isFavorite} = JSON.parse(event.target.getAttribute('data'))
        console.log(_id, isFavorite)
        // let data = ''
        await ItemController.favoriteItem(_id, isFavorite).then( results => {
            this.resetItems(results)
        })

    }

    /**
     * 
     * @param {Object} event 
     * Calls delete item method in item controller
     */
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
                <div style={{marginTop: '20px', marginLeft: '20px'}}>
                    {this.state.items.map(item => {
                        return(item.isFavorite ? (
                            <Item
                            key={this.state.items.indexOf(item)}
                            _id={item._id}
                            name={item.name}
                            color={item.color}
                            isFavorite={item.isFavorite}
                            Fave={this.handleFave.bind(this)}
                            Delete={this.handleDelete.bind(this)}/>
                        ): null)
                    })}
                </div>
            </div>
        )
    }
}

export default FavoriteComponent