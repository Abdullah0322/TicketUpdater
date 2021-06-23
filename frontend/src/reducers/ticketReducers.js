import{
    TICKET_LIST_REQUEST,
    TICKET_LIST_SUCCESS,
    TICKET_LIST_FAIL,

}from '../constants/ticketConstants'
export const ticketListReducer = (state = { tickets: [] }, action) => {
    switch (action.type) {
      case TICKET_LIST_REQUEST:
        return { loading: true, tickets: [] }
      case TICKET_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.tickets,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case TICKET_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  