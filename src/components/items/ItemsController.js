import items from '../../data'

class ItemsController{

    static getItems(){
        return (window.localStorage['items'] ? JSON.parse(window.localStorage['items']).items : items)
    }

    static async newItem(item){
        if(window.localStorage['items']){
            let temp = JSON.parse(window.localStorage['items'])
            let filtered = temp.items.filter(i => i.name === item.name || i._id.includes(item.name))
            console.log(filtered.length)
            item['_id'] = `${item.name}${filtered.length + 1}`
            temp.items.push(item)
            window.localStorage['items'] = JSON.stringify(temp)
        }else{
            let filtered = items.filter(i => i.name === item.name || i._id.includes(item.name))
            item['_id'] = `${item.name}${filtered.length + 1}`
            items.push(item)
            window.localStorage['items'] = JSON.stringify({items:items})
        }

        return JSON.parse(window.localStorage['items']).items
    }

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