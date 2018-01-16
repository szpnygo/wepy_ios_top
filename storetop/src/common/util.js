/**
 * Created by ztadmin on 2018/1/16.
 */
import wepy from 'wepy'

export const requestIntercept = {
  config(p) {
    wepy.showLoading({
      title: '加载中…',
      mask: true
    });
    return p
  },
  success (p) {
    wepy.hideLoading();
    return p
  },
  fail (p) {
    wepy.hideLoading();
    showErrorMsg("网络请求失败，请稍后重试");
    return p
  }
};

export function requestData(url,success,error) {
  wepy.request(url)
    .then((data) => {
      if (data.statusCode === 200) {
        success(data.data)
      } else {
        showErrorMsg("http request error:" + data.statusCode);
        error(data)
      }
    })
}

export function showErrorMsg(msg, title = '提醒') {
  wepy.showModal({
    title: title,
    content: msg,
    showCancel: false,
    confirmColor: '#FF3333'
  })
}

export function showSuccessMsg(msg, title = '提示') {
  wepy.showModal({
    title: title,
    content: msg,
    showCancel: false,
  })
}

