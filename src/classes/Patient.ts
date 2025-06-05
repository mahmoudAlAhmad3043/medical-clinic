import User from "./User"

class Patient extends User {
  age: number

  constructor(age:number,_id:string,first_name:string,last_name:string,password:string,email:string,username:string,phone:string,device_id:string,isVerified:boolean){
    super(_id,first_name,last_name,password,email,username,phone,device_id,isVerified)
    this._id = _id;
    this.age = age;
  }
}

export default Patient

