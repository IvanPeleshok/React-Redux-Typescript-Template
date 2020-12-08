import Axios, { CancelToken, AxiosError } from "axios"
import { AlertifyStatusEnum } from "../types/types"
import { converToFormData } from "../utils/apiFunctions"
import { showAlert } from "../utils/showAlert"

export let apiURL = ""

export const instance = Axios.create({
  baseURL: `${apiURL}api/`,
  headers: {
    "Content-Type": "application/json",
    "API-KEY": "",
  },
})

export const setTokenForAPI = (token: string) => {
  instance.defaults.headers.Authorization = "Bearer " + token
}

export const handleErr = async (err: AxiosError) => {
  if (err?.response?.status && err?.response?.status === 429) {
    showAlert(
      AlertifyStatusEnum.warn,
      "Очень много запросов на сервер. Пожалуйста, подождите"
    )
  } else {
    showAlert(AlertifyStatusEnum.error, "Что-то пошло не так")
  }

  return err?.response
}

export enum ResultCode {
  Success = 0,
  Error = 1,
}
