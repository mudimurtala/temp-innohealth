// BASIC TYPES
let studentName: string = "Mudi"
let studentAge: number = 22
let isGraduated: boolean = false

// ARRAY
let scores: number[] = [10, 20, 30]

// INTERFACE
export interface Student {
  name: string
  age: number
  isGraduated: boolean
}

// OBJECT USING INTERFACE
export const student1: Student = {
  name: "Mudi",
  age: 22,
  isGraduated: false,
}
