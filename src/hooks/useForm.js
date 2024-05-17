import { useState } from "react"
import { userSchema } from "../validations/UserSchema"

export const useForm = () => {
  const [inputErrors, setInputErrors] = useState({})
  const [previewImage, setPreviewImage] = useState()
  const [showPreviewImage, setShowPreviewImage] = useState()

  const getInputNameAndMessageFromIssues = issues => {
    const transformedObject = {}
    issues.forEach(item => {
      const { path, message } = item
      const key = path[0]
      if (!transformedObject[key]) {
        transformedObject[key] = { message }
      } else {
        transformedObject[key].message = message
      }
    })
    return transformedObject
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const fields = Object.fromEntries(formData.entries())
    const result = userSchema.safeParse(fields)
    if (result.success === false) {
      const inputsAndMessages = getInputNameAndMessageFromIssues(
        result?.error?.issues
      )
      setInputErrors(inputsAndMessages)
    } else {
      setInputErrors({})
    }
  }

  const handleSetPreviewImage = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleShowPreviewImage = () => {
    if (!previewImage) return
    setShowPreviewImage(!showPreviewImage)
  }

  const removePreviewImage = () => {
    handleShowPreviewImage()
    setPreviewImage()
  }

  return {
    handleSubmit,
    inputErrors,
    previewImage,
    handleSetPreviewImage,
    showPreviewImage,
    handleShowPreviewImage,
    removePreviewImage
  }
}
