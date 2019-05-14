const app = require('express')();

app.get('/', (req, res) => { res.send('Hello World!'); });

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Web server listening on PORT ${server.address().port}`);
});
