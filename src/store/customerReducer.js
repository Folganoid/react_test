const defaultState = {
    customers: [],
}

export const customerReducer = (state = defaultState, action) => {
    let tmp;
    switch (action.type) {
      case "ADD_CUSTOMER":
        tmp = state.customers;
        tmp.push(action.payload);
        return {...state, customers: tmp}
      case "GET_CUSTOMER":
        tmp = state.customers;
        tmp.pop();
        return {...state, customers: tmp}
  
      default: 
        return state
    }
  }