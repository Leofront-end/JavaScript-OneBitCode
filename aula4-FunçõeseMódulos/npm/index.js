import { z } from "zod" 

const mySchema = z.string()

console.log(mySchema.parse("Leo"))

alert("Olá Mundo")
