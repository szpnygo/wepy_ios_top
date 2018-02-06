/**
 * Created by ztadmin on 2018/1/16.
 */
import {REQUEST_API_NEW_APP, REQUEST_API_NEW_GAME, REQUEST_API_TOP_FREE, REQUEST_API_TOP_PAID, REQUEST_API_TOP_SELL} from '../types/base'
import { createAction } from 'redux-actions'
import {requestData} from '../../common/util'

export const requestNewApp = createAction(REQUEST_API_NEW_APP, (country)=>{
  return new Promise((resolve,reject) => {
    requestData("https://rss.itunes.apple.com/api/v1/"+country+"/ios-apps/new-apps-we-love/all/100/explicit.json",function (data) {
      resolve(data.feed.results)
    },function (error) {
      reject(error)
    })
  })
});

export const requestNewGame = createAction(REQUEST_API_NEW_GAME, (country)=>{
  return new Promise((resolve,reject) => {
    requestData("https://rss.itunes.apple.com/api/v1/"+country+"/ios-apps/new-games-we-love/all/100/explicit.json",function (data) {
      resolve(data.feed.results)
    },function (error) {
      reject(error)
    })
  })
});

export const requestTopFree = createAction(REQUEST_API_TOP_FREE, (country)=>{
  return new Promise((resolve,reject) => {
    requestData("https://rss.itunes.apple.com/api/v1/"+country+"/ios-apps/top-free/all/100/explicit.json",function (data) {
      resolve(data.feed.results)
    },function (error) {
      reject(error)
    })
  })
});

export const requestTopSeller = createAction(REQUEST_API_TOP_SELL, (country)=>{
  return new Promise((resolve,reject) => {
    requestData("https://rss.itunes.apple.com/api/v1/"+country+"/ios-apps/top-grossing/all/100/explicit.json",function (data) {
      resolve(data.feed.results)
    },function (error) {
      reject(error)
    })
  })
});

export const requestTopPaid = createAction(REQUEST_API_TOP_PAID, (country)=>{
  return new Promise((resolve,reject) => {
    requestData("https://rss.itunes.apple.com/api/v1/"+country+"/ios-apps/top-paid/all/100/explicit.json",function (data) {
      resolve(data.feed.results)
    },function (error) {
      reject(error)
    })
  })
});
