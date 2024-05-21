import { useForm } from "../hooks/useForm"
import Button from "./Button"
import InputGroup from "./form/InputGroup"
import TextareaGroup from "./form/TextareaGroup"
import { register } from "../services/register"
import Modal from "./Modal"
import UploadImageButton from "./UploadImageButton"
import termsAndConditionsDoc from "/assets/docs/terminos-y-condiciones.pdf"

export default function Form() {
  const {
    handleSubmit,
    showModal,
    setShowModal,
    handleSetPreviewImage,
    previewHeroImage,
    previewReceiptImage,
    handleShowPreviewImage,
    removePreviewImage,
    loading
  } = useForm({ onSubmit: register })

  return (
    <>
      {showModal.show && (
        <Modal text={showModal.message} setShowModal={setShowModal} />
      )}
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
            required
            inputClassName="text-black pl-2"
          ></InputGroup>
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
            required
            inputClassName="text-black pl-2"
          ></InputGroup>
          <InputGroup
            label="E-mail"
            htmlFor="email"
            id="email"
            inputProps={{
              type: "email",
              name: "email",
              autoComplete: "email",
              className: "h-5"
            }}
            required
            inputClassName="text-black pl-2"
          ></InputGroup>
          <TextareaGroup
            label="¿A quién postulas como Héroe del Verano y por qué?"
            name="postulation"
            textareaProps={{
              type: "text",
              name: "postulation"
            }}
            textareaClassName="resize-none text-black pl-2"
          ></TextareaGroup>
        </div>
        <div className="flex flex-col gap-5 font-bebasNeue items-center">
          <UploadImageButton
            previewImage={previewHeroImage}
            handleShowPreviewImage={handleShowPreviewImage}
            handleSetPreviewImage={handleSetPreviewImage}
            imageType="hero"
            removePreviewImage={removePreviewImage}
            text="SUBE LA FOTO DE TU HÉROE DEL VERANO"
            alt="Imágen de héroe del verano"
            setShowModal={setShowModal}
          />
          <UploadImageButton
            previewImage={previewReceiptImage}
            handleShowPreviewImage={handleShowPreviewImage}
            handleSetPreviewImage={handleSetPreviewImage}
            imageType="receipt"
            removePreviewImage={removePreviewImage}
            text="SUBE TU RECIBO DE COMPRA"
            alt="Imágen de recibo de compra"
            setShowModal={setShowModal}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="flex gap-5 text-base md:text-[22px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <input
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
              className="size-4 md:size-6 mt-1 md:mt-0"
              required
            />
            <label
              htmlFor="termsAndConditions"
              onClick={() => window.open(termsAndConditionsDoc, "_blank")}
              className="cursor-pointer"
            >
              He leído y acepto los términos y condiciones.
            </label>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-crimson flex self-center w-full duration-300 hover:bg-dark-crimson justify-center items-center gap-3 rounded-full h-[44px] text-center md:h-[68px] text-[33px] md:text-[40px] max-w-[422px] font-bebasNeue md:mt-5"
          props={{ disabled: loading }}
        >
          ENVIAR
        </Button>
      </form>
    </>
  )
}
