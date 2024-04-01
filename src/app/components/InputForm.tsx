import React from 'react'
import { Formik, useFormik } from 'formik'
import { signupSchema } from '../schemas'

function InputForm() {

    const initialValues={
        name:'',
        email:'',
        password:'',
        confirmPass:''
    }
  
 const {values,errors,handleBlur,handleSubmit,handleChange,touched}= useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,
    onSubmit:(values:any,action)=>{
       console.log(values)
       action.resetForm()
    },

    
})

  



  return (
    <div className=' w-96 min-h-96 bg-white rounded-md'>
        <form 
          onSubmit={handleSubmit}
          className=' flex flex-col justify-center w-[90%] h-full place-items-stretch'>
          <h1 className=' text-center font-bold mb-4'>Form Using Formik</h1>


          <input type='text'
            className=' rounded-sm w-full p-2 m-2 bg-slate-200'
            id='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
           {errors.name && touched.name ? (<p className=' ml-3 mb-2'>{errors.name}</p>)
            : (null)}

          <input type='email'
            className=' rounded-sm w-full p-2 m-2 bg-slate-200'
            id='email'
            placeholder='Enter email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
           {errors.email && touched.email ? (<p className=' ml-3 mb-2'>{errors.email}</p>)
            : (null)}

          <input type='password'
            className=' rounded-sm w-full p-2 m-2 bg-slate-200'
            id='password'
            placeholder='enter password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.password && touched.password ?(<p className=' ml-3 mb-2'>{errors.password}</p>)
             :(null)}

          <input type='password'
            className=' rounded-sm w-full p-2 m-2 bg-slate-200'
            id='confirmPass'
            placeholder='confirm password'
            value={values.confirmPass}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
       {errors.confirmPass && touched.confirmPass ?(<p className=' ml-3 mb-2'>{errors.confirmPass}</p>)
             :(null)}

           <div>
           <button
            type='button'
            className=' rounded-md bg-slate-900 text-white p-2 m-4'
            onClick={handleSubmit}
            >
             Submit
           </button>
           </div>
        </form>
    </div>
  )
}

export default InputForm