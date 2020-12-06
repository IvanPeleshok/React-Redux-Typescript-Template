import React, { FC } from "react"
import s from "./AuthForm.module.scss"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { CustomField } from "../CustomFormik/CustomField"
import { CustomButton } from "../CustomFormik/CustomButton"
import { AuthPhaseEnum } from "./AuthForm"

interface IProps {
  setAuthPhase: (authPhase: AuthPhaseEnum) => void
}

interface IKeysForm {
  username: string
  password: string
}

export const LoginForm: FC<IProps> = ({ setAuthPhase, ...props }) => {
  const validationSchema = yup.object({
    username: yup
      .string()
      .min(5, "Минимальная длина 6 символов")
      .required("Введите имя пользователя"),
    password: yup
      .string()
      .min(8, "Минимальная длина 8 символов")
      .max(32, "Максимальная длина 32 символа")
      .required("Введите пароль"),
  })

  return (
    <div className={s.loginPage}>
      <Formik
        validateOnChange={true}
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          alert(JSON.stringify(values))
          setSubmitting(false)
          resetForm()
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form className={s.loginForm}>
              <h2 className={s.loginTitle}>Вход в систему</h2>

              <CustomField
                name="username"
                placeholder="Логин"
                className={s.loginInput}
                autoComplete="off"
              />

              <CustomField
                name="password"
                placeholder="Пароль"
                className={s.loginInput}
                autoComplete="off"
              />

              <CustomButton
                type="submit"
                className={s.loginBtn}
                text={"Войти"}
                isSubmitting={isSubmitting}
              ></CustomButton>

              <button
                className={s.authRedirect}
                onClick={() => setAuthPhase(AuthPhaseEnum.registation)}
              >
                Регистрация
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
