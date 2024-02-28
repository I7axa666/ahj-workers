const Koa = require('koa');
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');
const slow = require('koa-slow');

const app = new Koa();

app.use(cors());
app.use(koaBody());
app.use(slow({
  url: /\.html$/i,
  delay: 5000,
}));

app.use((ctx) => {
  const number = Math.random();
  // console.log(number);
  if (number > 0.5) {
    ctx.response.status = 500;
    return;
  }

  const req = {
    status: 'ok',
    newsList: [
      {
        timestamp: '18:04 25.03.2019',
        description: 'Люди Икс: "Темный Феникс" - свой против всех. Показ стартует 7 июня.',
        img: '',
      },
      {
        timestamp: '18:04 20.03.2019',
        description: '"Джон Уик 3" - продолжение истории наемного убийцы ужк 16 мая в кино',
        img: '',
      },
      {
        timestamp: '18:04 19.03.2019',
        description: 'Мстители 4: "Финал" - показ уже стартовал стартует 25 апреля в кино.',
        img: '',
      },
    ],

  };

  ctx.body = JSON.stringify(req);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
