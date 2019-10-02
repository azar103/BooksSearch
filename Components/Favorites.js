import React from 'react'

import { connect } from 'react-redux'
import ListBooks from './ListBooks'

class Favorites extends React.Component {
    render() {
         return(
            <ListBooks 
            books = {this.props.favoriteBooks}
            navigation = {this.props.navigation}
            />
         
         )
    }
}
const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.toggleFavorite.favoriteBooks
    }
}
export default   connect(mapStateToProps)(Favorites)