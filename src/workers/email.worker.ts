import {Worker , Job} from "bullmq" ;
import {redisConnection} from "../config/redis.config" ;
import {EmailJobData} from "../types/Email" ;
import {sendWelcomeEmail} from "../services/email.service" ;


const emailWorker = new Worker<EmailJobData>("email-queue" ,
     async (job : Job<EmailJobData>) => {
        console.log(`[worker] process job ${job.id}`);
        const {email , name} = job.data ;

        await sendWelcomeEmail(email , name) ;

},{
    connection : redisConnection,
    concurrency : 5
})

emailWorker.on('completed', (job) => {
  console.log(`[Worker] Job ${job.id} completed successfully.`);
});

emailWorker.on('failed', (job, err) => {
  console.error(`[Worker] Job ${job?.id} failed: ${err.message}`);
});
