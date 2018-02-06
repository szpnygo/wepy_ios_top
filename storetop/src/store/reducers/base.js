/**
 * Created by ztadmin on 2018/1/16.
 */
import {handleActions} from 'redux-actions'
import {
  REQUEST_API_NEW_APP,
  REQUEST_API_NEW_GAME,
  REQUEST_API_TOP_FREE,
  REQUEST_API_TOP_PAID,
  REQUEST_API_TOP_SELL,
  SELECT_COUNTRY
} from '../types/base'
import wepy from 'wepy'

const initialState ={
  newAppList:[],
  newGameList:[],
  topFreeList:[],
  topPaidList:[],
  topSellList:[],
  country:'cn',
  countryTitle: '中国'
};

export default handleActions({
  [REQUEST_API_NEW_APP](state, data){
    wepy.setStorage({
      key: REQUEST_API_NEW_APP,
      data: data.payload
    });
    return{
      ...state,
      newAppList : data.payload
    }
  },
  [REQUEST_API_NEW_GAME](state, data){
    wepy.setStorage({
      key: REQUEST_API_NEW_GAME,
      data: data.payload
    });
    return{
      ...state,
      newGameList : data.payload
    }
  },
  [REQUEST_API_TOP_FREE](state, data){
    wepy.setStorage({
      key: REQUEST_API_TOP_FREE,
      data: data.payload
    });
    return{
      ...state,
      topFreeList : data.payload
    }
  },
  [REQUEST_API_TOP_PAID](state, data){
    wepy.setStorage({
      key: REQUEST_API_TOP_PAID,
      data: data.payload
    });
    return{
      ...state,
      topPaidList : data.payload
    }
  },
  [REQUEST_API_TOP_SELL](state, data){
    wepy.setStorage({
      key: REQUEST_API_TOP_SELL,
      data: data.payload
    });
    return{
      ...state,
      topSellList : data.payload
    }
  },
  [SELECT_COUNTRY](state, data){
    wepy.setStorage({
      key: SELECT_COUNTRY,
      data: data.payload
    });
    return{
      ...state,
      country : data.payload.value,
      countryTitle: data.payload.name
    }
  }
},initialState)
