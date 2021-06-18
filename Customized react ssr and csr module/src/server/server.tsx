import Koa from 'koa';
import Router from "@koa/router";
//静态服务器安装
import serve from "koa-static";
//react 服务端渲染
import ReactDOMServer from "react-dom/server";
const app = new Koa();
const router = new Router();
//配置静态服务器,后端路由
import App from "../public/app";
import React from 'react';
import {StaticRouter,} from "react-router-dom";

router.get('/', (ctx) => {
    //放html 组件
    let html = ReactDOMServer.renderToString(
        <StaticRouter>
            <App/>
        </StaticRouter>
    )
    ctx.response.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR demo</title>
    </head>
    <body>
        <div id="root">
           ${html}
        </div>
        <script src="/bundle.js"></script>
    </body>
    </html>  
`
})
//指定静态目录
app.use(serve('dist/assets'));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => console.log('listening on 8080'));

