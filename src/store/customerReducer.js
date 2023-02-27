const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER";
const GET_CUSTOMER = "GET_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}
      case GET_CUSTOMER:
        return {...state, customers: [...state.customers.filter(c => c.id !== action.payload.id)]}
      default: 
        return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const getCustomerAction = (payload) => ({type: GET_CUSTOMER, payload});