import {Router} from "express";
import {getsUsers} from "../controllers/Users.controller" ;

const router : Router = Router () ; 

router.get('/', getsUsers) ; 

export default router ;
