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
      {name:"中国香港",value:"hk"},
      {name:"中国台湾",value:"tw"},
      {name:"中国澳门",value:"mo"},
      {name:"美国",value:"us"},
      {name:"英国",value:"gb"},
      {name:"日本",value:"jp"},
      {name:"德国",value:"de"},
      {name:"法国",value:"fr"},
      {name:"巴西",value:"br"},
      {name:"丹麦",value:"dk"},
      {name:"埃及",value:"eg"},
      {name:"印度",value:"in"},
      {name:"泰国",value:"th"},
      {name:"越南",value:"vn"},
      {name:"韩国",value:"kr"},
      {name:"芬兰",value:"fi"},
      {name:"意大利",value:"it"},
      {name:"巴林",value:"bh"},
      {name:"贝宁",value:"bj"},
      {name:"不丹",value:"bt"},
      {name:"文莱",value:"bn"},
      {name:"乍得",value:"td"},
      {name:"智利",value:"cl"},
      {name:"斐济",value:"fj"},
      {name:"加纳",value:"gh"},
      {name:"希腊",value:"gr"},
      {name:"俄罗斯",value:"ru"},
      {name:"约旦",value:"jo"},
      {name:"老挝",value:"la"},
      {name:"马里",value:"ml"},
      {name:"蒙古",value:"mn"},
      {name:"荷兰",value:"nl"},
      {name:"挪威",value:"no"},
      {name:"阿曼",value:"om"},
      {name:"帕劳",value:"pw"},
      {name:"秘鲁",value:"pe"},
      {name:"波兰",value:"pl"},
      {name:"瑞士",value:"ch"},
      {name:"南非",value:"za"},
      {name:"阿根廷",value:"ar"},
      {name:"加拿大",value:"ca"},
      {name:"以色列",value:"il"},
      {name:"菲律宾",value:"ph"},
      {name:"瑞典",value:"se"},
      {name:"也门",value:"ye"},
      {name:"冰岛",value:"is"},
      {name:"安哥拉",value:"ao"},
      {name:"巴哈马",value:"bs"},
      {name:"比利时",value:"be"},
      {name:"伯利兹",value:"bz"},
      {name:"百慕大",value:"bm"},
      {name:"柬埔寨",value:"kh"},
      {name:"佛得角",value:"cv"},
      {name:"西班牙",value:"es"},
      {name:"冈比亚",value:"gm"},
      {name:"圭亚那",value:"gy"},
      {name:"爱尔兰",value:"ie"},
      {name:"牙买加",value:"jm"},
      {name:"肯尼亚",value:"ke"},
      {name:"科威特",value:"kw"},
      {name:"黎巴嫩",value:"lb"},
      {name:"立陶宛",value:"lt"},
      {name:"卢森堡",value:"lu"},
      {name:"马其顿",value:"mk"},
      {name:"匈牙利",value:"hu"},
      {name:"马拉维",value:"mw"},
      {name:"马耳他",value:"mt"},
      {name:"墨西哥",value:"mx"},
      {name:"尼泊尔",value:"np"},
      {name:"新西兰",value:"nz"},
      {name:"尼日尔",value:"ne"},
      {name:"奥地利",value:"at"},
      {name:"巴拿马",value:"pa"},
      {name:"巴拉圭",value:"py"},
      {name:"新加坡",value:"sg"},
      {name:"葡萄牙",value:"pt"},
      {name:"塞舌尔",value:"sc"},
      {name:"苏里南",value:"sr"},
      {name:"突尼斯",value:"tn"},
      {name:"土耳其",value:"tr"},
      {name:"乌干达",value:"ug"},
      {name:"卡塔尔",value:"qa"},
      {name:"阿联酋",value:"ae"},
      {name:"乌克兰",value:"ua"},
      {name:"乌拉圭",value:"uy"},
      {name:"安圭拉岛",value:"ai"},
      {name:"亚美尼亚",value:"am"},
      {name:"澳大利亚",value:"au"},
      {name:"阿塞拜疆",value:"az"},
      {name:"巴巴多斯",value:"bb"},
      {name:"白俄罗斯",value:"by"},
      {name:"玻利维亚",value:"bo"},
      {name:"博茨瓦纳",value:"bw"},
      {name:"开曼群岛",value:"ky"},
      {name:"哥伦比亚",value:"co"},
      {name:"塞浦路斯",value:"cy"},
      {name:"多米尼加",value:"dm"},
      {name:"厄瓜多尔",value:"ec"},
      {name:"爱沙尼亚",value:"ee"},
      {name:"萨尔瓦多",value:"sv"},
      {name:"格林纳达",value:"gd"},
      {name:"危地马拉",value:"gt"},
      {name:"洪都拉斯",value:"hn"},
      {name:"克罗地亚",value:"hr"},
      {name:"拉脱维亚",value:"lv"},
      {name:"利比里亚",value:"lr"},
      {name:"马来西亚",value:"my"},
      {name:"毛里求斯",value:"mu"},
      {name:"摩尔多瓦",value:"md"},
      {name:"莫桑比克",value:"mz"},
      {name:"纳米比亚",value:"na"},
      {name:"尼加拉瓜",value:"ni"},
      {name:"尼日利亚",value:"ng"},
      {name:"巴基斯坦",value:"pk"},
      {name:"罗马尼亚",value:"ro"},
      {name:"圣卢西亚",value:"lc"},
      {name:"塞内加尔",value:"sn"},
      {name:"塞拉利昂",value:"sl"},
      {name:"斯洛伐克",value:"sk"},
      {name:"斯里兰卡",value:"lk"},
      {name:"斯威士兰",value:"sz"},
      {name:"坦桑尼亚",value:"tz"},
      {name:"委内瑞拉",value:"ve"},
      {name:"津巴布韦",value:"zw"},
      {name:"保加利亚",value:"bg"},
      {name:"阿尔巴尼亚",value:"al"},
      {name:"阿尔及利亚",value:"dz"},
      {name:"布基纳法索",value:"bf"},
      {name:"刚果共和国",value:"cg"},
      {name:"哥斯达黎加",value:"cr"},
      {name:"捷克共和国",value:"cz"},
      {name:"几内亚比绍",value:"gw"},
      {name:"印度尼西亚",value:"id"},
      {name:"哈萨克斯坦",value:"kz"},
      {name:"马达加斯加",value:"mg"},
      {name:"毛里塔尼亚",value:"mr"},
      {name:"蒙特塞拉特",value:"ms"},
      {name:"沙特阿拉伯",value:"sa"},
      {name:"斯洛文尼亚",value:"si"},
      {name:"所罗门群岛",value:"sb"},
      {name:"塔吉克斯坦",value:"tj"},
      {name:"土库曼斯坦",value:"tm"},
      {name:"吉尔吉兹斯坦",value:"kg"},
      {name:"乌兹别克斯坦",value:"uz"},
      {name:"安提瓜和巴布达",value:"ag"},
      {name:"巴布亚新几内亚",value:"pg"},
      {name:"多米尼加共和国",value:"do"},
      {name:"圣基茨和尼维斯",value:"kn"},
      {name:"英属维尔京群岛",value:"vg"},
      {name:"密克罗尼西亚联邦",value:"fm"},
      {name:"圣多美和普林西比",value:"st"},
      {name:"特立尼达和多巴哥",value:"tt"},
      {name:"特克斯和凯科斯群岛",value:"tc"},
      {name:"圣文森特和格林纳丁斯",value:"vc"},


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
