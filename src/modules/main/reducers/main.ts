import {createReducer} from 'utils'
import * as constants from '../constants/main'

export const initialState = {
  some: null
}

export default createReducer(initialState, {
  [constants.TICK]: (state, {payload}: any) => {
    return {
      ...state,
      some: payload
    }
  }
})