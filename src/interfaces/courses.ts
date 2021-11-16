export type Season="Fall"|"Spring";


export interface Course{
    ID: number;
    Name: string;
    Kind: string;
    Prereq: string;
    Description: string;
}

export interface Semester {
    ID:number;
    courses: Course[];
    Season:string

  }