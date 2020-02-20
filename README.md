# WebDep
前端开发学习

## reactbasic

react的HelloWorld案例

## hello-react

### npm 和 yarn 切换淘宝镜像

npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org

### 安装create-react-app脚手架

npm install -g create-react-app
create-react-app hello-react

yarn start
yarn build

yarn global add serve
serve -s build

## accounts-app 小型财务系统

### mock数据

1. http://www.mockapi.io/    来mock数据

2. json-server

    https://github.com/typicode/json-server
    npm install -g json-server
    自定义db.json
    json-server --watch db.json --port 3004

    fetch("http://localhost:3004/records").then(res=>{ return res.json()}).then(json=> console.log(json))       --可以查看数据

### axios 请求ajax

axios.get('http://localhost:3004/records').then(
    res => {
        console.log(res.data)
    }
)
.catch(
    error => {
        error.message
    }
)

### window需要使用环境变量必须安装cross-env 

npm install cross-env --save-dev

## React-Router 4






## umijs

### 环境准备

1. 官网下载与系统相应的node版本，node.js版本>=8.10

2. 推荐使用 yarn 管理 npm 依赖
npm i yarn tyarn -g

3. 然后全局安装 umi，并确保版本是 2.0.0 或以上
yarn global add umi

4. yarn create umi
如果提示 create-umi 命令不存在，你需要执行 yarn global bin，然后把 global bin 的路径添加到环境变量 PATH 中。

### 脚手架使用

yarn create umi

Select the boilerplate type? 选择 app
Do you want to use typescript? 选择 Yes
What functionality do you want to enable? 空格键选择 antd, dva, code splitting, dll
1. antd- 包含antd
2. dva- 包含dva
3. code splitting- 包含按需加载
4. dll- 包含dll二次启动加速

