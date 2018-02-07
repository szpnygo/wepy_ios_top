### 关于

一款可以切换国家查看不同国家iOS应用排行榜的小程序

<img src="https://github.com/szpnygo/wepy_ios_top/blob/master/qr.jpg" width="400"/> 

### 介绍

WePY 是一款让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序。框架的细节优化，Promise，Async Functions的引入都是为了能让开发小程序项目变得更加简单，高效。

### 部分功能截图

<img src="https://github.com/szpnygo/wepy_ios_top/blob/master/screen.png" width="400"/> 

### 安装使用

#### 安装（更新） wepy 命令行工具。

```console
npm install wepy-cli -g
```

#### 开发实时编译

```console
npm run dev
```

#### 开发者工具使用

1. 使用`微信开发者工具`新建项目，本地开发选择`dist`目录。
2. `微信开发者工具`-->项目-->关闭ES6转ES5。<font style="color:red">重要：漏掉此项会运行报错。</font>
3. `微信开发者工具`-->项目-->关闭上传代码时样式自动补全 <font style="color:red">重要：某些情况下漏掉此项会也会运行报错。</font>
4. `微信开发者工具`-->项目-->关闭代码压缩上传 <font style="color:red">重要：开启后，会导致真机computed, props.sync 等等属性失效。[#270](https://github.com/wepyjs/wepy/issues/270)</font>
5. 项目根目录运行`wepy build --watch`，开启实时编译。
