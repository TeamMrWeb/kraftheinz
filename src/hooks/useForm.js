import { useState } from "react"
import { userSchema } from "../validations/UserSchema"
import { useRef } from "react"

export const useForm = ({ onSubmit }) => {
  const [showModal, setShowModal] = useState({ show: false, message: "" })
  const [loading, setLoading] = useState(false)
  const [previewHeroImage, setPreviewHeroImage] = useState({
    image: null,
    show: false
  })
  const [previewReceiptImage, setPreviewReceiptImage] = useState({
    image: null,
    show: false
  })
  const heroInputRef = useRef(null)
  const receiptInputRef = useRef(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const fields = Object.fromEntries(formData.entries())
    const result = userSchema.safeParse(fields)
    if (result.success === false) {
      setShowModal({
        show: true,
        message: `OCURRIÓ UN ERROR. \n ASEGÚRESE DE LLENAR TODOS LOS CAMPOS CORRECTAMENTE.`
      })
    } else {
      setLoading(true)
      const res = await onSubmit({ data: fields })
      setLoading(false)
      if (!res?.error) {
        setShowModal({ show: true, message: `¡YA ESTÁS PARTICIPANDO!` })
        e.target.reset()
      }
      if (res?.error?.response?.data?.message === "El participante ya existe") {
        setShowModal({ show: true, message: `¡YA ESTÁS PARTICIPANDO!` })
        e.target.reset()
      }
      if (res?.error?.response?.data) {
        setShowModal({
          show: true,
          message: `OCURRIÓ UN ERROR. \n INTENTÁ DE NUEVO MÁS TARDE`
        })
      }
    }
  }

  const handleSetPreviewImage = (e, type) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === "hero") {
          setPreviewHeroImage({ image: reader.result, show: true })
        } else setPreviewReceiptImage({ image: reader.result, show: true })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleShowPreviewImage = type => {
    if (type === "hero" && previewHeroImage.image) {
      setPreviewHeroImage({ ...previewHeroImage, show: !previewHeroImage.show })
    } else if (type === "receipt" && previewReceiptImage.image) {
      setPreviewReceiptImage({
        ...previewReceiptImage,
        show: !previewReceiptImage.show
      })
    }
  }

  const removePreviewImage = type => {
    handleShowPreviewImage()
    if (type === "hero") {
      heroInputRef.current.value = ""
      setPreviewHeroImage({ image: null, show: false })
    } else {
      receiptInputRef.current.value = ""
      setPreviewReceiptImage({ image: null, show: false })
    }
  }

  return {
    handleSubmit,
    showModal,
    setShowModal,
    previewHeroImage,
    previewReceiptImage,
    handleSetPreviewImage,
    handleShowPreviewImage,
    removePreviewImage,
    loading,
    heroInputRef,
    receiptInputRef
  }
}
