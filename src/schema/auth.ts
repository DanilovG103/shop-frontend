import * as yup from 'yup'

const emailPasswordShape = {
  email: yup.string().email('Невалидный email').required('Поле обязательно'),
  password: yup
    .string()
    .min(8, 'Минимум 8 символов')
    .required('Поле обязательно'),
}

export const authSchema = yup.object().shape(emailPasswordShape)

export const registrationSchema = yup.object().shape({
  ...emailPasswordShape,
  name: yup.string().required('Поле обязательно'),
})
