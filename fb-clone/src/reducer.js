
// Data layer initially looks like this
export const initialState = {
    user: null,
};

// dispatch actions to datalayer
export const actionTypes = {
    SET_USER: "SET_USER",
};

// listen to action. if action received if action then change the user to user
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER: 
            return{
                ...state,
                user: action.user,
            };
        default :
        return state;
    }
};

export default reducer;