import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

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
           toast.success(`Logged successfully ${username}`);
         }
         else {
            toast.error("Password must be at least 6 characters long");
            setPassword('');
         }
         
    }
    else {
       
        toast.error("Please fill all fields");
        setMail('');
        setPassword('');
        setUsername('');
    }
}

    return (
        <div className='min-h-screen flex justify-center items-center bg-[url(./assets/img/login1.jpg)] bg-cover bg-center sm:bg-[url(./assets/img/login3.png)] p-4'>
      <div
        className='w-full max-w-md p-6 sm:p-10 text-center bg-[#f8cdd] rounded-tl-[150px] rounded-br-[150px] shadow-2xl text-gray-950'
        style={{ boxShadow: '17px 20px 50px 10px black' }}
      >
        <h1
          className='text-4xl sm:text-5xl font-bold pb-8 text-black'
          style={{ fontFamily: 'Satisfy' }}
        >
          Login Page
        </h1>

        <style>{`
          ::placeholder {
            color: black;
            opacity: 1;
          }
        `}</style>

        <div className='space-y-4'>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Enter Username'
            className='w-full px-4 py-2 border-2 rounded-full text-center shadow-md'
          />

          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type='email'
            placeholder="Enter Mail I'D"
            className='w-full px-4 py-2 border-2 rounded-full text-center shadow-md'
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter Password'
            className='w-full px-4 py-2 border-2 rounded-full text-center shadow-md'
          />
        </div>

        <button
          onClick={handleSubmit}
          className='mt-6 w-40 py-2 border text-[17px] font-medium text-black hover:bg-rose-200 hover:text-neutral-800 rounded-tr-full rounded-bl-full shadow-md transition'
          type='submit'
          style={{ boxShadow: '5px 5px 5px 1px black' }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage