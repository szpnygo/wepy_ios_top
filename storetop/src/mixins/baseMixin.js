import wepy from 'wepy'
import {SELECT_COUNTRY} from '../store/types/base'
import {getStore} from 'wepy-redux'

const store = getStore();

export default class baseMixin extends wepy.mixin {

  config = {
    enablePullDownRefresh: true,
  };

  data = {
    country:store.getState().base.country,
    countryList: [
      {name:"中国",value:"cn"},
      {name:"美国",value:"us"},
      {name:"日本",value:"jp"},
    ],
    isx: /iphone10/i.test(wx.getSystemInfoSync().model)
  };

  methods = {
    selectCountry: function (e) {
      store.dispatch({type:SELECT_COUNTRY,payload:this.data.countryList[e.detail.value]});
    },
  };


  onLoad() {
    this.requestData();
  }

  onPullDownRefresh() {
    this.requestData();
  }

  watch = {
    country (newValue, oldValue) {
      this.requestData();
    }
  }

}
