import express from "express"
import userRoutes from "./routes/Users.route" ;
import "./workers/email.worker" ;

const app = express() ;

const PORT = process.env.PORT ;

app.use(express.json()) ;

app.use('/api/users' , userRoutes) ;

app.listen(PORT , ()=> {
  console.log(`Server is running on port ${PORT}`) ;
})