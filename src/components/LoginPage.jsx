import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
const [mail, setMail] = useState('');
const [password, setPassword] = useState('');
const[username, setUsername] = useState('');
const navigate = useNavigate();
const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Email:", mail);
    if (mail && password && username) {
        if(password.length > 6) {
           navigate('/home',{state:{name: username}});
           alert("Login successful");
         }
         else {
            alert("Password must be at least 6 characters long");
            setPassword('');
         }
         
    }
    else {
        alert("Please fill all fields");
        setMail('');
        setPassword('');
        setUsername('');
    }
}

    return (
    <div className='h-screen  flex justify-center items-center bg-[url(./assets/img/login3.png)] bg-cover bg-center'>
        <div style={{boxShadow:"17px 20px 50px 10px black",}} className='border-1 p-10 text-center rounded-tl-[200px] rounded-br-[200px]'> 
        <h1 style={{ fontFamily:"Satisfy"}} className='text-5xl text-black pb-10'>Login Page</h1>
              <style>
        {`
          ::placeholder {
            color: black;
            opacity: 10;
          }
        `}
      </style>
        <div style={{color:' black'}} className='mx-auto w-96'>
            <input style={{boxShadow:"4px 3px 10px 1px ",}}  value={username}  className='text-center border-2 rounded-4xl py-2 mb-5 mx-auto w-70' placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)} type="text" />
            <br />
            <input style={{boxShadow:"4px 3px 10px 1px black",}} value={mail} className='text-center border-2 py-2 rounded-4xl mx-auto mb-5 w-70' placeholder={`Enter Mail I'D `} onChange={(e)=>setMail(e.target.value)} type="email"  />
            <br />
            <input style={{boxShadow:"4px 3px 10px 1px black",}} value={password} className='text-center border-2 rounded-4xl py-2 mx-auto mb-5 w-70' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} type="password" />
            <br />  
           
        </div>
         <button style={{boxShadow:"5px 5px 5px 1px black",}} type="submit" className=' hover:bg-rose-200 p-2 text-[17px] font-medium text-black  hover:text-neutral-800 border-[0.1px] w-40 rounded-tr-[200px] rounded-bl-[200px]' onClick={handleSubmit}>Login</button>
    </div>
    </div>
  )
}

export default LoginPage