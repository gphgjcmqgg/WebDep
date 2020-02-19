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