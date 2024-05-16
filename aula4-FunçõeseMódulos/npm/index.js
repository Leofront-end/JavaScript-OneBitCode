import { z } from "./node_modules/zod/lib/index.mjs" 

const mySchema = z.string()

console.log(mySchema.parse("Leo"))
