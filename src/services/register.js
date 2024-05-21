import handleRequest from "../utils/handleRequest"

export const register = async ({ data }) => {
  const { fullname: name, phone, postulation, email, receipt, hero } = data
  const res = await handleRequest({
    method: "post",
    url: `${import.meta.env.VITE_API_BASE_URL}/participants`,
    body: { name, phone, postulation, email }
  })
  if (!res?.error) {
    const participantId = res?.data?.body?.id
    const imagesResponse = await handleParticipantImages({
      participantId,
      receipt,
      hero
    })
    return imagesResponse
  }
  return res
}

const handleParticipantImages = async ({ hero, receipt, participantId }) => {
  const formData = new FormData()
  formData.append("hero", hero)
  formData.append("receipt", receipt)
  const res = await createParticipantImages({
    participantId,
    images: formData
  })
  return res
}

export const createParticipantImages = async ({ participantId, images }) => {
  const res = await handleRequest({
    method: "post",
    url: `${
      import.meta.env.VITE_API_BASE_URL
    }/participants/${participantId}/images`,
    body: images
  })
  return res
}
