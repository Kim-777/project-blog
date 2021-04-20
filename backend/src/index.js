require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;
console.log(MONGO_URI);


mongoose
.connect(MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(e => {
    console.error(e);
})

const api = require('./api');

const app = new Koa();
const router = new Router();


// router setting
router.use('/api', api.routes());

app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

router.get('/', ctx => {
    ctx.body= {
        head: 'header'
    }

    return;
})
const port = PORT || 4000;
app.listen(port, () => {
    console.log('listening to port 4000');
});