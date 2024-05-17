import { z } from "zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

export const userSchema = z.object({
  fullname: z
    .string()
    .min(3, {
      message: "El nombre y apellido debe contener al menos 3 caracteres"
    })
    .max(80, {
      message: "El nombre y apellido debe contener menos de 80 caracteres"
    }),
  phone: z
    .string()
    .min(5, {
      message: "El número de teléfono debe tener al menos 5 caracteres"
    })
    .max(10, {
      message: "El número de teléfono debe tener hasta 10 caracteres"
    })
    .refine(phone => Number(phone)),
  postulation: z
    .string()
    .min(10, {
      message: "La postulación debe contener al menos 10 caracteres"
    })
    .max(500, {
      message: "La postulación debe contener menos de 500 caracteres"
    }),
  image: z
    .any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Solo se admiten formatos .jpg, .jpeg, .png, y .webp"
    ),
  termsAndConditions: z
    .string({
      message: "Debes aceptar los términos y condiciones para continuar"
    })
    .transform(value => value === "on")
})
