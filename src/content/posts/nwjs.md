---
title: 如何使用nwjs开发自己的第一个桌面应用
published: 2024-12-27 20:49:14
updated: 2024-12-27 20:49:14
description: "如何使用nwjs开发自己的第一个桌面应用,使用html+css+javascript就可以开发桌面应用，是不是感觉很神奇，那么我就介绍下如何使用nw.js来开发第一个桌面应用"
category: '笔记'
tags: ["教程"]
draft: false
---
使用html+css+javascript就可以开发桌面应用，是不是感觉很神奇，那么我就介绍下如何使用nw.js来开发第一个桌面应用

# 工具/原料
- NW.js
- Enigma Virtual Box

# 方法/步骤
1. 下载nw.js，官网地址：https://nwjs.io/有两个版本，一个是Normal版本，一个是SDK版本，如果是做开发测试，则建议选择下载SDK版本，SDK版本可以使用开发工具进行debug等
<img src="https://exp-picture.cdn.bcebos.com/dccb47de45078801caacf5f2b18ca608a40f8273.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

2. 下载完成之后，解压至本地目录

<img src="https://exp-picture.cdn.bcebos.com/95bd4e8c9bcec7f871ab7d6e034ce54a2e27fb73.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

3. 创建一个helloworld目录，新建package.json文件

``` json
{

  "name": "helloworld",

  "main": "index.html"

}

name：应用名称

main：应用入口页面
```

4. 新建index.html文件

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
<!-- 可以在这个页面引用js文件，和平常我们web开发时候编写方式一样-->
<script src="helloworld.js"></script>
```

5. 运行刚刚写的helloworld应用，在nw.exe所在目录按下shift+鼠标右键，选择"在此处打开命令窗口"，然后输入nw helloworld之后回车，则可以看窗口效果

<img src="https://exp-picture.cdn.bcebos.com/2e66f9ef28066b01910013f33df39187021cf373.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">
<img src="https://exp-picture.cdn.bcebos.com/3201a8f39187031c911d8f4f6a86242fa972ec73.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">
<img src="https://exp-picture.cdn.bcebos.com/9881b1fce186242fa4afb4ac35e434daf15ee873.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

6. 如果想打成独立的包发给别人使用时，则可以Enigma Virtual Box将我们开发的文件打成一个独立的exe文件，下载Enigma Virtual Box进行安装

7. 将应用打包成helloworld.nw文件，进入helloworld文件夹中，将所有文件选择打成zip包，然后改名为app.nw

<img src="https://exp-picture.cdn.bcebos.com/f11f54237971fe1d820538aaea20a7cd0d6ee073.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

8. 合并app.nw和nw.exe，将app.nw文件移动到和nw.exe同级目录下，然后执行命令copy /b nw.exe+app.nw app.exe，这时是可以直接执行app.exe的，但换到其它目录就不可以执行了，因为换到其它目录找不到nwjs包内的依赖文件

<img src="https://exp-picture.cdn.bcebos.com/ff5c88d818196120b0102cdd70f202b374d7df73.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

9. 使用Enigma Virtual Box打成独立的可执行的exe文件，选择Input和Output文件，将locales和pnacl两个文件夹拖入，然后点击add按钮添加剩下的不包含我们自己创建的文件

<img src="https://exp-picture.cdn.bcebos.com/0d2fe5f202b375d785a69b47515872dadf49d873.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

10. 点击Process

<img src="https://exp-picture.cdn.bcebos.com/bab5c45872dade4940d2abe526042e6816e9d573.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80">

# 注意，注意，注意！
## 此教程来自baidu[https://jingyan.baidu.com/article/3065b3b6a06c92becff8a483.html](https://jingyan.baidu.com/article/3065b3b6a06c92becff8a483.html)
侵权，请联系删除