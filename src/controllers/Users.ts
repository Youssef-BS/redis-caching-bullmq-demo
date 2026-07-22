import {Request , Response} from "express" ; 
import {users} from "../data/Users" ;

export const getsUsers = (req : Request , res : Response) => {
    try {
        return res.status(200).json({
            message : 'Users fetched successfully' ,
            users : users
        })

    }catch(error : any) {
        console.error(error) ;
    }
}

