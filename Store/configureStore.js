import { createStore} from "redux"
import { persistCombineReducers } from 'redux-persist'
import toggleFavorite from "./Reducers/favoriteReducer"
import manageViewedBooks from "./Reducers/ViewedReducer"
import AsyncStorage from '@react-native-community/async-storage';
const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}
export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite , manageViewedBooks}))
