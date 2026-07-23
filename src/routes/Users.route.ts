import {Router} from "express";
import {getsUsers , getUserById , createUser} from "../controllers/Users.controller" ;

const router : Router = Router () ; 

router.get('/', getsUsers) ; 
router.post('/', createUser) ;
router.get('/:id', getUserById) ;

export default router ;
