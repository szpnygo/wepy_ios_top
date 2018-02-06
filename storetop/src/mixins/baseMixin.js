import wepy from 'wepy'

export default class baseMixin extends wepy.mixin {

  data = {
    countryList: ['中国', '美国', '英国'],
    isx: /iphone10/i.test(wx.getSystemInfoSync().model)
  };

  methods = {
    changeCountry: function () {
      console.log("change country");
    },
  };

  onShow() {
  }

  onLoad() {
  }
}
