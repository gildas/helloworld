const app = require('express')();

app.get('/', (req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  res.send('<html><body><h1>Hello World!</h1></body></html>');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Web server listening on PORT ${server.address().port}`);
});

[
  { name: 'SIGHUP', value: 1 },
  { name: 'SIGINT', value: 2 },
  { name: 'SIGTERM', value: 15 }
].forEach(signal => {
  process.on(signal.name, () => {
    console.log(`Received signal ${signal.name}, shutting down`);
    server.close(() => {
      console.log(`web server shutdown`)
      process.exit(128 + signal.value)
    })
  })
})

