import React, { memo } from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { meSelectors } from "../redux/selectors/selectors"

export function withAuthRedirect<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const isAuth = useSelector(meSelectors.getAuth)

    if (!isAuth) return <Redirect to="/login" />

    return <WrappedComponent {...(props as T)} />
  }
}
