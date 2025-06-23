import {login} from '../utils/loginvalidation'
type loginParams=Parameters<typeof login>;

let args:loginParams=['admin','password123'];

console.log(login(...args)); // true
