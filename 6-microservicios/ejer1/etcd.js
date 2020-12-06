 
const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {

  const key_value = await client.get('key').string();
  console.log('El valor de la llave es:', key_value);

  await client.delete().all();
})();