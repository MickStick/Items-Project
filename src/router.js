import React from 'react'
import { Switch, Route} from 'react-router-dom'
import {HomeComponent, FavoriteComponent} from './components'

class Router extends React.Component{

    render(){
        return(
        
            <Switch>
                <Route path='/' exact component={HomeComponent}/>
                <Route path='/favorites' component={FavoriteComponent} />
            </Switch>
        )
    }
}

export default Router