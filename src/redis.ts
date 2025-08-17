import { Speaker } from "./classes/Speaker";

const Redis = require('ioredis');


const redis = new Redis();

redis.on('connect', () => Speaker.enqueue('Redis connected!'));
redis.on('error', () => Speaker.enqueue('Redis Error'));

export default redis