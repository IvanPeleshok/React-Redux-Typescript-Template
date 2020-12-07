import React, { FC, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { AuthForm } from "../AuthForm/AuthForm"
import s from "./Header.module.scss"

export const Header: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div>
            <p className={s.logo}>Template</p>
          </div>
          <div>
            <ul>
              <li
                onClick={() => setOpen((prevState) => !prevState)}
                className={s.item}
              >
                Authorization
              </li>
            </ul>
          </div>
        </div>
      </header>
      <CSSTransition
        in={isOpen}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: s.enterActive,
          exitActive: s.exitActive,
        }}
      >
        <AuthForm/>
      </CSSTransition>
    </>
  )
}
