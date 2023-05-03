import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { useFormik } from 'formik';

import { ToastContainer, toast } from 'react-toastify';

const initialValue = {
    name: '',
    photoURL: ''
}

const Userdetails = () => {

    const { user, updateUser } = useContext(AuthContext); 
    const [update, setUpdate] = useState(true);
    // const [currentUser,setCurrentUser] = useState(user)
    const [updateError, setUpdateError] = useState();


    const { values, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: initialValue,
        onSubmit: (values, target) => {
            const name = values.name;
            const photoURL = values.photoURL;
            console.log(name,photoURL);
            setUpdateError('')
            updateUser(user,name,photoURL)
            .then((result)=>{
               toast('successfully update')
                // alert('successfully update')
                window.location.reload();
            })
            .catch(error=>{
                setUpdateError(error.message)
            })
            target.resetForm()
        }
    })


    return (
        // currentUser &&
        // user && currentUser ?
    user ?
        <>
            <div className='my-container mt-12'>
                <h3 className='text-2xl font-semibold mb-5'>My Profile</h3>
                <div className='border  '>
                    <div className=' py-8 px-5 grid grid-cols-3'>
                        <div className='col-span-1 '>
                            {
                                user.photoURL ?
                                    <img className='w-[130px] rounded-full mx-auto' src={user.photoURL} alt="" />
                                    :
                                    <FaUserAlt className='w-[130px]  h-[130px] mx-auto  ' />
                            }
                           {/*  {
                                currentUser.photoURL ?
                                    <img className='w-[130px] rounded-full mx-auto' src={currentUser.photoURL} alt="" />
                                    :
                                    <FaUserAlt className='w-[45px]  h-[25px]   ' />
                            } */}

                        </div>
                        <div className='col-span-2 '>
                            <div className=''>
                                <div>
                                   {/*  <h4><span className='text-xl font-semibold'>Full Name:</span> {currentUser.displayName}</h4>
                                    <h4><span className='text-xl font-semibold'>Email:</span> {currentUser.email}</h4> */}
                                    <h4><span className='text-xl font-semibold'>Full Name:</span> {user.displayName}</h4>
                                    <h4><span className='text-xl font-semibold'>Email:</span> {user.email}</h4>
                                </div>
                            </div>


                            <div className='mt-8  w-full'>
                                {
                                    update ?
                                        <button onClick={() => setUpdate(!update)} className='my-btn'>
                                            Edit Profile
                                        </button>
                                        :
                                        <button onClick={() => setUpdate(!update)} className='my-btn'>
                                        Cancel
                                    </button>
                                }
                            </div>

                        </div>
                    </div>
                </div>

                {
                    update ?
                        null
                        :
                        <>
                            <form onSubmit={handleSubmit} className='mt-12  w-[450px] px-10 text-center border mx-auto'>
                                <h3 className='text-3xl font-bold mt-5'>Update Your Profile</h3>
                                <input className='border-b-2 bg-black w-full mt-10 px-2'
                                    type="text"
                                    name="name"
                                    placeholder='please enter your name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <br />



                                <input className='border-b-2 bg-black w-full mt-8 px-2'
                                    type="text"
                                    name="photoURL"
                                    placeholder='please enter your photURL'
                                    value={values.photoURL}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <br />


                                <input className='mt-8 my-btn w-1/3 cursor-pointer mb-5' type="submit" value="Submit" />

                                {
                                    updateError && <p className='mt-4 text-red-700 font-semibold text-center'>{updateError}</p>
                                }




                            </form>
                        </>
                }
            </div>
        </>
        :
        null
    )

};

export default Userdetails;