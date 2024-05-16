import { useForm } from "../hooks/useForm"
import Button from "./Button"
import ButtonWithImage from "./form/ButtonWithImage"
import InputError from "./form/InputError"
import InputGroup from "./form/InputGroup"
import TextareaGroup from "./form/TextareaGroup"

export default function Form() {
  const { handleSubmit, inputErrors } = useForm()
  console.log(inputErrors)
  return (
    <form
      className="flex flex-col gap-7 md:gap-10 w-full font-bold font-arial md:text-[22px] md:mt-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5 md:gap-10">
        <InputGroup
          label="Nombre y Apellido"
          htmlFor="fullname"
          id={"fullname"}
          inputProps={{
            type: "text",
            name: "fullname",
            autoComplete: "name",
            className: "h-5"
          }}
          inputClassName="text-black pl-2"
        >
          {inputErrors?.fullname && (
            <InputError message={inputErrors?.fullname?.message} />
          )}
        </InputGroup>
        <InputGroup
          label="Número de teléfono"
          htmlFor="phone"
          id="phone"
          inputProps={{
            type: "number",
            name: "phone",
            autoComplete: "tel",
            className: "h-5"
          }}
          inputClassName="text-black pl-2"
        >
          {inputErrors?.phone && (
            <InputError message={inputErrors?.phone?.message} />
          )}
        </InputGroup>
        <TextareaGroup
          label="¿A quién postulas como Héroe del Verano y por qué?"
          name="postulation"
          textareaProps={{
            type: "text",
            name: "postulation"
          }}
          textareaClassName="resize-none text-black pl-2"
        >
          {inputErrors?.postulation && (
            <InputError message={inputErrors?.postulation?.message} />
          )}
        </TextareaGroup>
      </div>
      <div className="flex flex-col gap-5 font-bebasNeue items-center">
        <ButtonWithImage
          text="SUBE TU RECIBO DE COMPRA"
          src={"/assets/images/download-icon.png"}
          alt={"Icono de descarga"}
          imageClassName="w-4 mb-1"
        />
        <ButtonWithImage
          text="SUBE TU VIDEO"
          src={"/assets/images/download-icon.png"}
          alt="Icono de descarga"
          imageClassName="w-4 mb-1"
        />
      </div>
      <div className="flex gap-5 text-base md:text-[22px]">
        <input
          type="checkbox"
          name="termsAndConditions"
          className="size-4 md:size-6 mt-1 md:mt-0"
        />
        <label htmlFor="termsAndConditions">
          He leído y acepto los términos y condiciones.
        </label>
      </div>
      <Button
        type="submit"
        className="bg-crimson flex self-center w-full justify-center items-center gap-3 rounded-full h-[44px] text-center md:h-[68px] text-[33px] md:text-[40px] max-w-[422px] font-bebasNeue md:mt-5"
      >
        ENVIAR
      </Button>
    </form>
  )
}
