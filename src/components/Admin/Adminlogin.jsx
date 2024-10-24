import React from 'react'
import { useState } from 'react'
import './Adminlogin.css'
import { useNavigate } from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
// const [inputValue, setInputValue] = useState('');

const Adminlogin = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error,seterror] = useState(false);
  const [eye,seteye] = useState(false)
  const navigate = useNavigate();

  function geteye() {
    seteye(!eye)
  }
  
  const storedUsername = 'admin';
  const storedPassword = 'admin777';

  localStorage.setItem('username', storedUsername);
  localStorage.setItem('password', storedPassword);

  function nameChange (event){
    setName(event.target.value);
};
  function passChange(event){
  setPass(event.target.value);
};
 function handleSubmit(event){
  event.preventDefault();
  console.log(name);
  console.log(pass);

  const storedName = localStorage.getItem('username');
  const storedPass = localStorage.getItem('password');

  if (name === storedName && pass === storedPass) {
    setErrorMessage(''); 
    console.log('Login successful!');
    navigate('/Admin')
  } else {
    console.log("Invalid username or password.");
    seterror(true)
    setErrorMessage('Invalid username or password.');
  }
}

  return (
    <div className='loginmain'>
      <div className='loginbox'>
        <div className='signin'>
            <h2>SIGN IN</h2>
        </div>
        <form className='form'>
          <div className='loginform'>
              <input type="text" placeholder='Username' value={name} onChange={nameChange} />
              <span><input type={eye? "text":"password"}  placeholder='Password' value={pass} onChange={passChange}/>{eye?<FaEye onClick={geteye}/>:<FaEyeSlash onClick={geteye} /> }</span>
          </div>
        </form>
        <div className='forgot'>
            <h4>Forgot Password?</h4>
            <h5>Sign Up</h5>
        </div>
        <div className='login_button'>
            
            <button type='submit'onClick={handleSubmit}>LOGIN</button>
        </div>
      </div>
      {error && <div className='error_msg'>
        <h2>Invalid Username or Password!</h2>
      </div>}
    </div>
  )
}

export default Adminlogin