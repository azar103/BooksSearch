const initialState = { 
     favoriteBooks : []
    }
function toogleFavorite(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_FAVORITE':
              const indexBook = state.favoriteBooks.findIndex(item => item.id === action.value.id)
              //si le livre existe dans la list des  livres favoris
              if(indexBook !== -1){
                  //on le supprime
                    nextState = {
                        ...state,
                       favoriteBooks: state.favoriteBooks.filter((item, index) => index !== indexBook) 
                    }
              } else {
                  //on l'ajoute
                    nextState = {
                        ...state,
                        favoriteBooks: [...state.favoriteBooks, action.value]
                    }   
              }
              return nextState || state
        default:
            return state;      

    }
}let nextState
    


export default toogleFavorite