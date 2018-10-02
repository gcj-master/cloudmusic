# cloudmusic

音乐播放器app

查看：

  在server文件夹启动 node server.js
  
  在cloudmusic文件夹启动  npm start


项目版本： 1.0

项目属性： 前端

项目语言： javascript

项目使用框架：  vue.js

项目介绍：  

    这是使用vue.js框架构建的一个音乐播放器 webapp项目，项目的样式和功能设计仿照了网易云音乐app。
该项目已经实现一款音乐播放器的基本功能：播放音乐， 搜索音乐， 收藏音乐。部分功能还在开发中......

    后台接口使用了某大牛封装的api,接口具体调用方法请参考：https://api.imjad.cn/cloudmusic.md

项目实现说明：

    页面且的切换使用vue-router实现，详细代码 src/router/index.js 
    
    项目的数据状态共享 vuex实现
    
    轮播图插件  vue-awesome-swiper   安装：npm install vue-awesome-swiper --save
    
    图片懒加载插件 vue-lazyload   安装：npm install vue-lazyload -D
