import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import LogoText from '../components/LogoText'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
   <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#28002b]'>
               <LogoText className=' text-center mb-3.5'/>
           <div className="border-3 border-accent-foreground shadow-2xl w-[350px] h-[390px]" >
               <h1 className='text-[rgba(229,229,229,1)] text-center font-bold text-2xl mt-1.5' style={{fontFamily:'Montserrat, sans-serif'}}>Login</h1>
               <form action="">
                   <Input placeholder='E-mail' type='email' className='max-w-[260px] my-8 mx-[35px] text-white'/>
                   <Input placeholder='Password' type='password'className='max-w-[260px] my-8 mx-[35px] text-white'/>
                   <Button className="w-[230px] mx-12 mb-5 bg-pink-400">Submit</Button>
                   <Button className='w-[230px] mx-12 mb-5 bg-pink-400'>
                   <FaGoogle className=' text-white  '/>
                   Google
                   </Button>
                   <p className='text-[rgba(229,229,229,1)] text-[12px] mx-12'>Don't have an account? 
                       <a href="" className='text-white font-bold ml-1 underline'>Sign up for Melodix.</a>
                   </p>
                   
               </form>
           </div>
       </div>
  )
}

export default Login