import {createStore} from 'redux'

const reduserFun = (state={balance:0,history:[]},action)=>{
    if (action.type === "ADD") {
        return {
            balance:state.balance + action.payload,
            history:[...state.history,action.payload]
        }
    }
    
    else return state

}

const store = createStore(reduserFun)
export default store;