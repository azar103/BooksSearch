import React from 'react'
import {View, StyleSheet, Text, Image, ActivityIndicator, Button, ScrollView, TouchableOpacity} from 'react-native'
import { getBookById } from '../Helpers/BooksAPI'
import { connect } from 'react-redux'
class BookDetail extends React.Component {

constructor(props){
    super(props)
    this.state ={
        book: undefined,
        isLoading: true
    }
  
  
}



componentDidMount(){
    getBookById(this.props.navigation.state.params.id).then((data)=>{
        this.setState({
            book: data,
            isLoading:false
        })
    })
}


_toggleFavorite = () => {
   const action = { type:'TOGGLE_FAVORITE', value: this.state.book }
   this.props.dispatch(action)
}

_toggleViewedBooks = () => {
    const action = { type: 'TOGGLE_VIEWED_BOOKS', value: this.state.book }
    this.props.dispatch(action)
}

_displayImage() {
    let sourceImg = require('../Images/ic_favorite_border.png')
    //si le livre est parmi les livred favoris
     if(this.props.favoriteBooks.findIndex(item => item.id == this.state.book.id) !== -1){
         sourceImg = require('../Images/ic_favorite.png')
     }
   return(
       <Image
             source={sourceImg}
             style={styles.favorite_style}
          />)
     
}

_displayButton() {
    let title = "Marquer comme Vu"
    const index = this.props.viewedBooks.findIndex(item => item.id == this.state.book.id)

    if(index !== -1){
        title = "Non Vu"      
    }
    return(
        <Button 
        title={title} 
        onPress={()=> this._toggleViewedBooks() } 
    /> )
}
_displayBook(){
    const book = this.state.book
    if(book != undefined){
     

        return(
            <ScrollView style={styles.main_container}>
              <View style={{
                  justifyContent:'center',
                  alignItems:'center'
              }}>
              <Image style={styles.image_style} source= {{uri:book.volumeInfo.imageLinks.thumbnail}}/> 
              <TouchableOpacity
                onPress={() => this._toggleFavorite()}
                style= {styles.icon_container}
             >
                 { this._displayImage() }
             </TouchableOpacity>
              </View>

              <Text
                style={styles.description_style}
                numberOfLines={12}
              >{book.volumeInfo.description} </Text>
               { this._displayButton() }
              </ScrollView>

        )
    }
}
_displayLoading(){
    if(this.state.isLoading){
        return(
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}
render() {
    

        return(
          <View style={styles.main_container}>
          {this._displayBook()}
          {this._displayLoading()}
          </View>  
        )
    }
}
const styles = StyleSheet.create({
    main_container:{
        flex: 1
    },
    image_style: {
        height: 300,
        marginTop: 5,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    description_style:{
      marginTop:10,
      padding: 8,
      color: '#656565'
    },
     loading_container:{
         position: 'absolute',
         left: 0,
         right: 0,
         top: 0,
         bottom: 0,
         justifyContent: 'center',
         alignItems: 'center'
     },
     favorite_style:{
         height: 30,
         width: 30
     },
     icon_container: {
         alignItems: 'center'
     }
    
})
const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.toggleFavorite.favoriteBooks,
        viewedBooks: state.manageViewedBooks.viewedBooks
    }
}

export default connect(mapStateToProps)(BookDetail)