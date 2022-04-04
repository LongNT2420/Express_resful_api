const token = require('jsonwebtoken');
// const tokenValue =  token.sign('helle','123456');
// console.log(tokenValue);
const deToken = token.verify('eyJhbGciOiJIUzI1NiJ9.AGVsbGU.gTudq_pWR_V6F3J5t9D6rZlOQyAKM89wg2V4hX01kXQ','123456');
console.log(deToken);