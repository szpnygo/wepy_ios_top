/**
 * Created by ztadmin on 2018/1/16.
 */
import {handleActions} from 'redux-actions'
import {REQUEST_API} from '../types/base'

const initialState ={
  list:[]
}

export default handleActions({
  [REQUEST_API](state, data){
    return{
      ...state,
      list : data.payload
    }
  }
},initialState)
