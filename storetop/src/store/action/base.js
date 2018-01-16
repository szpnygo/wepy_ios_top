/**
 * Created by ztadmin on 2018/1/16.
 */
import { REQUEST_API } from '../types/base'
import { createAction } from 'redux-actions'
import {requestData} from '../../common/util'

//https://rss.itunes.apple.com/api/v1/us/ios-apps/top-paid/all/10/explicit.json

export const requestApiData = createAction(REQUEST_API, ()=>{
  return new Promise((resolve,reject) => {
    requestData("https://rss.itunes.apple.com/api/v1/cn/ios-apps/top-paid/all/10/explicit.json",function (data) {
      resolve(data.feed.results)
    },function (error) {
      reject(error)
    })
  })
});
