import React, { useRef, useState } from 'react'
import Header from './Header'
import { SignIn_Background_Image } from '../utils/Images';
import { checkDataValidation } from '../utils/validation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkDataValidation(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +'-'+ errorMessage);
      });
    } else {
      //signInlogic
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

  }
  return (
    <>
      <Header />
      <div className='absolute'>
        <img src={SignIn_Background_Image} alt="background-image" />
      </div>
      <form onSubmit={(e)=>e.preventDefault() } className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-t-md'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && <input type="text" placeholder='FullName' className='p-4 my-4 w-full bg-gray-700' />}

        <input type="text" placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-700'  ref={email}/>

        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' 
        ref={password}/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

        <button type='button'><p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'}</p></button>

      </form>
    </>
  )
}

export default Login;