import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login()
{
    const history = useNavigate();
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');

    async function handle(e)
    {
      

      e.preventDefault();
      
      try
      {
        await axios.post("http://localhost:5000/Login",{
          email,password
        })
        .then(res=> {
          if(res.data==="exists")
          {
              alert('login successful')
              history("/wel",{state:{id:email}})
          }
          else if(res.data==="does not exist"){
            alert("User has not signed up")
          }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e);
        })
      }

      catch(e)
      {
        console.log(e);
      }
    }
    return(
        <div className="login-wrapper">
            <div className='login-form'>
                <h2>Log In to continue</h2>
                <form>
                    <div className="input-container">
                        <label>email: </label>
                        <input type="email" name="email" placeholder='Enter email' required value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    </div>

                    <div className="input-container">
                        <label>Password: </label>
                        <input type="password" name="pass" placeholder='Enter password' required value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    </div>
                  
                    <div className="button-container">
                        <button type='submit' onClick={handle}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

