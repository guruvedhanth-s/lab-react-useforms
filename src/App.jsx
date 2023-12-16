import { useState } from 'react';
import './App.css'
import {useForm} from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const [submit,setSubmit] = useState(false)

  const onSubmit = (values) => {console.log(values); setSubmit(true)};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {submit && Object.keys(errors).length == 0 && (<p className='success'>Registration Successful !</p>)}
        <input id="first_name" name="first_name" autoComplete="off" placeholder='First Name' {...register("first_name", {required: true})}/>
        {errors.first_name && errors.first_name.type == "required" && (
            <p className="error">First name is required.</p>
        )}
        <input id="last_name" name="last_name" autoComplete="off" placeholder='Last Name' {...register("last_name", {required: true})}/>
        {errors.last_name && errors.last_name.type == "required" && (
            <p className="error">Last name is required.</p>
        )}
        <input id="email" name="email" autoComplete="off" placeholder='Email' {...register("email", {required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}/>
        {errors.email && errors.email.type == "required" && (
            <p className="error">Email is required.</p>
        )}
        {errors.email && errors.email.type == "pattern" && (
            <p className="error">Enter a valid email.</p>
        )}
        <input id="password" name="password" type="password" autoComplete="off" placeholder='Password' {...register("password", {required: true, minLength: 4, maxLength: 20})}/>
        {errors.password && errors.password.type == "required" && (
            <p className="error">Email is required.</p>
        )}
        {errors.password && errors.password.type == "minLength" && (
            <p className="error">Password must be more than 4 characters</p>
        )}
        {errors.password && errors.password.type == "maxLength" && (
            <p className="error">Password cannot be more than 20 characters</p>
        )}
        <input type="submit" id='button' />
      </form>
    </div>
  );
}

export default App