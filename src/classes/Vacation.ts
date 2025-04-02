import {Duration} from "../types"
import {VacationType} from "../types"

class Vacation {
    type:VacationType
    vacation_day:string
    start_date:Date
    duration:Duration
    description:string

    constructor(type:VacationType,vacation_day:string,start_date:Date,duration:Duration,description:string) {
        this.type = type
        this.vacation_day = vacation_day
        this.start_date = start_date
        this.duration = duration
        this.description = description
    }
}

export default Vacation