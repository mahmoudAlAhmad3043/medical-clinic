class Patient {
  patient_id:number
  first_name: string
  last_name: string
  phone: string
  email: string
  age: number

  constructor(patient_id:number,first_name:string,last_name:string,phone:string,email:string,age:number){
    this.patient_id = patient_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.email = email;
    this.age = age;
  }
}

export default Patient

