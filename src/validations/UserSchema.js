import { z } from "zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

export const userSchema = z.object({
  fullname: z.string().min(3).max(80),
  phone: z
    .string()
    .min(7)
    .max(18)
    .refine(phone => Number(phone)),
  email: z.string().email(),
  postulation: z.string().min(3).max(500),
  hero: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE)
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file?.type)),
  receipt: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE)
    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file?.type)),
  termsAndConditions: z.string().transform(value => value === "on")
})
