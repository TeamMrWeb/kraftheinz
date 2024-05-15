import Button from "./Button"

export default function Form() {
  return (
    <form className="flex flex-col gap-10 w-full font-bold font-arial text-[27px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullname">Nombre y Apellido</label>
          <input type="text" name="fullname" autoComplete="name" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Número de teléfono</label>
          <input type="number" name="phone" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">
            ¿A quién postulas como Héroe del Verano y por qué?
          </label>
          <textarea type="text" name="description" className="resize-none" />
        </div>
      </div>
      <div className="flex flex-col gap-5 font-bebasNeue">
        <Button className="bg-crimson flex justify-center items-center gap-3 rounded-full h-[68px] text-[27px] max-w-[422px] w-full">
          SUBE LA FOTO DE TU HÉROE DEL VERANO
          <img src="/assets/images/download-icon.png" alt="Icono de descarga" />
        </Button>
        <Button className="bg-crimson flex justify-center items-center gap-3 rounded-full h-[68px] text-[27px] max-w-[422px] w-full">
          SUBE TU RECIBO DE COMPRA
          <img src="/assets/images/download-icon.png" alt="Icono de descarga" />
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          name="termsAndConditions"
          className="text-2xl size-6"
        />
        <label htmlFor="termsAndConditions">
          He leído y acepto los términos y condiciones.
        </label>
      </div>
      <Button className="bg-crimson flex self-center w-full justify-center items-center gap-3 rounded-full h-[68px] text-[56.8px] max-w-[422px] font-bebasNeue">
        ENVIAR
      </Button>
    </form>
  )
}
