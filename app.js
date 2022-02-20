import { getSqrtNumber, getAsyncNumber } from './utils/functions.js';

getAsyncNumber(2)
  .then(number => console.log(number + getSqrtNumber(2)))
  .catch(error => console.log(`Произошла непредвиденная ошибка: ${error}`));

console.log(4);
