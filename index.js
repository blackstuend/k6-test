import http from 'k6/http';
import { sleep } from 'k6';
import dotenv from 'dotenv'
dotenv.config()

const HELLO = process.env.HELLO
console.log(HELLO)
export default function () {
  const res = http.get('https://test.k6.io');
  sleep(1);
}