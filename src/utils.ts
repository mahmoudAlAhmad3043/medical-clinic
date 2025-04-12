import jwt from 'jsonwebtoken'
import Admin from './classes/Admin'

export const getAuthAdminToken = (admin:Admin,secret:string) => {
      return jwt.sign({username:admin.username,device_ip:admin.device_ip},secret)
}

export const verifyAuthAdminToken = (token:string,secret:string): jwt.JwtPayload => {
    return jwt.verify(token,secret) as jwt.JwtPayload;
}