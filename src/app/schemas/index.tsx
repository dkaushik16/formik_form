import * as Yup from 'yup'

export const signupSchema=Yup.object({
    name:  Yup.string().min(2).max(20).required("Please enter your name"),
    email: Yup.string().email().required('Enter valid email'),
    password: Yup.string().min(5).required('Enter a valid password'),
    confirmPass: Yup.string().required()
                    .oneOf([Yup.ref('password'),null],'password does not match'),

}) 