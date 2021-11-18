
export interface Course{
    ID: number;
    Name: string;
    Kind: string;
    Prereq: string;
    Description: string;
}

export interface Semester {
    semesternumber: number;
    courses: Course[];
  }

