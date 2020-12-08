import { TAppState } from "../../types/redux"

export const meSelectors = {
  getUser: (state: TAppState) => state.me,
  getAuth: (state: TAppState) => state.me.isAuth
}

export const appSelectors = {
  getInitialization: (state: TAppState) => state.app.initialization
}
