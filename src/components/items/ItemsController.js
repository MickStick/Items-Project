import items from '../../data'

class ItemsController{

    static getItems(){
        return (window.localStorage['items'] ? window.localStorage['items'] : items)
    }

    static async newItem(item){
        if(window.localStorage['items']){
            let temp = JSON.parse(window.localStorage['items'])
            temp.items.push(item)
            window.localStorage['items'] = temp
        }else{
            items.push(item)
            window.localStorage['items'] = JSON.stringify(items)
        }

        return JSON.parse(window.localStorage['items'])
    }

    static async favoriteItem(name, fave){
        if(window.localStorage['items']){
            let temp = JSON.parse(window.localStorage['items'])
            temp.items.forEach(item => {
                if(item.name === name){
                    item.favorite = fave
                }
            })
            window.localStorage['items'] = temp
        }else{
            items.forEach(item => {
                if(item.name === name){
                    item.favorite = fave
                }
            })

            window.localStorage['items'] = JSON.stringify(items)
        }

        return JSON.parse(window.localStorage['items'])
    }

    static async delteItem(name, fave){
        if(window.localStorage['items']){
            let temp = JSON.parse(window.localStorage['items'])
            temp.items.forEach(item => {
                if(item.name === name){
                    item = null
                }
            })
            window.localStorage['items'] = temp
        }else{
            items.forEach(item => {
                if(item.name === name){
                    item = null
                }
            })
            
            window.localStorage['items'] = JSON.stringify(items)
        }

        return JSON.parse(window.localStorage['items'])
    }
}

export default ItemsController;