/**
 * Created by ztadmin on 2018/1/16.
 */
import {REQUEST_APP_DETAIL} from '../types/detail'
import {createAction} from 'redux-actions'
import {requestData} from '../../common/util'

export const requestAppDetail = createAction(REQUEST_APP_DETAIL, (app_id, country) => {
  return new Promise((resolve, reject) => {
    requestData("https://itunes.apple.com/lookup?id=" + app_id + "&country=" + country, function (data) {
      console.log(data.results[0])
      resolve(data.results[0])
    }, function (error) {
      reject(error)
    })
  })
});

