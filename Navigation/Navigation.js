import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Search from "../Components/Search"
import BookDetail from "../Components/BookDetail"
import Favorites from "../Components/Favorites"
import ViewBooks from "../Components/ViewBooks"

import { StyleSheet, Image } from 'react-native'

import React from 'react'
const SearchStackNavigator = createStackNavigator({
    Search :{
        screen: Search,
        navigationOptions: {
            title: 'Featured Books'
        }
    },
    BookDetail:{
        screen: BookDetail,
        navigationOptions: {
            title: 'FilmDetail'
        }
    }
})
const favoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favorites'
        }
    }
})    

const BooksViewStackNavigator = createStackNavigator({
   ViewBooks: {
        screen: ViewBooks,
        navigationOptions: {
            title: 'Mes Livres vues'
        }
    }
})


const tabBarNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon :() =>{
                return(
                    <Image 
                        source={require('../Images/ic_search.png')}
                        style={ styles.icon_style }
                    />
                )
            }
        }
    },
    Favorites: {
        screen: favoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return(
                    <Image
                       source= {require('../Images/ic_favorite_border.png')}
                       style = { styles.icon_style }
                    />
                )
            }
        }

    },
    ViewBooks: {
        screen: BooksViewStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return(
                    <Image 
                         source={require('../Images/ic_checked.png')}
                         style= {styles.icon_style}
                    />
                )
            }
        }
    }


    
    

},{
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel: false,
        showIcon: true
    }
}
    
    )


const styles = StyleSheet.create({
          icon_style: {
              width: 40,
              height: 40
          }
})
export default createAppContainer(tabBarNavigator)