import { AxiosResponse } from "axios"
import { ResultCode } from "../api/api"
import { userAPI } from "../api/auth-api"
import { IUser } from "../interface/me"
import { TInferActions, TBaseThunk } from "../types/redux"

export type TInitialState = typeof initialState
type TActions = TInferActions<typeof actions>
type TThunk = TBaseThunk<TActions>

let initialState: IUser = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const meReducer = (
  state = initialState,
  action: TActions
): TInitialState => {
  switch (action.type) {
    case "me/SET_AUTH":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  setAuth: (id: number, email: string, login: string, isAuth: boolean) =>
    ({
      type: "me/SET_AUTH",
      payload: { id, email, login, isAuth },
    } as const),
}

export const getAuthUserData = (): TThunk => async (dispatch) => {
  try {
    let response = await userAPI.getUserInfo()
    const { id, email, login } = response?.data
    dispatch(actions.setAuth(id, email, login, true))
  } catch {
    console.log("An error has occurred")
  }
}

export const login = (email: string, password: string): TThunk => async (
  dispatch
) => {
  try {
    const response = await userAPI.login(email, password) as AxiosResponse
    if (response?.data.resultCode === ResultCode.Success) {
      dispatch(getAuthUserData())
    } else {
    }
  } catch (e) {
    console.log("An error has occurred")
  }
}
