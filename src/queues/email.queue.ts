import {Queue} from "bullmq" ;
import {EmailJobData} from "../types/Email" ;
import {redisConnection} from "../config/redis.config" ;

export const emailQueue = new Queue<EmailJobData>("email-queue" , {
    connection : redisConnection
})

export const addEmailToQueue = async (data : EmailJobData) => {
    await emailQueue.add("send-welcome-email" , data, {
        attempts : 3 ,
        backoff : {
            type : "exponential" ,
            delay : 5000
        }
    }) ;
}
