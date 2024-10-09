import * as YUP from 'yup'

export const Schema = YUP.object({
name: YUP.string().min(3,'Too Short').max(20,'Too Long').required('Name is Must'),
email: YUP.string().email('Invalid email').required("email is Must"),
age: YUP.number().min(10).max(50).required("Age is must"),
password: YUP.string().required("Strong Password").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Enter Strong Password"),
cpass: YUP.string().required("Password Not Matched")
.oneOf([YUP.ref("password"),null],"Both Password must match")
})
