import React, { useLayoutEffect, FC, memo, useEffect } from "react"
import { Route, withRouter, useHistory } from "react-router-dom"
import { Switch, RouteComponentProps, useLocation } from "react-router"
import "./App.scss"
import qs from "query-string"
import { withSuspense } from "./hoc/withSuspense"
import { Header } from "./components/Header/Header"
// import { useSelector, useDispatch } from "react-redux"
// import Login from "./components/Login/Login"
// import { TAppState } from "./types/redux"
// import { AuthForm } from "./components/AuthForm/AuthForm"
// import NotFound from './components/NotFound/NotFound';
// import Login from './components/Login/Login';
// import Header from './components/Header/Header'
// import Menu from './components/Menu/Menu'

const App = memo(({ ...props }) => {
  const history = useHistory()
  const location = useLocation()
  const querys = qs.parse(location.search)
  // const dispatch = useDispatch()
  // const logged = useSelector<TAppState, boolean>((state) => state.me.isAuth)

  // useLayoutEffect(() => {
  //     dispatch(authUser())
  // }, []);
  // if (!logged) {
  //   return <AuthForm />
  // }

  return (
    <>
      <Switch>
        <Header />
        <div className="app-content"></div>
      </Switch>
    </>
  )
})

export default App
