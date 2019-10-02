import React from 'react'
import {connect} from "react-redux"
import { FlatList } from 'react-native'
import ViewedBook from '../Components/ViewedBook'

class ViewBooks extends React.Component {

  
   render() {
       console.log(this.props.viewedBooks)
       return(
           <FlatList 
               keyExtractor ={(item) => item.id.toString()}
               data = {this.props.viewedBooks}
               extraData = {this.props.viewedBooks}
               renderItem = {({item}) => 
               <ViewedBook
                     image = {item.volumeInfo.imageLinks.thumbnail}
                     title = {item.volumeInfo.title}
                     date = {item.volumeInfo.publishedDate}
                     navigation = {this.props.navigation}
               />
            }
           />
       )
   }
}

const mapStateToProps = (state) => {
    return{
        viewedBooks: state.manageViewedBooks.viewedBooks
    }
}
export default connect(mapStateToProps)(ViewBooks)