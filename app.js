import Koa from "koa"
import Router from "koa-router"
const app = new Koa();
const router = new Router();
import getConfig from './config/index.js'
const apiList = getConfig()
const prefix = '/api'
apiList.get.forEach(item=>{
  return router.get(prefix+item.path, (ctx) => {
    ctx.body = item.content;
  });
})
router.get("/", (ctx) => {
  ctx.body = "hello hei";
});

app.use(router.routes());
app.listen(3000, () => {
  console.log("open server localhost:8989");
});