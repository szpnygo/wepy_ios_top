import wepy from 'wepy'
import {SELECT_COUNTRY} from '../store/types/base'
import {getStore} from 'wepy-redux'
import {requestTopFree,requestNewApp,requestNewGame,requestTopPaid,requestTopSeller} from '../store/action'

const store = getStore();
export default class baseMixin extends wepy.mixin {

  data = {
    countryList: [
      {name:"中国",value:"cn"},
      {name:"美国",value:"us"},
      {name:"日本",value:"jp"},
    ],
    isx: /iphone10/i.test(wx.getSystemInfoSync().model)
  };

  methods = {
    selectCountry: function (e) {
      let country = this.data.countryList[e.detail.value];
      store.dispatch({type:SELECT_COUNTRY,payload:country});
      store.dispatch(requestTopSeller(country.value));
      store.dispatch(requestTopPaid(country.value));
      store.dispatch(requestNewGame(country.value));
      store.dispatch(requestNewApp(country.value));
      store.dispatch(requestTopFree(country.value));
    },
  };

  onShow() {
  }

  onLoad() {
  }
}
