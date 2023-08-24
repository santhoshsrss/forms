
import * as yup from 'yup'; 

export const basicScheme = yup.object().shape({
    email: yup.string()
            .email('Please Enter valid email address.')
            .required('Required'),

    name: yup.string()
            .required('Required'),

    password: yup.string()
                .min(5)
                .required('Required')
})