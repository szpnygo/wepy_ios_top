import wepy from 'wepy'

export default class baseMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  };
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  };

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
