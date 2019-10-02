import React from 'react'
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import ItemAnimation from '../Animations/ItemAnimation';
class Book extends React.Component {
   constructor(props){
       super(props)
   }
    render(){
      
        const {myBook, displayDetailForBook} = this.props
        return(
            <ItemAnimation>
            <TouchableOpacity onPress={() => {
                displayDetailForBook(myBook.id)
            } }
               style={styles.main_container}
               >
                   <Image 
                      style={styles.image_style}
                      source={{uri: myBook.volumeInfo.imageLinks.thumbnail}}
                   />
                   
                   <View
                      style={styles.content_container}
                   >  
                   <View style={styles.header_container}>       
                   {myBook.volumeInfo.title ?
                    <Text 
                      style={styles.title_style}
                      numberOfLines={3}
                    >
                        { myBook.volumeInfo.title}
                    </Text>: <Text>Title not found</Text>
                   }
                   <Image style={styles.icon_style} source={ 
                       this.props.favoriteBooks.findIndex(item => item.id === myBook.id) !== -1
                   ? require('../Images/ic_favorite.png') : null }/>
                </View>   
                   { myBook.volumeInfo.authors ?
                   
                   <Text>   
                        {myBook.volumeInfo.authors[0]}
                    </Text>: <Text>Author not found</Text>
                   }
                   </View>
            </TouchableOpacity>
            </ItemAnimation>  
        )
                        
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        flexDirection: 'row'
    },
    image_style:{
        height: 100,
        width: 70,
        backgroundColor: '#D0D0D0',
        margin: 5
    },
    content_container:{
        flex:1,
        padding: 13
    },
    title_style:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    icon_style:{
        width: 20,
        height: 20
    },
    header_container: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 4
    }
})
const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.toggleFavorite.favoriteBooks
    }
}


export default connect(mapStateToProps)(Book)