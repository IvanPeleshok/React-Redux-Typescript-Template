export interface IId {
  id: null | number
}
export interface IEmail {
  email: null | string
}
export interface ILogin {
  login: null | string
}
export interface IUser extends IId, IEmail, ILogin {
  isAuth: boolean
}