import random from 'lodash/random';
import './common.css';
import hello from './hello';
import world from './world';
// var a = 0; // 에러가 발생할 것이다.
document.write(`${hello}, ${world}!`);
document.write(`Random: ${random(0, 100)}`);