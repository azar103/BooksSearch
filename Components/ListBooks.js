import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import  Book from './Book'
class ListBooks extends React.Component {
   

    _displayDetailForBook = (id) =>{
        this.props.navigation.navigate("BookDetail", {id: id }) 
    }

  
    render() {
        return(
            <FlatList 
            keyExtractor={(item)=> item.id.toString()}
            data = {this.props.books}
            extraData={this.props.favoriteBooks}
            renderItem={({item}) =>   
            <Book 
               myBook={item}
               displayDetailForBook= {this._displayDetailForBook}
              />
             } 
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.toggleFavorite.favoriteBooks
    }
}

export default connect(mapStateToProps)(ListBooks)