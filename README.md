### 子应用模板 — **template-react**

### 安装依赖

```bash
npm install
或者
pnpm install
```

### 启动项目

- 启动应用后，可在本地进行调试。

```bash
npm start
```

### 项目打包

- 打包成功后，根目录下面会出现以 "[appName].zip" ZIP 安装包，在观云平台-轻应用市场使用上传功能可快速部署。

```bash
npm run build
```

### 项目部署

- 自动化部署，会根据 package 文件的 apiRoot 去部署对应环境下，您可以在项目的根目录中找到以应用名称命名的 ZIP 安装包。

```bash
npm run deploy
```

### 目录结构简要介绍

```
- src
    components 公共组件

    hooks  公共hook函数

    pages  业务page

    routers  路由配置

    styles 公共样式文件

    tyContext  听云函数

        - index  入口文件

    utils  公共工具、变量

        - index  通用函数

        - constants 通用常量

    App

    index.tsx 应用入口文件
-
```

### package.json 的必填项

| 字 段       | 说 明                                                             | 类型   | 是否必须 | 初始值                                                  |
| ----------- | ----------------------------------------------------------------- | ------ | -------- | ------------------------------------------------------- |
| name        | 1、静态资源 publicPath 2、路由的 basename 3、上传后的应用唯一标识 | string | true     | 会同步 cli 工具初始项目的`<appName>`                    |
| version     | 应用的指定版本                                                    | string | true     | -                                                       |
| tingyun     | 应用的中英文名称                                                  | object | true     | tingyun.enName 会同步 cli 工具初始项目的`<appName>`-    |
| ty_config   | 用于听云函数的配置信息                                            | object | true     | ty_config.apiRoot 会同步 cli 工具初始项目的`<apiRoot>`- |
| description | 应用的描述                                                        | string | true     | -                                                       |

---
