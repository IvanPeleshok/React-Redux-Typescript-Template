import React, { FC, useState } from "react"
import { LoginForm } from "./LoginForm"
import { RegistrationForm } from "./RegistrationForm"

export enum AuthPhaseEnum {
  login,
  registation,
}

export const AuthForm: FC = () => {
  const [authPhase, setAuthPhase] = useState(AuthPhaseEnum.login)

  let renderComponent
  if (authPhase === AuthPhaseEnum.login) {
    renderComponent = <LoginForm setAuthPhase={setAuthPhase} />
  } else if (authPhase === AuthPhaseEnum.registation) {
    renderComponent = <RegistrationForm setAuthPhase={setAuthPhase} />
  }

  return <>{renderComponent}</>
}
