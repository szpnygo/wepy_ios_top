/**
 * Created by ztadmin on 2018/1/16.
 */
import {handleActions} from 'redux-actions'
import {REQUEST_API_NEW_APP, REQUEST_API_NEW_GAME, REQUEST_API_TOP_FREE, REQUEST_API_TOP_PAID, REQUEST_API_TOP_SELL} from '../types/base'

const initialState ={
  newAppList:[],
  newGameList:[],
  topFreeList:[],
  topPaidList:[],
  topSellList:[]
}

export default handleActions({
  [REQUEST_API_NEW_APP](state, data){
    return{
      ...state,
      newAppList : data.payload
    }
  },
  [REQUEST_API_NEW_GAME](state, data){
    return{
      ...state,
      newGameList : data.payload
    }
  },
  [REQUEST_API_TOP_FREE](state, data){
    return{
      ...state,
      topFreeList : data.payload
    }
  },
  [REQUEST_API_TOP_PAID](state, data){
    return{
      ...state,
      topPaidList : data.payload
    }
  },
  [REQUEST_API_TOP_SELL](state, data){
    return{
      ...state,
      topSellList : data.payload
    }
  }
},initialState)
