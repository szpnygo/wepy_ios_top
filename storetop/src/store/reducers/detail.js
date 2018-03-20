/**
 * Created by ztadmin on 2018/1/16.
 */
import {handleActions} from 'redux-actions'
import {
  REQUEST_APP_DETAIL,
} from '../types/detail'
import wepy from 'wepy'

const initialState = {
  detail: null,
};

export default handleActions({
  [REQUEST_APP_DETAIL](state, data){
    return {
      ...state,
      detail: data.payload
    }
  },

}, initialState)
