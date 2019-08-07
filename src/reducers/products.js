import * as ActionType from '../actions/products';

export const initialState = {
    isLoading: false,
    list: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        // case ActionType.GET:
        //   return state.set('isLoading', true)

        case ActionType.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: action.products
            }

            default:
                return state
    }
}