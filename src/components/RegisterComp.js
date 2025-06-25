//images
import ImageComp from "./ImageComp";
import { use, useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
// Icons
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import '../components/RegisterComp.css'
import { Post } from "./http.service";

const RegisterComp = ()=>{
    const Nav = useNavigate()

    const [addUser, setaddUser] = useState({
        uname:"",
        email:"",
        pass:"",
        cpass:"",
    })
    const inputChangeHandler =(event)=>{
        const {name, value} = event.target
        setaddUser({
            ...addUser,
            [name]:value
        })
    }
    const RegisterUserData = (event)=>{
        event.preventDefault()
        // axios
        // .post("http://localhost:8888/logindata", addUser)
        Post(`http://localhost:8888/logindata/${addUser}`)
        .then(()=>{
            alert("Register Successfully Completed..!!")
            Nav("/")
        })
        .catch()
    }
    return(
        <div>
            <div className="RegisterForm">
              <form onSubmit={(event)=>RegisterUserData(event)}>
              <h2>Register</h2>
              {/* User name */}
              <div className="Input">
              <input type="name" name="uname" placeholder="USERNAME"   className="RegisterInput
" onChange={inputChangeHandler} required/> 
              <PersonIcon className="RegisterInput-icon" />
              </div>
              {/* Email */}
              <div className="Input">
              <input type="email" name="email" placeholder="EMAIL"  className="RegisterInput" onChange={inputChangeHandler} required/>
              <EmailIcon className="RegisterInput-icon"/>
              </div>
              {/* Password */}
              <div className="Input">
              <input type="password" name="pass" placeholder="PASSWORD"  className="RegisterInput" onChange={inputChangeHandler} required/>
              <LockIcon className="RegisterInput-icon"/>
              </div>
              {/* Confirm Password */}
              <div className="Input">
              <input type="password" name="cpass" placeholder="CONFIRM PASSWORD"  className="RegisterInput" onChange={inputChangeHandler} required/>
               <LockIcon className="RegisterInput-icon"/>
              </div>
                <input type="submit" value={"Register"} className="Register-btn"/>

                <p>Already have an Account
                  {" "}
                  <Link to={"/"}>Login</Link>
                </p>
              </form>
           </div>
        </div>
    )
}
export default RegisterComp