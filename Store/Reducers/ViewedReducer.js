const initialState= {
    viewedBooks : []
}

function manageViewedBooks(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_VIEWED_BOOKS':
             const indexBook = state.viewedBooks.findIndex((item) => item.id === action.value.id)

             if(indexBook !== -1) { 
                nextState = {...state, 
                    viewedBooks: state.viewedBooks.filter((item, index)=> index !== indexBook) }
                
             } else {
                nextState = {
                    ...state,
                    viewedBooks: [...state.viewedBooks, action.value]
                }
             }
            return nextState || state
        default:
            return state;
    }
}

export default manageViewedBooks

