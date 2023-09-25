export const initialState = {
    basket : [],
    cient : null
}
//Selector
const reducer = (state, action)=> {
console.log(action);
switch(action.type){
    case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket, action.product]
        };
        
    case 'SET_CLIENT':
    return{
        ...state , 
        client :action.client,
        };
        default:
          return state;
    }
}

export default reducer