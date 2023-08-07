# ReactNative 仿 ONE 一个 APP

## 目录结构

```
├── README.md
├── __tests__
│   ├── App.test.tsx
├── android
│   ├── app
│   ├── build
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── ios
│   ├── TWO
│   ├── TWO.xcodeproj
│   ├── TWOTests
│   └── Podfile
├── src
│  ├── common                                               公共小组件
│  │   ├── IconButton.js                                    图标按钮
│  │   └── Player.js                                        音频播放组件
│  ├── components
│  │   ├── Comp                                             文章、问答、书影详情页组件
│  │   ├── Discover                                         发现组件子模块
│  │   ├── Home                                             首页组件子模块
│  │   ├── Discover.js                                      发现组件
│  │   ├── Home.js                                          首页组件
│  │   ├── Radio.js                                         收音机组件
│  │   └── My.js                                            我的组件
│  ├── data
│  │   ├── Redux                                            状态管理库
│  │   └── api.js                                           发送网络请求
│  ├── App.js
│  ├── style.js                                             公共样式
│  └── uilts.js                                             辅助方法
├── .eslintrc.js
├── .gitignore
├── app.json
├── babel.config.js
├── index.js                                                项目入口
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── service.js                                              react-native-track-player相关
├── tsconfig.json
└── yarn.lock

```

## 运行

- 确保你已安装好 React Native 所需的依赖环境
- 在根目录下执行 npm install
- 执行 react-native run-android

## 效果图

![](./public/1.gif)

![](./public/2.gif)

![](./public/3.gif)

## TODO

- 音频播放
- 修复已知 bug
- 引入高德地图 sdk
- 收音机模块
- 我的模块
- 暂不适配 ios

注: 由于接口限制只能完成部分功能，因为获得的接口数据很多不符合需要，因此某些功能有许多重复数据。
