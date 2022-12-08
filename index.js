import http from 'k6/http';
import { sleep } from 'k6';
import { HELLO } from './config';

console.log(HELLO)
export default function () {
  const res = http.get('https://test.k6.io');
  sleep(1);
}