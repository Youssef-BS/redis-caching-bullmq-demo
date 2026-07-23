import {Request , Response} from "express" ; 
import {users} from "../data/Users" ;
import {addEmailToQueue} from "../queues/email.queue" ;

export const getsUsers = async (req : Request , res : Response) => {
    try {
        return await res.status(200).json({
            message : 'Users fetched successfully' ,
            users : users
        })

    }catch(error : any) {
        res.status(500).json({
            message : 'Internal server error' ,
            error : error.message
        }) ;
    }
}

export const getUserById = (req : Request , res : Response) => {
    try{
    const id : number = parseInt(req.params.id as string) ; 
    return res.status(200).json({
        message : `User with id ${id} fetched successfully` ,
        user : users.find(user => user.id === id)
    });
    }catch(error : any) {
        return res.status(500).json({
            message : 'Internal server error' ,
            error : error.message
        }) ; 
    }
}

export const createUser = async (req : Request , res : Response) => {
    try {
     
        const {name , email , password} = req.body ;
        const newUser = {
            id : users.length + 1 ,
            name ,
            email ,
            password
        }
        users.push(newUser) ;

        await addEmailToQueue({
            email ,
            name 
        }) ;
        return res.status(201).json({
            message : 'User created successfully' ,
            user : newUser
        }) ;
        
    }catch(error : any) {
        res.status(500).json({
            message : 'Internal server error' ,
            error : error.message
        }) ;
    }
}