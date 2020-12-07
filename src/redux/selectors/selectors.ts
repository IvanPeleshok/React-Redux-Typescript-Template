import { TAppState } from "../../types/redux"

export const meSelectors = {
  getUser: (state: TAppState) => state.me
}

export const appSelectors = {
  getInitialization: (state: TAppState) => state.app.initialization
}
