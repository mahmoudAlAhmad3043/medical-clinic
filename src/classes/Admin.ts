import {Time} from "../types"

class Admin {
    first_name:string
    last_name:string
    email:string
    password:string
    open_time:Time
    close_time:Time

    constructor(first_name:string,last_name:string,email:string,password:string,open_time:Time,close_time:Time) {
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.password = password
        this.open_time = open_time
        this.close_time = close_time
    }
}

export default Admin