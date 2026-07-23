import IoRedis from "ioredis" ;


export const redisConnection = new IoRedis({
    host : "localhost" ,
    port : 6379 , 
    maxRetriesPerRequest : null ,
}) ;