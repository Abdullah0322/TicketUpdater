import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {
  ticketCreateReducer,
  ticketDeleteReducer,
  ticketHeadingCreateReducer,
     ticketListReducer,  
     ticketUpdateReducer} from './reducers/ticketReducers'
 import { composeWithDevTools } from 'redux-devtools-extension'

  const reducer = combineReducers({
     ticketList: ticketListReducer,
     ticketCreate:ticketCreateReducer,
     ticketDelete:ticketDeleteReducer,
     ticketHeadingCreate:ticketHeadingCreateReducer,
     ticketUpdate:ticketUpdateReducer,
  

   })
   const initialState = {
   }
  const middleware = [thunk]

const store = createStore(
  reducer,
   initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
