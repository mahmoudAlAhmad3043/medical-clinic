import { Request, Response } from "express";


class Admin {
    static async signIn(req:Request,res:Response): Promise<void> {
        console.log('sign-in success')
    }
    static async logIn(req:Request,res:Response): Promise<void> {
        console.log('log-in success')
    }
}


export default Admin