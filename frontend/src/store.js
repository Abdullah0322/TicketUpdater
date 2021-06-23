import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {
     ticketListReducer  } from './reducers/ticketReducers'
 import { composeWithDevTools } from 'redux-devtools-extension'

  const reducer = combineReducers({
     ticketList: ticketListReducer,

   })
  const middleware = [thunk]
const store = createStore(
  reducer,
//   initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
