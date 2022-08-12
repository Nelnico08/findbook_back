import { Request, Response, NextFunction } from "express";
import { Usuario } from "../models/Usuario";

export const verifyAdmin = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const user = await Usuario.findByPk(req.user_id)
        if(user && user.role === 'admin'){
            next();
        }else{
            return res.status(404).json({role:'invalid'})
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).send("Intentelo mas tarde")
    }
}