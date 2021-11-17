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
    Full:boolean;
    courses: Course[];
    Season:string
   

    

  }