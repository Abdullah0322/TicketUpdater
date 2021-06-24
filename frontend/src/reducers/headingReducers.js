
import{
    HEADING_LIST_REQUEST,
    HEADING_LIST_SUCCESS,
    HEADING_LIST_FAIL,

    HEADING_CREATE_REQUEST,
    HEADING_CREATE_SUCCESS,
    HEADING_CREATE_FAIL,
    HEADING_CREATE_RESET,



}from '../constants/headingConstants'

export const headingListReducer = (state = { heading: [] }, action) => {
    switch (action.type) {
      case HEADING_LIST_REQUEST:
        return { loading: true, heading: [] }
      case HEADING_LIST_SUCCESS:
        return {
          loading: false,
          heading: action.payload.heading,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case HEADING_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


export const headingCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case HEADING_CREATE_REQUEST:
        return { loading: true }
      case HEADING_CREATE_SUCCESS:
        return { loading: false, success: true }
      case HEADING_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case HEADING_CREATE_RESET:
        return {}
      default:
        return state
    }
  }