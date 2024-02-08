import * as types from "../actions/actionType"

const initialState = {
    name:"pravin",
    products:[],
    searchData:'',
    popup:false,
    vendor:'',
    currency:'',
    domain:''
}



export const productReducer = (state=initialState,actions) =>{

    switch (actions.type) {
        case types.GETPRODUCTS:
            return {
                ...state,
                products:actions.payload
            }
            case types.DELETE_PRODUCT:
                case types.ADD_PRODUCT:
                    case types.UPDATE_PRODDUCT:
                        case types.storeData:
                return {...state}
                    case types.SEARCH:
                        return {
                            ...state,
                            searchData:actions.payload
                        }
                        case types.POPUP:
                            return {
                                ...state,
                                popup: !state.popup
                            }
                            case types.VENDOR:
                                return {
                                    ...state,
                                    vendor:actions.payload
                                }
                                case types.GET_CURRENCY:
                                    return {
                                        ...state,
                                        currency:actions.payload
                                    }
                                    case types.GET_DOMAIN:
                                        return {
                                            ...state,
                                            domain:actions.payload
                                        }
        default:
            return state
            break;
    }


}