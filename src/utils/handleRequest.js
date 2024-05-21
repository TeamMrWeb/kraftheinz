import axiosApiInstance from "./axiosInstance"

axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      ...config.headers
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

const handleRequest = async ({ method, url, body, headers }) => {
  let data = null
  let errorInfo = null
  const axiosData = {
    method,
    url,
    data: body,
    headers: {
      ...headers
    }
  }
  try {
    const response = await axiosApiInstance(axiosData)
    data = response?.data
  } catch (error) {
    errorInfo = error
  }

  return { data, error: errorInfo }
}

export default handleRequest
