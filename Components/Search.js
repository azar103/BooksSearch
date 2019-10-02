import React from 'react';
import {View, StyleSheet, TextInput,Button, ActivityIndicator} from 'react-native';
import {getBooksBySearch} from '../Helpers/BooksAPI';
import { connect } from 'react-redux'
import ListBooks from './ListBooks';
class Search extends React.Component {

    constructor(props){
        super(props)
        this.state={
            books: [],
            isLoading: false
        }
        this.searchedText = ""
        this._loadBooks = this._loadBooks.bind(this)
    }
   
   _loadBooks(){
       this.setState({
           isLoading: true
       })
       if(this.searchedText.length>0){
        getBooksBySearch(this.searchedText).then(
            (data) => {this.setState({
            isLoading: false,
            books: data.items
        })})
       }
       
   } 
   _changeText(text){
            this.searchedText = text;
          
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
   
   _addToHistoric = (book) =>{
    const action = {type: 'ADD_TO_HISTORIC', value: book}
    this.props.dispatch(action)
}

   render() {
       return(
           <View style={styles.main_container}>
                <TextInput 
                     style={styles.textInput_style}
                     placeholder="Search"
                     onChangeText= {(text) => this._changeText(text)}
                     onSubmitEditing={()=>this._loadBooks()}
                />
                <Button title="Rechercher" 
                        onPress={() => {this._loadBooks()}} 
                        color= '#E81A5F'/>
                <ListBooks 
                      books = {this.state.books}
                      navigation = {this.props.navigation}
                />
                {this._displayLoading()}
           </View>
       );
   }
}

const styles = StyleSheet.create({
     main_container: {
         flex: 1
     },
     textInput_style:{
         height:40
     },
     button_style:{
         backgroundColor: '#E81A5F'
     },
     loading_container:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.toggleFavorite.favoriteBooks
    }
}

export default connect(mapStateToProps)(Search)