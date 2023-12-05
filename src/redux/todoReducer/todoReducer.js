const initialState = {
    todos: []
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.payload};
        default:
            return state;
    }
}