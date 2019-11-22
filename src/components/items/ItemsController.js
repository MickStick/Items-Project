import items from '../../model'

/**
 * Class for controlling item functionality
 */
class ItemsController{

    /**
     * Gets the saved items or static items from model
     * @returns {Object}
     */
    static getItems(){
        return (window.localStorage['items'] ? JSON.parse(window.localStorage['items']).items : items)
    }

    /**
     * 
     * @param {Object} item 
     * Adds new item to item array then saved in local storage
     * @returns {Object}
     */
    static async newItem(item){
        if(window.localStorage['items']){
            let temp = JSON.parse(window.localStorage['items'])
            let filtered = temp.items.filter(i => i._id.includes(item.name))
            console.log(filtered.length)
            let id = filtered.length > 0 ? filtered[filtered.length - 1]._id.split(item.name)[1] : 0
            console.log(id)
            item['_id'] = `${item.name}${Number(id) + 1}`
            temp.items.push(item)
            window.localStorage['items'] = JSON.stringify(temp)
        }else{
            let filtered = items.filter(i => i._id.includes(item.name))
            item['_id'] = `${item.name}${filtered.length + 1}`
            items.push(item)
            window.localStorage['items'] = JSON.stringify({items:items})
        }

        return JSON.parse(window.localStorage['items']).items
    }

    /**
     * 
     * @param {String} _id 
     * @param {Boolean} fave 
     * Finds the specified items, sets isFavorite to true/false then
     * saves to local store
     * @returns {Object}
     */
    static async favoriteItem(_id, fave){
        if(window.localStorage['items']){
            let temp = JSON.parse(window.localStorage['items'])
            temp.items.forEach(item => {
                if(item._id === _id){
                    temp.items[temp.items.indexOf(item)].isFavorite = !fave
                }
            })
            window.localStorage['items'] = JSON.stringify(temp)
        }else{
            items.forEach(item => {
                if(item._id === _id){
                    items[items.indexOf(item)].isFavorite = !fave
                }
            })

            window.localStorage['items'] = JSON.stringify({items:items})
        }

        return JSON.parse(window.localStorage['items']).items
    }

    /**
     * 
     * @param {String} _id 
     * Deletes specified item from local storage
     * @returns {Object}
     */
    static async deleteItem(_id){
        try{
            if(window.localStorage['items']){
                let temp = JSON.parse(window.localStorage['items'])
                temp.items = temp.items.filter(item => item._id !== _id)
                window.localStorage['items'] = JSON.stringify(temp)
            }else{
                items = items.filter(item => item._id !== _id)
                
                window.localStorage['items'] = JSON.stringify({items:items})
            }

    
            return JSON.parse(window.localStorage['items']).items
        }catch(e){
            throw e
        }
    }
}

export default ItemsController;