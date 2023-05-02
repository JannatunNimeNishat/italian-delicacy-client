import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import registerSchema from '../../schema/YupValidation';

const initialValue = {
    name: '',
    email: '',
    password: '',
    photoURL: ''
}
const Register = () => {
    const [loginError, setLoginError] = useState();

    //formik
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValue,
        validationSchema: registerSchema,
        onSubmit: (values, action) => {
            const name = values.name;
            const email = values.email;
            const password = values.password;
            const photoURL = values.photoURL;
            console.log(name, email, password, photURL);
        }
    })


    return (
        <div className='my-container mt-10  '>
            <form onSubmit={handleSubmit} className=' w-[450px] px-10 text-center border mx-auto'>
                <h3 className='text-3xl font-bold mt-5'>Please Register</h3>
                <input className='border-b-2 bg-black w-full mt-10 px-2'
                    type="text"
                    name="name"
                    placeholder='please enter your name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                    <br />
                {
                    errors.name && touched.name ? 
                    <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.name}</small></p>
                    :
                    null
                }


                <input className='border-b-2 bg-black w-full mt-10 px-2'
                    type="email"
                    name="email"
                    placeholder='please enter your email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    errors.email && touched.email ? 
                     <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.email}</small></p>
                     :
                     null
                }
                <br />

                <input className='border-b-2 bg-black w-full mt-8 px-2'
                    type="password"
                    name="password"
                    placeholder='please enter your password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    errors.password && touched.password  ?
                     <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.password}</small></p>
                     :
                     null
                }
                <br />

                <input className='border-b-2 bg-black w-full mt-8 px-2'
                    type="text"
                    name="photoURL"
                    placeholder='please enter your photURL'
                    value={values.photoURL}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    errors.photoURL && touched.photoURL ?
                     <p className='mt-4 text-red-600 font-semibold text-center'><small>{errors.photoURL}</small></p>
                     :
                     null
                }
                <br />


                <input className='mt-8 my-btn w-1/3 cursor-pointer' type="submit" value="Register" />

                {
                    loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                }


                <p className='mt-4'><small>Don't have an account ? <span className='primary-color font-semibold'>
                    <Link to='/login'>login</Link>
                </span></small></p>


                <div className='mt-4 flex justify-center items-center gap-3'>
                    <div className='h-1 bg-white w-1/2'></div>
                    <p className='text-xl'>or</p>
                    <div className='h-1 bg-white w-1/2'></div>
                </div>

                <div className='mt-4 border w-full rounded-lg  '>
                    <button className='flex items-center gap-5 h-[40px] w-1/1 mx-auto'>
                        <FaGoogle className='h-6 w-6 ' />
                        <p>Continue with Google</p>
                    </button>
                </div>
                <div className='mt-4 border w-full rounded-lg  mb-10'>
                    <button className='flex items-center gap-5 h-[40px] w-1/1 mx-auto'>
                        <FaGithub className='h-6 w-6 ' />
                        <p>Continue with Github</p>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Register;