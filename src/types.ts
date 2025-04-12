import { JwtPayload } from "jsonwebtoken";

export type Time = string;

export type Status ="canceled" | "submitted" | "under review";

export type BookingType ="Review" | "Consultation" | "Reservation"

export type Duration = {
    days: Number;
    hours: Number;
    minutes: Number;
}

export type Role  = "Admin" | "User";

export type VacationType ="Review" | "Consultation" | "Reservation";

