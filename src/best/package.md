
# 蚂蚁窝lerna项目 配置
[项目git地址 http://gitlab.anthead.net/framework/fecc/frontend/anthill-lerna-packages](http://gitlab.anthead.net/framework/fecc/frontend/anthill-lerna-packages)
```html
anthill-lerna-packages 项目名
├── packages
    |── core 基础组件包
        |──lib  // 打包组件存放地址。
        |──src
            |──packages // 组件文件夹
            |──index.ts // 主入口
    |── utils 基础方法包
    |── core-biz 业务组件包
    |── style 基础样式包
├── lerna.json
├── package.json
```
项目共提供4个包，每个包都是一个vue项目文件，在src目录下的packages文件夹下为组件。
可以通过npm run build 进行打包。打包入口是/src/index.ts, 出口为/lib
::: info 注意
打包命令 需要安装 pnpm  
```bash
npm i pnpm -g
npm run build
```
:::
打包好的包，将会发布到npm仓库，可以使用lerna publish命令进行发布。
npm 发布之前 需要进行以下步骤
1. 第一步：npm 切换 私有库源
```bash
npm config set registry http://192.168.4.202:4873/
```
2. 第二步：npm 注册
```bash
npm adduser
```
输入以上命令后，会提示输入用户名和密码和邮箱，注册成功后，即可登录

3. 第三步：npm 登录
```bash
npm login
```
登录成功后即可发布

::: warning 提醒
发布之前首先需要将打包好的代码提交git，不然不会生效。
:::
4. 第四步 发布 
```bash
lerna publish
```

::: warning 提醒
发布包的时候会提醒输入版本号，一般会自动生成小版本，直接一路回车 next  
如果已经切换私有库并处于登录状态，可以忽略123步骤，直接打包好后提交git 执行4.
:::



## lerna 介绍

Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。

简单来理解：就是通过lerna 进行分包处理，并可以处理多包之间的关联关系。

具体想要了解更多可以通过[lerna官网](https://lerna.js.org/)进行查看。

### lerna 快速起步

```bash
 # 新建lerna项目文件夹
mkdir lerna-demo
 # 进入目录
cd lerna-demo
 # 全局安装
npm init lerna -g 
 # 设置当前目录为lerna项目
lerna init 
```

通过以上命令会生成目录结构如下：
```html
lerna-demo
├── lerna.json
├── package.json
├── packages
```
### lerna 常用命令

#### lerna create 创建包
```bash
lerna create core
lerna create utils
```
通过以上命令会生成目录结构如下：
```html
lerna-demo
├── lerna.json
├── package.json
├── packages
    ├── core
        ├── package.json // 发布的版本信息
        ├── lib  // 包的实际代码
        ├── Readme.md // npm包 对外显示信息 可以写使用方法
    ├── utils
    ....
```
#### ~~lerna add 添加包~~ (废弃)
这个命令已经被v7版本以上的lerna命令废弃了，可以使用npm install代替 or yarn。

```bash
 # 将core包 引入package.json，以供其他包引用  
npm install ./packages/core
```
::: caution 注意：
如果core包使用了utils包，那么在实际使用过程中需要同时安装utils包和core包,否则会报错。
:::

#### lerna publish 发布包

发布时候注意修改npm的指向地址并登录。

::: info 小技巧
lerna publish 有时发布不成功会卡住，重新执行会报错版本已存在。
这时候只要去修改子包或者总的版本号，然后重新发布就好 或者将生成版本号的文件进行回滚操作后 重新发布。。
:::
lerna publish 选择Patch会更新的子包中的package.json的version更改为指定版本

lerna会自动生成git tag(版本标签)上传github上, 和自动上传npm的版本号(对应更新的子包)

#### lerna diff 查看包的差异

- 还有一些其他的命令可自行查找[lerna官网](https://lerna.js.org/)
