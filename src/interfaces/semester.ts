import {Course} from "../interfaces/courses";

export type Season="Fall"|"Spring";
export interface Semester {
    semesternumber:number;
    id:number;
    full:boolean;
    courses: Course[];
    season:string;
}