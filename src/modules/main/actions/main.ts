import * as constants from '../constants/main'
import { ActionCreator } from 'redux'

export const tick:ActionCreator<any> = () => async (dispatch: any) => {
  dispatch({
    type: constants.TICK,
    payload: 22
  })
}