import React ,{useState} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate} from 'react-router-dom'
import "../styles/Login.css"


const Login = () => {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [errorMsg,setErrorMsg]=useState("")
  const[successMsg,setSuccessMsg]=useState("")

  const auth=getAuth();
const navigate =useNavigate()

const handleLogin=(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth,email,password)
  .then(()=>{

    setSuccessMsg('Logged in successfully, you will be automatically redirected to homepage . ')

    setEmail('')
    setPassword('')
    setErrorMsg('')
    setTimeout(()=>{
        setSuccessMsg('');
        navigate('/home');
    },3000);
})
.catch((error)=>{  
  if(error.message ==="Firebase:Error (auth/invalid-email)."){
      setErrorMsg('Please fill all required field')
  }
  if(error.message==='Firebase: Error (auth/user-not-found).'){
      setErrorMsg('Email not found')
  }
  if(error.message==='Firebase: Error (auth/wrong-password).'){
    setErrorMsg('Wrong Password')
}
  
})
}

  return (
    <div>
    <Navbar/>
    <div className='login-container'>
        <form className='login-form' onClick={handleLogin}>
            <p>Login</p>

            {successMsg&&<>
                <div className='success-msg'>
                {successMsg}
                </div>

                </>}

            {errorMsg && <>
            <div className='error-msg'>
                {errorMsg}
            </div>
            </>}
          

                        <label>Email</label>
             <input onChange={(e)=> setEmail(e.target.value)}
            type='text' placeholder='Enter your email'/>

                        <label>Password</label>
             <input onChange={(e)=> setPassword (e.target.value)}
            type='text' placeholder='Enter your password'/>

            <button >Login</button>
            
            <div>
                <span>Don't have an account?</span>
                <Link to='/signup'>Sign up</Link>
            </div>
           

            

        </form>
     </div>
    
    </div>
  )
}

export default Login