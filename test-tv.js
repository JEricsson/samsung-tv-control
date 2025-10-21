const { Samsung } = require('./lib');
const tv = new Samsung({
  ip: '192.168.1.3',
  mac: 'F8:4E:58:8D:41:E6',
  saveToken: true,
});

tv.sendKey('KEY_POWER', (err, res) => {
  if (err) console.error(err);
  else console.log('Comando enviado', res);
});
