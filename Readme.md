### 项目基础架构说明:

此项目为移动端项目基础架构.如果需要添加什么依赖包,可以直接进行安装.
入口文件`index.js`中引入了`fastclick.js`和基础的样式初始化文件.以及移动端`1px`相关的样式.

后续需要什么功能,可以在此基础上面进行扩展.

### React移动端项目基础架构

* 文件夹目录规范化,常用工具函数的封装
* 基础的ajax请求封装 (请求响应拦截)
* 页面loading效果的配置
* webpack 打包基础配置,基础样式的引入,页面自适应等.
* less, redux, (redux-logger)的配置

### 页面添加loading效果

* 封装全局的请求方法进行处理.
* 在`action`中进行处理,请求前,传递`loading`的值为`true`,请求结束后,置为`false`

要实现这个功能，我们可以在每个组件请求手动添加加载效果返回后再将其隐藏，但如果每个请求都这么做，就要做多次重复设置显得很麻烦，但好处是可以设置定制多种请求效果。但考虑到该项目场景为后台管理系统，给管理员使用，花样可以不用搞太多，统一优雅即可，故采取全局设置loading效果。

两种方法都可以实现效果.

如果是在在action中通过dispacth负载不同的状态的话,就是在模板中通过props拿到loading的值,然后进行显示Loading还是页面组件.

另外一种就是全局请求的ajax封装.这种比较适用于后台系统,统一的loading效果,不需要单独的进行设置

