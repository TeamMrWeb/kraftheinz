import { useState } from "react"
import { userSchema } from "../validations/UserSchema"

export const useForm = () => {
  const [inputErrors, setInputErrors] = useState({})

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

  return { handleSubmit, inputErrors }
}
