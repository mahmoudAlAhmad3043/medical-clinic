export class User {
    _id:string;
    first_name:string;
    last_name:string;
    username:string;
    password:string;
    email:string;
    phone:string;
    device_ip:string;
    isVerified:boolean;
    constructor(_id:string,first_name:string,last_name:string,password:string,email:string,username:string,phone:string,device_id:string,isVerified:boolean){
        this._id = _id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.email = email;
        this.username = username;
        this.phone = phone;
        this.device_ip = device_id;
        this.isVerified = isVerified;
    }
    getUserName(): string {
        return this.username
    }
    getUserId():string  {
        return this._id
    }
    getFirstName():string{
        return this.first_name;
    }
    getLastName():string{
        return this.last_name;
    }
    getPassword():string{
        return this.password;
    }
    getEmail():string{
        return this.email;
    }
    setUserId(_id:string):void{
        this._id = _id;
    }
    setFirstName(first_name:string):void{
        this.first_name = first_name;
    }
    setLastName(last_name:string):void{
        this.last_name = last_name;
    }
    setPassword(password:string):void{
        this.password = password;
    }
    setEmail(email:string):void{
        this.email = email;
    }
    setUserName(username:string) {
        this.username = username
    }
}

export default User