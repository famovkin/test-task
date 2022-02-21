const modules = require('ym');

modules.define('getSqrtNumber', (provide) => provide(2 ** 2));

modules.define('getAsyncNumber', (provide) => {
  new Promise((res, rej) => {
    setTimeout(() => res(2), 1000);
    // throw new Error('Произошла непредвиденная ошибка');
  })
  .then(data => provide(data))
  .catch(error => provide(null, error));
});

modules.require(
  ['getSqrtNumber', 'getAsyncNumber'],
  (getSqrtNumber, getAsyncNumber) => console.log(getAsyncNumber + getSqrtNumber),
  error => console.log(error.message)
);

console.log(4);
